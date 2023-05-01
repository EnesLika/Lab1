using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Newss;

namespace API.Controllers
{
    public class NewsController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<News>>> GetAllNews()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<News>> GetNewsAsync(int id)
        {
            return await Mediator.Send(new Details.Query{newsId = id});
        }

        [HttpPost]
        public async Task<IActionResult> AddNews(News News)
        {    
            return Ok(await Mediator.Send(new Create.Command{Newss = News}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNews(int id, News updateNews)
        {
           updateNews.newsId = id;
           return Ok(await Mediator.Send(new Edit.Command{Newss=updateNews}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command{newsId = id}));
        }

    }
}