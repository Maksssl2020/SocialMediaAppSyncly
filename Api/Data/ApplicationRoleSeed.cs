using Microsoft.AspNetCore.Identity;
using SocialMediaAppSyncly.Entities.ApplicationUser;

namespace SocialMediaAppSyncly.Data;

public static class ApplicationRoleSeed {
    public static async Task SeedRolesAsync(RoleManager<ApplicationRole> roleManager){
        var roles = new List<ApplicationRole> {
            new() { Name = "REGISTERED" },
            new() { Name = "ADMIN" },
        };

        foreach (var role in roles) {
            if (role.Name != null && !await roleManager.RoleExistsAsync(role.Name)) {
                await roleManager.CreateAsync(role);
            }
        }
    }
}