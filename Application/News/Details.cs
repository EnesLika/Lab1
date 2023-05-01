using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Newss
{
    public class Details
    {
        public class Query : IRequest<News>
        {
            public int newsId { get; set; }
        }

        public class Handler : IRequestHandler<Query, News>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<News> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Newss.FindAsync(request.newsId);
            }

            /*public Task<News> Handle(Query request, CancellationToken cancellationToken)
            {
                throw new NotImplementedException();
            }*/
        }
    }
}