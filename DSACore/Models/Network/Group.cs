using System;
using System.Collections.Generic;

namespace DSACore.Models.Network {
    public class Group : DSALib.Models.Database.Groups.Group {
        public Group(string name, string password) {
            Name = name;
            Password = password;
        }

        public Group() {
        }

        public Group(DSALib.Models.Database.Groups.Group group) {
            Name = group.Name;
            Capacity = group.Capacity;
            Id = group.Id;
            Password = group.Password;
            Type = group.Type;
        }

        public Group(string name, int userOnline) {
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        public List<User> Users { get; set; } = new List<User>();

        public int UserCount => Users.Count;

        public SendGroup SendGroup() {
            return new SendGroup {
                Name = Name, UserCount = UserCount,
                MaxUsers = Capacity, HasPassword = Password.Length != 0, Type = Type, Id = Id
            };
        }
    }

    public class SendGroup {
        public string Name { get; set; }

        public int UserCount { get; set; }

        public int MaxUsers { get; set; }

        public bool HasPassword { get; set; }

        public string Type { get; set; }

        public int Id { get; set; }
    }
}