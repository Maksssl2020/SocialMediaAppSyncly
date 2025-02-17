using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.DTOs.User;
using SocialMediaAppSyncly.Repositories.Authentication;
using SocialMediaAppSyncly.Repositories.User;

namespace SocialMediaAppSyncly.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class UserController(IUserRepository userRepository, IAuthenticationRepository authenticationRepository) : ControllerBase {

    [HttpGet("{userId:long}")]
    public async Task<ActionResult<ApplicationUserDto>> GetUserByIdAsync(long userId){
        var foundUser = await userRepository.GetUserByIdAsync(userId);

        if (foundUser == null) {
            return BadRequest("User not found!");
        }

        return Ok(foundUser);
    }

    [HttpPatch("{userId:long}")]
    public async Task<ActionResult<ApplicationUserDto>> UpdateUserById(long userId, UpdateUserRequestDto updateUserRequest){
        var errors = await GetUserUpdateValidationErrors(updateUserRequest);

        if (!errors.IsNullOrEmpty()) {
            return BadRequest(errors);
        }

        try {
            await userRepository.Update(userId, updateUserRequest);
            
            if (await userRepository.SaveAllChangesAsync()) {
                return Ok("User has been updated!");
            }

            return BadRequest("Cannot update user!");
        }
        catch (Exception exception) {
            return BadRequest(exception.Message);
        }
    }

    private async Task<List<string>> GetUserUpdateValidationErrors(UpdateUserRequestDto updateUserRequest){
        var errors = new List<string>();
        
        if (updateUserRequest.Username != null && await authenticationRepository.IsUsernameTaken(updateUserRequest.Username)) {
            errors.Add("Username already taken!");
        }

        if (updateUserRequest.Email != null && await authenticationRepository.IsEmailTaken(updateUserRequest.Email)) {
            errors.Add("Email already taken!");
        }
        
        return errors;
    }
}