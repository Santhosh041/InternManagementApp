using Microsoft.EntityFrameworkCore;
using TicketGenerateAPI.Interfaces;
using TicketGenerateAPI.Models;

namespace TicketGenerateAPI.Services
{
    public class SolutionRepo:IRepo<Solution,int>
    {
        private readonly TicketContext _context;

        public SolutionRepo(TicketContext context) 
        { 
            _context=context;
        }

        public async Task<Solution> Add(Solution item)
        {
             _context.Solution.Add(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<Solution> Delete(int key)
        {
            var solution =await Get(key);
            if (solution != null)
            {
                _context.Solution.Remove(solution);
                await _context.SaveChangesAsync();
                return solution;
            }
            return null;
        }

        public async Task<Solution> Get(int key)
        {
            var solution = await _context.Solution.FirstOrDefaultAsync(s=>s.SolutionId== key);
            if (solution != null)
                return solution;
            return null;
        }

        public Task<ICollection<Solution>?> GetAll()
        {
            var solutions = _context.Solution.ToArrayAsync();
            return null;
        }

        public Task<ICollection<Solution>?> GetUsersRecords(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Solution> Update(Solution item)
        {
            var solution = await Get(item.SolutionId);
            if(solution != null)
            {
                solution.AdminID= item.AdminID;
                solution.ProvisionDate= item.ProvisionDate;
                solution.solution = item.solution;
                return solution;
            }
            return null;
        }
    }
}
