// -----------------------------------------------------------------------
// <copyright file="ApiExceptionFilterAttribute.cs" company="DIIAGE">
// Copyright (c) DIIAGE 2022. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

using EducationalTeamsBotApi.Application.Common.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;

namespace EducationalTeamsBotApi.WebApi.Filters
{
    /// <summary>
    /// Class attribute to filter api exception.
    /// </summary>
    public class ApiExceptionFilterAttribute : ExceptionFilterAttribute
    {
        /// <summary>
        /// Exception handler.
        /// </summary>
        private readonly IDictionary<Type, Action<ExceptionContext>> exceptionHandlers;

        /// <summary>
        /// Initializes a new instance of the <see cref="ApiExceptionFilterAttribute"/> class.
        /// </summary>
        public ApiExceptionFilterAttribute()
        {
            // Register known exception types and handlers.
            this.exceptionHandlers = new Dictionary<Type, Action<ExceptionContext>>
            {
                { typeof(ValidationException), this.HandleValidationException },
                { typeof(NotFoundException), this.HandleNotFoundException },
                { typeof(UnauthorizedAccessException), this.HandleUnauthorizedAccessException },
                { typeof(ForbiddenAccessException), this.HandleForbiddenAccessException },
            };
        }

        /// <inheritdoc/>
        public override void OnException(ExceptionContext context)
        {
            this.HandleException(context);

            base.OnException(context);
        }

        /// <summary>
        /// Handle the exception.
        /// </summary>
        /// <param name="context">Context of the exception.</param>
        private void HandleException(ExceptionContext context)
        {
            Type type = context.Exception.GetType();
            if (this.exceptionHandlers.ContainsKey(type))
            {
                this.exceptionHandlers[type].Invoke(context);
                return;
            }

            if (!context.ModelState.IsValid)
            {
                this.HandleInvalidModelStateException(context);
                return;
            }

            this.HandleUnknownException(context);
        }

        /// <summary>
        /// Handle validation exception.
        /// </summary>
        /// <param name="context">Context of the exception.</param>
        private void HandleValidationException(ExceptionContext context)
        {
            var exception = context.Exception as ValidationException;

            var details = new ValidationProblemDetails(exception.Errors)
            {
                Type = "https://tools.ietf.org/html/rfc7231#section-6.5.1",
            };

            context.Result = new BadRequestObjectResult(details);

            context.ExceptionHandled = true;
        }

        /// <summary>
        /// Handle the invalid model exception.
        /// </summary>
        /// <param name="context">Context of the exception.</param>
        private void HandleInvalidModelStateException(ExceptionContext context)
        {
            var details = new ValidationProblemDetails(context.ModelState)
            {
                Type = "https://tools.ietf.org/html/rfc7231#section-6.5.1",
            };

            context.Result = new BadRequestObjectResult(details);

            context.ExceptionHandled = true;
        }

        /// <summary>
        /// Handle the not found exception.
        /// </summary>
        /// <param name="context">Context of the exception.</param>
        private void HandleNotFoundException(ExceptionContext context)
        {
            var exception = context.Exception as NotFoundException;

            var details = new ProblemDetails()
            {
                Type = "https://tools.ietf.org/html/rfc7231#section-6.5.4",
                Title = "The specified resource was not found.",
                Detail = exception.Message,
            };

            context.Result = new NotFoundObjectResult(details);

            context.ExceptionHandled = true;
        }

        /// <summary>
        /// Handle the unauthorized access exception.
        /// </summary>
        /// <param name="context">Context of the exception.</param>
        private void HandleUnauthorizedAccessException(ExceptionContext context)
        {
            var details = new ProblemDetails
            {
                Status = StatusCodes.Status401Unauthorized,
                Title = "Unauthorized",
                Type = "https://tools.ietf.org/html/rfc7235#section-3.1",
            };

            context.Result = new ObjectResult(details)
            {
                StatusCode = StatusCodes.Status401Unauthorized,
            };

            context.ExceptionHandled = true;
        }

        /// <summary>
        /// Handle the frobidden access exception.
        /// </summary>
        /// <param name="context">Context of the exception.</param>
        private void HandleForbiddenAccessException(ExceptionContext context)
        {
            var details = new ProblemDetails
            {
                Status = StatusCodes.Status403Forbidden,
                Title = "Forbidden",
                Type = "https://tools.ietf.org/html/rfc7231#section-6.5.3",
            };

            context.Result = new ObjectResult(details)
            {
                StatusCode = StatusCodes.Status403Forbidden,
            };

            context.ExceptionHandled = true;
        }

        /// <summary>
        /// Handle the unknown exception.
        /// </summary>
        /// <param name="context">Context of the exception.</param>
        private void HandleUnknownException(ExceptionContext context)
        {
            var details = new ProblemDetails
            {
                Status = StatusCodes.Status500InternalServerError,
                Title = "An error occurred while processing your request.",
                Type = "https://tools.ietf.org/html/rfc7231#section-6.6.1",
            };

            context.Result = new ObjectResult(details)
            {
                StatusCode = StatusCodes.Status500InternalServerError,
            };

            context.ExceptionHandled = true;
        }
    }
}
