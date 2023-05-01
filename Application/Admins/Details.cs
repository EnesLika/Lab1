using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Admins
{
    public class Details
    {
        public class Query : IRequest<Admin>
        {
            public int adminId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Admin>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Admin> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Admins.FindAsync(request.adminId);
            }

            /*public Task<Admin> Handle(Query request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }*/
        }
    }
}