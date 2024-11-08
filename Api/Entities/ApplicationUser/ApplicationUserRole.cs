using Microsoft.AspNetCore.Identity;

namespace SocialMediaAppSyncly.Entities.ApplicationUser;

public class ApplicationUserRole : IdentityUserRole<long> {
    public ApplicationUser User { get; set; } = null!;
    public ApplicationRole Role { get; set; } = null!;
}