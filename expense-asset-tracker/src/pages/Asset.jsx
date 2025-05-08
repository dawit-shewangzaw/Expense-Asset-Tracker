// Asset.jsx
import { useState } from "react";
import AssetTable from "../component/AssetTable";
import AssetPageHeader from "../component/AssetPageHeader";
import Sidebar from "../component/sidebar";
import Topbar from "../component/Topbar";

function Asset() {
  const [activeTab, setActiveTab] = useState("All Assets");

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[15%] h-full">
        <Sidebar />
      </div>

      {/* Small gap between sidebar and line */}
      <div className="w-[1%]"></div>

      {/* Vertical divider line */}
      <div className="w-[1px] h-full bg-[#e7e4e4]"></div>

      {/* Main content area */}
      <div className="w-[84%] h-full bg-white">
        <Topbar />
        <AssetPageHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Conditionally render content based on active tab */}
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