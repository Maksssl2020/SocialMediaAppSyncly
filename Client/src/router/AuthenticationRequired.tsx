import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication.ts";

const AuthenticationRequired = () => {
  const isAuthenticated = useAuthentication();
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
