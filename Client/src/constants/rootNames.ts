export enum RootNames {
  HOME = "/",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  USER_WALL = "/profile/:username",
}

export const getUserWallRoute = (username?: string): string => {
  if (!username) {
    return "/";
  } else {
    return `/profile/${username}`;
  }
};
