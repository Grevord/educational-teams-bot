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
    using MediatR;

    public class DeleteTagCommandHandler : IRequestHandler<DeleteTagCommand, Unit>
    {
        /// <summary>
     /// Tag service.
     /// </summary>
        private readonly ITagCosmosService tagService;

        /// <summary>
        /// Initializes a new instance of the <see cref="DeleteTagCommandHandler"/> class.
        /// </summary>
        /// <param name="tagService">Service of the tag.</param>
        public DeleteTagCommandHandler(ITagCosmosService tagService)
        {
            this.tagService = tagService;
        }

        /// <summary>
        /// Handler of the tag deletion.
        /// </summary>
        /// <param name="request">Delete request.</param>
        /// <param name="cancellationToken">Token of cancellation.</param>
        /// <returns>A Unit.</returns>
        Task<Unit> IRequestHandler<DeleteTagCommand, Unit>.Handle(DeleteTagCommand request, CancellationToken cancellationToken)
        {
            return this.tagService.DeleteTag(request.Id);
        }
    }
}
