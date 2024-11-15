import { useMutation } from "@tanstack/react-query";
import { RegisterUseCall } from "../../api-calls/Authentication.ts";
import { RegisterRequest } from "../../models/RegisterRequest.ts";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/AuthenticationSlice.ts";

export const useRegisterUserMutation = () => {
  const dispatch = useDispatch();

  const { mutate: registerUser, isLoading: registeringUser } = useMutation({
    mutationKey: ["registerUserMutation"],
    mutationFn: (registerRequest: RegisterRequest) =>
      RegisterUseCall(registerRequest),
    onSuccess: (data) => {
      console.log(data);
      dispatch(
        login({
          accessToken: data.token,
          username: data.userName,
        }),
      );
    },
    onError: (error) => {
      throw error;
    },
  });

  return { registerUser, registeringUser };
};
