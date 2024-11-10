using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SocialMediaAppSyncly.Data;
using SocialMediaAppSyncly.Entities.ApplicationUser;
using SocialMediaAppSyncly.Extensions;
using SocialMediaAppSyncly.Middleware;

namespace SocialMediaAppSyncly;

public class Program {
    public static async Task Main(string[] args){
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddApplicationServices(builder.Configuration);
        builder.Services.AddApplicationIdentity(builder.Configuration);
        
        var app = builder.Build();

        // Configure the HTTP request pipeline.
        app.UseMiddleware<ExceptionMiddleware>();
        app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173"));

        app.UseHttpsRedirection();
        app.UseAuthentication();
        app.UseAuthorization();
        
        app.MapControllers();

        await using var scope = app.Services.CreateAsyncScope();
        var services = scope.ServiceProvider;

        try {
            var context = services.GetRequiredService<ApplicationDbContext>();
            var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
            var roleManager = services.GetRequiredService<RoleManager<ApplicationRole>>();
            await context.Database.MigrateAsync();
            await ApplicationRoleSeed.SeedRolesAsync(roleManager);
        }
        catch (Exception e) {
            var logger = services.GetRequiredService<ILogger<Program>>();
            logger.LogError(e, "An error occurred while migrating the database.");
        }
        
        app.Run();
    }
}