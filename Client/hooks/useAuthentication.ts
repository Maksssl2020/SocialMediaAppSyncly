import { useContext } from "react";
import { AuthenticationContext } from "../src/context/AuthenticationProvider";

export const useAuthentication = (): boolean => {
  return useContext(AuthenticationContext);
};
