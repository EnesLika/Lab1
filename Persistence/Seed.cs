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
        }
    }
}