// Topbar.jsx
import { Bell, Settings, Search, Menu } from "lucide-react";
import userImg from "../assets/kob.jpg";

const Topbar = ({ setIsMobileSidebarOpen }) => {
  return (
    <div className="w-full bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Menu
            size={24}
            className="text-black cursor-pointer"
            onClick={() => setIsMobileSidebarOpen(true)}
          />
        </div>

        {/* Search input (hidden on mobile) */}
        <div className="hidden md:flex items-center px-3 py-2 rounded-md w-[50%]">
          <Search className="text-black mr-2" size={20} />
          <input
            type="text"
            placeholder="Search anything here"
            className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
          />
        </div>

        {/* Spacer to push icons to right */}
        <div className="flex-1"></div>

        {/* Icons section */}
        <div className="flex items-center space-x-6 pr-4">
          <Settings className="text-gray-600 cursor-pointer" size={18} />
          <Bell className="text-gray-600 cursor-pointer" size={18} />

          {/* Profile Image with green status dot */}
          <div className="relative">
            <img
              src={userImg}
              alt="user"
              className="w-9 h-9 rounded-full object-cover cursor-pointer"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="h-[1px] bg-[#e7e4e4] w-full"></div>
    </div>
  );
};

export default Topbar;