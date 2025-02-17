import MainTabsSidebar from "../components/sidebar/MainTabsSidebar.tsx";
import FriendsSidebar from "../components/sidebar/FriendsSidebar.tsx";
import UserIcon from "../icons/UserIcon.tsx";
import { useUserQuery } from "../hooks/queries/useUserQuery.ts";
import { useNavigate, useParams } from "react-router-dom";
import { getUserSettingsWallRoute } from "../constants/rootNames.ts";

const AccountWall = () => {
  const { username } = useParams();
  const { user, fetchingUser } = useUserQuery();
  const navigate = useNavigate();

  if (fetchingUser) {
    return;
  }

  return (
    <div className={"flex h-full w-full"}>
      <MainTabsSidebar />
      <main
        className={
          "scrollbar flex h-[calc(100vh-100px)] w-full flex-col gap-4 overflow-y-auto p-4"
        }
      >
        <header
          className={
            "relative flex h-[350px] w-full flex-col gap-1 rounded-xl bg-custom-gray-100"
          }
        >
          <header className={"relative h-[75%] w-full rounded-t-xl"}>
            {user?.username === username && (
              <button
                onClick={() => navigate(getUserSettingsWallRoute(username))}
                className={
                  "absolute right-4 top-4 h-[50px] w-[115px] rounded-xl border-2 bg-custom-black-100 bg-opacity-80 text-custom-white-100"
                }
              >
                Edit Profile
              </button>
            )}
            <img
              src={"/test.jpg"}
              alt={"user-profile-bg"}
              className={"h-full w-full rounded-t-xl object-cover"}
            />
          </header>
          <div
            className={
              "absolute bottom-8 left-6 flex h-auto w-auto items-center gap-6"
            }
          >
            <p
              className={
                "mr-auto flex size-[150px] items-center justify-center rounded-full border-2 border-custom-gray-200 bg-custom-gray-500 text-custom-gray-200"
              }
            >
              <UserIcon className={"size-[75px]"} />
            </p>
            <div className={"mb-8 flex w-auto flex-col text-custom-white-200"}>
              <h2
                className={"text-4xl font-bold text-custom-white-100"}
              >{`${user?.firstName} ${user?.lastName}`}</h2>
              <p
                className={"text-xl text-custom-gray-200"}
              >{`@${user?.username}`}</p>
            </div>
          </div>
          <footer className={"h-[25%] w-full"}></footer>
        </header>
        <div className={"flex h-auto w-full"}>
          <div
            className={"h-[500px] w-[350px] rounded-xl bg-custom-gray-100"}
          ></div>
          <div></div>
        </div>
      </main>
      <FriendsSidebar />
    </div>
  );
};

export default AccountWall;
