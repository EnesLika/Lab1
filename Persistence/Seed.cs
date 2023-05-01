using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Admins.Any()) return;
            
            var admins = new List<Admin>
                {
                    new Admin {
                        adminName = "test1",
                        adminEmail = "test@test.com",
                        password = "test123",
                    },
                    new Admin {
                        adminName = "test2",
                        adminEmail = "test2@test2.com",
                        password = "test321",
                    },
                };
            await context.Admins.AddRangeAsync(admins);
            await context.SaveChangesAsync();

            var users = new List<User>
                {
                    new User {
                        userName = "user1",
                        userEmail = "user@user.com",
                        userPassword = "user123",
                        FirstName = "John",
                        LastName = "Smith"
                    }
                };

            await context.Users.AddRangeAsync(users);
            await context.SaveChangesAsync();
            
        }
    }
}