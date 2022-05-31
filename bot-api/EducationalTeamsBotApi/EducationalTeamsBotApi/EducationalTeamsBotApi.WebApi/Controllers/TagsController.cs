// -----------------------------------------------------------------------
// <copyright file="TagsController.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
namespace EducationalTeamsBotApi.WebApi.Controllers
{
    using EducationalTeamsBotApi.Application.Tags.Queries.GetTagsQuery;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    /// <summary>
    /// Controller allowing to interact with tags.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class TagsController : ApiBaseController
    {
        /// <summary>
        /// Gets the list of all tags.
        /// </summary>
        /// <returns>A list of tags.</returns>
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetTags(string name)
        {
            try
            {
            var tags = await this.Mediator.Send(new GetTagsQuery());
            return this.Ok(tags);

            }
            catch (Exception e)
            {

                throw e;
            }
            return this.Ok();
        }

        /// <summary>
        /// Create or update a tag.
        /// </summary>
        /// <returns>The created or updated tag.</returns>
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> AddTag(int idTag, string name)
        {
            var tags = await this.Mediator.Send(new GetTagsQuery());
            return this.Ok(tags);
        }

        /// <summary>
        /// Delete a tag.
        /// </summary>
        [HttpDelete]
        [AllowAnonymous]
        public async Task<IActionResult> DeleteTags(int idTag)
        {
            var tags = await this.Mediator.Send(new GetTagsQuery());
            return this.Ok(tags);
        }
    }
}
