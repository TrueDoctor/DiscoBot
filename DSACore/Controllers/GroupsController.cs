using System.Collections.Generic;
using System.Linq;
using DSACore.Models;
using DSACore.Models.Network;
using Microsoft.AspNetCore.Mvc;

namespace DSACore.Controllers {
    [Route("lobby/[controller]")]
    [ApiController]
    public class GroupsController : Controller {
        // GET
        public ActionResult<IEnumerable<SendGroup>> Get() {
            try {
                return Ok(Lobby.GetGroups());
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
        public ActionResult<SendGroup> Post(Group group) {
            var maxId = Lobby.Groups.Max(x => x.Id);
            group.Id = maxId + 1;
            Lobby.AddGroup(group);
            return Ok(group.SendGroup());
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