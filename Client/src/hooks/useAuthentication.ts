import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationProvider.tsx";

export const useAuthentication = (): boolean => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return isAuthenticated;
};
