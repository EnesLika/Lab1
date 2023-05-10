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
                    },
                    new User {
                        userName = "user2",
                        userEmail = "user@user.com",
                        userPassword = "user123",
                        FirstName = "John",
                        LastName = "Snow"
                    }
                };
                

            await context.Users.AddRangeAsync(users);
            await context.SaveChangesAsync();

            var newss = new List<News>
                {
                    new News {
                        newsHeadline = "SeededNews",
                        newsImage = "placeholder.png",
                        newsUploadTime = DateTime.ParseExact("15/06/2015 13:45:00", "dd/MM/yyyy HH:mm:ss",null),
                        newsDescription = "This is a seeded news article"
                    },
                    new News {
                        newsHeadline = "SeededNews2",
                        newsImage = "placeholder.png",
                        newsUploadTime = DateTime.ParseExact("15/06/2015 13:45:00", "dd/MM/yyyy HH:mm:ss",null),
                        newsDescription = "This is a seeded news article 2"
                    }
                };

            await context.Users.AddRangeAsync(users);
            await context.SaveChangesAsync();
            
        }
    }
}