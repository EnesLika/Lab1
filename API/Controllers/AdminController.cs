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
    public class AdminsController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Admin>>> GetAllAdmins()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdminAsync(int id)
        {
            return await Mediator.Send(new Details.Query{adminId = id});
        }

        [HttpPost]
        public async Task<IActionResult> AddAdmin(Admin admin)
        {    
            return Ok(await Mediator.Send(new Create.Command{Admins = admin}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdmin(int id, Admin updateadmin)
        {
           updateadmin.adminId = id;
           return Ok(await Mediator.Send(new Edit.Command{Admins=updateadmin}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmin(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{adminId = id}));
        }

    }
}