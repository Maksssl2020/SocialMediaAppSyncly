import { useMutation } from "@tanstack/react-query";
import { LoginUser } from "../../api-calls/Authentication.ts";
import { LoginRequest } from "../../models/LoginRequest.ts";
import { ApiError } from "../../models/ApiError.ts";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/AuthenticationSlice.ts";
import { AuthenticationResponse } from "../../models/AuthenticationResponse.ts";

type UseLoginUserMutationProps = {
  onSuccess?: () => void;
  onError?: (error: ApiError) => void;
};

export const useLoginUserMutation = ({
  onSuccess,
  onError,
}: UseLoginUserMutationProps) => {
  const dispatch = useDispatch();

  const { mutate: loginUser, isLoading: loggingUser } = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: (loginData: LoginRequest) => LoginUser(loginData),
    onSuccess: (data: AuthenticationResponse) => {
      dispatch(
        login({
          accessToken: data.accessToken,
          username: data.username,
          userId: data.userId,
        }),
      );

      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
      if (onError) {
        onError({
          code: error.code,
          message: error.response?.data,
        });
      }
    },
  });

  return { loginUser, loggingUser };
};
