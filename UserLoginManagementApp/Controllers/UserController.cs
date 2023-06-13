using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserLoginManagementApp.Interfaces;
using UserLoginManagementApp.Models;
using UserLoginManagementApp.Models.DTOs;

namespace UserLoginManagementApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AngularCORS")]
    public class UserController : ControllerBase
    {
        private readonly IManageUser _manageUser;


        public UserController(IManageUser manageUser)
        {
            _manageUser = manageUser;

        }

        [HttpPost("Register")]
        [ProducesResponseType(typeof(UserDTO), 200)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> Register(InternDTO intern)
        {
            var result = await _manageUser.Register(intern);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to register at this moment");
        }

        [HttpPost("Login")]
        [ProducesResponseType(typeof(UserDTO), 200)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> Login(UserDTO userDTO)
        {
            var result = await _manageUser.Login(userDTO);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to Login ... Please Check Login Credentials ..");
        }


        [HttpPut("Change Status")]  
        [Authorize(Roles ="Admin")]
        [ProducesResponseType(typeof(UserDTO), 200)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> ChangeStatus(UserIdDTO ID)
        {
            int internID = ID.id;
            var result = await _manageUser.ChangeStatus(internID);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to change Status");

        }

        [HttpGet("Get All Intern")]
        [Authorize(Roles = "Admin")]
        [ProducesResponseType(typeof(List<Intern>), 200)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<List<Intern>>> GetAllInterns()
        {
            var result = await _manageUser.GetAllIntern();
            if(result != null)
                return Ok(result);
            return BadRequest("Nooo intern");
        }

        [HttpGet("Get Profile")]
        [ProducesResponseType(typeof(List<Intern>), 200)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Intern>> GetUser(int id)
        {
            var result = await _manageUser.GetIntern(id);
            if (result != null)
                return Ok(result);
            return BadRequest("Nooo intern");
        }

        [HttpPut ("Change Password")]
        [ProducesResponseType(typeof(User), 200)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<User>> ChangePassword(PasswordDTO passwordDTO)
        {
            var result = await _manageUser.ChangePassword(passwordDTO);
            if (result != null)
                return Ok(result);
            return BadRequest("Unable to change password");
        }

        [HttpPost("LogIn Time")]
        [ProducesResponseType(typeof(Login), 200)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> LoginTime(Login item)
        {
            var result = await _manageUser.SetLogin(item);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Something Error");
        }
    }
}
