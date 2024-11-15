import React from "react";
import UserPlusIcon from "../../icons/UserPlusIcon.tsx";
import MessageIcon from "../../icons/MessageIcon.tsx";
import BellIcon from "../../icons/BellIcon.tsx";
import AnimatedScaleButton from "../button/AnimatedScaleButton.tsx";
import UserIcon from "../../icons/UserIcon.tsx";
import SearchBar from "../universal/SearchBar.tsx";

const buttonsData = [
  {
    icon: <UserPlusIcon className={"size-8"} />,
    className: "flex size-10 items-center justify-center rounded-full",
  },
  {
    icon: <MessageIcon className={"size-8 scale-x-[-1] transform"} />,
    className: "flex size-10 items-center justify-center rounded-full",
  },
  {
    icon: <BellIcon className={"size-8"} />,
    className: "flex size-10 items-center justify-center rounded-full",
  },
  {
    icon: <UserIcon className={"size-8"} />,
    className:
      "flex size-10 items-center justify-center rounded-full border-2 border-custom-gray-200 bg-custom-gray-500",
  },
];

const Header = () => {
  return (
    <div
      className={
        "h-[100px] w-full shrink-0 border-2 border-custom-gray-100 bg-custom-black-100"
      }
    >
      <nav className={"flex h-full w-full items-center px-6"}>
        <div className={"flex h-full w-[45%] items-center justify-between"}>
          <h1
            className={
              "text-3xl uppercase tracking-wider text-custom-white-100"
            }
          >
            SYNCLY
          </h1>

          <SearchBar />
        </div>
        <div
          className={
            "ml-auto flex h-full w-auto items-center gap-2 text-custom-white-200"
          }
        >
          {buttonsData.map((data, index) => (
            <AnimatedScaleButton key={index} className={data.className}>
              {data.icon}
            </AnimatedScaleButton>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
