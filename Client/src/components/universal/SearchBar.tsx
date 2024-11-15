import React from "react";
import { motion } from "framer-motion";
import SearchIcon from "../../icons/SearchIcon.tsx";

const SearchBar = () => {
  return (
    <div
      className={"relative flex h-[55px] w-[450px] items-center justify-center"}
    >
      <motion.input
        whileFocus={{ borderColor: "#84858E", color: "#F8F9FC" }}
        style={{ borderColor: "#282932", color: "#AEAFB8" }}
        type={"text"}
        className={
          "bg-custom-gray-300 h-full w-full rounded-xl border-2 px-4 focus:outline-none"
        }
        placeholder={"Search..."}
      />
      <SearchIcon
        className={
          "text-custom-gray-400 pointer-events-none absolute right-2 size-8"
        }
      />
    </div>
  );
};

export default SearchBar;
