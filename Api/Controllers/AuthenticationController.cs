using Microsoft.AspNetCore.Mvc;
using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.DTOs.Authentication;
using SocialMediaAppSyncly.Repositories.Authentication;

namespace SocialMediaAppSyncly.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuthenticationController(IAuthenticationRepository authenticationRepository) : ControllerBase {

    [HttpGet]
    public ActionResult Get(){
        return Ok("Authentication");
    }
    
    [HttpPost("register")]
    public async Task<ActionResult<ApplicationUserDto>> Register(RegisterRequestDto registerRequestDto){
        try {
            var user = await authenticationRepository.RegisterUserAsync(registerRequestDto);
            return Ok(user);
        }
        catch (Exception exception) {
            return BadRequest(exception.Message);
        }
    }

    [HttpPost("login")]
    public async Task<ActionResult<ApplicationUserDto>> Login(LoginRequestDto loginRequestDto){
        try {
            var user = await authenticationRepository.LoginUserAsync(loginRequestDto);
            return Ok(user);
        }
        catch (Exception exception) {
            return BadRequest(exception.Message);
        }
    }
}