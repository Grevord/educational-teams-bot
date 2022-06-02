// -----------------------------------------------------------------------
// <copyright file="GetTagsQuery.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
namespace EducationalTeamsBotApi.Application.Tags.Queries.GetTagsQuery
{
    using EducationalTeamsBotApi.Application.Common.Models;
    using EducationalTeamsBotApi.Domain.Entities;
    using MediatR;

    /// <summary>
    /// Query allowing to get tags.
    /// </summary>
    public class GetTagsQuery : IRequest<IEnumerable<CosmosTag>>
    {
        public string name { get; set; }
    }
}
