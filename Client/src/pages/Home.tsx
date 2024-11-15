import React from "react";
import Sidebar from "../components/sidebar/Sidebar.tsx";

const Home = () => {
  return (
    <div className={"flex h-full w-full"}>
      <Sidebar />
      <main className={"h-[calc(100vh-100px)] w-full overflow-y-auto"}>
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
    </div>
  );
};

export default Home;
