// -----------------------------------------------------------------------
// <copyright file="SpeakersController.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

namespace EducationalTeamsBotApi.WebApi.Controllers
{
    using EducationalTeamsBotApi.Application.Speakers.Queries.GetSpeakerQuery;
    using EducationalTeamsBotApi.Application.Speakers.Queries.GetSpeakersQuery;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controller allowing to interact with speakers.
    /// </summary>
    [ApiController]
    public class SpeakersController : ApiBaseController
    {
        /// <summary>
        /// Gets the list of all speakers.
        /// </summary>
        /// <returns>A list of speakers.</returns>
        [HttpGet]
        public async Task<IActionResult> GetSpeakers()
        {
            try
            {
                var speakers = await this.Mediator.Send(new GetSpeakersQuery());
                return this.Ok(speakers);
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <summary>
        /// Gets the list of all speakers.
        /// </summary>
        /// <param name="id">Identifier of the speaker.</param>
        /// <returns>A list of speakers.</returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSpeaker(string id)
        {
            try
            {
                var speakers = await this.Mediator.Send(new GetSpeakerQuery { SpeakerId = id });
                return this.Ok(speakers);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
