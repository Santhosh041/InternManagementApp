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
                _context.Ticket.Remove(ticket);
                await _context.SaveChangesAsync();
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

        public async Task<Ticket> Update(Ticket item)
        {
            var ticket =await Get(item.ID);
            if (ticket != null)
            {
                ticket.Title = item.Title;
                ticket.Description = item.Description;
                ticket.IssueDate = item.IssueDate;
                ticket.Status = item.Status;
                ticket.Priority = item.Priority;
                return ticket;
            }
            return null;

        }
    }
}
