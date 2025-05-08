import {
  Filter,
  List,
  LayoutGrid,
  Search,
  ArrowRight,
} from "lucide-react";
import userImg from "../assets/kob.jpg";
import { useState } from "react";
import AssignRoleModal from "./AssignRoleModal"; // 👈 Import modal

// Sample role data
const roleData = [
  {
    id: 1,
    title: "Team Lead",
    tags: ["Marketing", "Product", "Engineering", "Design"],
    description:
      "This role manages team communication, timelines, and project goals.",
    team: "Product",
    lead: { name: "James Brayan", role: "Manager", img: userImg },
  },
  {
    id: 2,
    title: "Recruiter",
    tags: ["Recruitment", "HR", "People"],
    description:
      "Responsible for sourcing and onboarding new talent.",
    team: "Recruitment",
    lead: { name: "Sarah K.", role: "Senior Recruiter", img: userImg },
  },
];

const departments = [
  "All",
  "Product",
  "Engineering",
  "Marketing",
  "Recruitment",
  "Sales",
  "Customer Services",
];

const RoleBox = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // 👈 Modal state

  const filteredRoles = roleData.filter((role) => {
    const matchSearch = `${role.title} ${role.description} ${role.lead.name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchDept =
      activeFilter === "All" || role.team === activeFilter;

    return matchSearch && matchDept;
  });

  return (
    <div className="px-10 pt-3">
      {/* Top action box */}
      <div className="flex items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-xl">
        {/* Search */}
        <div className="flex items-center w-full max-w-md bg-transparent">
          <Search className="text-black mr-2" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Role by title, name, or keywords"
            className="text-sm outline-none placeholder-gray-500 bg-transparent w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center text-sm px-4 py-2 bg-white border border-gray-300 text-black rounded-md">
            <Filter size={16} className="mr-2" />
            Filter
          </button>

          <button className="p-2 rounded-md bg-[#F3F4F5]">
            <List size={18} className="text-black" />
          </button>

          <button className="p-2 rounded-md bg-white border border-gray-300">
            <LayoutGrid size={18} className="text-black" />
          </button>
        </div>
      </div>

      {/* Choose filter buttons */}
      <div className="mt-6 flex space-x-4 border-b border-gray-200 pb-2">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveFilter(dept)}
            className={`text-sm font-medium pb-2 ${
              activeFilter === dept
                ? "text-[#34BC68] border-b-2 border-[#34BC68]"
                : "text-black"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Role cards */}
      <div className="mt-6 flex flex-wrap gap-6">
        {filteredRoles.map((role) => (
          <div
            key={role.id}
            className="bg-white border border-gray-200 rounded-xl p-4 w-[48%] space-y-3"
          >
            {/* Title + icons */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-black">
                {role.title}
              </h3>
              <div className="flex items-center space-x-[-8px]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={userImg}
                    className="w-6 h-6 rounded-full border-2 border-white"
                    alt=""
                  />
                ))}
                {/* + Button opens modal */}
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-[#34BC68] text-white text-xs font-bold border-2 border-white cursor-pointer"
                >
                  +
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600">{role.description}</p>

            {/* Tag list */}
            <div className="flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#F3F4F5] text-sm px-3 py-1 rounded-full text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Lead info */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <img
                  src={role.lead.img}
                  alt={role.lead.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium text-black">
                    {role.lead.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {role.lead.role}
                  </div>
                </div>
              </div>
              <ArrowRight size={18} className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal render */}
      {isModalOpen && <AssignRoleModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default RoleBox;


// import { Filter, List, LayoutGrid, Search, ArrowRight } from "lucide-react";
// import userImg from "../assets/kob.jpg";
// import { useState } from "react";

// // Sample role data
// const roleData = [
//   {
//     id: 1,
//     title: "Team Lead",
//     tags: ["Marketing", "Product", "Engineering", "Design"],
//     description:
//       "This role manages team communication, timelines, and project goals This role manages team communication, timelines, and project goals This role manages team communication, timelines, and project goals.This role manages team communication, timelines, and project goals",
//     team: "Product",
//     lead: { name: "James Brayan", role: "Manager", img: userImg },
//   },
//   {
//     id: 2,
//     title: "Recruiter",
//     tags: ["Recruitment", "HR", "People"],
//     description: "Responsible for sourcing and onboarding new talent Responsible for sourcing and onboarding new talent Responsible for sourcing and onboarding new talent Responsible for sourcing and onboarding new talent Responsible for sourcing and onboarding new talentResponsible for sourcing and onboarding new talent.",
//     team: "Recruitment",
//     lead: { name: "Sarah K.", role: "Senior Recruiter", img: userImg },
//   },
// ];

// const departments = [
//   "All",
//   "Product",
//   "Engineering",
//   "Marketing",
//   "Recruitment",
//   "Sales",
//   "Customer Services",
// ];

// const RoleBox = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredRoles = roleData.filter((role) => {
//     const matchSearch = `${role.title} ${role.description} ${role.lead.name}`
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchDept =
//       activeFilter === "All" || role.team === activeFilter;

//     return matchSearch && matchDept;
//   });

//   return (
//     <div className="px-10 pt-3">
//       {/* Top action box */}
//       <div className="flex items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-xl">
//         {/* Search */}
//         <div className="flex items-center w-full max-w-md bg-transparent">
//           <Search className="text-black mr-2" size={18} />
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search Role by title, name, or keywords"
//             className="text-sm outline-none placeholder-gray-500 bg-transparent w-full"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center space-x-3">
//           <button className="flex items-center text-sm px-4 py-2 bg-white border border-gray-300 text-black rounded-md">
//             <Filter size={16} className="mr-2" />
//             Filter
//           </button>

//           <button className="p-2 rounded-md bg-[#F3F4F5]">
//             <List size={18} className="text-black" />
//           </button>

//           <button className="p-2 rounded-md bg-white border border-gray-300">
//             <LayoutGrid size={18} className="text-black" />
//           </button>
//         </div>
//       </div>

//       {/* Choose filter buttons */}
//       <div className="mt-6 flex space-x-4 border-b border-gray-200 pb-2">
//         {departments.map((dept) => (
//           <button
//             key={dept}
//             onClick={() => setActiveFilter(dept)}
//             className={`text-sm font-medium pb-2 ${
//               activeFilter === dept
//                 ? "text-[#34BC68] border-b-2 border-[#34BC68]"
//                 : "text-black"
//             }`}
//           >
//             {dept}
//           </button>
//         ))}
//       </div>

//       {/* Role cards */}
//       <div className="mt-6 flex flex-wrap gap-6">
//         {filteredRoles.map((role) => (
//           <div
//             key={role.id}
//             className="bg-white border border-gray-200 rounded-xl p-4 w-[48%] space-y-3"
//           >
//             {/* Title + icons */}
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-semibold text-black">
//                 {role.title}
//               </h3>
//               <div className="flex items-center space-x-[-8px]">
//                 {[1, 2, 3, 4, 5].map((i) => (
//                   <img
//                     key={i}
//                     src={userImg}
//                     className="w-6 h-6 rounded-full border-2 border-white"
//                     alt=""
//                   />
//                 ))}
//                 <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#34BC68] text-white text-xs font-bold border-2 border-white">
//                   +
//                 </div>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-sm text-gray-600">{role.description}</p>

//             {/* Tag list */}
//             <div className="flex flex-wrap gap-2">
//               {role.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="bg-[#F3F4F5] text-sm px-3 py-1 rounded-full text-gray-700"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Lead info */}
//             <div className="flex items-center justify-between pt-2">
//               <div className="flex items-center space-x-3">
//                 <img
//                   src={role.lead.img}
//                   alt={role.lead.name}
//                   className="w-9 h-9 rounded-full object-cover"
//                 />
//                 <div>
//                   <div className="text-sm font-medium text-black">
//                     {role.lead.name}
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     {role.lead.role}
//                   </div>
//                 </div>
//               </div>
//               <ArrowRight size={18} className="text-gray-400" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RoleBox;

// import { Filter, List, LayoutGrid, Search, ArrowRight } from "lucide-react";
// import userImg from "../assets/kob.jpg";
// import { useState } from "react";

// // Sample role data
// const roleData = [
//   {
//     id: 1,
//     title: "Team Lead",
//     tags: ["Marketing", "Product", "Engineering", "Design"],
//     description:
//       "This role manages team communication, timelines, and project goals This role manages team communication, timelines, and project goals This role manages team communication, timelines, and project goals.This role manages team communication, timelines, and project goals",
//     team: "Product",
//     lead: { name: "James Brayan", role: "Manager", img: userImg },
//   },
//   {
//     id: 2,
//     title: "Recruiter",
//     tags: ["Recruitment", "HR", "People"],
//     description: "Responsible for sourcing and onboarding new talent Responsible for sourcing and onboarding new talent Responsible for sourcing and onboarding new talent Responsible for sourcing and onboarding new talent Responsible for sourcing and onboarding new talentResponsible for sourcing and onboarding new talent.",
//     team: "Recruitment",
//     lead: { name: "Sarah K.", role: "Senior Recruiter", img: userImg },
//   },
//   // {
//   //   id: 3,
//   //   title: "Sales Executive",
//   //   tags: ["Sales", "CRM", "Leads"],
//   //   description: "Handles client acquisition and lead management.",
//   //   team: "Sales",
//   //   lead: { name: "David Lin", role: "Executive", img: userImg },
//   // },
// ];

// const departments = [
//   "All",
//   "Product",
//   "Engineering",
//   "Marketing",
//   "Recruitment",
//   "Sales",
//   "Customer Services",
// ];

// const RoleBox = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredRoles = roleData.filter((role) => {
//     const matchSearch = `${role.title} ${role.description} ${role.lead.name}`
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     const matchDept =
//       activeFilter === "All" || role.team === activeFilter;

//     return matchSearch && matchDept;
//   });

//   return (
//     <div className="px-10 pt-3">
//       {/* Top action box */}
//       <div className="flex items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-xl">
//         {/* Search */}
//         <div className="flex items-center w-full max-w-md bg-transparent">
//           <Search className="text-black mr-2" size={18} />
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search Role by title, name, or keywords"
//             className="text-sm outline-none placeholder-gray-500 bg-transparent w-full"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center space-x-3">
//           <button className="flex items-center text-sm px-4 py-2 bg-white border border-gray-300 text-black rounded-md">
//             <Filter size={16} className="mr-2" />
//             Filter
//           </button>

//           <button className="p-2 rounded-md bg-[#F3F4F5]">
//             <List size={18} className="text-black" />
//           </button>

//           <button className="p-2 rounded-md bg-white border border-gray-300">
//             <LayoutGrid size={18} className="text-black" />
//           </button>
//         </div>
//       </div>

//       {/* Choose filter buttons */}
//       <div className="mt-6 flex space-x-4 border-b border-gray-200 pb-2">
//         {departments.map((dept) => (
//           <button
//             key={dept}
//             onClick={() => setActiveFilter(dept)}
//             className={`text-sm font-medium pb-2 ${
//               activeFilter === dept
//                 ? "text-[#34BC68] border-b-2 border-[#34BC68]"
//                 : "text-black"
//             }`}
//           >
//             {dept}
//           </button>
//         ))}
//       </div>

//       {/* Role cards */}
//       <div className="mt-6 flex flex-wrap gap-6">
//         {filteredRoles.map((role) => (
//           <div
//             key={role.id}
//             className="bg-white border border-gray-200 rounded-xl p-4 w-[48%] space-y-3"
//           >
//             {/* Title + icons */}
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-semibold text-black">
//                 {role.title}
//               </h3>
//               <div className="flex items-center space-x-[-8px]">
//                 {[1, 2, 3, 4, 5].map((i) => (
//                   <img
//                     key={i}
//                     src={userImg}
//                     className="w-6 h-6 rounded-full border-2 border-white"
//                     alt=""
//                   />
//                 ))}
//                 <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#34BC68] text-white text-xs font-bold border-2 border-white">
//                   +
//                 </div>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-sm text-gray-600">{role.description}</p>

//             {/* Tag list */}
//             <div className="flex flex-wrap gap-2">
//               {role.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="bg-[#F3F4F5] text-sm px-3 py-1 rounded-full text-gray-700"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Lead info */}
//             <div className="flex items-center justify-between pt-2">
//               <div className="flex items-center space-x-3">
//                 <img
//                   src={role.lead.img}
//                   alt={role.lead.name}
//                   className="w-9 h-9 rounded-full object-cover"
//                 />
//                 <div>
//                   <div className="text-sm font-medium text-black">
//                     {role.lead.name}
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     {role.lead.role}
//                   </div>
//                 </div>
//               </div>
//               <ArrowRight size={18} className="text-gray-400" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RoleBox;




// import {
//     Filter,
//     List,
//     LayoutGrid,
//     Search,
//     MoreVertical,
//     ArrowLeft,
//     ArrowRight,
//   } from "lucide-react";
//   import userImg from "../assets/kob.jpg";
//   import { useState } from "react";
//   import { useEffect, useRef } from "react";
  
  
//   const RoleBox = () => {
//     const [showMenu, setShowMenu] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [activeMenuIndex, setActiveMenuIndex] = useState(null);
//     const usersPerPage = 4;
//     const dropdownRef = useRef(null);
//     const [searchQuery, setSearchQuery] = useState("");
  
  
  
//     const users = [
//       {
//         name: "Ali Jouro",
//         email: "ali.jouro@email.com",
//         id: "#12FC4V56979",
//         role: "Product Manager",
//         type: "Full time",
//         status: "Active",
//         team: "Marketing",
//         statusColor: "green",
//       },
//       {
//         name: "Sofia Lin",
//         email: "sofia.lin@company.com",
//         id: "#88FCV1234",
//         role: "UX Designer",
//         type: "Full time",
//         status: "Inactive",
//         team: "Design",
//         statusColor: "red",
//       },
//       {
//         name: "Sofia Lin",
//         email: "sofia.lin@company.com",
//         id: "#88FCV1234",
//         role: "UX Designer",
//         type: "Full time",
//         status: "Inactive",
//         team: "Design",
//         statusColor: "red",
//       },
//       {
//         name: "Liam Ben",
//         email: "liam.ben@company.com",
//         id: "#19KD8210",
//         role: "Backend Developer",
//         type: "Part time",
//         status: "Active",
//         team: "Engineering",
//         statusColor: "green",
//       },
//       {
//         name: "Emily Rose",
//         email: "emily.rose@company.com",
//         id: "#45AC2000",
//         role: "HR Officer",
//         type: "Full time",
//         status: "Inactive",
//         team: "HR",
//         statusColor: "red",
//       },
//       {
//         name: "James Wu",
//         email: "james.wu@company.com",
//         id: "#93VU1029",
//         role: "Frontend Developer",
//         type: "Full time",
//         status: "Active",
//         team: "Engineering",
//         statusColor: "green",
//       },
//       {
//         name: "Hana Yuki",
//         email: "hana.yuki@company.com",
//         id: "#54FR9210",
//         role: "QA Tester",
//         type: "Contract",
//         status: "Inactive",
//         team: "Quality",
//         statusColor: "red",
//       },
//       {
//         name: "Marcus Li",
//         email: "marcus.li@company.com",
//         id: "#29FE9183",
//         role: "Finance Analyst",
//         type: "Full time",
//         status: "Active",
//         team: "Finance",
//         statusColor: "green",
//       },
//       {
//         name: "Rachel Zed",
//         email: "rachel.zed@company.com",
//         id: "#61XY8201",
//         role: "Data Scientist",
//         type: "Full time",
//         status: "Active",
//         team: "Data",
//         statusColor: "green",
//       },
//     ];
  
//     useEffect(() => {
//       const handleClickOutside = (event) => {
//         if (
//           dropdownRef.current &&
//           !dropdownRef.current.contains(event.target)
//         ) {
//           setActiveMenuIndex(null);
//         }
//       };
    
//       document.addEventListener("mousedown", handleClickOutside);
    
//       return () => {
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, []);
    
//     const filteredUsers = users.filter((user) =>
//       `${user.name} ${user.email} ${user.role} ${user.id} ${user.team}`
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase())
//     );
    
//     const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    
//     const currentData = filteredUsers.slice(
//       (currentPage - 1) * usersPerPage,
//       currentPage * usersPerPage
//     );
  
//     const handlePageChange = (page) => {
//       if (page >= 1 && page <= totalPages) {
//         setCurrentPage(page);
//       }
//     };
  
    
  
//     return (
//       <div className="px-10 pt-3">
//         {/* Top action box */}
//         <div className="flex items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-xl">
//           {/* Search */}
//           <div className="flex items-center w-full max-w-md bg-transparent">
//             <Search className="text-black mr-2" size={18} />
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search Employee by name, role, ID or any related keywords"
//               className="text-sm outline-none placeholder-gray-500 bg-transparent w-full"
//             />
//           </div>
          
//           {/* Buttons */}
//           <div className="flex items-center space-x-3">
//             <button className="flex items-center text-sm px-4 py-2 bg-white border border-gray-300 text-black rounded-md">
//               <Filter size={16} className="mr-2" />
//               Filter
//             </button>
  
//             <button className="p-2 rounded-md bg-[#F3F4F5]">
//               <List size={18} className="text-black" />
//             </button>
  
//             <button className="p-2 rounded-md bg-white border border-gray-300">
//               <LayoutGrid size={18} className="text-black" />
//             </button>
//           </div>
//         </div>
        
//         {/* Table */}
//         <div className="mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden">
//           <table className="w-full text-left text-sm">
//             <thead className="bg-[#f8f8f8] text-gray-600">
//               <tr>
//                 <th className="px-4 py-3"><input type="checkbox" /></th>
//                 <th className="px-4 py-3">Name</th>
//                 <th className="px-4 py-3">Employee ID</th>
//                 <th className="px-4 py-3">Role</th>
//                 <th className="px-4 py-3">Status</th>
//                 <th className="px-4 py-3">Teams</th>
//                 <th className="px-4 py-3"></th>
//               </tr>
//             </thead>
//             <tbody className="text-black">
//               {currentData.map((user, index) => (
  
//               <tr key={index} className="border-t border-gray-200">
  
//                   <td className="px-4 py-4"><input type="checkbox" /></td>
//                   <td className="px-4 py-4">
//                     <div className="flex items-center space-x-3">
  
//                     <div className="relative w-10 h-10">
//                       <img
//                         src={userImg}
//                         alt="user"
//                         className="w-10 h-10 rounded-full object-cover"
//                       />
//                       {user.status === "Active" && (
//                         <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
//                       )}
//                     </div>
  
//                       <div>
//                         <div className="font-medium">{user.name}</div>
//                         <div className="text-[#7C7C7C] text-xs">{user.email}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-4 py-4">
//                     <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">{user.id}</span>
//                   </td>
//                   <td className="px-4 py-4">
//                     <div className="font-medium">{user.role}</div>
//                     <div className="text-xs text-gray-500">{user.type}</div>
//                   </td>
//                   <td className="px-4 py-4">
//                     <div
//                       className={`inline-flex items-center bg-[#f0f0f0] text-xs px-3 py-1 rounded-full ${
//                         user.statusColor === "green" ? "text-green-600" : "text-red-600"
//                       }`}
//                     >
//                       <span
//                         className={`w-2 h-2 rounded-full mr-2 ${
//                           user.statusColor === "green" ? "bg-green-600" : "bg-red-600"
//                         }`}
//                       ></span>
//                       {user.status}
//                     </div>
//                   </td>
                  
//                   <td className="px-4 py-4 font-medium">
//                     <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">
//                       {user.team}
//                     </span>
//                     </td>
  
//                     <td className="px-4 py-4 text-right relative">
//                       <button onClick={() => setActiveMenuIndex(index === activeMenuIndex ? null : index)}>
//                         <MoreVertical size={18} />
//                       </button>
  
//                       {activeMenuIndex === index && (
//                         <div
//                           ref={dropdownRef}
//                           className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md text-sm z-10"
//                         >
//                           <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Detail</div>
//                         </div>
//                       )}
//                     </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
  
//           {/* Pagination */}
//           <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
//             {/* Previous */}
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md"
//               disabled={currentPage === 1}
//             >
//               <ArrowLeft size={16} className="mr-1" />
//               Previous
//             </button>
  
//             {/* Page Numbers */}
//             <div className="flex items-center space-x-2">
//               {(() => {
//                   const pages = [];
//                   const maxVisible = 6;
//                   const start = Math.max(2, currentPage - 1);
//                   const end = Math.min(totalPages - 1, currentPage + 1);
  
//                   pages.push(
//                       <button
//                       key={1}
//                       onClick={() => handlePageChange(1)}
//                       className={`px-3 py-[6px] text-sm rounded-md font-medium ${
//                           currentPage === 1 ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
//                       }`}
//                       >
//                       1
//                       </button>
//                   );
//                   if (start > 2) pages.push(<span key="start-ellipsis">...</span>);
//                   for (let i = start; i <= end; i++) {
//                       pages.push(
//                       <button
//                           key={i}
//                           onClick={() => handlePageChange(i)}
//                           className={`px-3 py-[6px] text-sm rounded-md font-medium ${
//                           currentPage === i ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
//                           }`}
//                       >
//                           {i}
//                       </button>
//                       );
//                   }
  
//                   if (end < totalPages - 1) pages.push(<span key="end-ellipsis">...</span>);
  
//                   if (totalPages > 1) {
//                       pages.push(
//                       <button
//                           key={totalPages}
//                           onClick={() => handlePageChange(totalPages)}
//                           className={`px-3 py-[6px] text-sm rounded-md font-medium ${
//                           currentPage === totalPages ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
//                           }`}
//                       >
//                           {totalPages}
//                       </button>
//                       );
//                   }
  
//               return pages;
//           })()}
//             </div>
  
//             {/* Next */}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md"
//               disabled={currentPage === totalPages}
//             >
//               Next
//               <ArrowRight size={16} className="ml-1" />
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default RoleBox;