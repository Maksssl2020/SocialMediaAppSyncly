using System.Text.Json.Serialization;

namespace SocialMediaAppSyncly.DTOs.Authentication;

public class RegisterRequestDto {
    
    [JsonPropertyName("userName")]
    public required string Username { get; set; }
    public required string Email { get; set; }
    public required string Password { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public required string Gender { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
    public required string DateOfBirth { get; set; }
}