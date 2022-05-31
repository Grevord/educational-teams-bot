// -----------------------------------------------------------------------
// <copyright file="GetTagsQuery.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
namespace EducationalTeamsBotApi.Application.Tags.Queries.GetTagsQuery
{
    using EducationalTeamsBotApi.Application.Common.Models;
    using MediatR;

    /// <summary>
    /// Query allowing to get tags.
    /// </summary>
    public class GetTagsQuery : IRequest<List<TagDto>>
    {
        public string name { get; set; }
    }
}
