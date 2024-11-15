import { RegisterRequest } from "../models/RegisterRequest.ts";
import axios from "./AxiosConfig.ts";
import { LoginRequest } from "../models/LoginRequest.ts";

export const RegisterUseCall = async (
  registerData: RegisterRequest,
): Promise<AuthenticatorResponse> => {
  try {
    const result = await axios.post<AuthenticatorResponse>(
      "/authentication/register",
      registerData,
    );
    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const LoginUser = async (
  loginData: LoginRequest,
): Promise<AuthenticatorResponse> => {
  console.log("LoginUser", loginData);
  try {
    const result = await axios.post<AuthenticatorResponse>(
      "/authentication/login",
      loginData,
    );
    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
