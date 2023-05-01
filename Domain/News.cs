using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class News
    {
        public int newsId { get; set; }

        public string newsHeadline { get; set; } = string.Empty;

        public string newsImage { get; set; } = string.Empty;

        public DateTime newsUploadTime { get; set; }

        public string newsDescription { get; set; } = string.Empty;

    }
}