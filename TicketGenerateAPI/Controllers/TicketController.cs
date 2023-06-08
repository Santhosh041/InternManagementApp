using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TicketGenerateAPI.Models;
using TicketGenerateAPI.Services;

namespace TicketGenerateAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly TicketRepo _repo;

        public TicketController(TicketRepo repo) 
        {
            _repo=repo;
        }


        [HttpPost("Add Ticket")]
        [ProducesResponseType(typeof(Ticket), 200)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Ticket>>AddTicket(Ticket ticket)
        {
            var addTicket = await _repo.Add(ticket);
            if (addTicket != null)
            { 
                return Ok(addTicket);
            }
            return BadRequest("Unable to Add Ticket ");

        }

        [HttpGet("Get Ticket")]
        [ProducesResponseType(typeof(Ticket), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Ticket>> GetTicket(int id)
        {
            var getTicket = await _repo.Get(id);
            if (getTicket != null)
            {
                return Ok(getTicket);
            }
            return NotFound("Unable to find ticket");
        }

        [HttpGet("Get All Ticket")]
        [ProducesResponseType(typeof(Ticket), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ICollection<Ticket>>> GetAllTicket()
        {
            var getAllTickets = await _repo.GetAll();
            if (getAllTickets != null)
            {
                return Ok(getAllTickets);
            }
            return NotFound("Unable to find tickets");
        }

        [HttpDelete("Delete Ticket")]
        [ProducesResponseType(typeof(Ticket), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Ticket>> DeleteTicket(int id)
        {
            var deleteTicket = await _repo.Delete(id);
            if (deleteTicket != null)
            {
                return Ok(deleteTicket);
            }
            return NotFound("Unable to find ticket");
        }

        [HttpPut]
        [ProducesResponseType(typeof (Ticket), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Ticket>> UpdateTicket(Ticket ticket)
        {
            var updateTicket = await _repo.Update(ticket);
            if (updateTicket != null)
            {
                return Ok(updateTicket);
            }
            return NotFound("Unable to find ticket");
        }
    }
}
