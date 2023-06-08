using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserLoginManagementApp.Interfaces;
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
        //[Authorize(Roles ="Admin")]
        public async Task<ActionResult<UserDTO>> ChangeStatus(UserDTO userDTO)
        {
            var result = await _manageUser.ChangeStatus(userDTO);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to change Status");

        }
    }
}
