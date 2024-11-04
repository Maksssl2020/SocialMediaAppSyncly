using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace SocialMediaAppSyncly.Entities;

public class ApplicationUser : IdentityUser<long> { }