// -----------------------------------------------------------------------
// <copyright file="GetSpeakerQueryHandler.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

namespace EducationalTeamsBotApi.Application.Speakers.Queries.GetSpeakersQuery
{
    using System.Collections.Generic;
    using System.Threading;
    using System.Threading.Tasks;
    using EducationalTeamsBotApi.Application.Common.Interfaces;
    using EducationalTeamsBotApi.Domain.Entities;
    using MediatR;

    /// <summary>
    /// Handler for the query that will get speakers.
    /// </summary>
    public class GetSpeakerQueryHandler : IRequestHandler<GetSpeakerQuery, IEnumerable<CosmosSpeaker>>
    {

        private readonly ISpeakerCosmosService speakerCosmosService;

        /// <summary>
        /// Initializes a new instance of the <see cref="GetSpeakerQueryHandler"/> class.
        /// </summary>
        /// <param name="speakerCosmosService">Injection.</param>
        public GetSpeakerQueryHandler(ISpeakerCosmosService speakerCosmosService)
        {
            this.speakerCosmosService = speakerCosmosService;
        }

        /// <inheritdoc/>
        public Task<IEnumerable<CosmosSpeaker>> Handle(GetSpeakerQuery request, CancellationToken cancellationToken)
        {
            return this.speakerCosmosService.GetCosmosSpeakers();
        }
    }
}
