using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.Entities.ApplicationUser;
namespace SocialMediaAppSyncly.Repositories.User;

public interface IUserRepository {
    void Update(ApplicationUser applicationUser);
    Task<bool> SaveAllChangesAsync();
    Task<IEnumerable<ApplicationUserDto>> GetAllUsersAsync();
    Task<ApplicationUserDto?> GetUserByIdAsync(long userId);
}