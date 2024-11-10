using System.Net;
using System.Text.Json;
using SocialMediaAppSyncly.Exceptions;

namespace SocialMediaAppSyncly.Middleware;

public class ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment environment) {
    public async Task InvokeAsync(HttpContext context){
        try {
            await next(context);
        }
        catch (Exception exception) {
            logger.LogError(exception, exception.Message);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            
            var response = environment.IsDevelopment() ? new ApiException(context.Response.StatusCode, exception.Message, exception.StackTrace) : new ApiException(context.Response.StatusCode, exception.Message, "Internal Server Error");
            var options = new JsonSerializerOptions {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            };
            var json = JsonSerializer.Serialize(response, options);
            await context.Response.WriteAsync(json);
        }
    }
}