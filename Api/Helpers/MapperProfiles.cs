using AutoMapper;
using SocialMediaAppSyncly.DTOs;
using SocialMediaAppSyncly.DTOs.Authentication;
using SocialMediaAppSyncly.Entities.ApplicationUser;

namespace SocialMediaAppSyncly.Helpers;

public class MapperProfiles : Profile {
    public MapperProfiles(){
        CreateMap<RegisterRequestDto, ApplicationUser>()
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Username))
            .ForMember(dest => dest.DateOfBirth, opt => opt.MapFrom(src => DateOnly.Parse(src.DateOfBirth)));
        CreateMap<ApplicationUser, ApplicationUserDto>();
    }
}