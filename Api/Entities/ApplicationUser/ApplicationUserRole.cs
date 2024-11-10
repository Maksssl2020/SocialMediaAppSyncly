using Microsoft.AspNetCore.Identity;

namespace SocialMediaAppSyncly.Entities.ApplicationUser;

public class ApplicationUserRole : IdentityUserRole<long> {
    public override long UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;

    public override long RoleId { get; set; }
    public ApplicationRole Role { get; set; } = null!;
}