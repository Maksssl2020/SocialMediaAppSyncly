using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.DTOs.Authentication;

namespace SocialMediaAppSyncly.Repositories.Authentication;

public interface IAuthenticationRepository {
    Task<ApplicationUserDto> RegisterUserAsync(RegisterRequestDto registerRequestDto);
    Task<ApplicationUserDto> LoginUserAsync(LoginRequestDto loginRequestDto);
    Task<bool> IsUsernameTaken(string username);
    Task<bool> IsEmailTaken(string email);
}