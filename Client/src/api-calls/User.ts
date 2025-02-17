import axios from "./AxiosConfig.ts";
import { RegisteredUser } from "../models/RegisteredUser.ts";
import { UpdateUserRequest } from "../models/UpdateUserRequest.ts";

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

export const UpdateUserByIdAsync = async (
  userId: number,
  updateData: UpdateUserRequest,
): Promise<void> => {
  try {
    await axios.patch<RegisteredUser>(`/user/${userId}`, updateData);
  } catch (error) {
    throw error;
  }
};
