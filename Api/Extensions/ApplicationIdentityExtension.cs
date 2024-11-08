using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using SocialMediaAppSyncly.Data;
using SocialMediaAppSyncly.Entities.ApplicationUser;

namespace SocialMediaAppSyncly.Extensions;

public static class ApplicationIdentityExtension {
    public static IServiceCollection AddApplicationIdentity(this IServiceCollection services, IConfiguration configuration){
        services.AddIdentityCore<ApplicationUser>()
            .AddRoles<ApplicationRole>()
            .AddRoleManager<RoleManager<ApplicationRole>>()
            .AddEntityFrameworkStores<ApplicationDbContext>();

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options => {
                var tokenKey = configuration["TokenSecretKey"] ?? throw new Exception("Cannot find token secret!");
                options.TokenValidationParameters = new TokenValidationParameters {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey)),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                };
            }
        );
        
        return services;
    }
}