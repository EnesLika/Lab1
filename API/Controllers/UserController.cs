using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Users;

namespace API.Controllers
{
    public class UserController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserAsync(int id)
        {
            return await Mediator.Send(new Details.Query{userId = id});
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(User user)
        {    
            return Ok(await Mediator.Send(new Create.Command{Users = user}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, User updateuser)
        {
           updateuser.userId = id;
           return Ok(await Mediator.Send(new Edit.Command{Users=updateuser}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{userId = id}));
        }

    }
}