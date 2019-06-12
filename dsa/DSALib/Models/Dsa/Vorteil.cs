﻿using DSALib.Models.Database;

namespace DSALib.Models.Dsa {
    public class Vorteil : DataObject // talent objekt
    {
        public Vorteil(string name, string value = "") {
            Name = name;
            Value = value;
            // this.Choice = choice;
        }

        public string Value { get; set; }

        //public string Choice { get; set; }
    }
}