using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using SocialMediaAppSyncly.Data;
using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.Entities.ApplicationUser;

namespace SocialMediaAppSyncly.Repositories;

public class UserRepository(ApplicationDbContext applicationDbContext, IMapper mapper) : IUserRepository {
    public void Update(ApplicationUser applicationUser){
        applicationDbContext.Entry(applicationUser).State = EntityState.Modified;
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