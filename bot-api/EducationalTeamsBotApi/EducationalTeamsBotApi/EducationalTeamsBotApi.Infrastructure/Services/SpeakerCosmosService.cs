// -----------------------------------------------------------------------
// <copyright file="SpeakerCosmosService.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

namespace EducationalTeamsBotApi.Infrastructure.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using EducationalTeamsBotApi.Application.Common.Constants;
    using EducationalTeamsBotApi.Application.Common.Interfaces;
    using EducationalTeamsBotApi.Domain.Entities;
    using Microsoft.Azure.Cosmos;
    using Microsoft.Azure.Cosmos.Linq;

    /// <summary>
    /// Class that will interact with the CosmosDB.
    /// </summary>
    public class SpeakerCosmosService : ISpeakerCosmosService
    {
        /// <summary>
        /// Cosmos client used in this service.
        /// </summary>
        private readonly CosmosClient cosmosClient;

        /// <summary>
        /// Database used in this service.
        /// </summary>
        private readonly Database database;

        /// <summary>
        /// Initializes a new instance of the <see cref="SpeakerCosmosService"/> class.
        /// </summary>
        public SpeakerCosmosService()
        {
            var cosmosConString = Environment.GetEnvironmentVariable(DatabaseConstants.ConnectionString);
            this.cosmosClient = new CosmosClient(cosmosConString);

            this.database = this.cosmosClient.GetDatabase(DatabaseConstants.Database);
        }

        /// <inheritdoc/>
        public Task<CosmosSpeaker> AddSpeaker(CosmosSpeaker speaker)
        {
            throw new NotImplementedException();
        }

        /// <inheritdoc/>
        public Task<CosmosSpeaker> DeleteSpeaker(string id)
        {
            throw new NotImplementedException();
        }

        /// <inheritdoc/>
        public Task<CosmosSpeaker> EditSpeaker(CosmosSpeaker speaker)
        {
            throw new NotImplementedException();
        }

        /// <inheritdoc/>
        public Task<CosmosSpeaker> EnableSpeaker(string id)
        {
            throw new NotImplementedException();
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<CosmosSpeaker>> GetCosmosSpeakers()
        {
            var container = this.database.GetContainer(DatabaseConstants.SpeakerContainer);
            var speakers = container.GetItemLinqQueryable<CosmosSpeaker>();
            var iterator = speakers.ToFeedIterator();
            var results = await iterator.ReadNextAsync();

            return Tools.ToIEnumerable(results.GetEnumerator());
        }

        /// <inheritdoc/>
        public async Task<CosmosSpeaker> GetSpeaker(string id)
        {
            var container = this.database.GetContainer(DatabaseConstants.SpeakerContainer);
            var q = container.GetItemLinqQueryable<CosmosSpeaker>();
            var iterator = q.Where(x => x.Id == id).ToFeedIterator();
            var result = await iterator.ReadNextAsync();
            return Tools.ToIEnumerable(result.GetEnumerator()).First();
        }
    }
}
