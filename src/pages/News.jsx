import React from "react";
import Sidebar from "../components/SideBar"; // Updated import path
import TopBar from "../components/TopBar"; // Updated import path
import AgricultureNews from "../components/AgricultureNews"; // Updated import path

const NewsPage = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-green-300 to-blue-500">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* TopBar */}
        <TopBar title="Agriculture News" />

        {/* News Content */}
        <div className="flex-1 p-8 pt-20">
          <AgricultureNews />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
