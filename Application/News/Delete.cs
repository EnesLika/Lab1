using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Newss
{
    public class Delete
    {
        public class Command : IRequest 
        {
            public int newsId { get; set;}
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
                var dbManager = await _context.Newss.FindAsync(request.newsId);
            
                _context.Remove(dbManager);
                await _context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }
}