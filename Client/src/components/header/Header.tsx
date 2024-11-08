import React from "react";

const Header = () => {
  return (
    <div
      className={
        "w-full h-[100px] bg-custom-black-100 border-2 border-custom-gray-100"
      }
    >
      <nav className={"w-full h-full px-6 flex items-center"}>
        <h1
          className={"text-custom-white-100 uppercase text-4xl tracking-wider"}
        >
          SYNCLY
        </h1>
      </nav>
    </div>
  );
};

export default Header;
