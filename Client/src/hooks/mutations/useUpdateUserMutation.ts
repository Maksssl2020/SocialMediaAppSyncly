import { useMutation } from "@tanstack/react-query";
import { UpdateUserRequest } from "../../models/UpdateUserRequest.ts";
import { UpdateUserByIdAsync } from "../../api-calls/User.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store.ts";
import toast from "react-hot-toast";

export const useUpdateUserMutation = (onSuccessCallback: Function) => {
  const userId = useSelector((state: RootState) => state.authentication.userId);

  const { mutate: updateUser, isLoading: updatingUser } = useMutation({
    mutationKey: ["updateUserMutation"],
    mutationFn: async (updateUserRequest: UpdateUserRequest): Promise<void> => {
      if (userId === null) return;
      await UpdateUserByIdAsync(userId, updateUserRequest);
    },
    onSuccess: () => {
      onSuccessCallback();
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  return { updateUser, updatingUser };
};
