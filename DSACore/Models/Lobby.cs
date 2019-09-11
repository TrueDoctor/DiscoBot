using System;
using System.Collections.Generic;
using System.Linq;
using DSACore.Models.Network;
using DSALib.FireBase;
using DSALib.Models.Database.Groups;
using Group = DSACore.Models.Network.Group;

namespace DSACore.Models {
    public static class Lobby {
        public static List<Group> Groups;
        public static readonly List<GroupType> GroupTypes;

        static Lobby() {
            Groups = Database.GetGroups().Result.Select(x => new Group(x)).ToList();
            GroupTypes = Database.GetGroupTypes().Result.ToList();
        }

        private static List<Token> Tokens { get; } = new List<Token>();

        public static void AddGroup(DSALib.Models.Database.Groups.Group group) {
            Groups.Add(new Group(group));
            Database.AddGroup(group);
        }

        public static void DeleteGroup(int id) {
            Groups.Remove(Groups.Find(x => x.Id == id));
            Database.DeleteGroup(id);
        }

        public static SendGroup GetGroup(int id) {
            return Groups.Find(x => x.Id == id).SendGroup();
        }
        
        public static TokenResponse GetGroupByToken(int token) {
            var groupToken = Tokens.Find(x => x.GetHashCode() == token);
            Tokens.Remove(groupToken);
            groupToken.Group.Users.Add(new User{Name = groupToken.Name});
            return groupToken.Group.TokenResponse(groupToken.Name);
        }

        public static IEnumerable<SendGroup> GetGroups() {
            return Groups.Select(x => x.SendGroup());
        }
        
        public static IEnumerable<GroupType> GetGroupTypes() {
            return GroupTypes;
        }
        
        public static void ChangeGroupName(string name, int groupId) {
            Groups.Find(x => x.Id == groupId).Name = name;
        }

        public static void RemoveUser(string user, int groupId) {
            var users = Groups.Find(x => x.Id == groupId).Users;
            var toRemove = users.First(x => x.Name.Equals(user));
            users.Remove(toRemove);
        }

        public static int GenerateToken(int groupId, LoginRequest request) {
            var group = Groups.First(x => x.Id == groupId);
            if (!group.Password.Equals(request.Password)) throw new Exception("Invalid Password");
            var token = new Token(group, request.Name);
            Tokens.Add(token);
            PurgeTokens();
            return token.GetHashCode();
        }

        public static bool TokenIsValid(int token) {
            PurgeTokens();
            return Tokens.Exists(x => x.GetHashCode().Equals(token));
        }

        private static void PurgeTokens() {
            Tokens.RemoveAll(x => !x.IsValid());
        }

        public static GroupResponse GetGroupResponse() {
            return new GroupResponse {Games = Lobby.GetGroups(), GameTypes = Database.GetGroupTypes().Result};
        }
    }
}