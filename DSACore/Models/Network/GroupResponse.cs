using System.Collections.Generic;
using DSALib.Models.Database.Groups;

namespace DSACore.Models.Network {
    public class GroupResponse {
        public IEnumerable<GroupType> GameTypes { get; set; }
        public IEnumerable<SendGroup>  Games { get; set; }
    }
}