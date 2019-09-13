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
        public IActionResult Post([FromBody]DSALib.Models.Database.Groups.Group group) {
            var maxId = Lobby.Groups.Max(x => x.Id);
            group.Id = maxId + 1;
            var dataGroup = new Group(group);
            if (!Lobby.GroupTypes.Exists(x => x.Name.Equals(group.Type)))
                return new StatusCodeResult(501);
            Lobby.AddGroup(group);
            return Created(this.Request.Path + $"/{dataGroup.Id}", dataGroup.Id);
        }

        [HttpPost("{id}")]
        public IActionResult Post(int id, [FromBody] LoginRequest request) {
            if (Lobby.Groups.All(x => x.Id != id))
                return NotFound();
            try {
                var token = Lobby.GenerateToken(id, request);
                return Ok(token);
            }
            catch (Exception e) {
                return Unauthorized(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id) {
            Lobby.DeleteGroup(id);
            return Ok();
        }
    }
}