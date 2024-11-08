import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.tsx";

const Layout = () => {
  return (
    <div className={"font-lato"}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
