import { useState } from "react";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";
import DashboardComp from "../component/DashboardComp";
import DashboardAssetAnalysis from "../component/DashboardAssetAnalysis";

function Dashboard() {
   const [activeTab, setActiveTab] = useState("All Employees");
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

      {/* Small gap and divider (only for desktop) */}
      <div className="hidden md:block w-[1%]"></div>
      <div className="hidden md:block w-[1px] h-full bg-[#e7e4e4]"></div>

      {/* Main Content */}
      <div className="flex-1 w-full h-full bg-white">
        <Topbar setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
        <DashboardComp/>
        <DashboardAssetAnalysis/>
      </div>
    </div>
  );
}

export default Dashboard;