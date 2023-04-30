using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class User
    {
        public int userId { get; set; }

        public string userName { get; set; }

        public string userEmail { get; set; }

        public string userPassword { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime Birthday { get; set; }


    }
}