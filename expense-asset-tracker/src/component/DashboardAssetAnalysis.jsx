import {
    Filter,
    List,
    LayoutGrid,
    Search,
    MoreVertical,
    ArrowLeft,
    ArrowRight,
  } from "lucide-react";
  import { useState } from "react";
  import { useEffect, useRef } from "react";
  
  
  const DashboardAssetAnalysis = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 8;
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const dropdownRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState("");

    
  
    const users = [
      {
        name: "Ali Jouro",
        id: "#12FC4V56979",
        picture: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
        status: "Active",
        AssigneeTeam: "Marketing",
        statusColor: "green",
      },
      {
        name: "Sofia Lin",
        id: "#88FCV1234",
        picture: "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww",
        status: "Inactive",
        AssigneeTeam: "Design",
        statusColor: "red",
      },
      {
        name: "Sofia Lin",
        id: "#88FCV1234",
        picture: "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww",
        status: "Inactive",
        AssigneeTeam: "Design",
        statusColor: "red",
      },
      {
        name: "Liam Ben",
        email: "liam.ben@company.com",
        id: "#19KD8210",
        picture: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fHww",
        type: "Part time",
        status: "Active",
        AssigneeTeam: "Engineering",
        statusColor: "green",
      },
      {
        name: "Emily Rose",
        email: "emily.rose@company.com",
        id: "#45AC2000",
        picture: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
        type: "Full time",
        status: "Inactive",
        AssigneeTeam: "HR",
        statusColor: "red",
      },
      {
        name: "James Wu",
        id: "#93VU1029",
        picture: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
        status: "Active",
        AssigneeTeam: "Engineering",
        statusColor: "green",
      },
      {
        name: "Hana Yuki",
        id: "#54FR9210",
        picture: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
        status: "Inactive",
        AssigneeTeam: "Quality",
        statusColor: "red",
      },
      {
        name: "Marcus Li",
        id: "#29FE9183",
        picture: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
        status: "Active",
        AssigneeTeam: "Finance",
        statusColor: "green",
      },
      {
        name: "Rachel Zed",
        id: "#61XY8201",
        picture: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
        status: "Active",
        AssigneeTeam: "Data",
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
      `${user.name} ${user.picture} ${user.id} ${user.AssigneeTeam}`
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
        <div className="px-6 py-6 space-y-6">
      <div className="px-10 pt-3 bg-white border border-gray-200 rounded-xl p-6 shadow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-black">Asset Analysis</h3>
          <p className="text-base text-gray-500 mt-1">Manage your assets and track current usage status across team</p>
        </div>
        {/* Top action box */}
        <div className="flex items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-xl">
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
        
        {/* Table */}
        <div className="mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#f8f8f8] text-gray-600">
              <tr>
                <th className="px-4 py-3"><input type="checkbox" /></th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Asset ID</th>
                <th className="px-4 py-3">Picture</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Assignee Team</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="text-black">
              {currentData.map((user, index) => (
  
              <tr key={index} className="border-t border-gray-200">
  
                  <td className="px-4 py-4"><input type="checkbox" /></td>
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-medium">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">{user.id}</span>
                  </td>

                  <td className="px-4 py-4">
                    <a
                      href={user.picture}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray font-medium text-sm hover:text-gray-500"
                    >
                      View img
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m0 0v6m0-6L10 20" />
                      </svg>
                    </a>
                  </td>


                  {/* <td className="px-4 py-4">
                    <div className="font-medium">{user.picture}</div>
                  </td> */}
                  <td className="px-4 py-4">
                    <div
                      className={`inline-flex items-center bg-[#f0f0f0] text-xs px-3 py-1 rounded-full ${
                        user.statusColor === "green" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mr-2 ${
                          user.statusColor === "green" ? "bg-green-600" : "bg-red-600"
                        }`}
                      ></span>
                      {user.status}
                    </div>
                  </td>
                  <td className="px-4 py-4 font-medium">
                  <span className="bg-[#F3F4F5] px-3 py-1 rounded-md text-xs font-medium">
                    {user.AssigneeTeam}
                  </span>
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
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 text-sm text-gray-600">
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
    </div>
    );
  };
  
  export default DashboardAssetAnalysis;