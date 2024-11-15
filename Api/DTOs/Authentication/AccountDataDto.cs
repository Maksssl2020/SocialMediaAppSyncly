namespace SocialMediaAppSyncly.DTOs.Authentication;

public class AccountDataDto {
    public long UserId { get; set; }
    public required string Username { get; set; }
    public required string AccessToken { get; set; }
}