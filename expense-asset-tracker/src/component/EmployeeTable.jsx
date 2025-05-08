import {
  Filter,
  List,
  LayoutGrid,
  Search,
  MoreVertical,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import userImg from "../assets/kob.jpg";
import { useState } from "react";
import { useEffect, useRef } from "react";


const EmployeeTable = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const usersPerPage = 4;
  const dropdownRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");



  const users = [
    {
      name: "Ali Jouro",
      email: "ali.jouro@email.com",
      id: "#12FC4V56979",
      role: "Product Manager",
      type: "Full time",
      status: "Active",
      team: "Marketing",
      statusColor: "green",
    },
    {
      name: "Ali Jouro",
      email: "ali.jouro@email.com",
      id: "#12FC4V56979",
      role: "Product Manager",
      type: "Full time",
      status: "Active",
      team: "Marketing",
      statusColor: "green",
    },
    {
      name: "Ali Jouro",
      email: "ali.jouro@email.com",
      id: "#12FC4V56979",
      role: "Product Manager",
      type: "Full time",
      status: "Active",
      team: "Marketing",
      statusColor: "green",
    },
    {
      name: "Ali Jouro",
      email: "ali.jouro@email.com",
      id: "#12FC4V56979",
      role: "Product Manager",
      type: "Full time",
      status: "Active",
      team: "Marketing",
      statusColor: "green",
    },
    
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveMenuIndex(null);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.role} ${user.id} ${user.team}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  
  const currentData = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  
  return (
    <div className="px-4 md:px-10 pt-3">
      {/* Top action box */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-xl space-y-4 md:space-y-0">
        {/* Search */}
        <div className="flex items-center w-full max-w-md bg-transparent">
          <Search className="text-black mr-2" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Employee by name, role, ID or any related keywords"
            className="text-sm outline-none placeholder-gray-500 bg-transparent w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-3 w-full md:w-auto">
          <button className="flex items-center text-sm w-full md:w-auto px-4 py-2 bg-white border border-gray-300 text-black rounded-md">
            <Filter size={16} className="mr-2" />
            Filter
          </button>
          <button className="p-2 w-full md:w-auto rounded-md bg-[#F3F4F5] flex items-center justify-center">
            <List size={18} className="text-black" />
          </button>
          <button className="p-2 w-full md:w-auto rounded-md bg-white border border-gray-300 flex items-center justify-center">
            <LayoutGrid size={18} className="text-black" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="mt-4 bg-white border border-gray-200 rounded-xl overflow-x-auto">
        <table className="w-full text-left text-sm min-w-[700px]">
          <thead className="bg-[#f8f8f8] text-gray-600">
            <tr>
              <th className="px-4 py-3"><input type="checkbox" /></th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Employee ID</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Teams</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="text-black">
            {currentData.map((user, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-4"><input type="checkbox" /></td>
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10">
                      <img
                        src={userImg}
                        alt="user"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {user.status === "Active" && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-[#7C7C7C] text-xs">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">{user.id}</span>
                </td>
                <td className="px-4 py-4">
                  <div className="font-medium">{user.role}</div>
                  <div className="text-xs text-gray-500">{user.type}</div>
                </td>
                <td className="px-4 py-4">
                  <div className={`inline-flex items-center bg-[#f0f0f0] text-xs px-3 py-1 rounded-full ${
                    user.statusColor === "green" ? "text-green-600" : "text-red-600"
                  }`}>
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      user.statusColor === "green" ? "bg-green-600" : "bg-red-600"
                    }`} />
                    {user.status}
                  </div>
                </td>
                <td className="px-4 py-4 font-medium">
                  <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">{user.team}</span>
                </td>
                <td className="px-4 py-4 text-right relative">
                  <button onClick={() => setActiveMenuIndex(index === activeMenuIndex ? null : index)}>
                    <MoreVertical size={18} />
                  </button>

                  {activeMenuIndex === index && (
                    <div
                      ref={dropdownRef}
                      className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md text-sm z-10"
                    >
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Detail</div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t border-gray-200 text-sm text-gray-600 space-y-4 md:space-y-0">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md"
            disabled={currentPage === 1}
          >
            <ArrowLeft size={16} className="mr-1" />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-2">
            {(() => {
              const pages = [];
              const maxVisible = 6;
              const start = Math.max(2, currentPage - 1);
              const end = Math.min(totalPages - 1, currentPage + 1);

              pages.push(
                <button
                  key={1}
                  onClick={() => handlePageChange(1)}
                  className={`px-3 py-[6px] text-sm rounded-md font-medium ${
                    currentPage === 1 ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
                  }`}
                >
                  1
                </button>
              );
              if (start > 2) pages.push(<span key="start-ellipsis">...</span>);
              for (let i = start; i <= end; i++) {
                pages.push(
                  <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-[6px] text-sm rounded-md font-medium ${
                      currentPage === i ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
                    }`}
                  >
                    {i}
                  </button>
                );
              }
              if (end < totalPages - 1) pages.push(<span key="end-ellipsis">...</span>);
              if (totalPages > 1) {
                pages.push(
                  <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className={`px-3 py-[6px] text-sm rounded-md font-medium ${
                      currentPage === totalPages ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
                    }`}
                  >
                    {totalPages}
                  </button>
                );
              }
              return pages;
            })()}
          </div>

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md"
            disabled={currentPage === totalPages}
          >
            Next
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;

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
//             placeholder="Search Employee by name, role, ID or any related keywords"
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
      
//       {/* Table */}
//       <div className="mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden">
//         <table className="w-full text-left text-sm">
//           <thead className="bg-[#f8f8f8] text-gray-600">
//             <tr>
//               <th className="px-4 py-3"><input type="checkbox" /></th>
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Employee ID</th>
//               <th className="px-4 py-3">Role</th>
//               <th className="px-4 py-3">Status</th>
//               <th className="px-4 py-3">Teams</th>
//               <th className="px-4 py-3"></th>
//             </tr>
//           </thead>
//           <tbody className="text-black">
//             {currentData.map((user, index) => (

//             <tr key={index} className="border-t border-gray-200">

//                 <td className="px-4 py-4"><input type="checkbox" /></td>
//                 <td className="px-4 py-4">
//                   <div className="flex items-center space-x-3">

//                   <div className="relative w-10 h-10">
//                     <img
//                       src={userImg}
//                       alt="user"
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     {user.status === "Active" && (
//                       <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
//                     )}
//                   </div>

//                     <div>
//                       <div className="font-medium">{user.name}</div>
//                       <div className="text-[#7C7C7C] text-xs">{user.email}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-4 py-4">
//                   <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">{user.id}</span>
//                 </td>
//                 <td className="px-4 py-4">
//                   <div className="font-medium">{user.role}</div>
//                   <div className="text-xs text-gray-500">{user.type}</div>
//                 </td>
//                 <td className="px-4 py-4">
//                   <div
//                     className={`inline-flex items-center bg-[#f0f0f0] text-xs px-3 py-1 rounded-full ${
//                       user.statusColor === "green" ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     <span
//                       className={`w-2 h-2 rounded-full mr-2 ${
//                         user.statusColor === "green" ? "bg-green-600" : "bg-red-600"
//                       }`}
//                     ></span>
//                     {user.status}
//                   </div>
//                 </td>
                
//                 <td className="px-4 py-4 font-medium">
//                   <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">
//                     {user.team}
//                   </span>
//                   </td>

//                   <td className="px-4 py-4 text-right relative">
//                     <button onClick={() => setActiveMenuIndex(index === activeMenuIndex ? null : index)}>
//                       <MoreVertical size={18} />
//                     </button>

//                     {activeMenuIndex === index && (
//                       <div
//                         ref={dropdownRef}
//                         className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md text-sm z-10"
//                       >
//                         <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Detail</div>
//                       </div>
//                     )}
//                   </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
//           {/* Previous */}
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md"
//             disabled={currentPage === 1}
//           >
//             <ArrowLeft size={16} className="mr-1" />
//             Previous
//           </button>

//           {/* Page Numbers */}
//           <div className="flex items-center space-x-2">
//             {(() => {
//                 const pages = [];
//                 const maxVisible = 6;
//                 const start = Math.max(2, currentPage - 1);
//                 const end = Math.min(totalPages - 1, currentPage + 1);

//                 pages.push(
//                     <button
//                     key={1}
//                     onClick={() => handlePageChange(1)}
//                     className={`px-3 py-[6px] text-sm rounded-md font-medium ${
//                         currentPage === 1 ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
//                     }`}
//                     >
//                     1
//                     </button>
//                 );
//                 if (start > 2) pages.push(<span key="start-ellipsis">...</span>);
//                 for (let i = start; i <= end; i++) {
//                     pages.push(
//                     <button
//                         key={i}
//                         onClick={() => handlePageChange(i)}
//                         className={`px-3 py-[6px] text-sm rounded-md font-medium ${
//                         currentPage === i ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
//                         }`}
//                     >
//                         {i}
//                     </button>
//                     );
//                 }

//                 if (end < totalPages - 1) pages.push(<span key="end-ellipsis">...</span>);

//                 if (totalPages > 1) {
//                     pages.push(
//                     <button
//                         key={totalPages}
//                         onClick={() => handlePageChange(totalPages)}
//                         className={`px-3 py-[6px] text-sm rounded-md font-medium ${
//                         currentPage === totalPages ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
//                         }`}
//                     >
//                         {totalPages}
//                     </button>
//                     );
//                 }

//             return pages;
//         })()}
//           </div>

//           {/* Next */}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md"
//             disabled={currentPage === totalPages}
//           >
//             Next
//             <ArrowRight size={16} className="ml-1" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeTable;

// import {
//   Filter,
//   List,
//   LayoutGrid,
//   Search,
//   MoreVertical,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";
// import userImg from "../assets/kob.jpg";
// import { useState } from "react";
// import { useEffect, useRef } from "react";


// const EmployeeTable = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [activeMenuIndex, setActiveMenuIndex] = useState(null);
//   const usersPerPage = 4;
//   const dropdownRef = useRef(null);
//   const [searchQuery, setSearchQuery] = useState("");



//   const users = [
//     {
//       name: "Ali Jouro",
//       email: "ali.jouro@email.com",
//       id: "#12FC4V56979",
//       role: "Product Manager",
//       type: "Full time",
//       status: "Active",
//       team: "Marketing",
//       statusColor: "green",
//     },
//     {
//       name: "Sofia Lin",
//       email: "sofia.lin@company.com",
//       id: "#88FCV1234",
//       role: "UX Designer",
//       type: "Full time",
//       status: "Inactive",
//       team: "Design",
//       statusColor: "red",
//     },
//     {
//       name: "Sofia Lin",
//       email: "sofia.lin@company.com",
//       id: "#88FCV1234",
//       role: "UX Designer",
//       type: "Full time",
//       status: "Inactive",
//       team: "Design",
//       statusColor: "red",
//     },
//     {
//       name: "Liam Ben",
//       email: "liam.ben@company.com",
//       id: "#19KD8210",
//       role: "Backend Developer",
//       type: "Part time",
//       status: "Active",
//       team: "Engineering",
//       statusColor: "green",
//     },
//     {
//       name: "Emily Rose",
//       email: "emily.rose@company.com",
//       id: "#45AC2000",
//       role: "HR Officer",
//       type: "Full time",
//       status: "Inactive",
//       team: "HR",
//       statusColor: "red",
//     },
//     {
//       name: "James Wu",
//       email: "james.wu@company.com",
//       id: "#93VU1029",
//       role: "Frontend Developer",
//       type: "Full time",
//       status: "Active",
//       team: "Engineering",
//       statusColor: "green",
//     },
//     {
//       name: "Hana Yuki",
//       email: "hana.yuki@company.com",
//       id: "#54FR9210",
//       role: "QA Tester",
//       type: "Contract",
//       status: "Inactive",
//       team: "Quality",
//       statusColor: "red",
//     },
//     {
//       name: "Marcus Li",
//       email: "marcus.li@company.com",
//       id: "#29FE9183",
//       role: "Finance Analyst",
//       type: "Full time",
//       status: "Active",
//       team: "Finance",
//       statusColor: "green",
//     },
//     {
//       name: "Rachel Zed",
//       email: "rachel.zed@company.com",
//       id: "#61XY8201",
//       role: "Data Scientist",
//       type: "Full time",
//       status: "Active",
//       team: "Data",
//       statusColor: "green",
//     },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target)
//       ) {
//         setActiveMenuIndex(null);
//       }
//     };
  
//     document.addEventListener("mousedown", handleClickOutside);
  
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
  
//   const filteredUsers = users.filter((user) =>
//     `${user.name} ${user.email} ${user.role} ${user.id} ${user.team}`
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase())
//   );
  
//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  
//   const currentData = filteredUsers.slice(
//     (currentPage - 1) * usersPerPage,
//     currentPage * usersPerPage
//   );

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

  

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
//             placeholder="Search Employee by name, role, ID or any related keywords"
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
      
//       {/* Table */}
//       <div className="mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden">
//         <table className="w-full text-left text-sm">
//           <thead className="bg-[#f8f8f8] text-gray-600">
//             <tr>
//               <th className="px-4 py-3"><input type="checkbox" /></th>
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Employee ID</th>
//               <th className="px-4 py-3">Role</th>
//               <th className="px-4 py-3">Status</th>
//               <th className="px-4 py-3">Teams</th>
//               <th className="px-4 py-3"></th>
//             </tr>
//           </thead>
//           <tbody className="text-black">
//             {currentData.map((user, index) => (

//             <tr key={index} className="border-t border-gray-200">

//                 <td className="px-4 py-4"><input type="checkbox" /></td>
//                 <td className="px-4 py-4">
//                   <div className="flex items-center space-x-3">

//                   <div className="relative w-10 h-10">
//                     <img
//                       src={userImg}
//                       alt="user"
//                       className="w-10 h-10 rounded-full object-cover"
//                     />
//                     {user.status === "Active" && (
//                       <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
//                     )}
//                   </div>

//                     <div>
//                       <div className="font-medium">{user.name}</div>
//                       <div className="text-[#7C7C7C] text-xs">{user.email}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-4 py-4">
//                   <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">{user.id}</span>
//                 </td>
//                 <td className="px-4 py-4">
//                   <div className="font-medium">{user.role}</div>
//                   <div className="text-xs text-gray-500">{user.type}</div>
//                 </td>
//                 <td className="px-4 py-4">
//                   <div
//                     className={`inline-flex items-center bg-[#f0f0f0] text-xs px-3 py-1 rounded-full ${
//                       user.statusColor === "green" ? "text-green-600" : "text-red-600"
//                     }`}
//                   >
//                     <span
//                       className={`w-2 h-2 rounded-full mr-2 ${
//                         user.statusColor === "green" ? "bg-green-600" : "bg-red-600"
//                       }`}
//                     ></span>
//                     {user.status}
//                   </div>
//                 </td>
                
//                 <td className="px-4 py-4 font-medium">
//                   <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">
//                     {user.team}
//                   </span>
//                   </td>

//                   <td className="px-4 py-4 text-right relative">
//                     <button onClick={() => setActiveMenuIndex(index === activeMenuIndex ? null : index)}>
//                       <MoreVertical size={18} />
//                     </button>

//                     {activeMenuIndex === index && (
//                       <div
//                         ref={dropdownRef}
//                         className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md text-sm z-10"
//                       >
//                         <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Detail</div>
//                       </div>
//                     )}
//                   </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
//           {/* Previous */}
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md"
//             disabled={currentPage === 1}
//           >
//             <ArrowLeft size={16} className="mr-1" />
//             Previous
//           </button>

//           {/* Page Numbers */}
//           <div className="flex items-center space-x-2">
//             {(() => {
//                 const pages = [];
//                 const maxVisible = 6;
//                 const start = Math.max(2, currentPage - 1);
//                 const end = Math.min(totalPages - 1, currentPage + 1);

//                 pages.push(
//                     <button
//                     key={1}
//                     onClick={() => handlePageChange(1)}
//                     className={`px-3 py-[6px] text-sm rounded-md font-medium ${
//                         currentPage === 1 ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
//                     }`}
//                     >
//                     1
//                     </button>
//                 );
//                 if (start > 2) pages.push(<span key="start-ellipsis">...</span>);
//                 for (let i = start; i <= end; i++) {
//                     pages.push(
//                     <button
//                         key={i}
//                         onClick={() => handlePageChange(i)}
//                         className={`px-3 py-[6px] text-sm rounded-md font-medium ${
//                         currentPage === i ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
//                         }`}
//                     >
//                         {i}
//                     </button>
//                     );
//                 }

//                 if (end < totalPages - 1) pages.push(<span key="end-ellipsis">...</span>);

//                 if (totalPages > 1) {
//                     pages.push(
//                     <button
//                         key={totalPages}
//                         onClick={() => handlePageChange(totalPages)}
//                         className={`px-3 py-[6px] text-sm rounded-md font-medium ${
//                         currentPage === totalPages ? "bg-[#E1EDE6] text-black" : "text-black hover:bg-gray-100"
//                         }`}
//                     >
//                         {totalPages}
//                     </button>
//                     );
//                 }

//             return pages;
//         })()}
//           </div>

//           {/* Next */}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md"
//             disabled={currentPage === totalPages}
//           >
//             Next
//             <ArrowRight size={16} className="ml-1" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeTable;


// import {
//   Filter,
//   List,
//   LayoutGrid,
//   Search,
//   MoreVertical,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";
// import userImg from "../assets/kob.jpg";
// import { useState } from "react";

// const EmployeeTable = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="px-10 pt-3">
//       {/* Top action box */}
//       <div className="flex items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-xl">
//         {/* Search */}
//         <div className="flex items-center w-full max-w-md bg-transparent">
//           <Search className="text-black mr-2" size={18} />
//           <input
//             type="text"
//             placeholder="Search Employee by name, role, ID or any related keywords"
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

//       {/* Table */}
//       <div className="mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden">
//         <table className="w-full text-left text-sm">
//           <thead className="bg-[#f8f8f8] text-gray-600">
//             <tr>
//               <th className="px-4 py-3">
//                 <input type="checkbox" />
//               </th>
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Employee ID</th>
//               <th className="px-4 py-3">Role</th>
//               <th className="px-4 py-3">Status</th>
//               <th className="px-4 py-3">Teams</th>
//               <th className="px-4 py-3"></th>
//             </tr>
//           </thead>
//           <tbody className="text-black">
//             <tr className="border-t">
//               {/* Checkbox */}
//               <td className="px-4 py-4">
//                 <input type="checkbox" />
//               </td>

//               {/* Name */}
//               <td className="px-4 py-4">
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src={userImg}
//                     alt="user"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div>
//                     <div className="font-medium">Ali Jouro</div>
//                     <div className="text-[#7C7C7C] text-xs">ali.jouro@email.com</div>
//                   </div>
//                 </div>
//               </td>

//               {/* ID */}
//               <td className="px-4 py-4">
//                 <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">
//                   #12FC4V56979
//                 </span>
//               </td>

//               {/* Role */}
//               <td className="px-4 py-4">
//                 <div className="font-medium">Product Manager</div>
//                 <div className="text-xs text-gray-500">Full time</div>
//               </td>

//               {/* Status */}
//               <td className="px-4 py-4">
//                 <div className="inline-flex items-center bg-[#f0f0f0] text-green-600 text-xs px-3 py-1 rounded-full">
//                   <span className="w-2 h-2 rounded-full bg-green-600 mr-2"></span>
//                   Active
//                 </div>
//               </td>

//               {/* Teams */}
//               <td className="px-4 py-4">
//                 <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">
//                   Marketing
//                 </span>
//               </td>

//               {/* Menu Icon */}
//               <td className="px-4 py-4 text-right relative">
//                 <button onClick={() => setShowMenu(!showMenu)}>
//                   <MoreVertical size={18} />
//                 </button>
//                 {showMenu && (
//                   <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md text-sm z-10">
//                     <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Detail</div>
//                   </div>
//                 )}
//               </td>
//             </tr>
//             {[
//     {
//       name: "Sofia Lin",
//       email: "sofia.lin@company.com",
//       id: "#88FCV1234",
//       role: "UX Designer",
//       type: "Full time",
//       status: "Inactive",
//       team: "Design",
//       statusColor: "red",
//     },
//     {
//       name: "Liam Ben",
//       email: "liam.ben@company.com",
//       id: "#19KD8210",
//       role: "Backend Developer",
//       type: "Part time",
//       status: "Active",
//       team: "Engineering",
//       statusColor: "green",
//     },
//     {
//       name: "Emily Rose",
//       email: "emily.rose@company.com",
//       id: "#45AC2000",
//       role: "HR Officer",
//       type: "Full time",
//       status: "Inactive",
//       team: "HR",
//       statusColor: "red",
//     },
//     {
//       name: "James Wu",
//       email: "james.wu@company.com",
//       id: "#93VU1029",
//       role: "Frontend Developer",
//       type: "Full time",
//       status: "Active",
//       team: "Engineering",
//       statusColor: "green",
//     },
//     {
//       name: "Hana Yuki",
//       email: "hana.yuki@company.com",
//       id: "#54FR9210",
//       role: "QA Tester",
//       type: "Contract",
//       status: "Inactive",
//       team: "Quality",
//       statusColor: "red",
//     },
//     {
//       name: "Marcus Li",
//       email: "marcus.li@company.com",
//       id: "#29FE9183",
//       role: "Finance Analyst",
//       type: "Full time",
//       status: "Active",
//       team: "Finance",
//       statusColor: "green",
//     },
//     {
//       name: "Rachel Zed",
//       email: "rachel.zed@company.com",
//       id: "#61XY8201",
//       role: "Data Scientist",
//       type: "Full time",
//       status: "Active",
//       team: "Data",
//       statusColor: "green",
//     },
//   ].map((user, index) => (
//     <tr key={index} className="border-t">
//       <td className="px-4 py-4"><input type="checkbox" /></td>
//       <td className="px-4 py-4">
//         <div className="flex items-center space-x-3">
//           <img src={userImg} alt="user" className="w-10 h-10 rounded-full object-cover" />
//           <div>
//             <div className="font-medium">{user.name}</div>
//             <div className="text-[#7C7C7C] text-xs">{user.email}</div>
//           </div>
//         </div>
//       </td>
//       <td className="px-4 py-4">
//         <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">{user.id}</span>
//       </td>
//       <td className="px-4 py-4">
//         <div className="font-medium">{user.role}</div>
//         <div className="text-xs text-gray-500">{user.type}</div>
//       </td>
//       <td className="px-4 py-4">
//         <div
//           className={`inline-flex items-center bg-[#f0f0f0] text-xs px-3 py-1 rounded-full ${
//             user.statusColor === "green" ? "text-green-600" : "text-red-600"
//           }`}
//         >
//           <span
//             className={`w-2 h-2 rounded-full mr-2 ${
//               user.statusColor === "green" ? "bg-green-600" : "bg-red-600"
//             }`}
//           ></span>
//           {user.status}
//         </div>
//       </td>
//       <td className="px-4 py-4 font-medium">{user.team}</td>
//       <td className="px-4 py-4 text-right">
//         <MoreVertical size={18} />
//       </td>
//     </tr>
//      ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
//           {/* Previous */}
//           <button className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md">
//             <ArrowLeft size={16} className="mr-1" />
//             Previous
//           </button>

//           {/* Page Numbers */}
//           <div className="flex items-center space-x-2">
//             <span className="px-3 py-[6px] bg-[#E1EDE6] text-black rounded-md text-sm font-medium">
//               1
//             </span>
//             <span className="px-3 py-[6px] text-black rounded-md text-sm font-medium">
//               2
//             </span>
//             <span className="px-3 py-[6px] text-black rounded-md text-sm font-medium">
//               3
//             </span>
//             <span className="text-black">...</span>
//             <span className="px-3 py-[6px] text-black rounded-md text-sm font-medium">
//               9
//             </span>
//             <span className="px-3 py-[6px] text-black rounded-md text-sm font-medium">
//               10
//             </span>
//           </div>

//           {/* Next */}
//           <button className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md">
//             Next
//             <ArrowRight size={16} className="ml-1" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeTable;


// import {
//   Filter,
//   List,
//   LayoutGrid,
//   Search,
//   MoreVertical,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";
// import userImg from "../assets/kob.jpg";
// import { useState } from "react";

// const EmployeeTable = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="px-10 pt-3">
//       {/* Top action box */}
//       <div className="flex items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-xl">
//         {/* Search */}
//         <div className="flex items-center w-full max-w-md bg-transparent">
//           <Search className="text-black mr-2" size={18} />
//           <input
//             type="text"
//             placeholder="Search Employee by name, role, ID or any related keywords"
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

//       {/* Table */}
//       <div className="mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden">
//         <table className="w-full text-left text-sm">
//           <thead className="bg-[#f8f8f8] text-gray-600">
//             <tr>
//               <th className="px-4 py-3">
//                 <input type="checkbox" />
//               </th>
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Employee ID</th>
//               <th className="px-4 py-3">Role</th>
//               <th className="px-4 py-3">Status</th>
//               <th className="px-4 py-3">Teams</th>
//               <th className="px-4 py-3"></th>
//             </tr>
//           </thead>
//           <tbody className="text-black">
//             <tr className="border-t">
//               {/* Checkbox */}
//               <td className="px-4 py-4">
//                 <input type="checkbox" />
//               </td>

//               {/* Name */}
//               <td className="px-4 py-4">
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src={userImg}
//                     alt="user"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div>
//                     <div className="font-medium">Ali Jouro</div>
//                     <div className="text-[#7C7C7C] text-xs">ali.jouro@email.com</div>
//                   </div>
//                 </div>
//               </td>

//               {/* ID */}
//               <td className="px-4 py-4">
//                 <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">
//                   #12FC4V56979
//                 </span>
//               </td>

//               {/* Role */}
//               <td className="px-4 py-4">
//                 <div className="font-medium">Product Manager</div>
//                 <div className="text-xs text-gray-500">Full time</div>
//               </td>

//               {/* Status */}
//               <td className="px-4 py-4">
//                 <div className="inline-flex items-center bg-[#f0f0f0] text-green-600 text-xs px-3 py-1 rounded-full">
//                   <span className="w-2 h-2 rounded-full bg-green-600 mr-2"></span>
//                   Active
//                 </div>
//               </td>

//               {/* Teams */}
//               <td className="px-4 py-4">
//                 <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">
//                   Marketing
//                 </span>
//               </td>

//               {/* Menu Icon */}
//               <td className="px-4 py-4 text-right relative">
//                 <button onClick={() => setShowMenu(!showMenu)}>
//                   <MoreVertical size={18} />
//                 </button>
//                 {showMenu && (
//                   <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md text-sm z-10">
//                     <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Detail</div>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
//           {/* Previous */}
//           <button className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md">
//             <ArrowLeft size={16} className="mr-1" />
//             Previous
//           </button>

//           {/* Page Numbers */}
//           <div className="flex items-center space-x-2">
//             <span className="px-3 py-[6px] bg-[#E1EDE6] text-black rounded-md text-sm font-medium">
//               1
//             </span>
//             <span className="px-3 py-[6px] text-black rounded-md text-sm font-medium">
//               2
//             </span>
//             <span className="px-3 py-[6px] text-black rounded-md text-sm font-medium">
//               3
//             </span>
//             <span className="text-black">...</span>
//             <span className="px-3 py-[6px] text-black rounded-md text-sm font-medium">
//               9
//             </span>
//             <span className="px-3 py-[6px] text-black rounded-md text-sm font-medium">
//               10
//             </span>
//           </div>

//           {/* Next */}
//           <button className="flex items-center px-3 py-1 border border-gray-300 bg-white rounded-md">
//             Next
//             <ArrowRight size={16} className="ml-1" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeTable;

  

// import {
//     Filter,
//     List,
//     LayoutGrid,
//     Search,
//     MoreVertical,
//   } from "lucide-react";
//   import userImg from "../assets/kob.jpg";
//   import { useState } from "react";
  
//   const EmployeeTable = () => {
//     const [showMenu, setShowMenu] = useState(false);
  
//     return (
//       <div className="px-10 pt-3">
//         {/* Top action box */}
//         <div className="flex items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-xl">
//           {/* Search */}
//           <div className="flex items-center w-full max-w-md bg-transparent">
//             <Search className="text-black mr-2" size={18} />
//             <input
//               type="text"
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
//                 <th className="px-6 py-3">Name</th>
//                 <th className="px-6 py-3">Employee ID</th>
//                 <th className="px-6 py-3">Role</th>
//                 <th className="px-6 py-3">Status</th>
//                 <th className="px-6 py-3">Teams</th>
//                 <th className="px-6 py-3 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="text-black">
//               <tr className="border-t">
//                 {/* Name */}
//                 <td className="px-6 py-4 flex items-center space-x-4">
//                   <img
//                     src={userImg}
//                     alt="user"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div>
//                     <div className="font-medium">Ali Jouro</div>
//                     <div className="text-[#7C7C7C] text-xs">ali.jouro@email.com</div>
//                   </div>
//                 </td>
  
//                 {/* ID */}
//                 <td className="px-6 py-4">#12FC4V56979</td>
  
//                 {/* Role */}
//                 <td className="px-6 py-4">
//                   <div className="font-medium">Product Manager</div>
//                   <div className="text-xs text-gray-500">Full time</div>
//                 </td>
  
//                 {/* Status */}
//                 <td className="px-6 py-4">
//                   <div className="inline-flex items-center bg-[#f0f0f0] text-green-600 text-xs px-3 py-1 rounded-full">
//                     <span className="w-2 h-2 rounded-full bg-green-600 mr-2"></span>
//                     Active
//                   </div>
//                 </td>
  
//                 {/* Teams */}
//                 <td className="px-6 py-4 font-medium">Marketing</td>
  
//                 {/* Actions */}
//                 <td className="px-6 py-4 text-right relative">
//                   <button onClick={() => setShowMenu(!showMenu)}>
//                     <MoreVertical size={18} />
//                   </button>
//                   {showMenu && (
//                     <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md text-sm">
//                       <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Detail</div>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
  
//           {/* Pagination */}
//           <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
//             <button className="text-[#34BC68] font-medium">Previous</button>
//             <span className="font-medium text-black">Page 1</span>
//             <button className="text-[#34BC68] font-medium">Next</button>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default EmployeeTable;
  

// import { Filter, List, LayoutGrid, Search } from "lucide-react";

// const EmployeeTable = () => {
//   return (
//     <div className="px-10 pt-3">
//       {/* Top action box */}
//       <div className="flex items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-xl">
//         {/* Search */}
//         <div className="flex items-center w-full max-w-md bg-transparent">
//           <Search className="text-black mr-2" size={18} />
//           <input
//             type="text"
//             placeholder="Search Employee by name, role, ID or any related keywords"
//             className="text-sm outline-none placeholder-gray-500 bg-transparent w-full"
//           />
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center space-x-3">
//           {/* Filter Button */}
//           <button className="flex items-center text-sm px-4 py-2 bg-white border border-gray-300 text-black rounded-md">
//             <Filter size={16} className="mr-2" />
//             Filter
//           </button>

//           {/* List View Icon */}
//           <button className="p-2 rounded-md bg-[#F3F4F5]">
//             <List size={18} className="text-black" />
//           </button>

//           {/* Grid View Icon */}
//           <button className="p-2 rounded-md bg-white border border-gray-300">
//             <LayoutGrid size={18} className="text-black" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeTable;
