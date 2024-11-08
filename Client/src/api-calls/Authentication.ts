import { RegisterRequest } from "../models/RegisterRequest.ts";
import { RegisteredUser } from "../models/RegisteredUser.ts";
import axios from "./AxiosConfig.ts";
import { LoginRequest } from "../models/LoginRequest.ts";

export const RegisterUser = async (
  registerData: RegisterRequest,
): Promise<RegisteredUser> => {
  try {
    const result = await axios.post<RegisteredUser>(
      "/authentication/register",
      registerData,
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const LoginUser = async (
  loginData: LoginRequest,
): Promise<RegisteredUser> => {
  try {
    const result = await axios.post<RegisteredUser>(
      "/authentication/login",
      loginData,
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};
