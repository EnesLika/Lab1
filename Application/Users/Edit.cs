using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Domain;
using System.Threading;
using Persistence;
using AutoMapper;

namespace Application.Users
{
    public class Edit
    {
       public class Command : IRequest 
        {
            public User Users { get; set; }

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
                var dbUser = await _context.Users.FindAsync(request.Users.userId);
                
                
                dbUser.userName = request.Users.userName;
                dbUser.userEmail = request.Users.userEmail;
                dbUser.userPassword = request.Users.userPassword;
                dbUser.FirstName = request.Users.FirstName;
                dbUser.LastName = request.Users.LastName;
                dbUser.Birthday = request.Users.Birthday;

                

                //_mapper.Map(request.Users, user);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        } 
    }
}