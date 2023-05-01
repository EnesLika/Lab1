using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using AutoMapper;

namespace Application.Admins
{
    public class Edit
    {
       public class Command : IRequest 
        {
            public Admin Admins { get; set; }

        }
        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var dbAdmin = await _context.Admins.FindAsync(request.Admins.adminId);
                
                
                dbAdmin.adminName = request.Admins.adminName;
                dbAdmin.adminEmail = request.Admins.adminEmail;
                dbAdmin.password = request.Admins.password;
                

                //_mapper.Map(request.Admins, admin);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        } 
    }
}