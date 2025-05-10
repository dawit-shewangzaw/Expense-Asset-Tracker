// AssetPageHeader.jsx
import { useState } from "react";
import { PlusCircle, Upload } from "lucide-react";
import AddAssetModal from "./AddAssetModal"; // Adjust the path if needed

const AssetPageHeader = ({ activeTab, setActiveTab }) => {
  const [isAddAssetOpen, setIsAddAssetOpen] = useState(false);
  const tabs = ["All Assets", "Not Active"];

  return (
    <div className="w-full px-10 relative">
      {/* Modal */}
      {isAddAssetOpen && <AddAssetModal onClose={() => setIsAddAssetOpen(false)} />}

      {/* Top row: Title + Buttons */}
      <div className="flex items-center justify-between pt-6 pb-4">
        {/* Title + Count */}
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold text-black">Assets</h2>
          <div className="bg-[#f1f1f1] text-[#34BC68] text-sm px-2 py-1 rounded-md font-medium">
            100
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 text-black bg-white rounded-md text-sm font-medium cursor-pointer">
            <Upload size={16} className="mr-2" />
            Assign
          </button>
          <button
            onClick={() => setIsAddAssetOpen(true)}
            className="flex items-center px-4 py-2 bg-[#34BC68] text-white rounded-md text-sm font-medium cursor-pointer"
          >
            <PlusCircle size={16} className="mr-2" />
            New Asset
          </button>
        </div>
      </div>

      {/* Tab selection */}
      <div className="flex space-x-6 pt-2 border-b border-[#f3eded]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium pb-2 ${
              activeTab === tab
                ? "text-[#34BC68] border-b-2 border-[#34BC68]"
                : "text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssetPageHeader;