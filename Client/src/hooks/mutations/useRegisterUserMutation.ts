import { useMutation } from "@tanstack/react-query";
import { RegisterUseCall } from "../../api-calls/Authentication.ts";
import { RegisterRequest } from "../../models/RegisterRequest.ts";

const UseRegisterUserMutation = () => {
  const { mutate: registerUser, isLoading: registeringUser } = useMutation({
    mutationKey: ["registerUserMutation"],
    mutationFn: (registerRequest: RegisterRequest) =>
      RegisterUseCall(registerRequest),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { registerUser, registeringUser };
};

export default UseRegisterUserMutation;
