import { useMutation } from "@tanstack/react-query";
import { RegisterUseCall } from "../../api-calls/Authentication.ts";
import { RegisterRequest } from "../../models/RegisterRequest.ts";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/AuthenticationSlice.ts";
import { AuthenticationResponse } from "../../models/AuthenticationResponse.ts";
import toast from "react-hot-toast";

export const useRegisterUserMutation = (onSuccessCallback: Function) => {
  const dispatch = useDispatch();

  const { mutate: registerUser, isLoading: registeringUser } = useMutation({
    mutationKey: ["registerUserMutation"],
    mutationFn: (registerRequest: RegisterRequest) =>
      RegisterUseCall(registerRequest),
    onSuccess: (data: AuthenticationResponse) => {
      onSuccessCallback();
      dispatch(
        login({
          accessToken: data.accessToken,
          username: data.username,
        }),
      );
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  return { registerUser, registeringUser };
};
