using System;
using System.Collections.Generic;
using System.Linq;
using DSACore.Models.Network;
using DSALib.FireBase;

namespace DSACore.Models {
    public static class Lobby {
        public static readonly List<Group> Groups;

        static Lobby() {
            Groups = Database.GetGroups().Result.Select(x => new Group(x)).ToList();
        }

        private static List<Token> Tokens { get; } = new List<Token>();

        public static void AddGroup(Group group) {
            Groups.Add(group);
        }

        public static void DeleteGroup(int id) {
            Groups.Remove(Groups.Find(x => x.Id == id));
        }

        public static SendGroup GetGroup(int id) {
            return Groups.Find(x => x.Id == id).SendGroup();
        }

        public static IEnumerable<SendGroup> GetGroups() {
            return Groups.Select(x => x.SendGroup());
        }

        public static void ChangeGroupName(string name, int groupId) {
            Groups.Find(x => x.Id == groupId).Name = name;
        }

        public static void RemoveUser(string user, int groupId) {
            var users = Groups.Find(x => x.Id == groupId).Users;
            var toRemove = users.First(x => x.Name.Equals(user));
            users.Remove(toRemove);
        }

        public static int GenerateToken(int groupId, string password) {
            var group = Groups.First(x => x.Id == groupId);
            if (!group.Password.Equals(password)) throw new Exception("Invalid Password");
            var token = new Token(group);
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
    }
}