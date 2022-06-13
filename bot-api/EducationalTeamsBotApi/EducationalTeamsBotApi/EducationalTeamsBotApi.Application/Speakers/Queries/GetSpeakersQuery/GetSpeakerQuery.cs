﻿// -----------------------------------------------------------------------
// <copyright file="GetSpeakerQuery.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------



namespace EducationalTeamsBotApi.Application.Speakers.Queries.GetSpeakersQuery
{
    using EducationalTeamsBotApi.Domain.Entities;
    using MediatR;

    /// <summary>
    /// Get the list of speakers
    /// </summary>
    public class GetSpeakerQuery : IRequest<IEnumerable<CosmosSpeaker>>
    {
    }
}
