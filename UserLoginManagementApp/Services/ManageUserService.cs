﻿using System.Security.Cryptography;
using System.Text;
using UserLoginManagementApp.Interfaces;
using UserLoginManagementApp.Models.DTOs;
using UserLoginManagementApp.Models;

namespace UserLoginManagementApp.Services
{
    public class ManageUserService : IManageUser
    {
        private readonly IRepo<int, User> _userRepo;
        private readonly IRepo<int, Intern> _internRepo;
        private readonly IGeneratePassword _passwordService;
        private readonly IGenerateToken _tokenService;
        private readonly ILogRepo _logRepo;

        public ManageUserService(IRepo<int, User> userRepo,
            IRepo<int, Intern> internRepo,
            IGeneratePassword passwordService,
            IGenerateToken tokenService,
            ILogRepo logRepo)
        {
            _userRepo = userRepo;
            _internRepo = internRepo;
            _passwordService = passwordService;
            _tokenService = tokenService;
            _logRepo= logRepo;
        }

        public async Task<UserDTO> ChangeStatus(int internID)
        {
            UserDTO userDTO ;
            User user = await _userRepo.Get(internID);
            if(user != null)
                if (user.Status != "Approved")
                    user.Status = "Approved";
                else
                    user.Status = "Not Approved";
            var result= await _userRepo.Update(user);
            if(result!=null)
            {
                userDTO = new UserDTO();
                userDTO.UserId=result.UserId;
                userDTO.Role=result.Role;
                return userDTO;
            }
            return null;

        }

        public async Task<UserDTO> Login(UserDTO userDTO)
        {
            UserDTO user = null;
            var userData = await _userRepo.Get(userDTO.UserId);
            if (userData != null)
            {
                var hmac = new HMACSHA512(userData.PasswordKey);
                var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.Password));
                for (int i = 0; i < userPass.Length; i++)
                {
                    if (userPass[i] != userData.PasswordHash[i])
                        return null;
                }
                user = new UserDTO();
                user.UserId = userData.UserId;
                user.Role = userData.Role;
                user.Token = _tokenService.GenerateToken(user);
            }
            return user;

        }

        public async Task<UserDTO> Register(InternDTO intern)
        {
            UserDTO user = null;
            var hmac = new HMACSHA512();
            string? generatedPassword = await _passwordService.GeneratePassword(intern);
            intern.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword ?? "1234"));
            intern.User.PasswordKey = hmac.Key;
            intern.User.Role = "Intern";
            //intern.User.Role = generatedPassword;
            var userResult = await _userRepo.Add(intern.User);
            var internResult = await _internRepo.Add(intern);
            if (userResult != null && internResult != null)
            {
                user = new UserDTO();
                user.UserId = internResult.Id;
                user.Role = userResult.Role;
                user.Token = _tokenService.GenerateToken(user);
            }
            return user;
        }


        public async Task<User> ChangePassword(PasswordDTO passwordDTO)
        {
            User user = new User();
            var hmac = new HMACSHA512();
            var userIntern = await _userRepo.Get(passwordDTO.UserId);
            user.UserId = userIntern.UserId;
            user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(passwordDTO.Password ?? "password12")); 
            user.PasswordKey = hmac.Key;
            user.Role = userIntern.Role;
            user.Status = userIntern.Status;

            var userResult = await _userRepo.Update(user);
            if (userResult != null)
            {
                user.PasswordHash = null;
                user.PasswordKey = null;
                return user;
            }
            return null;
        }

        public async Task<Intern> GetIntern(int id)
        {
            var intern = await _internRepo.Get(id);
            if(intern != null)
                return intern;
            return null;
        }
        public async Task<List<Intern>> GetAllIntern()
        {
            List<Intern> interns = new List<Intern>();
            var allUsers = await _userRepo.GetAll();
            if (allUsers == null)
            {
                return null;
            }
            var ids = allUsers.Where(s => s.Role == "Intern").Select(c => c.UserId);
            foreach (var id in ids)
            {
                var intern = await _internRepo.Get(id);
                interns.Add(intern);
            }
            return interns;

        }

        public async Task<Login> SetLogin(Login login)
        {
            var result = await _logRepo.Add(login);
            return result;
        }
    }
}
