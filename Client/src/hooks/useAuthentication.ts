import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store.ts";

export const useAuthentication = (): boolean => {
  return useSelector(
    (state: RootState) => state.authentication.isAuthenticated,
  );
};
