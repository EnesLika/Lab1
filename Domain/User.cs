using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class User
    {
        public int userId { get; set; }

        public string userName { get; set; } = string.Empty;

        public string userEmail { get; set; } = string.Empty;

        public string userPassword { get; set; } = string.Empty;

        public string FirstName { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;

        public DateTime Birthday { get; set; }


    }
}