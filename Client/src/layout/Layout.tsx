import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.tsx";

const Layout = () => {
  return (
    <div className={"min-h-screen font-lato"}>
      <Header />
      <Outlet />
      {/*<footer className={"h-[450px] w-full"}></footer>*/}
    </div>
  );
};

export default Layout;
