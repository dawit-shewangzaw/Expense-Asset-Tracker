// // Sidebar.jsx Updated one
import { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard,
  CreditCard,
  DollarSign,
  Briefcase,
  ShieldCheck,
  Users,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
  { label: "Expense", icon: <CreditCard size={20} /> },
  { label: "Income", icon: <DollarSign size={20} /> },
  { label: "Assets", icon: <Briefcase size={20} /> },
  { label: "Roles", icon: <ShieldCheck size={20} /> },
  { label: "Employees", icon: <Users size={20} /> },
  { label: "Reports", icon: <BarChart2 size={20} /> },
  { label: "Settings", icon: <Settings size={20} /> },
];

const Sidebar = ({ isMobileSidebarOpen, setIsMobileSidebarOpen }) => {
  const [active, setActive] = useState("Dashboard");
  const sidebarRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMobileSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsMobileSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileSidebarOpen, setIsMobileSidebarOpen]);

  const handleItemClick = (label) => {
    setActive(label);
    setIsMobileSidebarOpen(false); // Close after clicking
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-full bg-white flex-col justify-between">
        <SidebarContent active={active} onItemClick={setActive} />
      </div>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex">
          <div
            ref={sidebarRef}
            className="w-64 bg-white h-full flex flex-col justify-between transition-transform duration-300"
          >
            <SidebarContent active={active} onItemClick={handleItemClick} />
          </div>
          <div className="flex-1" onClick={() => setIsMobileSidebarOpen(false)} />
        </div>
      )}
    </>
  );
};

const SidebarContent = ({ active, onItemClick }) => (
  <>
    {/* Top Title */}
    <div className="pt-10 pb-12 pl-12">
      <h1 className="text-xl font-bold">
        <span className="text-[#34bc68]">Expense</span>
        <span className="text-black">Scout</span>
      </h1>
    </div>

    {/* Navigation Items */}
    <ul className="flex-1 space-y-1 pl-8 pr-2">
      {navItems.map((item) => (
        <li
          key={item.label}
          className={`flex items-center px-3 py-2 cursor-pointer relative group ${
            active === item.label
              ? "bg-[#34bc68] text-black rounded-tr-2xl rounded-br-2xl"
              : "text-black hover:bg-[#e3fded] hover:text-black rounded-tr-2xl rounded-br-2xl"
          }`}
          onClick={() => onItemClick(item.label)}
        >
          <span className="mr-3">{item.icon}</span>
          <span className="text-sm font-medium">{item.label}</span>
        </li>
      ))}
    </ul>

    {/* Logout */}
    <div className="py-4 pl-10">
      <div className="flex items-center text-black cursor-pointer">
        <LogOut size={20} className="mr-3" />
        <span className="text-sm font-medium">Logout</span>
      </div>
    </div>
  </>
);

export default Sidebar;