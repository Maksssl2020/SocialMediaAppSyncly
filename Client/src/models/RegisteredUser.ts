export interface RegisteredUser {
  id: number;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: number;
  token: string;
  country: string;
  city: string;
  dateOfBirth: Date;
  createdAt: Date;
  lastActive: Date;
}
