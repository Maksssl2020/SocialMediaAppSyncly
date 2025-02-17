import Sidebar from "./Sidebar.tsx";
import UserIcon from "../../icons/UserIcon.tsx";
import { useUserQuery } from "../../hooks/queries/useUserQuery.ts";
import { useNavigate } from "react-router-dom";
import { getUserWallRoute } from "../../constants/rootNames.ts";

const MainTabsSidebar = () => {
  const { user, fetchingUser } = useUserQuery();
  const navigate = useNavigate();

  if (fetchingUser) {
    return;
  }

  return (
    <Sidebar
      className={
        "min-w-[300px] border-r-2 border-custom-gray-100 bg-custom-black-100"
      }
    >
      <div
        onClick={() => navigate(getUserWallRoute(user?.username))}
        className={
          "bg-transparent-gray-400 flex h-[100px] w-full items-center justify-center gap-2 rounded-2xl border-2 border-custom-gray-500 bg-custom-gray-300 px-2 hover:cursor-pointer"
        }
      >
        <p
          className={
            "mr-auto flex size-12 items-center justify-center rounded-full border-2 border-custom-gray-200 bg-custom-gray-500 text-custom-gray-200"
          }
        >
          <UserIcon className={"size-8"} />
        </p>
        <div className={"flex w-[185px] flex-col text-custom-white-200"}>
          <p className={"text-lg"}>{`${user?.firstName} ${user?.lastName}`}</p>
          <p className={"text-custom-gray-400"}>{`@${user?.username}`}</p>
        </div>
      </div>
    </Sidebar>
  );
};

export default MainTabsSidebar;
