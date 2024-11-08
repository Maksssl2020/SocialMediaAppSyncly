using System.Collections;
using Microsoft.AspNetCore.Identity;

namespace SocialMediaAppSyncly.Entities.ApplicationUser;

public class ApplicationUser : IdentityUser<long> {
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string Gender { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public DateOnly DateOfBirth { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime LastActive { get; set; } = DateTime.UtcNow;
    public ICollection<ApplicationUserRole> UserRoles { get; set; } = [];
}