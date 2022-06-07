// -----------------------------------------------------------------------
// <copyright file="GraphService.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
namespace EducationalTeamsBotApi.Infrastructure.Services
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Azure.Identity;
    using EducationalTeamsBotApi.Application.Common.Interfaces;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Graph;
    using Microsoft.Identity.Client;

    /// <summary>
    /// Class that will interact with Graph API.
    /// </summary>
    public class GraphService : IGraphService
    {
        /// <summary>
        /// Graph service client.
        /// </summary>
        private readonly GraphServiceClient graphServiceClient;

        /// <summary>
        /// Configuration.
        /// </summary>
        private readonly IConfiguration configuration;

        /// <summary>
        /// Initializes a new instance of the <see cref="GraphService"/> class.
        /// </summary>
        /// <param name="configuration">Configuration to use.</param>
        /// <param name="tokenService">Token.</param>
        public GraphService(IConfiguration configuration, ITokenService tokenService)
        {
            this.configuration = configuration;
            var scopes = new[] { "User.Read" };
            var tenantId = this.configuration["AzureAd:TenantId"];
            var clientId = this.configuration["AzureAd:ClientId"];
            var clientSecret = this.configuration["AzureAd:ClientSecret"];

            var options = new TokenCredentialOptions
            {
                AuthorityHost = AzureAuthorityHosts.AzurePublicCloud,
            };

            var cca = ConfidentialClientApplicationBuilder
                .Create(clientId)
                .WithTenantId(tenantId)
                .WithClientSecret(clientSecret)
                .Build();

            var authProvider = new DelegateAuthenticationProvider(async (request) =>
            {
                request.Headers.Authorization =
                    new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", tokenService.Token);
            });

            this.graphServiceClient = new GraphServiceClient(authProvider);
        }

        /// <inheritdoc/>
        public bool AddUserToTeam(string teamId, string userId)
        {
            throw new NotImplementedException();
        }

        /// <inheritdoc/>
        public List<object> GetMessageAnswers(string teamId, string channelId, string messageId)
        {
            throw new NotImplementedException();
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<SearchEntity>> GetMessages()
        {
            var messages = new List<SearchEntity>();
            //var requestContent = new List<SearchRequestObject>()
            //{
            //    new SearchRequestObject
            //    {
            //        EntityTypes = new List<EntityType>()
            //        {
            //            EntityType.Message,
            //        },
            //        Query = new SearchQuery
            //        {
            //            QueryString = "test",
            //        },
            //    },
            //};

            //var requestResult = await this.graphServiceClient.Search
            //    .Query(requestContent)
            //    .Request()
            //    .PostAsync();

            //messages.AddRange(requestResult);

            return messages;
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<Team>> GetJoinedTeams()
        {
            var teams = new List<Team>();

            var requestResult = await this.graphServiceClient.Me.JoinedTeams
                .Request()
                .GetAsync();

            teams.AddRange(requestResult);

            return teams;
        }

        /// <inheritdoc/>
        public List<Message> GetUnansweredMessages(string teamId, string channelId)
        {
            throw new NotImplementedException();
        }

        /// <inheritdoc/>
        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = new List<User>();

            var requestResult = await this.graphServiceClient.Users
                .Request()
                .GetAsync();

            users.AddRange(requestResult);

            return users;
        }

        /// <inheritdoc/>
        public bool RemoveUserFromTeam(string teamId, string userId)
        {
            throw new NotImplementedException();
        }
    }
}
