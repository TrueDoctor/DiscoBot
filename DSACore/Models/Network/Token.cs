using System;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace DSACore.Models.Network {
    public class Token {
        private readonly DateTime creation = DateTime.Now;

        public Token(Group @group, string requestName) {
            Group = group;
            Name = requestName;
        }

        public Group Group { get; set; }
        
        public string Name { get; set; }

        public bool IsValid() {
            return DateTime.Now - creation < TimeSpan.FromMinutes(5);
        }
    }

    public class TokenResponse : SendGroup {
        public string Username { get; set; }
    }
}