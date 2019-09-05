namespace DSALib.Models.Database.Groups {
    public class Group {
        public string Name { get; set; }
        public string Password { get; set; }
        public int Id { get; set; }

        public string Type { get; set; }

        public int Capacity { get; set; }
    }
}