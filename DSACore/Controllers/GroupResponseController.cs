using System.Collections.Generic;
using DSACore.Models;
using DSACore.Models.Network;
using DSALib.FireBase;
using DSALib.Models.Database.Groups;
using Microsoft.AspNetCore.Mvc;

namespace DSACore.Controllers { 
    [Route("api/lobby/[controller]")]
    [ApiController]
    public class GroupResponseController : Controller {
        // GET
        [HttpGet]
        public GroupResponse Get() {
            return Lobby.GetGroupResponse();
        }
    }
}