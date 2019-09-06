using System;

namespace DSACore.Models.Network {
    public class Token {
        private readonly DateTime creation = DateTime.Now;

        public Token(Group group) {
            Group = group;
        }

        public Group Group { get; set; }

        public bool IsValid() {
            return DateTime.Now - creation < TimeSpan.FromMinutes(5);
        }
    }
}