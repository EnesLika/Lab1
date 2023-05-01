using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using AutoMapper;

namespace Application.Newss
{
    public class Edit
    {
       public class Command : IRequest 
        {
            public News Newss { get; set; }

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
                var dbNews = await _context.Newss.FindAsync(request.Newss.newsId);
                
                
                dbNews.newsHeadline = request.Newss.newsHeadline;
                dbNews.newsImage = request.Newss.newsImage;
                dbNews.newsDescription = request.Newss.newsDescription;
                

                //_mapper.Map(request.Newss, news);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        } 
    }
}