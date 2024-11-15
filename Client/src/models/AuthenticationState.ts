export interface AuthenticationState {
  isAuthenticated: boolean;
  accessToken: string | null;
  username: string | null;
  userId: number | null;
}
