import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication.ts";
import { RootNames } from "../constants/rootNames.ts";

const AuthenticationRequired = () => {
  const isAuthenticated = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated);

    if (!isAuthenticated) {
      navigate(RootNames.SIGN_IN);
    }
  }, [isAuthenticated]);

  return <Outlet />;
};

export default AuthenticationRequired;
