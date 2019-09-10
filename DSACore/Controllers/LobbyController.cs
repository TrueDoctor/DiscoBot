using System;
using DSACore.Models;
using DSACore.Models.Network;
using DSALib.Commands;
using DSALib.Models.Network;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace DSACore.Controllers {
    [Route("api/[controller]")]
    public class LobbyController : Controller {
        
        // GET: api/<controller>
        [HttpGet]
        public GroupResponse Get() {
            return Lobby.GetGroupResponse();
        }

        [HttpPost]
        public string Post([FromBody] Command cmd) {
            try {
                return CommandHandler.ExecuteCommand(cmd).message;
            }
            catch (Exception e) {
                return $"Ein Fehler ist aufgetreten: \n {e.Message}";
            }
        }

        // post new lobby
        // get list lobbys
        // get lobby
    }
}