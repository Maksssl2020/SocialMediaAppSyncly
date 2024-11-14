import { useMutation } from "@tanstack/react-query";
import { LoginUser } from "../../api-calls/Authentication.ts";
import { LoginRequest } from "../../models/LoginRequest.ts";
import { ApiError } from "../../models/ApiError.ts";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/AuthenticationSlice.ts";
import { useNavigate } from "react-router-dom";
import { RootNames } from "../../constants/rootNames.ts";

type UseLoginUserMutationProps = {
  onSuccess?: () => void;
  onError?: (error: ApiError) => void;
};

export const useLoginUserMutation = ({
  onSuccess,
  onError,
}: UseLoginUserMutationProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate: loginUser, isLoading: loggingUser } = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: (loginData: LoginRequest) => LoginUser(loginData),
    onSuccess: (data) => {
      dispatch(login(data.token));

      if (onSuccess) {
        onSuccess();
      }

      navigate(RootNames.HOME);
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
