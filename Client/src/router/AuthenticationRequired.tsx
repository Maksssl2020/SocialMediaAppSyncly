import React, { useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication.ts";
import { Outlet, useNavigate } from "react-router-dom";

const AuthenticationRequired = () => {
  const { isAuthenticated } = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated);

    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated]);

  return <Outlet />;
};

export default AuthenticationRequired;
