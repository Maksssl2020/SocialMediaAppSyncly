using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using SocialMediaAppSyncly.Data;
using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.DTOs.User;
using SocialMediaAppSyncly.Entities.ApplicationUser;
using SocialMediaAppSyncly.Repositories.Authentication;

namespace SocialMediaAppSyncly.Repositories.User;

public class UserRepository(ApplicationDbContext applicationDbContext, IMapper mapper, IAuthenticationRepository authenticationRepository) : IUserRepository {
    public async Task Update(long userId, UpdateUserRequestDto updateUserRequest){
        var foundUser = await applicationDbContext.Users
            .Where(u => u.Id == userId)
            .SingleOrDefaultAsync();

        if (foundUser == null) {
            throw new Exception("User not found!");
        }

        foundUser.UserName = updateUserRequest.Username ?? foundUser.UserName;
        foundUser.Email = updateUserRequest.Email ?? foundUser.Email;
        foundUser.FirstName = updateUserRequest.FirstName ?? foundUser.FirstName;
        foundUser.LastName = updateUserRequest.LastName ?? foundUser.LastName;
        foundUser.Gender = updateUserRequest.Gender ?? foundUser.Gender;
        foundUser.City = updateUserRequest.City ?? foundUser.City;
        foundUser.Country = updateUserRequest.Country ?? foundUser.Country;
    }

    public async Task<bool> SaveAllChangesAsync(){
        return await applicationDbContext.SaveChangesAsync() > 0;
    }

    public async Task<IEnumerable<ApplicationUserDto>> GetAllUsersAsync(){
        return await applicationDbContext.Users
            .ProjectTo<ApplicationUserDto>(mapper.ConfigurationProvider)
            .ToListAsync();
    }

    public async Task<ApplicationUserDto?> GetUserByIdAsync(long userId){
        return await applicationDbContext.Users
            .Where(u => u.Id == userId)
            .ProjectTo<ApplicationUserDto>(mapper.ConfigurationProvider)
            .SingleOrDefaultAsync();
    }
}