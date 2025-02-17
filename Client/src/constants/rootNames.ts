export enum RootNames {
  HOME = "/",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  USER_WALL = "/profile/:username",
  USER_SETTINGS_WALL = "/profile/settings/:username",
}

export const getUserWallRoute = (username?: string): string => {
  if (!username) {
    return "/";
  } else {
    return `/profile/${username}`;
  }
};

export const getUserSettingsWallRoute = (username?: string): string => {
  if (!username) {
    return "/";
  } else {
    return `/profile/settings/${username}`;
  }
};
