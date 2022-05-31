// -----------------------------------------------------------------------
// <copyright file="TagService.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

namespace EducationalTeamsBotApi.Infrastructure.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using EducationalTeamsBotApi.Application.Common.Interfaces;
    using EducationalTeamsBotApi.Application.Common.Models;
    using EducationalTeamsBotApi.Application.Tags.Queries.GetTagsQuery;

    internal class TagService : ITagService
    {
        public Task<TagDto> AddTag(int idTag, string name)
        {
            throw new NotImplementedException();
        }

        public void DeleteTag(int idTag)
        {
            throw new NotImplementedException();
        }

        public Task<List<TagDto>> GetTags(string name)
        {
            var list = new List<TagDto>
            {
                new TagDto { TagId = 1, name = "tag 1" },
                new TagDto { TagId = 2, name = "tag 2" },
                new TagDto { TagId = 3, name = "tag 3" },
                new TagDto { TagId = 4, name = "tag 4" },
            };

            return Task.FromResult(list);
        }
    }
}
