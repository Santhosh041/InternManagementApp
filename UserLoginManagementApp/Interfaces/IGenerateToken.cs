using UserLoginManagementApp.Models.DTOs;

namespace UserLoginManagementApp.Interfaces
{
    public interface IGenerateToken
    {
        public string GenerateToken(UserDTO user);
    }
}
