import axios from "./AxiosConfig.ts";
import { RegisteredUser } from "../models/RegisteredUser.ts";

export const GetUserByIdAsync = async (
  userId: number,
): Promise<RegisteredUser> => {
  try {
    const response = await axios.get<RegisteredUser>(`/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
