using System.Collections.Generic;
using DSACore.Models;
using DSALib.FireBase;
using DSALib.Models.Database.Groups;
using Microsoft.AspNetCore.Mvc;

namespace DSACore.Controllers {
    [Route("api/lobby/[controller]")]
    [ApiController]
    public class Types : Controller {
        // GET
        [HttpGet]
        public List<GroupType> Get() {
            return Lobby.GroupTypes;
        }
    }
}