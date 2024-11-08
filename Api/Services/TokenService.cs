using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using SocialMediaAppSyncly.Entities.ApplicationUser;

namespace SocialMediaAppSyncly.Services;

public class TokenService(IConfiguration configuration, UserManager<ApplicationUser> userManager) : ITokenService {
    public async Task<string> GenerateToken(ApplicationUser applicationUser){
        var tokenKey = configuration["TokenSecretKey"] ?? throw new Exception("Cannot find token secret!");

        if (tokenKey.Length < 64) {
            throw new Exception("Token secret key must be at least 64 characters!");
        }
        
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey));

        if (applicationUser.UserName == null || applicationUser.Email == null) {
            throw new Exception("There is no user!");
        }

        var claims = new List<Claim> {
            new(ClaimTypes.NameIdentifier, applicationUser.Id.ToString()),
            new(ClaimTypes.Name, applicationUser.UserName),
            new(ClaimTypes.Email, applicationUser.Email),
        };
        
        var roles = await userManager.GetRolesAsync(applicationUser);
        claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

        var tokenDescriptor = new SecurityTokenDescriptor {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddHours(12),
            SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        
        return tokenHandler.WriteToken(token);
    }
}