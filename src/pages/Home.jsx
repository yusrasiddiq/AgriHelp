import React from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import ThreeD from "../components/3d";
{
  /* Updated import path */
}
import HomeText from "../components/HomeText";

const Home = () => {
  return (
    <div className="bg-zinc-800">
      <TopBar title={"Agri Help"} />
      <HomeText />
      <div className="lg:flex">
        <Sidebar />
        <div className="flex-1 mt-4 lg:mt-0">
          <ThreeD />
        </div>
      </div>
    </div>
  );
};

export default Home;
