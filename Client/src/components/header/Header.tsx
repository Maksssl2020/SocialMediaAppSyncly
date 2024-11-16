import React, { useState } from "react";
import UserPlusIcon from "../../icons/UserPlusIcon.tsx";
import MessageIcon from "../../icons/MessageIcon.tsx";
import BellIcon from "../../icons/BellIcon.tsx";
import AnimatedScaleButton from "../button/AnimatedScaleButton.tsx";
import UserIcon from "../../icons/UserIcon.tsx";
import SearchBar from "../universal/SearchBar.tsx";
import TriangleIcon from "../../icons/TriangleIcon.tsx";
import Dropdown from "../dropdown/Dropdown.tsx";
import ExitIcon from "../../icons/ExitIcon.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/AuthenticationSlice.ts";

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
    icon: <UserIcon className={"size-6"} />,
    className:
      "flex size-10 items-center justify-center rounded-full border-2 border-custom-gray-200 bg-custom-gray-500",
  },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className={
        "h-[100px] w-full border-2 border-custom-gray-100 bg-custom-black-100"
      }
      style={{ zIndex: 10 }}
    >
      <nav className={"z-20 flex h-full w-full items-center px-6"}>
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
          {buttonsData.map((data, index) =>
            index !== 3 ? (
              <AnimatedScaleButton key={index} className={data.className}>
                {data.icon}
              </AnimatedScaleButton>
            ) : (
              <div className={"flex items-center gap-1"}>
                <AnimatedScaleButton
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  key={index}
                  className={data.className}
                >
                  {data.icon}
                </AnimatedScaleButton>
                <motion.button
                  animate={{ rotate: isDropdownOpen ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                  className={
                    "flex size-6 items-center justify-center rounded-full"
                  }
                >
                  <TriangleIcon className={"size-4 stroke-2"} />
                </motion.button>
              </div>
            ),
          )}
        </div>
      </nav>
      <AnimatePresence>
        {isDropdownOpen && (
          <Dropdown
            isOpen={isDropdownOpen}
            className={
              "right-6 h-auto w-auto rounded-xl border-2 border-custom-gray-500 bg-custom-gray-300 p-4"
            }
          >
            <motion.button
              whileHover={{ backgroundColor: "#22222B" }}
              style={{ backgroundColor: "#282932" }}
              onClick={() => dispatch(logout())}
              className={
                "flex h-[50px] w-[250px] items-center gap-8 rounded-xl px-2 text-custom-white-200"
              }
            >
              <ExitIcon className={"size-8"} />
              <span className={"text-xl"}>Logout</span>
            </motion.button>
          </Dropdown>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
