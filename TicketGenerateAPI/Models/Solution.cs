using System.ComponentModel.DataAnnotations.Schema;

namespace TicketGenerateAPI.Models
{
    public class Solution
    {
        public int Id { get; set; }
        public int TicketID { get; set; }
        [ForeignKey("Id")]
        public Ticket? Ticket { get; set; }

        public int AdminID { get; set; }
        public string? solution { get; set; }
        public DateTime ProvisionDate { get; set; }

    }
}
