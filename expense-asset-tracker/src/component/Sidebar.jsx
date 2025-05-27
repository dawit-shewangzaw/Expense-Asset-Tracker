// Sidebar.jsx
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  ShieldCheck,
  Users,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
  { label: "Assets", icon: <Briefcase size={20} />, path: "/assets" },
  { label: "Roles", icon: <ShieldCheck size={20} />, path: "/roles" },
  { label: "Employees", icon: <Users size={20} />, path: "/employees" },
  { label: "Reports", icon: <BarChart2 size={20} />, path: "/reports" },
  { label: "Settings", icon: <Settings size={20} />, path: "/settings" },
];

const Sidebar = ({ isMobileSidebarOpen, setIsMobileSidebarOpen }) => {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMobileSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsMobileSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileSidebarOpen, setIsMobileSidebarOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col justify-between w-64 h-full bg-white border-gray-200 border-r">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/40">
          <div
            ref={sidebarRef}
            className="w-64 bg-white h-full flex flex-col justify-between transition-transform duration-300"
          >
            <SidebarContent onLinkClick={() => setIsMobileSidebarOpen(false)} />
          </div>
          <div className="flex-1" onClick={() => setIsMobileSidebarOpen(false)} />
        </div>
      )}
    </>
  );
};

const SidebarContent = ({ onLinkClick }) => (
  <div className="flex flex-col h-full">
    {/* Logo */}
    <div className="pt-10 pb-12 pl-12">
      <h1 className="text-xl font-bold">
        <span className="text-[#34bc68]">Expense</span>
        <span className="text-black">Scout</span>
      </h1>
    </div>

    {/* Navigation */}
    <ul className="flex-1 space-y-1 pl-8 pr-2">
      {navItems.map((item) => (
        <li key={item.label}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-tr-2xl rounded-br-2xl cursor-pointer group ${
                isActive
                  ? "bg-[#34bc68] text-black"
                  : "text-black hover:bg-[#e3fded]"
              }`
            }
            onClick={onLinkClick}
          >
            <span className="mr-3">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>

    {/* Logout fixed at bottom */}
    <div className="mt-auto py-4 pl-10">
      <div className="flex items-center text-black cursor-pointer">
        <LogOut size={20} className="mr-3" />
        <span className="text-sm font-medium">Logout</span>
      </div>
    </div>
  </div>
);

export default Sidebar;

