using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using TicketGenerateAPI.Interfaces;
using TicketGenerateAPI.Models;

namespace TicketGenerateAPI.Services
{
    public class TicketRepo : IRepo<Ticket,int>
    {
        private readonly TicketContext _context;

        public TicketRepo(TicketContext context)
        { 
            _context=context;
        }

        public async Task<Ticket> Add(Ticket item)
        {
            _context.Ticket.Add(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<Ticket> Delete(int key)
        {
            var ticket =await Get(key);
            if (ticket != null)
            {
                ticket.Status = "Deleted";
                ticket = await Update(ticket);
                return ticket;
            }
            return null;
        }

        public async Task<Ticket> Get(int key)
        {
            var ticket= await _context.Ticket.SingleOrDefaultAsync(s=>s.ID==key);
            if (ticket != null)
                return ticket;
            return null;
        }

        public async Task<ICollection<Ticket>?> GetAll()
        {

            var tickets = await _context.Ticket.ToListAsync();
            return tickets;
        }

        public async Task<ICollection<Ticket>?> GetUsersRecords(int id)
        {
            var tickets=await _context.Ticket.Where(s=>s.ID== id).ToListAsync();
            return tickets;
        }

        public async Task<Ticket> Update(Ticket item)
        {
            var ticket =await Get(item.ID);
            if (ticket != null)
            {
                ticket.Status = item.Status;
                await _context.SaveChangesAsync();
                return ticket;
            }
            return null;

        }
    }
}
