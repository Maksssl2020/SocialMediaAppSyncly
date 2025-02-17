using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.DTOs.User;
using SocialMediaAppSyncly.Entities.ApplicationUser;
namespace SocialMediaAppSyncly.Repositories.User;

public interface IUserRepository {
    Task Update(long userId, UpdateUserRequestDto updateUserRequest);
    Task<bool> SaveAllChangesAsync();
    Task<IEnumerable<ApplicationUserDto>> GetAllUsersAsync();
    Task<ApplicationUserDto?> GetUserByIdAsync(long userId);
}