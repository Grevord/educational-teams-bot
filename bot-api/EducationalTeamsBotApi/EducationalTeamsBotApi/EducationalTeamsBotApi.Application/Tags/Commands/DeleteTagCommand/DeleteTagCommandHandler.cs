// -----------------------------------------------------------------------
// <copyright file="DeleteTagCommandHandler.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

namespace EducationalTeamsBotApi.Application.Tags.Commands.DeleteTagCommand
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using EducationalTeamsBotApi.Application.Common.Interfaces;

    public class DeleteTagCommandHandler
    {
        /// <summary>
     /// Tag service.
     /// </summary>
        private readonly ITagService tagService;

        /// <summary>
        /// Initializes a new instance of the <see cref="GetTagsQueryHandler"/> class.
        /// </summary>
        public DeleteTagCommandHandler(ITagService tagService)
        {
            this.tagService = tagService;
        }

        /// <inheritdoc/>
        public async void Handle(DeleteTagCommand request, CancellationToken cancellationToken)
        {
            this.tagService.DeleteTag(request.idTag);
            return;
        }
    }
}
