using UserLoginManagementApp.Models;

namespace UserLoginManagementApp.Interfaces
{
    public interface IGeneratePassword
    {
        public Task<string?> GeneratePassword(Intern intern);
    }
}
