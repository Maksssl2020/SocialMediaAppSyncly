using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.DTOs.Authentication;
using SocialMediaAppSyncly.Entities.ApplicationUser;
using SocialMediaAppSyncly.Services;

namespace SocialMediaAppSyncly.Repositories.Authentication;

public class AuthenticationRepository(UserManager<ApplicationUser> userManager, ITokenService tokenService, IMapper mapper) : IAuthenticationRepository {
    public async Task<ApplicationUserDto> RegisterUserAsync(RegisterRequestDto registerRequestDto){
        if (await IsUsernameTaken(registerRequestDto.Username)) {
            throw new Exception("Username is already taken!");
        }

        if (await IsEmailTaken(registerRequestDto.Email)) {
            throw new Exception("Email is already taken!");
        }
        
        var applicationUser = mapper.Map<ApplicationUser>(registerRequestDto);
        var result = await userManager.CreateAsync(applicationUser, registerRequestDto.Password);

        if (!result.Succeeded) {
            throw new Exception(result.Errors.ToString());
        }

        return await LoginUserAsync(new LoginRequestDto
            { Password = registerRequestDto.Password, Username = registerRequestDto.Username });
    }

    public async Task<ApplicationUserDto> LoginUserAsync(LoginRequestDto loginRequestDto){
        var foundUser = await userManager.Users
            .FirstOrDefaultAsync(u => u.UserName == loginRequestDto.Username);

        if (foundUser?.UserName == null) {
            throw new Exception("Invalid username or password!");
        }
        
        var result = await userManager.CheckPasswordAsync(foundUser, loginRequestDto.Password);

        if (!result) {
            throw new Exception("Invalid username or password!");
        }
        
        return new ApplicationUserDto {
            Username = foundUser.UserName!,
            Email = foundUser.Email!,
            FirstName = foundUser.FirstName,
            LastName = foundUser.LastName,
            Gender = foundUser.Gender,
            Token = await tokenService.GenerateToken(foundUser),
            City = foundUser.City,
            Country = foundUser.Country,
            CreatedAt = foundUser.CreatedAt,
            LastActive = foundUser.LastActive,
            DateOfBirth = foundUser.DateOfBirth,
        };
    }

    public async Task<bool> IsUsernameTaken(string username){
        return await userManager.Users.AnyAsync(u => u.UserName == username);
    }
    
    public async Task<bool> IsEmailTaken(string email){
        return await userManager.Users.AnyAsync(u => u.Email == email);
    }
}