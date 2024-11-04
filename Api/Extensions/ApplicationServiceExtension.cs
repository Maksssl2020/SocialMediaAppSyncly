using Microsoft.EntityFrameworkCore;
using SocialMediaAppSyncly.Data;

namespace SocialMediaAppSyncly.Extensions;

public static class ApplicationServiceExtension {

    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration){

        services.AddControllers();
        services.AddDbContext<ApplicationDbContext>(options => {
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        });
        services.AddCors();
        
        return services;
    }
}