// Asset.jsx
import { useState } from "react";
import AssetTable from "../component/AssetTable";
import AssetPageHeader from "../component/AssetPageHeader";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";

function Asset() {
  const [activeTab, setActiveTab] = useState("All Assets");
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
        <AssetPageHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Page Content */}
        {activeTab === "All Assets" && <AssetTable />}
        {activeTab === "Not Active" && (
          <div className="h-[300px] bg-white rounded-xl m-10 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
            Not Active section placeholder
          </div>
        )}
      </div>
    </div>
  );
}

export default Asset;