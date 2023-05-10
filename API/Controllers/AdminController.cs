using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Admins;

namespace API.Controllers
{
    public class AdminController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Admin>>> GetAllAdmin()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdminAsync(int id)
        {
            return await Mediator.Send(new Details.Query{adminId = id});
        }

        [HttpPost]
        public async Task<IActionResult> AddAdmin(Admin Admin)
        {    
            return Ok(await Mediator.Send(new Create.Command{Admins = Admin}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdmin(int id, Admin updateAdmin)
        {
           updateAdmin.adminId = id;
           return Ok(await Mediator.Send(new Edit.Command{Admins=updateAdmin}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmin(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{adminId = id}));
        }

    }
}