import MainTabsSidebar from "../components/sidebar/MainTabsSidebar.tsx";
import FriendsSidebar from "../components/sidebar/FriendsSidebar.tsx";
import UserIcon from "../icons/UserIcon.tsx";
import ImageIcon from "../icons/ImageIcon.tsx";

const Home = () => {
  return (
    <div className={"flex h-full w-full"}>
      <MainTabsSidebar />
      <main
        className={
          "scrollbar h-[calc(100vh-100px)] w-full space-y-4 overflow-y-auto bg-custom-black-200 p-6"
        }
      >
        <div
          className={
            "flex h-[150px] w-full flex-col rounded-2xl bg-custom-black-100"
          }
        >
          <p
            className={
              "flex h-[50px] w-full items-center rounded-t-2xl border-b-[1px] border-custom-gray-500 px-4 text-lg text-custom-white-100"
            }
          >
            Post something
          </p>
          <div
            className={
              "flex h-[100px] w-full items-center justify-between px-4"
            }
          >
            <div
              className={
                "flex size-12 items-center justify-center rounded-full border-2 border-custom-gray-200 bg-custom-gray-500 text-custom-gray-200"
              }
            >
              <UserIcon className={"size-8"} />
            </div>
            <input
              placeholder={"What's on your mind?"}
              className={
                "h-full w-[80%] bg-transparent text-custom-gray-400 placeholder:text-custom-gray-400 focus:outline-none"
              }
            />
            <button className={"size-12 text-custom-gray-200"}>
              <ImageIcon className={"size-8"} />
            </button>
          </div>
        </div>
        <div className={"h-[500px] w-full bg-custom-gray-100"}>
          <h1>ddd</h1>
        </div>
        <div className={"h-[500px] w-full bg-custom-gray-100"}>
          <h1>ddd</h1>
        </div>
        <div className={"h-[500px] w-full bg-custom-gray-100"}>
          <h1>ddd</h1>
        </div>
        <div className={"h-[500px] w-full bg-custom-gray-100"}>
          <h1>ddd</h1>
        </div>
      </main>
      <FriendsSidebar />
    </div>
  );
};

export default Home;
