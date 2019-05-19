use reqwest::{Response, Client, Url, UrlError, Error as ReqError};
use std::sync::mpsc::{Sender, Receiver};
use std::sync::mpsc;
use super::server::{UserId, Token};
use super::group::GroupId;

pub struct BackendConnection {
    host: String,
    req_sender: Sender<RequestData>,
    res_rec: Receiver<ResponseResult>,
}

#[derive(Debug)]
pub enum BackendError {
    UrlError(UrlError),
    RequestError(ReqError),
    InvalidTokenFormat,
    InvalidToken,
    BadResponse(Response),
}

pub type TokenValidity = Result<TokenResponse, BackendError>;
pub type RequestData = Url;
pub type ResponseResult = Result<Response, ReqError>;

pub struct TokenResponse {
    pub group_id: GroupId,
    pub group_type: String,
    pub group_name: String,
    pub user_id: UserId,
}

impl BackendConnection {
    fn run_background(req_rec: Receiver<RequestData>, res_sender: Sender<ResponseResult>) {
        let client = Client::new();
        loop {
            let request_data = req_rec.recv().unwrap();
            let location = request_data;
            let request = client.get(location);
            let response = request.send();
            res_sender.send(response).unwrap();
        }
    }

    pub fn new(host: &str) -> Self {
        let (req_sender, req_rec): (Sender<RequestData>, Receiver<RequestData>)
                                    = mpsc::channel();
        let (res_sender, res_rec): (Sender<ResponseResult>, Receiver<ResponseResult>)
                                    = mpsc::channel();
        std::thread::spawn(move || Self::run_background(req_rec, res_sender));
        BackendConnection {
            host: host.to_string(),
            req_sender,
            res_rec,
        }
    }

    pub fn request(&self, location: &str) -> Result<(), UrlError> {
        Ok(self.req_sender.send(Url::parse(&format!("{}{}", self.host, location))?).unwrap())
    }

    pub fn get_response(&self) -> ResponseResult {
        self.res_rec.recv().unwrap()
    }
    
    pub fn validate_token(&self, token: &Token) -> TokenValidity {
        let location = format!("/api/lobby/tokens/{}", token);
        self.request(&location).map_err(|err| BackendError::UrlError(err))?;
        let response = self.get_response().map_err(|err| BackendError::RequestError(err))?;
        if response.status().is_success() {
            // zu Testzwecken werden noch keine JSON-Daten deserialisiert
            // Dennis Server gibt ja noch nix zurück
            Ok(TokenResponse {
                group_id: 12,
                group_type: "scribble".to_string(),
                group_name: "Scribble".to_string(),
                user_id: 420
            })
        } else if response.status() == reqwest::StatusCode::NOT_FOUND {
            Err(BackendError::InvalidToken)
        } else if response.status().is_client_error() {
            Err(BackendError::InvalidTokenFormat)
        } else {
            Err(BackendError::BadResponse(response))
        }
    }
}
