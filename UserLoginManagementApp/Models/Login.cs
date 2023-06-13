namespace UserLoginManagementApp.Models
{
    public class Login
    {
        public int id { get; set; }
        public int userId { get; set; }
        public DateTime logIn { get; set; }
        public DateTime logout { get; set; }
    }
}
