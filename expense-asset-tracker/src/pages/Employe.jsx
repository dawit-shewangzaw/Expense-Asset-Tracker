import { useState } from "react";
import EmployeeTable from "../component/EmployeeTable";
import EmployePageHeader from "../component/EmployePageHeader";
import Sidebar from "../component/Sidebar";
import Topbar from "../component/Topbar";

function Employe() {
  const [activeTab, setActiveTab] = useState("All Employees");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white relative">
      {/* Sidebar for desktop */}
      {/* <div className="hidden md:block w-[15%] h-full">
        <Sidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
        />
      </div> */}

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
        <EmployePageHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Page Content */}
        {activeTab === "All Employees" && <EmployeeTable />}
        {activeTab === "Teams" && (
          <div className="h-[300px] bg-white rounded-xl m-10 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
            Teams section placeholder
          </div>
        )}
        {activeTab === "Roles" && (
          <div className="h-[300px] bg-white rounded-xl m-10 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
            Roles section placeholder
          </div>
        )}
      </div>
    </div>
  );
}

export default Employe;