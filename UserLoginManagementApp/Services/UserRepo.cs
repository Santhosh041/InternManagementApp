using Microsoft.EntityFrameworkCore;
using UserLoginManagementApp.Interfaces;
using UserLoginManagementApp.Models;

namespace UserLoginManagementApp.Services
{
    public class UserRepo : IRepo<int, User>
    {
        private readonly UserContext _context;
        private readonly ILogger<UserRepo> _logger;

        public UserRepo(UserContext context, ILogger<UserRepo> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<User?> Add(User item)
        {
            try
            {
                _context.Users.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<User?> Delete(int key)
        {
            var user = await Get(key);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return user;
            }
            return null;
        }

        public async Task<User?> Get(int key)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserId == key);
            return user;
        }

        public async Task<IList<User>?> GetAll()
        {
            var users = await _context.Users.ToListAsync();
            if (users.Count > 0)
                return users;
            return null;
        }

        public async Task<User?> Update(User item)
        {
            var user = await Get(item.UserId);

            if (user != null)
            {
                user.PasswordKey = item.PasswordKey;
                user.PasswordHash= item.PasswordHash;
                user.Role= item.Role;
                user.Status = item.Status;
                await _context.SaveChangesAsync();
                return user;

            }
            return null;
        }

    }
}
