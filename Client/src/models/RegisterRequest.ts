export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  country?: string;
  city?: string;
  dateOfBirth: Date;
}
