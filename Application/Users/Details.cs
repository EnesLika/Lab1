using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Users
{
    public class Details
    {
        public class Query : IRequest<User>
        {
            public int userId { get; set; }
        }

        public class Handler : IRequestHandler<Query, User>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Users.FindAsync(request.userId);
            }

            /*public Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }*/
        }
    }
}