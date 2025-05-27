// // EmployePageHeader.jsx
import { useState } from "react";
import { PlusCircle, Upload } from "lucide-react";
import AddEmployeeModal from "./AddEmployeeModal"; // Make sure the path is correct

const EmployePageHeader = ({ activeTab, setActiveTab }) => {
  const tabs = ["All Employees", "Teams", "Roles"];
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full px-4 md:px-10">
      {/* Top row: Title + Buttons */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6 pb-4 space-y-4 md:space-y-0">
        {/* Title + Count */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <h2 className="text-xl md:text-2xl font-semibold text-black">Employees</h2>
          <div className="bg-[#f1f1f1] text-[#34BC68] text-xs md:text-sm px-2 py-1 rounded-md font-medium">
            100
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 w-full md:w-auto">
          {/* Mobile: side-by-side buttons */}
          <div className="flex space-x-2 md:space-x-2 w-full md:w-auto">
            <button className="flex items-center justify-center w-1/2 md:w-auto px-4 py-2 border border-gray-300 text-black bg-white rounded-md text-sm font-medium cursor-pointer">
              <Upload size={16} className="mr-2" />
              Export
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center justify-center w-1/2 md:w-auto px-4 py-2 bg-[#34BC68] text-white rounded-md text-sm font-medium cursor-pointer"
            >
              <PlusCircle size={16} className="mr-2" />
              New Employee
            </button>
          </div>
        </div>
      </div>

      {/* Tab selection */}
      <div className="flex flex-wrap md:space-x-6 space-x-4 pt-2 border-b border-[#f3eded] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium pb-2 whitespace-nowrap ${
              activeTab === tab
                ? "text-[#34BC68] border-b-2 border-[#34BC68]"
                : "text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Modal */}
      {showModal && <AddEmployeeModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default EmployePageHeader;