namespace TicketGenerateAPI.Models
{
    public class Ticket
    {
        public int ID { get; set; }
        public int InternId { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime? IssueDate { get; set; }
        public string? Status { get; set; }
        public string? Category { get; set; }
        public string? Priority { get; set; }

    }

}


