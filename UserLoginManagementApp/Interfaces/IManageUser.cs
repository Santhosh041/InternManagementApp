using UserLoginManagementApp.Models;
using UserLoginManagementApp.Models.DTOs;

namespace UserLoginManagementApp.Interfaces
{
    public interface IManageUser
    {

        public Task<UserDTO> Login(UserDTO user);
        public Task<UserDTO> Register(InternDTO intern);
        public Task<UserDTO> ChangeStatus(UserDTO user);
        public Task<List<Intern>> GetAllIntern();
        public Task<User> ChangePassword(InternDTO internDTO);
    }
}
