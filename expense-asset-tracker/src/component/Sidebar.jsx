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


// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   CreditCard,
//   DollarSign,
//   Briefcase,
//   ShieldCheck,
//   Users,
//   BarChart2,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const navItems = [
//   { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//   { label: "Expense", icon: <CreditCard size={20} /> },
//   { label: "Income", icon: <DollarSign size={20} /> },
//   { label: "Assets", icon: <Briefcase size={20} /> },
//   { label: "Roles", icon: <ShieldCheck size={20} /> },
//   { label: "Employees", icon: <Users size={20} /> },
//   { label: "Reports", icon: <BarChart2 size={20} /> },
//   { label: "Settings", icon: <Settings size={20} /> },
// ];

// const Sidebar = ({ isMobileSidebarOpen, setIsMobileSidebarOpen }) => {
//   const [active, setActive] = useState("Dashboard");
//   const sidebarRef = useRef();

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (isMobileSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//         setIsMobileSidebarOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [isMobileSidebarOpen, setIsMobileSidebarOpen]);

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <div className="hidden md:flex h-full bg-white flex-col justify-between w-[15%]">
//         <SidebarContent active={active} setActive={setActive} />
//       </div>

//       {/* Mobile Sidebar */}
//       {isMobileSidebarOpen && (
//         <div className="fixed inset-0 bg-black/40 z-40 flex">
//           <div
//             ref={sidebarRef}
//             className="w-64 h-full bg-white flex flex-col"
//           >
//             {/* Scrollable nav items */}
//             <div className="flex-1 overflow-y-auto">
//               <SidebarContent
//                 active={active}
//                 setActive={(label) => {
//                   setActive(label);
//                   setIsMobileSidebarOpen(false);
//                 }}
//               />
//             </div>

//             {/* Logout button */}
//             <div className="py-4 pl-10 border-t border-gray-200">
//               <div className="flex items-center text-black cursor-pointer">
//                 <LogOut size={20} className="mr-3" />
//                 <span className="text-sm font-medium">Logout</span>
//               </div>
//             </div>
//           </div>

//           {/* Click outside area */}
//           <div className="flex-1" onClick={() => setIsMobileSidebarOpen(false)} />
//         </div>
//       )}
//     </>
//   );
// };

// const SidebarContent = ({ active, setActive }) => (
//   <>
//     {/* Top Title */}
//     <div className="pt-10 pb-12 pl-12">
//       <h1 className="text-xl font-bold">
//         <span className="text-[#34bc68]">Expense</span>
//         <span className="text-black">Scout</span>
//       </h1>
//     </div>

//     {/* Navigation Items */}
//     <ul className="space-y-1 pl-8 pr-2">
//       {navItems.map((item) => (
//         <li
//           key={item.label}
//           className={`flex items-center px-3 py-2 cursor-pointer relative group ${
//             active === item.label
//               ? "bg-[#34bc68] text-black rounded-tr-2xl rounded-br-2xl"
//               : "text-black hover:bg-[#e3fded] hover:text-black rounded-tr-2xl rounded-br-2xl"
//           }`}
//           onClick={() => setActive(item.label)}
//         >
//           <span className="mr-3">{item.icon}</span>
//           <span className="text-sm font-medium">{item.label}</span>
//         </li>
//       ))}
//     </ul>
//   </>
// );

// export default Sidebar;

// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   CreditCard,
//   DollarSign,
//   Briefcase,
//   ShieldCheck,
//   Users,
//   BarChart2,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const navItems = [
//   { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//   { label: "Expense", icon: <CreditCard size={20} /> },
//   { label: "Income", icon: <DollarSign size={20} /> },
//   { label: "Assets", icon: <Briefcase size={20} /> },
//   { label: "Roles", icon: <ShieldCheck size={20} /> },
//   { label: "Employees", icon: <Users size={20} /> },
//   { label: "Reports", icon: <BarChart2 size={20} /> },
//   { label: "Settings", icon: <Settings size={20} /> },
// ];

// const Sidebar = ({ isMobileSidebarOpen, setIsMobileSidebarOpen }) => {
//   const [active, setActive] = useState("Dashboard");
//   const sidebarRef = useRef();

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (isMobileSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//         setIsMobileSidebarOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [isMobileSidebarOpen, setIsMobileSidebarOpen]);

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <div className="hidden md:flex h-full bg-white flex-col justify-between">
//         <SidebarContent active={active} setActive={setActive} />
//       </div>

//       {/* Mobile Sidebar */}
//       {isMobileSidebarOpen && (
//         <div className="fixed inset-0 bg-black/40 z-50 flex">
//           <div
//             ref={sidebarRef}
//             className="w-64 bg-white h-full flex flex-col justify-between transition-transform duration-300"
//           >
//             <SidebarContent
//               active={active}
//               setActive={(label) => {
//                 setActive(label);
//                 setIsMobileSidebarOpen(false);
//               }}
//             />
//           </div>
//           <div className="flex-1" onClick={() => setIsMobileSidebarOpen(false)} />
//         </div>
//       )}
//     </>
//   );
// };

// const SidebarContent = ({ active, setActive }) => (
//   <>
//     {/* Top Title */}
//     <div className="pt-10 pb-12 pl-12">
//       <h1 className="text-xl font-bold">
//         <span className="text-[#34bc68]">Expense</span>
//         <span className="text-black">Scout</span>
//       </h1>
//     </div>

//     {/* Navigation Items */}
//     <ul className="flex-1 space-y-1 pl-8 pr-2">
//       {navItems.map((item) => (
//         <li
//           key={item.label}
//           className={`flex items-center px-3 py-2 cursor-pointer relative group ${
//             active === item.label
//               ? "bg-[#34bc68] text-black rounded-tr-2xl rounded-br-2xl"
//               : "text-black hover:bg-[#e3fded] hover:text-black rounded-tr-2xl rounded-br-2xl"
//           }`}
//           onClick={() => setActive(item.label)}
//         >
//           <span className="mr-3">{item.icon}</span>
//           <span className="text-sm font-medium">{item.label}</span>
//         </li>
//       ))}
//     </ul>

//     {/* Logout */}
//     <div className="py-4 pl-10">
//       <div className="flex items-center text-black cursor-pointer">
//         <LogOut size={20} className="mr-3" />
//         <span className="text-sm font-medium">Logout</span>
//       </div>
//     </div>
//   </>
// );

// export default Sidebar;


// // // Sidebar.jsx new one
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   CreditCard,
//   DollarSign,
//   Briefcase,
//   ShieldCheck,
//   Users,
//   BarChart2,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const navItems = [
//   { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//   { label: "Expense", icon: <CreditCard size={20} /> },
//   { label: "Income", icon: <DollarSign size={20} /> },
//   { label: "Assets", icon: <Briefcase size={20} /> },
//   { label: "Roles", icon: <ShieldCheck size={20} /> },
//   { label: "Employees", icon: <Users size={20} /> },
//   { label: "Reports", icon: <BarChart2 size={20} /> },
//   { label: "Settings", icon: <Settings size={20} /> },
// ];

// const Sidebar = ({ isMobileSidebarOpen, setIsMobileSidebarOpen }) => {
//   const [active, setActive] = useState("Dashboard");
//   const sidebarRef = useRef();

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (isMobileSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//         setIsMobileSidebarOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [isMobileSidebarOpen, setIsMobileSidebarOpen]);

//   return (
//     <>
//       {/* Sidebar on desktop */}
//       <div className="hidden md:flex h-full bg-white flex-col justify-between w-[15%]">
//         <SidebarContent active={active} setActive={setActive} />
//       </div>

//       {/* Sidebar on mobile */}
//       {isMobileSidebarOpen && (
//         <div className="fixed inset-0 bg-black/40 z-40">
//           <div
//             ref={sidebarRef}
//             className="w-64 h-full bg-white p-4 flex flex-col justify-between absolute left-0 top-0 z-50 transition-transform duration-300"
//           >
//             <SidebarContent
//               active={active}
//               setActive={(label) => {
//                 setActive(label);
//                 setIsMobileSidebarOpen(false);
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const SidebarContent = ({ active, setActive }) => (
//   <>
//     {/* Title */}
//     <div className="pt-10 pb-12 pl-6">
//       <h1 className="text-xl font-bold">
//         <span className="text-[#34bc68]">Expense</span>
//         <span className="text-black">Scout</span>
//       </h1>
//     </div>

//     {/* Navigation */}
//     <ul className="flex-1 space-y-1 pl-6 pr-2">
//       {navItems.map((item) => (
//         <li
//           key={item.label}
//           className={`flex items-center px-3 py-2 cursor-pointer relative group ${
//             active === item.label
//               ? "bg-[#34bc68] text-black rounded-tr-2xl rounded-br-2xl"
//               : "text-black hover:bg-[#e3fded] hover:text-black rounded-tr-2xl rounded-br-2xl"
//           }`}
//           onClick={() => setActive(item.label)}
//         >
//           <span className="mr-3">{item.icon}</span>
//           <span className="text-sm font-medium">{item.label}</span>
//         </li>
//       ))}
//     </ul>

//     {/* Logout */}
//     <div className="py-4 pl-8">
//       <div className="flex items-center text-black cursor-pointer">
//         <LogOut size={20} className="mr-3" />
//         <span className="text-sm font-medium">Logout</span>
//       </div>
//     </div>
//   </>
// );

// export default Sidebar;

// // Sidebar.jsx old one
// import { useState, useEffect, useRef } from "react";
// import {
//   LayoutDashboard,
//   CreditCard,
//   DollarSign,
//   Briefcase,
//   ShieldCheck,
//   Users,
//   BarChart2,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const navItems = [
//   { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//   { label: "Expense", icon: <CreditCard size={20} /> },
//   { label: "Income", icon: <DollarSign size={20} /> },
//   { label: "Assets", icon: <Briefcase size={20} /> },
//   { label: "Roles", icon: <ShieldCheck size={20} /> },
//   { label: "Employees", icon: <Users size={20} /> },
//   { label: "Reports", icon: <BarChart2 size={20} /> },
//   { label: "Settings", icon: <Settings size={20} /> },
// ];

// const Sidebar = ({ isMobileSidebarOpen, setIsMobileSidebarOpen }) => {
//   const [active, setActive] = useState("Dashboard");
//   const sidebarRef = useRef();

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (isMobileSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//         setIsMobileSidebarOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [isMobileSidebarOpen, setIsMobileSidebarOpen]);

//   return (
//     <div className="h-full bg-white flex flex-col justify-between">
//       {/* Top Title */}
//       <div className="pt-10 pb-12 pl-12">
//         <h1 className="text-xl font-bold">
//           <span className="text-[#34bc68]">Expense</span>
//           <span className="text-black">Scout</span>
//         </h1>
//       </div>

//       {/* Navigation Items */}
//       <ul className="flex-1 space-y-1 pl-8 pr-2">
//         {navItems.map((item) => (
//           <li
//             key={item.label}
//             className={`flex items-center px-3 py-2 cursor-pointer relative group ${
//               active === item.label
//                 ? "bg-[#34bc68] text-black rounded-tr-2xl rounded-br-2xl"
//                 : "text-black hover:bg-[#e3fded] hover:text-black rounded-tr-2xl rounded-br-2xl"
//             }`}
//             onClick={() => setActive(item.label)}
//           >
//             <span className="mr-3">{item.icon}</span>
//             <span className="text-sm font-medium">{item.label}</span>
//           </li>
//         ))}
//       </ul>

//       {/* Logout */}
//       <div className="py-4 pl-10">
//         <div className="flex items-center text-black cursor-pointer">
//           <LogOut size={20} className="mr-3 " />
//           <span className="text-sm font-medium ">Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from "react";
// import {
//   LayoutDashboard,
//   CreditCard,
//   DollarSign,
//   Briefcase,
//   ShieldCheck,
//   Users,
//   BarChart2,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const navItems = [
//   { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//   { label: "Expense", icon: <CreditCard size={20} /> },
//   { label: "Income", icon: <DollarSign size={20} /> },
//   { label: "Assets", icon: <Briefcase size={20} /> },
//   { label: "Roles", icon: <ShieldCheck size={20} /> },
//   { label: "Employees", icon: <Users size={20} /> },
//   { label: "Reports", icon: <BarChart2 size={20} /> },
//   { label: "Settings", icon: <Settings size={20} /> },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("Dashboard");

//   return (
//     <div className="h-full bg-white flex flex-col justify-between">
//       {/* Top Title */}
//       <div className="pt-10 pb-12 pl-12">
//         <h1 className="text-xl font-bold">
//           <span className="text-[#34bc68]">Expense</span>
//           <span className="text-black">Scout</span>
//         </h1>
//       </div>

//       {/* Navigation Items */}
//       <ul className="flex-1 space-y-1 pl-8 pr-2">
//         {navItems.map((item) => (
//           <li
//             key={item.label}
//             className={`flex items-center px-3 py-2 cursor-pointer relative group ${
//               active === item.label
//                 ? "bg-[#34bc68] text-black rounded-tr-2xl rounded-br-2xl"
//                 : "text-black hover:bg-[#e3fded] hover:text-black rounded-tr-2xl rounded-br-2xl"
//             }`}
//             onClick={() => setActive(item.label)}
//           >
//             <span className="mr-3">{item.icon}</span>
//             <span className="text-sm font-medium">{item.label}</span>
//           </li>
//         ))}
//       </ul>

//       {/* Logout */}
//       <div className="py-4 pl-10">
//         <div className="flex items-center text-black cursor-pointer">
//           <LogOut size={20} className="mr-3 " />
//           <span className="text-sm font-medium ">Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// import { useState } from "react";
// import {
//   LayoutDashboard,
//   CreditCard,
//   DollarSign,
//   Briefcase,
//   ShieldCheck,
//   Users,
//   BarChart2,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const navItems = [
//   { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//   { label: "Expense", icon: <CreditCard size={20} /> },
//   { label: "Income", icon: <DollarSign size={20} /> },
//   { label: "Assets", icon: <Briefcase size={20} /> },
//   { label: "Roles", icon: <ShieldCheck size={20} /> },
//   { label: "Employees", icon: <Users size={20} /> },
//   { label: "Reports", icon: <BarChart2 size={20} /> },
//   { label: "Settings", icon: <Settings size={20} /> },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("Dashboard");

//   return (
//     <div className="w-full min-h-screen bg-white flex flex-col justify-between py-6">
//       {/* Top Title */}
//       <div>
//         <h1 className="text-2xl font-bold px-6">
//           <span className="text-[#34bc68]">Expense</span>
//           <span className="text-black">Scout</span>
//         </h1>

//         {/* Navigation Items */}
//         <ul className="mt-10 space-y-1">
//           {navItems.map((item) => (
//             <li
//               key={item.label}
//               className={`flex items-center px-6 py-2 cursor-pointer relative group ${
//                 active === item.label
//                   ? "text-black"
//                   : "text-black"
//               }`}
//               onClick={() => setActive(item.label)}
//             >
//               {/* Highlight Background */}
//               {active === item.label && (
//                 <div className="absolute left-0 top-0 h-full w-[90%] bg-[#34bc68] rounded-r-xl -z-10"></div>
//               )}
//               <span className="mr-3 z-10">{item.icon}</span>
//               <span className="z-10 font-medium">{item.label}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Logout */}
//       <div className="px-6 mt-10">
//         <div className="flex items-center text-black cursor-pointer">
//           <LogOut size={20} className="mr-3" />
//           <span className="font-medium">Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from "react";
// import {
//   LayoutDashboard,
//   CreditCard,
//   DollarSign,
//   Briefcase,
//   ShieldCheck,
//   Users,
//   BarChart2,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const navItems = [
//   { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//   { label: "Expense", icon: <CreditCard size={20} /> },
//   { label: "Income", icon: <DollarSign size={20} /> },
//   { label: "Assets", icon: <Briefcase size={20} /> },
//   { label: "Roles", icon: <ShieldCheck size={20} /> },
//   { label: "Employees", icon: <Users size={20} /> },
//   { label: "Reports", icon: <BarChart2 size={20} /> },
//   { label: "Settings", icon: <Settings size={20} /> },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("Dashboard");

//   return (
//     <div className="w-[15%] h-full bg-white flex flex-col justify-between">
//       <div className="px-4 py-4">
//         <h1 className="text-xl font-bold">
//           <span className="text-[#34bc68]">Expense</span>
//           <span className="text-black">Scout</span>
//         </h1>
//       </div>

//       <ul className="flex-1 px-2 space-y-1">
//         {navItems.map((item) => (
//           <li
//             key={item.label}
//             className={`flex items-center px-4 py-2 cursor-pointer relative group ${
//               active === item.label
//                 ? "bg-[#34bc68]/10 text-black"
//                 : "text-black"
//             }`}
//             onClick={() => setActive(item.label)}
//           >
//             {active === item.label && (
//               <div className="absolute left-2 top-0 h-full w-[90%] bg-[#34bc68] rounded-r-xl -z-10 transition-all duration-200"></div>
//             )}
//             <span className="mr-3 z-10">{item.icon}</span>
//             <span className="z-10 text-sm font-medium">{item.label}</span>
//           </li>
//         ))}
//       </ul>

//       <div className="px-4 py-4">
//         <div className="flex items-center text-black cursor-pointer">
//           <LogOut size={20} className="mr-3" />
//           <span className="text-sm font-medium">Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from "react";
// import {
//   LayoutDashboard,
//   CreditCard,
//   DollarSign,
//   Briefcase,
//   ShieldCheck,
//   Users,
//   BarChart2,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const navItems = [
//   { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//   { label: "Expense", icon: <CreditCard size={20} /> },
//   { label: "Income", icon: <DollarSign size={20} /> },
//   { label: "Assets", icon: <Briefcase size={20} /> },
//   { label: "Roles", icon: <ShieldCheck size={20} /> },
//   { label: "Employees", icon: <Users size={20} /> },
//   { label: "Reports", icon: <BarChart2 size={20} /> },
//   { label: "Settings", icon: <Settings size={20} /> },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("Dashboard");

//   return (
//     <div className="h-full bg-white flex flex-col justify-between">
//       {/* Top Title */}
//       <div className="px-4 py-4">
//         <h1 className="text-2xl font-bold">
//           <span className="text-[#34bc68]">Expense</span>
//           <span className="text-black">Scout</span>
//         </h1>
//       </div>

//       {/* Navigation Items */}
//       <ul className="flex-1 px-2 space-y-1">
//         {navItems.map((item) => (
//           <li
//             key={item.label}
//             className={`flex items-center px-4 py-2 cursor-pointer relative group ${
//               active === item.label
//                 ? "bg-[#34bc68]/10 text-black"
//                 : "text-black"
//             }`}
//             onClick={() => setActive(item.label)}
//           >
//             {active === item.label && (
//               <div className="absolute left-2 top-0 h-full w-[90%] bg-[#34bc68] rounded-r-xl -z-10 transition-all duration-200"></div>
//             )}
//             <span className="mr-3 z-10">{item.icon}</span>
//             <span className="z-10 font-medium">{item.label}</span>
//           </li>
//         ))}
//       </ul>

//       {/* Logout */}
//       <div className="px-4 py-4">
//         <div className="flex items-center text-black cursor-pointer">
//           <LogOut size={20} className="mr-3" />
//           <span className="font-medium">Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// import { useState } from "react";
// import {
//   LayoutDashboard,
//   CreditCard,
//   DollarSign,
//   Briefcase,
//   ShieldCheck,
//   Users,
//   BarChart2,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const navItems = [
//   { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
//   { label: "Expense", icon: <CreditCard size={18} /> },
//   { label: "Income", icon: <DollarSign size={18} /> },
//   { label: "Assets", icon: <Briefcase size={18} /> },
//   { label: "Roles", icon: <ShieldCheck size={18} /> },
//   { label: "Employees", icon: <Users size={18} /> },
//   { label: "Reports", icon: <BarChart2 size={18} /> },
//   { label: "Settings", icon: <Settings size={18} /> },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("Dashboard");

//   return (
//     <div className="w-[15%] h-full bg-white flex flex-col justify-between">
//       {/* Title */}
//       <div className="py-4 px-4">
//         <h1 className="text-lg font-bold">
//           <span className="text-[#34bc68]">Expense</span>
//           <span className="text-black">Scout</span>
//         </h1>
//       </div>

//       {/* Navigation */}
//       <ul className="flex-1 px-2 space-y-1">
//         {navItems.map((item) => (
//           <li
//             key={item.label}
//             className={`flex items-center px-4 py-2 cursor-pointer relative group ${
//               active === item.label ? "text-white" : "text-black"
//             }`}
//             onClick={() => setActive(item.label)}
//           >
//             {/* Highlight Background */}
//             {active === item.label && (
//               <div className="absolute left-2 top-0 h-full w-[90%] bg-[#34bc68] rounded-r-xl -z-10 transition-all duration-200"></div>
//             )}
//             <span className="mr-3 z-10">{item.icon}</span>
//             <span className="z-10 text-sm font-medium">{item.label}</span>
//           </li>
//         ))}
//       </ul>

//       {/* Logout */}
//       <div className="px-4 py-4">
//         <div className="flex items-center text-black cursor-pointer">
//           <LogOut size={18} className="mr-3" />
//           <span className="text-sm font-medium">Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





// import { useState } from "react";
// import {
//   LayoutDashboard,
//   CreditCard,
//   DollarSign,
//   Briefcase,
//   ShieldCheck,
//   Users,
//   BarChart2,
//   Settings,
//   LogOut,
// } from "lucide-react";

// const navItems = [
//   { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
//   { label: "Expense", icon: <CreditCard size={20} /> },
//   { label: "Income", icon: <DollarSign size={20} /> },
//   { label: "Assets", icon: <Briefcase size={20} /> },
//   { label: "Roles", icon: <ShieldCheck size={20} /> },
//   { label: "Employees", icon: <Users size={20} /> },
//   { label: "Reports", icon: <BarChart2 size={20} /> },
//   { label: "Settings", icon: <Settings size={20} /> },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("Dashboard");

//   return (
//     <div className="w-[55%] min-h-screen bg-white border-r border-gray-200 flex flex-col justify-between py-6">
//       {/* Top Title */}
//       <div>
//         <h1 className="text-2xl font-bold px-6">
//           <span className="text-[#34bc68]">Expense</span>
//           <span className="text-black">Scout</span>
//         </h1>

//         {/* Navigation Items */}
//         <ul className="mt-10 space-y-1">
//           {navItems.map((item) => (
//             <li
//               key={item.label}
//               className={`flex items-center px-6 py-2 cursor-pointer relative group ${
//                 active === item.label
//                   ? "bg-[#34bc68]/10 text-black"
//                   : "text-black"
//               }`}
//               onClick={() => setActive(item.label)}
//             >
//               {/* Highlight Background */}
//               {active === item.label && (
//                 <div className="absolute left-0 top-0 h-full w-[90%] bg-[#34bc68] rounded-r-xl -z-10 transition-all duration-200"></div>
//               )}
//               <span className="mr-3 z-10">{item.icon}</span>
//               <span className="z-10 font-medium">{item.label}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Logout */}
//       <div className="px-6 mt-10">
//         <div className="flex items-center text-black cursor-pointer">
//           <LogOut size={20} className="mr-3" />
//           <span className="font-medium">Logout</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
