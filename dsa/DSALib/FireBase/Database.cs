﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DSALib.DSA_Game;
using DSALib.DSA_Game.Characters;
using DSALib.Models.Database.Dsa;
using DSALib.Models.Database.Groups;
using Firebase.Database;
using Firebase.Database.Query;

namespace DSALib.FireBase {
    public static class Database {
        private static readonly FirebaseClient Firebase;

        private static readonly Dictionary<string, DatabaseChar> Chars = new Dictionary<string, DatabaseChar>();

        private static readonly Dictionary<string, MeleeWeapon> MeleeList = new Dictionary<string, MeleeWeapon>();

        private static readonly Dictionary<string, RangedWeapon> RangedWeapons = new Dictionary<string, RangedWeapon>();

        private static readonly Dictionary<string, Talent> Talents = new Dictionary<string, Talent>();

        private static readonly Dictionary<string, GeneralSpell> Spells = new Dictionary<string, GeneralSpell>();

        static Database() {
            var auth = File.ReadAllText(Dsa.rootPath + "Token"); // your app secret
            Firebase = new FirebaseClient(
                "https://heldenonline-4d828.firebaseio.com/",
                new FirebaseOptions {
                    AuthTokenAsyncFactory = () => Task.FromResult(auth)
                });

            Task.Run((Action) Initialize);
        }

        private static void Initialize() {
            var waiting = new[] {
                // ToDo IntializeCollection("Chars", Chars),
                IntializeCollection("MeleeWeapons", MeleeList),
                IntializeCollection("RangedWeapons", RangedWeapons),
                IntializeCollection("Talents", Talents),
                IntializeCollection("Spells", Spells)
            };
            Task.WaitAll(waiting);
        }

        private static async Task IntializeCollection<T>(string path, Dictionary<string, T> list) {
            var temp = await Firebase
                .Child(path)
                .OrderByKey()
                .OnceAsync<T>();

            foreach (var firebaseObject in temp) list.Add(firebaseObject.Key, firebaseObject.Object);
        }

        public static async Task<int> AddChar(Character file, string group) {
            DatabaseChar.LoadChar(file, out var groupChar, out var data);

            var lastChar = await Firebase
                .Child("Chars")
                .OrderByKey()
                .LimitToLast(1)
                .OnceAsync<DatabaseChar>();
            var id = groupChar.Id = data.Id = lastChar.First().Object.Id + 1;

            await Firebase //TODO Reomve await Operators
                .Child("Groups")
                .Child("Char" + id)
                .PutAsync(groupChar);

            await Firebase
                .Child("Chars")
                .Child("Char" + id)
                .PutAsync(data);

            Chars["Char" + id] = data;

            await Firebase
                .Child("Inventories")
                .Child("Inventory" + id)
                .PutAsync(new Inventory());

            return id + 1;
        }

        public static async Task RemoveChar(int id) {
            await Firebase
                .Child("Groups")
                .Child("Char" + id)
                .DeleteAsync();

            await Firebase
                .Child("Chars")
                .Child("Char" + id)
                .DeleteAsync();

            Chars.Remove("Char" + id);

            await Firebase
                .Child("Inventories")
                .Child("Inventory" + id)
                .DeleteAsync();
        }

        public static DatabaseChar GetChar(int id) {
            /*var chr = await firebase
                .Child("Chars")
                .Child("Char" + id)
                .OnceSingleAsync<DatabaseChar>();
            return chr;*/
            return Chars["Char" + id];
        }

        public static async Task<Inventory> GetInventory(int id) {
            var inv = await Firebase
                .Child("Inventories")
                .Child("Inventory" + id)
                .OnceSingleAsync<Inventory>();
            return inv;
        }

        public static async Task SetInventory(int id, Inventory inv) {
            await Firebase
                .Child("Inventories")
                .Child("Inventory" + id)
                .PutAsync(inv);
        }

        public static async Task AddTalent(Talent tal) {
            await Firebase
                .Child("Talents")
                .Child(tal.Name)
                .PutAsync(tal);
        }

        public static async Task RemoveTalent(string talent) {
            await Firebase
                .Child("Talents")
                .Child(talent)
                .DeleteAsync();
        }

        public static Talent GetTalent(string talent) {
            /*
                        return await firebase
                            .Child("Talents")
                            .Child(talent)
                            .OnceSingleAsync<Talent>();*/
            return Talents[talent];
        }

        public static async Task AddSpell(GeneralSpell tal) {
            await Firebase
                .Child("Spells")
                .Child(tal.Name)
                .PutAsync(tal);
        }

        public static async Task RemoveSpell(string spell) {
            await Firebase
                .Child("Spells")
                .Child(spell)
                .DeleteAsync();
        }

        public static GeneralSpell GetSpell(string spell) {
            return Spells[spell];
        }


        public static async Task AddWeapon(Weapon wep) {
            var collection = wep.GetType() == typeof(MeleeWeapon) ? "MeleeWeapons" : "RangedWeapons";
            await Firebase
                .Child(collection)
                .Child(wep.Name)
                .PutAsync(wep);
        }

        public static async Task RemoveWeapon(string weapon, bool ranged = false) {
            var collection = ranged ? "RangedWeapons" : "MeleeWeapons";
            await Firebase
                .Child(collection)
                .Child(weapon)
                .DeleteAsync();
        }

        public static async Task<Weapon> GetWeapon(string weapon, bool ranged = false) {
            var collection = ranged ? "RangedWeapons" : "MeleeWeapons";
            return await Firebase
                .Child(collection)
                .Child(weapon)
                .OnceSingleAsync<Weapon>();
        }

        public static async Task<List<Group>> GetGroups() {
            var groups = await Firebase
                .Child("Groups")
                .OrderByKey()
                .OnceAsync<Group>();

            return groups.Select(x => x.Object).ToList();
        }
        
        public static async Task<List<GroupType>> GetGroupTypes() {
            var groups = await Firebase
                .Child("GroupTypes")
                .OrderByKey()
                .OnceAsync<GroupType>();

            return groups.Select(x => x.Object).ToList();
        }

        public static async Task<Group> GetGroup(int id) {
            var group = await Firebase
                .Child("Groups")
                .Child("Group" + id)
                .OnceSingleAsync<Group>();
            return group;
        }

        public static async Task AddGroup(Group group) {
            var lastChar = await Firebase
                .Child("Groups")
                .OrderByKey()
                .LimitToLast(1)
                .OnceAsync<Group>();
            var id = group.Id = lastChar.First().Object.Id + 1;

            await Firebase
                .Child("Groups")
                .Child("Group" + id)
                .PutAsync(group);
        }

        public static async void SetGroup(Group group) {
            await Firebase
                .Child("Groups")
                .Child("Group" + group.Id)
                .PutAsync(group);
        }

        public static async void DeleteGroup(int id) {
            await Firebase
                .Child("Groups")
                .Child("Group" + id)
                .DeleteAsync();
        }
    }
}