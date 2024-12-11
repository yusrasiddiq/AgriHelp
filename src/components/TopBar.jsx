// src/components/TopBar.js
import React from "react";
import { FaBars } from "react-icons/fa"; // Import hamburger icon

const TopBar = ({ title, toggleSidebar }) => {
  return (
    <div className="bg-slate-950 py-4 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-10">
      <h1 className="text-4xl text-center font-bold text-white flex-1 font-mono">
        {title}
      </h1>
    </div>
  );
};

export default TopBar;
