using UserLoginManagementApp.Models;
using UserLoginManagementApp.Models.DTOs;

namespace UserLoginManagementApp.Interfaces
{
    public interface IManageUser
    {

        public Task<UserDTO> Login(UserDTO user);
        public Task<UserDTO> Register(InternDTO intern);
        public Task<UserDTO> ChangeStatus(int internID);
        public Task<List<Intern>> GetAllIntern();
        public Task<User> ChangePassword(PasswordDTO DTO);
        public Task<Intern> GetIntern(int id);
        public Task<Login> SetLogin(Login login);
    }
}
