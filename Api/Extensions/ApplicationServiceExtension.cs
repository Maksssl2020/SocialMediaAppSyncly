using Microsoft.EntityFrameworkCore;
using SocialMediaAppSyncly.Data;
using SocialMediaAppSyncly.Repositories.Authentication;
using SocialMediaAppSyncly.Repositories.User;
using SocialMediaAppSyncly.Services;

namespace SocialMediaAppSyncly.Extensions;

public static class ApplicationServiceExtension {

    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration){

        services.AddControllers().AddJsonOptions(opt => opt.JsonSerializerOptions.PropertyNameCaseInsensitive = false);
        services.AddDbContext<ApplicationDbContext>(options => {
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        });
        services.AddScoped<IAuthenticationRepository, AuthenticationRepository>();
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<ITokenService, TokenService>();
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        services.AddCors();
        
        return services;
    }
}