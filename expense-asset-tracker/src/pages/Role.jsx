// Employe.jsx
import { useState } from "react";
import RoleBox from "../component/RoleBox";
import RolePageHeader from "../component/RolePageHeader";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";

function Role() {
  const [activeTab, setActiveTab] = useState("All Roles");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white relative">
      {/* Sidebar for mobile with animation */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMobileSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex h-full">
          {/* Sidebar panel */}
          <div
            className={`w-64 bg-white h-full shadow-md transform transition-transform duration-300 ease-in-out ${
              isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Sidebar
              isMobileSidebarOpen={isMobileSidebarOpen}
              setIsMobileSidebarOpen={setIsMobileSidebarOpen}
            />
          </div>

          {/* Backdrop */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          </div>
        </div>

       {/* Small gap between sidebar and line (Only for Desktop) */}
      <div className="hidden md:block w-[1%]"></div>
      <div className="hidden md:block w-[1px] h-full bg-[#e7e4e4]"></div>

      {/* Main content area */}
      <div className="flex-1 w-full h-full bg-white">
        <Topbar setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
        <RolePageHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Conditionally render content based on active tab */}
        {activeTab === "All Roles" && <RoleBox />}
        {activeTab === "Permissions" && (
          <div className="h-[300px] bg-white rounded-xl m-10 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
            Permissions section placeholder
          </div>
        )}
      </div>
    </div>
  );
}

export default Role;