using SocialMediaAppSyncly.Extensions;

namespace SocialMediaAppSyncly;

public class Program {
    public static void Main(string[] args){
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddApplicationServices(builder.Configuration);
        builder.Services.AddApplicationIdentity(builder.Configuration);
        
        var app = builder.Build();

        // Configure the HTTP request pipeline.
        app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173"));

        app.UseAuthentication();
        app.UseAuthorization();
        app.MapControllers();
        
        app.UseHttpsRedirection();
        app.UseAuthorization();

        app.Run();
    }
}