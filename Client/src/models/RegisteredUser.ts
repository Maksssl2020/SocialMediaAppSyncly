export interface RegisteredUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  country: string;
  city: string;
  dateOfBirth: Date;
  createdAt: Date;
  lastActive: Date;
}
