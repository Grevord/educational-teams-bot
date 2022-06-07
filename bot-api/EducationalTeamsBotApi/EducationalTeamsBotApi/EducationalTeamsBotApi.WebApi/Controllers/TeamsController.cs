// -----------------------------------------------------------------------
// <copyright file="TeamsController.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

namespace EducationalTeamsBotApi.WebApi.Controllers
{
    using EducationalTeamsBotApi.Application.Teams.Queries.GetJoinedTeamsQuery;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controller allowing to interact with teams.
    /// </summary>
    [ApiController]
    public class TeamsController : ApiBaseController
    {
        /// <summary>
        /// Gets the list of joined teams.
        /// </summary>
        /// <returns>A list of teams.</returns>
        [HttpGet]
        public async Task<IActionResult> GetJoinedTeams()
        {
            var joinedTeams = await this.Mediator.Send(new GetJoinedTeamsQuery());
            return this.Ok(joinedTeams);
        }
    }
}
