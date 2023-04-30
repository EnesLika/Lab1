using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class AdminsController : BaseApiController
    {
        private readonly DataContext _context;

        public AdminsController(DataContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Admin>>> GetAdmins(){
            return await _context.Admins.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(int id){
            return await _context.Admins.FindAsync(id);
        }
    }
}