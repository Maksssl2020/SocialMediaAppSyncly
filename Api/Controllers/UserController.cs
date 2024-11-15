using Microsoft.AspNetCore.Mvc;
using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.Repositories.User;

namespace SocialMediaAppSyncly.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class UserController(IUserRepository userRepository) : ControllerBase {

    [HttpGet("{userId:long}")]
    public async Task<ActionResult<ApplicationUserDto>> GetUserByIdAsync(long userId){
        var foundUser = await userRepository.GetUserByIdAsync(userId);

        if (foundUser == null) {
            return BadRequest("User not found!");
        }

        return Ok(foundUser);
    }
}