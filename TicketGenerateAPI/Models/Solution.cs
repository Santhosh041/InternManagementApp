using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TicketGenerateAPI.Models
{
    public class Solution
    {
        [Key]
        public int SolutionId { get; set; }

        public int TicketID { get; set; }
        [ForeignKey("ID")]
        public Ticket? Ticket { get; set; }
        public int AdminID { get; set; }
        public string? solution { get; set; }
        public DateTime? ProvisionDate { get; set; }

    }
}
