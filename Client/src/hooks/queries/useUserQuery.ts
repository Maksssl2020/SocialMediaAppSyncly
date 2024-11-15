import { useQuery } from "@tanstack/react-query";
import { GetUserByIdAsync } from "../../api-calls/User.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store.ts";
import { RegisteredUser } from "../../models/RegisteredUser.ts";

export const useUserQuery = () => {
  const userId = useSelector((state: RootState) => state.authentication.userId);

  const { data: user, isLoading: fetchingUser } =
    useQuery<RegisteredUser | null>({
      queryKey: ["userData", userId],
      queryFn: () => {
        if (!userId) return;
        return GetUserByIdAsync(userId);
      },
      enabled: !!userId,
    });

  return { user, fetchingUser };
};
