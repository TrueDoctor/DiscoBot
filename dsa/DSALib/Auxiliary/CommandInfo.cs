﻿using System.Linq;

namespace DSALib.Auxiliary {
    public struct CommandInfo {
        public CommandInfo(string name, string brief, string[] description, string scope) {
            Name = name;
            Scope = scope;
            Brief = brief;
            Description = description;
        }

        public string Name { get; }

        public string Scope { get; }

        public string Brief { get; }

        public string[] Description { get; }

        public string GetDescription() {
            return Description.Aggregate((s, c) => s + c);
        }
    }
}