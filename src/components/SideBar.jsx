import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />
      <div>
        {/* Hamburger Button */}
        <button
          className="lg:hidden fixed top-4 left-4 z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bx ${isOpen ? "bx-x" : "bx-menu"} text-3xl`}></i>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 min-h-screen w-56 bg-slate-950 shadow-md transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:translate-x-0 lg:flex z-20`}
        >
          <ul className="flex flex-col justify-center min-h-screen py-4">
            <li>
              <Link
                to="/"
                className="flex items-center h-12 px-4 text-white hover:translate-x-2 transition-transform ease-in duration-200"
              >
                <i className="bx bx-home text-lg"></i>
                <span className="ml-4 text-lg">Homepage</span>
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="flex items-center h-12 px-4 text-white hover:translate-x-2 transition-transform ease-in duration-200"
              >
                <i className="bx bx-news text-lg"></i>
                <span className="ml-4 text-lg">News</span>
              </Link>
            </li>
            <li>
              <Link
                to="/weather"
                className="flex items-center h-12 px-4 text-white hover:translate-x-2 transition-transform ease-in duration-200"
              >
                <i className="bx bx-cloud text-lg"></i>
                <span className="ml-4 text-lg">Weather</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
