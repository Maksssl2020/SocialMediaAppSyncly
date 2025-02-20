import MainTabsSidebar from "../components/sidebar/MainTabsSidebar.tsx";
import FriendsSidebar from "../components/sidebar/FriendsSidebar.tsx";
import UserIcon from "../icons/UserIcon.tsx";
import { useUserQuery } from "../hooks/queries/useUserQuery.ts";
import { useNavigate, useParams } from "react-router-dom";
import { getUserSettingsWallRoute } from "../constants/rootNames.ts";
import EllipsisIcon from "../icons/EllipsisIcon.tsx";
import LocationIcon from "../icons/LocationIcon.tsx";
import BriefcaseIcon from "../icons/BriefcaseIcon.tsx";
import CalendarIcon from "../icons/CalendarIcon.tsx";
import HeartIcon from "../icons/HeartIcon.tsx";
import Modal from "../components/modal/Modal.tsx";
import { motion } from "framer-motion";

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
          <div className={"h-auto w-[350px] rounded-xl bg-custom-gray-100"}>
            <header
              className={
                "flex h-[75px] items-center justify-between border-b-[1px] border-custom-gray-500 px-2 text-custom-white-200"
              }
            >
              <h3 className={"text-lg"}>About me</h3>
              <button className={"size-10 rounded-full"}>
                <EllipsisIcon className={"size-8"} />
              </button>
            </header>
            <div className={"flex flex-col"}>
              <textarea
                className={
                  "h-[100px] resize-none border-b-[1px] border-custom-gray-500 bg-transparent px-2"
                }
              />
              <div
                className={"flex h-[250px] flex-col px-2 text-custom-white-200"}
              >
                <div
                  className={
                    "flex h-[50px] w-full items-center justify-between"
                  }
                >
                  <LocationIcon className={"size-8"} />
                  <p>Poznan</p>
                </div>
                <div
                  className={
                    "flex h-[50px] w-full items-center justify-between"
                  }
                >
                  <BriefcaseIcon className={"size-8"} />
                  <p>Poznan</p>
                </div>
                <div
                  className={
                    "flex h-[50px] w-full items-center justify-between"
                  }
                >
                  <CalendarIcon className={"size-8"} />
                  <p>Poznan</p>
                </div>
                <div
                  className={
                    "flex h-[50px] w-full items-center justify-between"
                  }
                >
                  <HeartIcon className={"size-8"} />
                  <p>Poznan</p>
                </div>
                <div
                  className={
                    "flex h-[50px] w-full items-center justify-between"
                  }
                >
                  <LocationIcon className={"size-8"} />
                  <p>Poznan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal>
          <div
            className={
              "flex h-[500px] w-[600px] flex-col gap-6 rounded-xl bg-custom-gray-300 p-4"
            }
          >
            <div className={"flex flex-col gap-8"}>
              <div className={"flex items-center justify-between"}>
                <h3 className={"text-xl font-bold text-custom-white-100"}>
                  Biography
                </h3>
                <button
                  className={
                    "rounded-xl border-2 border-custom-blue-100 px-6 py-2 uppercase text-custom-blue-100"
                  }
                >
                  Add
                </button>
              </div>
              <motion.textarea
                whileFocus={{ borderColor: "#116CD6" }}
                style={{ borderColor: "#282932" }}
                className={
                  "resize-none rounded-xl border-2 bg-transparent p-2 text-custom-white-100 outline-none"
                }
              />
            </div>
            <div className={"flex flex-col gap-8"}>
              <div className={"flex items-center justify-between"}>
                <h3 className={"text-xl font-bold text-custom-white-100"}>
                  Current Location
                </h3>
                <button
                  className={
                    "rounded-xl border-2 border-custom-blue-100 px-6 py-2 uppercase text-custom-blue-100"
                  }
                >
                  Add
                </button>
              </div>
              <div className={"flex justify-between"}>
                <div className={"flex h-[50px] items-center gap-4"}>
                  <label className={"text-lg text-custom-white-200"}>
                    City
                  </label>
                  <motion.input
                    whileFocus={{ borderColor: "#116CD6" }}
                    className={
                      "h-[50px] w-[225px] rounded-xl border-2 bg-transparent px-2 text-custom-white-100 outline-none"
                    }
                  />
                </div>
                <div className={"flex h-[50px] items-center gap-4"}>
                  <label className={"text-lg text-custom-white-200"}>
                    State
                  </label>
                  <motion.input
                    whileFocus={{ borderColor: "#116CD6" }}
                    className={
                      "h-[50px] w-[225px] rounded-xl border-2 bg-transparent px-2 text-custom-white-100 outline-none"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </main>
      <FriendsSidebar />
    </div>
  );
};

export default AccountWall;
