// -----------------------------------------------------------------------
// <copyright file="ITagService.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
namespace EducationalTeamsBotApi.Application.Common.Interfaces
{
    using System.Collections.Generic;
    using EducationalTeamsBotApi.Application.Common.Models;
    using EducationalTeamsBotApi.Application.Tags.Queries.GetTagsQuery;

    /// <summary>
    /// Interface containing methods that call the tag repository.
    /// </summary>
    public interface ITagService
    {
        /// <summary>
        /// Gets the list of tags.
        /// </summary>
        /// <returns>A list of tags.</returns>
        Task<List<TagDto>> GetTags(string name);

        /// <summary>
        /// Add or update tag.
        /// </summary>
        /// <returns>The edited/Created tag.</returns>
        Task<TagDto> AddTag(int idTag, string name);

        /// <summary>
        /// Delete a tag.
        /// </summary>
        void DeleteTag(int idTag);
    }
}
