using SocialMediaAppSyncly.Entities.ApplicationUser;

namespace SocialMediaAppSyncly.Services;

public interface ITokenService {
    Task<string> GenerateToken(ApplicationUser applicationUser);
}