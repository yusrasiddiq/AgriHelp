import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import ThreeD from "../components/3d";
import HomeText from "../components/HomeText";

const Home = () => {
  return (
    <div className="bg-zinc-800">
      <TopBar title={"Agri Help"} />
      <HomeText />
      <Sidebar />
      <ThreeD />
    </div>
  );
};

export default Home;
