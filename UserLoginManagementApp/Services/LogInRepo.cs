using UserLoginManagementApp.Interfaces;
using UserLoginManagementApp.Models;

namespace UserLoginManagementApp.Services
{
    public class LogInRepo : ILogRepo
    {
        private readonly UserContext _context;

        public LogInRepo(UserContext context) 
        {
            _context=context;
        }

        public async Task<Login?> Add(Login item)
        {
            var result = _context.Logins.Add(item);
            await _context.SaveChangesAsync();
            return item;
        }
    }
}
