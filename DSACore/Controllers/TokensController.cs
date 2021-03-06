using DSACore.Models;
using DSACore.Models.Network;
using Microsoft.AspNetCore.Mvc;

namespace DSACore.Controllers {
    [Route("api/lobby/[controller]")]
    [ApiController]
    public class TokensController : Controller {
        // GET
        [HttpGet("{token}")]
        public ActionResult<TokenResponse> Get(string token) {
            if (!int.TryParse(token, out var intToken))
                return BadRequest("The token has to be a 32 bit signed integer");

            if (!Lobby.TokenIsValid(intToken)) return NotFound("This is not a valid Token");

            var group = Lobby.GetGroupByToken(intToken);
            return Ok(group);
        }
    }
}