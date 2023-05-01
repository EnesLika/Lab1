using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Admins
{
    public class Delete
    {
        public class Command : IRequest 
        {
            public int adminId { get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
            public DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var dbAdmin = await _context.Admins.FindAsync(request.adminId);
            
                _context.Remove(dbAdmin);
                
                await _context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }
}