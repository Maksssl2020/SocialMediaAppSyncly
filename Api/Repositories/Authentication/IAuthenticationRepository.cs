using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.DTOs.Authentication;

namespace SocialMediaAppSyncly.Repositories.Authentication;

public interface IAuthenticationRepository {
    Task<AccountDataDto> RegisterUserAsync(RegisterRequestDto registerRequestDto);
    Task<AccountDataDto> LoginUserAsync(LoginRequestDto loginRequestDto);
    Task<bool> IsUsernameTaken(string username);
    Task<bool> IsEmailTaken(string email);
}