using Microsoft.EntityFrameworkCore;

namespace TicketGenerateAPI.Models
{
    public class TicketContext:DbContext
    {
        public TicketContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Ticket> Ticket { get; set;}
        public DbSet<Solution> Solution { get; set;}

    }
}
