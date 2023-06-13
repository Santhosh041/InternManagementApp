using UserLoginManagementApp.Models;

namespace UserLoginManagementApp.Interfaces
{
    public interface ILogRepo
    {
        public Task<Login?> Add(Login item);
    }
}
