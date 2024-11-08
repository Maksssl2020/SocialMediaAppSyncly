using System.Collections;
using Microsoft.AspNetCore.Identity;

namespace SocialMediaAppSyncly.Entities.ApplicationUser;

public class ApplicationRole : IdentityRole<long> {
    public ICollection<ApplicationUserRole> UserRoles { get; set; } = [];
}