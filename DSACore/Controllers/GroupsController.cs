using System;
using System.Collections.Generic;
using System.Linq;
using DSACore.Models;
using DSACore.Models.Network;
using DSALib.FireBase;
using DSALib.Models.Database.Groups;
using Microsoft.AspNetCore.Mvc;
using Group = DSACore.Models.Network.Group;

namespace DSACore.Controllers {
    [Route("api/lobby/[controller]")]
    [ApiController]
    public class GroupsController : Controller {
        // GET
        [HttpGet]
        public ActionResult<GroupResponse> Get() {
            try {
                return Ok(new GroupResponse{ Games = Lobby.GetGroups(), GameTypes = Database.GetGroupTypes().Result});
            }
            catch {
                return NotFound("Error retriving Groups");
            }
        }

        // GET
        [HttpGet("{id}")]
        public ActionResult<SendGroup> Get(int id) {
            try {
                return Ok(Lobby.GetGroup(id));
            }
            catch {
                return NotFound($"Group {id} not found");
            }
        }

        [HttpPost]
        public ActionResult<SendGroup> Post([FromBody]DSALib.Models.Database.Groups.Group group) {
            var maxId = Lobby.Groups.Max(x => x.Id);
            group.Id = maxId + 1;
            var dataGroup = new Group(group);
            Lobby.AddGroup(group);
            return Ok(dataGroup.SendGroup());
        }

        [HttpPost("{id}")]
        public ActionResult<int> Post(int id, [FromBody] string password) {
            var token = Lobby.GenerateToken(id, password);
            return Ok(token);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id) {
            Lobby.DeleteGroup(id);
            return Ok();
        }
    }
}