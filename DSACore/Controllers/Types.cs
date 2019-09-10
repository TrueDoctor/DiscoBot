using System.Collections.Generic;
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
            return Database.GetGroupTypes().Result;
        }
    }
}