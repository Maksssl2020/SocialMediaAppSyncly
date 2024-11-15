import React from "react";
import UserIcon from "../../icons/UserIcon.tsx";
import { useUserQuery } from "../../hooks/queries/useUserQuery.ts";

const Sidebar = () => {
  const { user, fetchingUser } = useUserQuery();

  if (fetchingUser) {
    return;
  }

  return (
    <aside
      className={
        "flex h-[calc(100vh-100px)] min-w-[300px] flex-col border-r-2 border-custom-gray-100 bg-custom-black-100 px-4 py-8"
      }
    >
      <div
        className={
          "bg-transparent-gray-400 flex h-[100px] w-full items-center justify-center rounded-2xl border-2 border-custom-gray-400 bg-custom-gray-300"
        }
      >
        <p
          className={
            "bg-custom-gray-500 flex size-12 items-center justify-center rounded-full border-2 border-custom-gray-200 text-custom-gray-200"
          }
        >
          <UserIcon className={"size-8"} />
        </p>
        <div className={"flex flex-col text-custom-white-200"}>
          <p className={"text-xl"}>{user?.firstName}</p>
          <p></p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
