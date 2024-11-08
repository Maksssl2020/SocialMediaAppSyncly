using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SocialMediaAppSyncly.Entities.ApplicationUser;

namespace SocialMediaAppSyncly.Data;

public class ApplicationDbContext(
    DbContextOptions options)
    : IdentityDbContext<ApplicationUser, ApplicationRole, long, IdentityUserClaim<long>, ApplicationUserRole,
        IdentityUserLogin<long>, IdentityRoleClaim<long>, IdentityUserToken<long>>(options) {
    
}