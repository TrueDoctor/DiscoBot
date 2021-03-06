﻿using System;
using System.Linq;
using System.Text;

namespace DSALib.Auxiliary {
    public static class RandomMisc {
        private static readonly Random Rand = new Random();

        // use: 4w6 +4
        public static string Roll(string input) {
            var output = new StringBuilder();
            var strings = input.Split('w', 'd').ToList();
            var count = Convert.ToInt32(strings[0]);
            strings = strings[1].Split(' ').ToList();
            var d = Convert.ToInt32(strings[0]);

            if (strings.Count > 0) {
            }

            var sum = 0;
            for (var i = 0; i < count; i++) {
                var roll = Dice.Roll(d);
                sum += roll;
                output.Append("[" + roll + "] ");
            }

            if (strings.Count > 1) {
                sum += Convert.ToInt32(strings[1]);
                output.Append("sum: " + sum);
            }

            return output.ToString();
        }

        public static double Random(double stdDev = 1, double mean = 0) {
            var u1 = Rand.NextDouble(); // uniform(0,1) random doubles
            var u2 = Rand.NextDouble();
            var randStdNormal = Math.Sqrt(-2.0 * Math.Log(u1)) *
                                Math.Sin(2.0 * Math.PI * u2); // random normal(0,1)
            var randNormal =
                mean + stdDev * randStdNormal; // random normal(mean,stdDev^2)
            return randNormal;
        }
    }
}