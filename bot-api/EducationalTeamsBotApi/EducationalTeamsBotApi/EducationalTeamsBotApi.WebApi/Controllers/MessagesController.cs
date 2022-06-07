// -----------------------------------------------------------------------
// <copyright file="MessagesController.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
namespace EducationalTeamsBotApi.WebApi.Controllers
{
    using EducationalTeamsBotApi.Application.Messages.Queries.GetMessagesQuery;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controller allowing to interact with messages.
    /// </summary>
    [ApiController]
    public class MessagesController : ApiBaseController
    {
        /// <summary>
        /// Gets the list of all messages.
        /// </summary>
        /// <returns>A list of messages.</returns>
        [HttpGet]
        public async Task<IActionResult> GetMessages()
        {
            var test = await this.Mediator.Send(new GetMessagesQuery());
            return this.Ok(test);
        }
    }
}
