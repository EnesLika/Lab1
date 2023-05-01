using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Newss
{
    public class List{
    public class Query : IRequest<List<News>>{}

        public class Handler : IRequestHandler<Query, List<News>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<News>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Newss.ToListAsync();
            }
        }
    }
}