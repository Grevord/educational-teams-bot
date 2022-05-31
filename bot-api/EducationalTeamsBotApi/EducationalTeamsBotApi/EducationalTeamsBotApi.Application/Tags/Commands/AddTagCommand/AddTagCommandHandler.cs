// -----------------------------------------------------------------------
// <copyright file="AddTagCommandHandler.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

namespace EducationalTeamsBotApi.Application.Tags.Commands.AddTagCommand
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using EducationalTeamsBotApi.Application.Common.Interfaces;
    using EducationalTeamsBotApi.Application.Common.Models;
    public class AddTagCommandHandler
    {
        /// <summary>
        /// Tag service.
        /// </summary>
        private readonly ITagService tagService;

        /// <summary>
        /// Initializes a new instance of the <see cref="GetTagsQueryHandler"/> class.
        /// </summary>
        public AddTagCommandHandler(ITagService tagService)
        {
            this.tagService = tagService;
        }

        /// <inheritdoc/>
        public async Task<TagDto> Handle(AddTagCommand request, CancellationToken cancellationToken)
        {
            return await this.tagService.AddTag(request.idTag, request.name);
        }
    }
}
