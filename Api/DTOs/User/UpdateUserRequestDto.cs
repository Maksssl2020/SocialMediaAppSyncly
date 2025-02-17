using System.Text.Json.Serialization;

namespace SocialMediaAppSyncly.DTOs.User;

public class UpdateUserRequestDto {
    
    [JsonPropertyName("userName")]
    public string? Username { get; set; }
    public string? Email { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Gender { get; set; }
    public string? Country { get; set; }
    public string? City { get; set; }
}