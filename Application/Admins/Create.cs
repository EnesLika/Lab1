using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;

namespace Application.Admins
{
    public class Create
    {
        public class Command : IRequest
        {
            public Admin Admins { get; set; }
        }
         public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Admins.Add(request.Admins);
                
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}