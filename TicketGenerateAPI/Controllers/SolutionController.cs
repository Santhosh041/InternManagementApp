using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TicketGenerateAPI.Interfaces;
using TicketGenerateAPI.Models;

namespace TicketGenerateAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SolutionController : ControllerBase
    {
        private readonly IRepo<Solution, int> _repo;
        private readonly IRepo<Ticket, int> _ticketRepo;

        public SolutionController(IRepo<Solution,int> repo , IRepo<Ticket,int> ticketRepo) 
        {
            _repo=repo;
            _ticketRepo=ticketRepo;
        }

        [HttpPost("Add Solution")]
        [ProducesResponseType(typeof(Solution), 200)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Ticket>> AddSolution(Solution solution)
        {
            Ticket ticket = new Ticket();
            ticket.ID = solution.TicketID;
            ticket.Status = "Solved" ; 
            solution.ProvisionDate= DateTime.Now;
            var addSolution = await _repo.Add(solution);
            var result = await _ticketRepo.Update(ticket);
            if (addSolution != null)
            {
                return Ok(addSolution);
            }
            return BadRequest("Unable to Add Solution ");

        }

        [HttpGet("Get Solution")]
        [ProducesResponseType(typeof(Solution), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Solution>> GetSolution(int id)
        {
            var getSolution = await _repo.Get(id);
            if (getSolution != null)
            {
                return Ok(getSolution);
            }
            return NotFound("Unable to find Solution");
        }

        [HttpGet("Get All Solution")]
        [ProducesResponseType(typeof(Solution), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ICollection<Solution>>> GetAllSolution()
        {
            var getAllSolutions = await _repo.GetAll();
            if (getAllSolutions != null)
            {
                return Ok(getAllSolutions);
            }
            return NotFound("Unable to find Solutions");
        }

        [HttpDelete("Delete Solution")]
        [ProducesResponseType(typeof(Solution), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Ticket>> DeleteSolution(int id)
        {
            var deleteSolution = await _repo.Delete(id);
            if (deleteSolution != null)
            {
                return Ok(deleteSolution);
            }
            return NotFound("Unable to find Solution");
        }

        [HttpPut]
        [ProducesResponseType(typeof(Solution), 200)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Solution>> UpdateTicket(Solution solution)
        {

            var updateSolution = await _repo.Update(solution);
            if (updateSolution != null)
            {
                return Ok(updateSolution);
            }
            return NotFound("Unable to find Solution");
        }
    }
}
