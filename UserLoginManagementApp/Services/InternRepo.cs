using Microsoft.EntityFrameworkCore;
using UserLoginManagementApp.Interfaces;
using UserLoginManagementApp.Models;

namespace UserLoginManagementApp.Services
{
    public class InternRepo : IRepo<int, Intern>
    {
        private readonly UserContext _context;

        public InternRepo(UserContext context)
        {
            _context = context;
        }
        public async Task<Intern?> Add(Intern item)
        {
            _context.Interns.Add(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public Task<Intern?> Delete(int key)
        {
            throw new NotImplementedException();
        }

        public async Task<Intern?> Get(int key)
        {
            var intern = await _context.Interns.FirstOrDefaultAsync(s => s.Id == key);
            if (intern == null)
                return null;
            return intern;
        }

        public Task<IList<Intern>?> GetAll()
        {
            throw new NotImplementedException();
        }

       

        public Task<Intern?> Update(Intern item)
        {
            throw new NotImplementedException();
        }
    }
}
