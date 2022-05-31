// -----------------------------------------------------------------------
// <copyright file="GetTagsQueryHandler.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
namespace EducationalTeamsBotApi.Application.Tags.Queries.GetTagsQuery
{
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using EducationalTeamsBotApi.Application.Common.Interfaces;
    using EducationalTeamsBotApi.Application.Common.Models;
    using MediatR;

    /// <summary>
    /// Handler for the query that will get tags.
    /// </summary>
    public class GetTagsQueryHandler : IRequestHandler<GetTagsQuery, List<TagDto>>
    {
        /// <summary>
        /// Tag service.
        /// </summary>
        private readonly ITagService tagService;

        /// <summary>
        /// Initializes a new instance of the <see cref="GetTagsQueryHandler"/> class.
        /// </summary>
        public GetTagsQueryHandler(ITagService tagService)
        {
            this.tagService = tagService;
        }

        /// <inheritdoc/>
        public async Task<List<TagDto>> Handle(GetTagsQuery request, CancellationToken cancellationToken)
        {
            return await this.tagService.GetTags(request.name);
        }
    }
}
