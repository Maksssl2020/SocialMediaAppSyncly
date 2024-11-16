namespace SocialMediaAppSyncly.DTOs;

public class ApplicationUserDto {
    public long Id { get; set; }
    public required string Username { get; set; }
    public required string Email { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string Gender { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public DateOnly DateOfBirth { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime LastActive { get; set; }
}