// Updated AssignRoleModal
import {
  Briefcase,
  Search,
  HelpCircle,
  X,
  Check,
  ChevronDown,
} from "lucide-react";
import userImg from "../assets/kob.jpg";
import { useState } from "react";

const mockUsers = [
  { name: "Ali Jouro", role: "Product Manager", email: "ali@company.com", img: userImg },
  { name: "Sofia Lin", role: "UX Designer", email: "sofia@company.com", img: userImg },
  { name: "Liam Ben", role: "Backend Dev", email: "liam@company.com", img: userImg },
  { name: "Emily Rose", role: "HR Officer", email: "emily@company.com", img: userImg },
  { name: "Rachel Zed", role: "Data Scientist", email: "rachel@company.com", img: userImg },
];

const AssignRoleModal = ({ onClose }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleUser = (user) => {
    setSelectedUsers((prev) =>
      prev.find((u) => u.name === user.name)
        ? prev.filter((u) => u.name !== user.name)
        : [...prev, user]
    );
  };

  const removeUser = (name) => {
    setSelectedUsers((prev) => prev.filter((u) => u.name !== name));
  };

  const filteredUsers = mockUsers.filter(
    (user) =>
      `${user.name} ${user.role}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const shouldShowList = dropdownOpen || searchQuery.length > 0;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      {/* <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative max-h-[90vh] overflow-auto"> */}
        <div className="bg-white w-[540px] max-w-[90%] rounded-xl p-6 shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={18} />
        </button>

        {/* Top Avatars */}
        <div className="flex justify-center -space-x-3 mb-4">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src={userImg}
              className="w-9 h-9 rounded-full border-2 border-white"
              alt=""
            />
          ))}
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-black mb-1">
            Assign this role
          </h2>
          <p className="text-sm text-gray-600">
            Select one or multiple employees to assign to this role
          </p>
          <p className="text-sm text-[#34BC68] font-medium">
            Senior Design Lead
          </p>
        </div>

        {/* Team member label */}
        <p className="text-sm text-black mb-2 font-medium">Team members</p>

        {/* Search box with dropdown icon */}
        <div className="relative mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search team member"
            className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-10 text-sm outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          <ChevronDown
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="absolute right-2 top-2.5 text-gray-500 cursor-pointer"
            size={18}
          />
        </div>

        {/* User dropdown list */}
        {shouldShowList && (
          <div className="space-y-3 mb-4 max-h-[200px] overflow-y-auto">
            {filteredUsers.map((user) => {
              const isSelected = selectedUsers.some((u) => u.name === user.name);
              return (
                <div
                  key={user.name}
                  onClick={() => toggleUser(user)}
                  className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 cursor-pointer transition ${
                    isSelected ? "bg-[#e4f7ec]" : "bg-white hover:bg-[#f0fdf4]"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.img}
                      alt={user.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-black">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.role}</div>
                    </div>
                  </div>

                  {/* Right check circle */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                      isSelected
                        ? "bg-[#34BC68] border-[#34BC68]"
                        : "border-gray-400"
                    }`}
                  >
                    {isSelected && <Check size={12} className="text-white" />}
                  </div>
                </div>
              );
            })}

            {filteredUsers.length === 0 && (
              <div className="text-sm text-gray-500 text-center py-4">
                No users found.
              </div>
            )}
          </div>
        )}

        {/* Selected users */}
        {selectedUsers.length > 0 && (
          <div className="mb-6 space-y-2">
            {selectedUsers.map((user) => (
              <div key={user.name} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-black">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => removeUser(user.name)}
                  className="text-red-500 text-xs cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-24 py-2 text-sm border border-gray-300 rounded-md bg-white text-black"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-24 py-2 text-sm rounded-md bg-black text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};


export default AssignRoleModal;


// import {
//   Briefcase,
//   Search,
//   HelpCircle,
//   X,
//   Check,
//   ChevronDown,
// } from "lucide-react";
// import userImg from "../assets/kob.jpg";
// import { useState } from "react";

// const mockUsers = [
//   { name: "Ali Jouro", role: "Product Manager", email: "ali@company.com", img: userImg },
//   { name: "Sofia Lin", role: "UX Designer", email: "sofia@company.com", img: userImg },
//   { name: "Liam Ben", role: "Backend Dev", email: "liam@company.com", img: userImg },
//   { name: "Emily Rose", role: "HR Officer", email: "emily@company.com", img: userImg },
//   { name: "Rachel Zed", role: "Data Scientist", email: "rachel@company.com", img: userImg },
// ];

// const AssignRoleModal = ({ onClose }) => {
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleUser = (user) => {
//     setSelectedUsers((prev) =>
//       prev.find((u) => u.name === user.name)
//         ? prev.filter((u) => u.name !== user.name)
//         : [...prev, user]
//     );
//   };

//   const removeUser = (name) => {
//     setSelectedUsers((prev) => prev.filter((u) => u.name !== name));
//   };

//   const filteredUsers = mockUsers.filter(
//     (user) =>
//       `${user.name} ${user.role}`
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase())
//   );

//   const shouldShowList = dropdownOpen || searchQuery.length > 0;

//   return (
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4">
//       {/* Modal Box */}
//       <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative max-h-[90vh] overflow-auto">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black"
//         >
//           <X size={18} />
//         </button>

//         {/* Top Avatars */}
//         <div className="flex justify-center -space-x-3 mb-4">
//           {[1, 2, 3].map((i) => (
//             <img
//               key={i}
//               src={userImg}
//               className="w-9 h-9 rounded-full border-2 border-white"
//               alt=""
//             />
//           ))}
//         </div>

//         {/* Title and Subtitle */}
//         <div className="text-center mb-6">
//           <h2 className="text-lg font-semibold text-black mb-1">
//             Assign this role
//           </h2>
//           <p className="text-sm text-gray-600">
//             Select one or multiple employees to assign to this role
//           </p>
//           <p className="text-sm text-[#34BC68] font-medium">
//             Senior Design Lead
//           </p>
//         </div>

//         {/* Team member label */}
//         <p className="text-sm text-black mb-2 font-medium">Team members</p>

//         {/* Search box with dropdown icon */}
//         <div className="relative mb-4">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search team member"
//             className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-10 text-sm outline-none"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
//           <HelpCircle
//             className="absolute right-8 top-2.5 text-gray-400 cursor-pointer"
//             size={16}
//           />
//           <ChevronDown
//             onClick={() => setDropdownOpen((prev) => !prev)}
//             className="absolute right-2 top-2.5 text-gray-500 cursor-pointer"
//             size={18}
//           />
//         </div>

//         {/* User list (filtered or full) */}
//         {shouldShowList && (
//           <div className="space-y-3 mb-4 max-h-[200px] overflow-y-auto">
//             {filteredUsers.map((user) => {
//               const isSelected = selectedUsers.some((u) => u.name === user.name);
//               return (
//                 <div
//                   key={user.name}
//                   onClick={() => toggleUser(user)}
//                   className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white hover:bg-[#f0fdf4] cursor-pointer transition"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <img
//                       src={user.img}
//                       alt={user.name}
//                       className="w-9 h-9 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="text-sm font-medium text-black">{user.name}</div>
//                       <div className="text-xs text-gray-500">{user.role}</div>
//                     </div>
//                   </div>

//                   {/* Right check circle */}
//                   <div
//                     className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
//                       isSelected
//                         ? "bg-[#34BC68] border-[#34BC68]"
//                         : "border-gray-400"
//                     }`}
//                   >
//                     {isSelected && <Check size={12} className="text-white" />}
//                   </div>
//                 </div>
//               );
//             })}

//             {filteredUsers.length === 0 && (
//               <div className="text-sm text-gray-500 text-center py-4">
//                 No users found.
//               </div>
//             )}
//           </div>
//         )}

//         {/* Selected users as text */}
//         {selectedUsers.length > 0 && (
//           <div className="mb-6 space-y-2">
//             {selectedUsers.map((user) => (
//               <div key={user.name} className="flex justify-between items-center">
//                 <div>
//                   <div className="text-sm font-medium text-black">{user.name}</div>
//                   <div className="text-xs text-gray-500">{user.email}</div>
//                 </div>
//                 <button
//                   onClick={() => removeUser(user.name)}
//                   className="text-red-500 text-xs hover:underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Footer buttons */}
//         <div className="flex justify-end gap-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm border border-gray-300 rounded-md bg-white text-black"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm rounded-md bg-black text-white"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssignRoleModal;


// import {
//   Briefcase,
//   Search,
//   HelpCircle,
//   X,
//   Check,
//   ChevronDown,
// } from "lucide-react";
// import userImg from "../assets/kob.jpg";
// import { useState } from "react";

// const mockUsers = [
//   { name: "Ali Jouro", role: "Product Manager", email: "ali@company.com", img: userImg },
//   { name: "Sofia Lin", role: "UX Designer", email: "sofia@company.com", img: userImg },
//   { name: "Liam Ben", role: "Backend Dev", email: "liam@company.com", img: userImg },
//   { name: "Emily Rose", role: "HR Officer", email: "emily@company.com", img: userImg },
//   { name: "Rachel Zed", role: "Data Scientist", email: "rachel@company.com", img: userImg },
// ];

// const AssignRoleModal = ({ onClose }) => {
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleUser = (user) => {
//     setSelectedUsers((prev) =>
//       prev.find((u) => u.name === user.name)
//         ? prev.filter((u) => u.name !== user.name)
//         : [...prev, user]
//     );
//   };

//   const removeUser = (name) => {
//     setSelectedUsers((prev) => prev.filter((u) => u.name !== name));
//   };

//   const filteredUsers = mockUsers.filter(
//     (user) =>
//       `${user.name} ${user.role}`
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase())
//   );

//   const unselectedFilteredUsers = filteredUsers.filter(
//     (user) => !selectedUsers.some((sel) => sel.name === user.name)
//   );

//   return (
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4">
//       {/* Modal Box */}
//       <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative max-h-[90vh] overflow-auto">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black"
//         >
//           <X size={18} />
//         </button>

//         {/* Top Avatars */}
//         <div className="flex justify-center -space-x-3 mb-4">
//           {[1, 2, 3].map((i) => (
//             <img
//               key={i}
//               src={userImg}
//               className="w-9 h-9 rounded-full border-2 border-white"
//               alt=""
//             />
//           ))}
//         </div>

//         {/* Title and Subtitle */}
//         <div className="text-center mb-6">
//           <h2 className="text-lg font-semibold text-black mb-1">
//             Assign this role
//           </h2>
//           <p className="text-sm text-gray-600">
//             Select one or multiple employees to assign to this role
//           </p>
//           <p className="text-sm text-[#34BC68] font-medium">
//             Senior Design Lead
//           </p>
//         </div>

//         {/* Team member label */}
//         <p className="text-sm text-black mb-2 font-medium">Team members</p>

//         {/* Search box with dropdown icon */}
//         <div className="relative mb-4">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search team member"
//             className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-10 text-sm outline-none"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
//           <HelpCircle
//             className="absolute right-8 top-2.5 text-gray-400 cursor-pointer"
//             size={16}
//           />
//           <ChevronDown
//             onClick={() => setDropdownOpen((prev) => !prev)}
//             className="absolute right-2 top-2.5 text-gray-500 cursor-pointer"
//             size={18}
//           />
//         </div>

//         {/* Dropdown user list (only if toggled) */}
//         {dropdownOpen && unselectedFilteredUsers.length > 0 && (
//           <div className="space-y-3 mb-4 max-h-[200px] overflow-y-auto">
//             {unselectedFilteredUsers.map((user) => {
//               const isSelected = selectedUsers.some((u) => u.name === user.name);
//               return (
//                 <div
//                   key={user.name}
//                   onClick={() => toggleUser(user)}
//                   className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white hover:bg-[#f0fdf4] cursor-pointer transition"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <img
//                       src={user.img}
//                       alt={user.name}
//                       className="w-9 h-9 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="text-sm font-medium text-black">{user.name}</div>
//                       <div className="text-xs text-gray-500">{user.role}</div>
//                     </div>
//                   </div>

//                   {/* Selection Check (only if already selected) */}
//                   {isSelected && (
//                     <div className="w-5 h-5 rounded-full bg-[#34BC68] flex items-center justify-center">
//                       <Check size={12} className="text-white" />
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* Selected users */}
//         {selectedUsers.length > 0 && (
//           <div className="mb-6 space-y-3">
//             {selectedUsers.map((user) => (
//               <div
//                 key={user.name}
//                 className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-[#e4f7ec]"
//               >
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src={user.img}
//                     alt={user.name}
//                     className="w-9 h-9 rounded-full object-cover"
//                   />
//                   <div>
//                     <div className="text-sm font-medium text-black">
//                       {user.name}
//                     </div>
//                     <div className="text-xs text-gray-500">{user.email}</div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => removeUser(user.name)}
//                   className="text-red-500 text-xs cursor-pointer"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Footer buttons */}
//         <div className="flex justify-end gap-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm border border-gray-300 rounded-md bg-white text-black"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm rounded-md bg-black text-white"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssignRoleModal;

// import {
//   Briefcase,
//   Search,
//   HelpCircle,
//   X,
//   Check,
// } from "lucide-react";
// import userImg from "../assets/kob.jpg";
// import { useState } from "react";

// const mockUsers = [
//   { name: "Ali Jouro", role: "Product Manager", email: "ali@company.com", img: userImg },
//   { name: "Sofia Lin", role: "UX Designer", email: "sofia@company.com", img: userImg },
//   { name: "Liam Ben", role: "Backend Dev", email: "liam@company.com", img: userImg },
//   // { name: "Emily Rose", role: "HR Officer", email: "emily@company.com", img: userImg },
//   // { name: "Rachel Zed", role: "Data Scientist", email: "rachel@company.com", img: userImg },
// ];

// const AssignRoleModal = ({ onClose }) => {
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleUser = (user) => {
//     setSelectedUsers((prev) =>
//       prev.find((u) => u.name === user.name)
//         ? prev.filter((u) => u.name !== user.name)
//         : [...prev, user]
//     );
//   };

//   const removeUser = (name) => {
//     setSelectedUsers((prev) => prev.filter((u) => u.name !== name));
//   };

//   const filteredUsers = mockUsers.filter(
//     (user) =>
//       `${user.name} ${user.role}`
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase()) &&
//       !selectedUsers.find((u) => u.name === user.name)
//   );

//   return (
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4">
//       {/* Modal Box */}
//       <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative max-h-[90vh] overflow-auto">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black"
//         >
//           <X size={18} />
//         </button>

//         {/* Top Avatars */}
//         <div className="flex justify-center -space-x-3 mb-4">
//           {[1, 2, 3].map((i) => (
//             <img
//               key={i}
//               src={userImg}
//               className="w-9 h-9 rounded-full border-2 border-white"
//               alt=""
//             />
//           ))}
//         </div>

//         {/* Title and Subtitle */}
//         <div className="text-center mb-6">
//           <h2 className="text-lg font-semibold text-black mb-1">
//             Assign this role
//           </h2>
//           <p className="text-sm text-gray-600">
//             Select one or multiple employees to assign to this role
//           </p>
//           <p className="text-sm text-[#34BC68] font-medium">
//             Senior Design Lead
//           </p>
//         </div>

//         {/* Team member label */}
//         <p className="text-sm text-black mb-2 font-medium">Team members</p>

//         {/* Search box */}
//         <div className="relative mb-4">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search team member"
//             className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-10 text-sm outline-none"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
//           <HelpCircle
//             className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
//             size={16}
//           />
//         </div>

//         {/* Filtered dropdown users */}
//         <div className="space-y-3 mb-5">
//           {filteredUsers.map((user) => (
//             <div
//               key={user.name}
//               onClick={() => toggleUser(user)}
//               className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white hover:bg-[#f0fdf4] cursor-pointer transition"
//             >
//               <div className="flex items-center space-x-3">
//                 <img
//                   src={user.img}
//                   alt={user.name}
//                   className="w-9 h-9 rounded-full object-cover"
//                 />
//                 <div>
//                   <div className="text-sm font-medium text-black">
//                     {user.name}
//                   </div>
//                   <div className="text-xs text-gray-500">{user.role}</div>
//                 </div>
//               </div>

//               {/* Select circle */}
//               <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-gray-400">
//                 <Check className="text-white" size={12} />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Selected users */}
//         {selectedUsers.length > 0 && (
//           <div className="mb-6 space-y-3">
//             {selectedUsers.map((user) => (
//               <div
//                 key={user.name}
//                 className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-[#e4f7ec]"
//               >
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src={user.img}
//                     alt={user.name}
//                     className="w-9 h-9 rounded-full object-cover"
//                   />
//                   <div>
//                     <div className="text-sm font-medium text-black">
//                       {user.name}
//                     </div>
//                     <div className="text-xs text-gray-500">{user.email}</div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => removeUser(user.name)}
//                   className="text-red-500 text-xs hover:underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Footer buttons */}
//         <div className="flex justify-end gap-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm border border-gray-300 rounded-md bg-white text-black"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm rounded-md bg-black text-white"
//           >
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssignRoleModal;



// // AssignRoleModal.jsx
// import {
//     Briefcase,
//     Search,
//     HelpCircle,
//     X,
//     Check,
//   } from "lucide-react";
//   import userImg from "../assets/kob.jpg";
//   import { useState } from "react";
  
//   const mockUsers = [
//     { name: "Ali Jouro", role: "Product Manager", img: userImg },
//     { name: "Sofia Lin", role: "UX Designer", img: userImg },
//     { name: "Liam Ben", role: "Backend Dev", img: userImg },
//     { name: "Emily Rose", role: "HR Officer", img: userImg },
//     { name: "Rachel Zed", role: "Data Scientist", img: userImg },
//   ];
  
//   const AssignRoleModal = ({ onClose }) => {
//     const [selectedUsers, setSelectedUsers] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");
  
//     const toggleUser = (name) => {
//       setSelectedUsers((prev) =>
//         prev.includes(name)
//           ? prev.filter((n) => n !== name)
//           : [...prev, name]
//       );
//     };
  
//     const filteredUsers = mockUsers.filter((user) =>
//       `${user.name} ${user.role}`
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase())
//     );
  
//     return (
//       <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
//         {/* Modal Box */}
//         <div className="bg-white w-[520px] max-w-[90%] rounded-xl p-6 shadow-xl relative max-h-[600px]">
//           {/* Close X Button */}
//           <button
//             onClick={onClose}
//             className="absolute -top-10 -right-10 bg-white border border-gray-300 rounded-full p-[2px] shadow-sm hover:bg-gray-100 transition"
//           >
//             <X size={16} />
//           </button>
  
//           {/* Header Icon */}
//           <div className="flex justify-start mb-3">
//             <div className="bg-[#e4f7ec] p-2 rounded-full">
//               <Briefcase size={20} className="text-[#34BC68]" />
//             </div>
//           </div>
  
//           {/* Title */}
//           <h2 className="text-lg font-semibold text-black mb-1">
//             Assign this role
//           </h2>
  
//           {/* Description */}
//           <p className="text-sm text-gray-600 mb-5">
//             Select one or multiple employees to assign to this role{" "}
//             <span className="text-[#34BC68] font-medium">"Senior Design Lead"</span>
//           </p>
  
//           {/* Search Box */}
//           <div className="relative mb-5">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search for an individual or team"
//               className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-10 text-sm outline-none"
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
//             <HelpCircle
//               className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
//               size={16}
//             />
//           </div>
  
//           {/* User List */}
//           <div className="space-y-3">
//             {filteredUsers.map((user) => {
//               const isSelected = selectedUsers.includes(user.name);
//               return (
//                 <div
//                     key={user.name}
//                     onClick={() => toggleUser(user.name)}
//                     className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 ${
//                         isSelected ? "bg-[#e4f7ec]" : "bg-white hover:bg-[#f0fdf4]"
//                     } cursor-pointer transition`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <img
//                       src={user.img}
//                       alt={user.name}
//                       className="w-9 h-9 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="text-sm font-medium text-black">
//                         {user.name}
//                       </div>
//                       <div className="text-xs text-gray-500">{user.role}</div>
//                     </div>
//                   </div>
  
//                   {/* Selection Check */}
//                   <div
//                     className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                       isSelected
//                         ? "bg-[#34BC68] border-[#34BC68]"
//                         : "border-gray-400"
//                     }`}
//                   >
//                     {isSelected && <Check size={12} className="text-white" />}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default AssignRoleModal;
  

// import {
//     Briefcase,
//     Search,
//     HelpCircle,
//     X,
//     Check,
//   } from "lucide-react";
//   import userImg from "../assets/kob.jpg";
//   import { useState } from "react";
  
//   const mockUsers = [
//     { name: "Ali Jouro", role: "Product Manager", img: userImg },
//     { name: "Sofia Lin", role: "UX Designer", img: userImg },
//     { name: "Liam Ben", role: "Backend Dev", img: userImg },
//     { name: "Emily Rose", role: "HR Officer", img: userImg },
//     { name: "Rachel Zed", role: "Data Scientist", img: userImg },
//   ];
  
//   const AssignRoleModal = ({ onClose }) => {
//     const [selectedUsers, setSelectedUsers] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");
  
//     const toggleUser = (name) => {
//       setSelectedUsers((prev) =>
//         prev.includes(name)
//           ? prev.filter((n) => n !== name)
//           : [...prev, name]
//       );
//     };
  
//     const filteredUsers = mockUsers.filter((user) =>
//       `${user.name} ${user.role}`
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase())
//     );
  
//     return (
//       <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
//         {/* Modal Box */}
//         <div className="bg-white w-[520px] max-w-[90%] rounded-xl p-6 shadow-xl relative max-h-[90vh]">
//           {/* Close X Button (near top right of box) */}
//           <button
//             onClick={onClose}
//             className="absolute -top-10 -right-10 bg-white border border-gray-300 rounded-full p-[4px] shadow-sm hover:bg-gray-100 transition"
//           >
//             <X size={16} />
//           </button>
  
//           {/* Header Icon */}
//           <div className="flex justify-start mb-3">
//             <div className="bg-[#e4f7ec] p-2 rounded-full">
//               <Briefcase size={20} className="text-[#34BC68]" />
//             </div>
//           </div>
  
//           {/* Title */}
//           <h2 className="text-lg font-semibold text-black mb-1">
//             Assign this role
//           </h2>
  
//           {/* Description with green-highlighted role name */}
//           <p className="text-sm text-gray-600 mb-5">
//             Select one or multiple employees to assign to this role{" "}
//             <span className="text-[#34BC68] font-medium">Senior Design Lead</span>
//           </p>
  
//           {/* Search Box */}
//           <div className="relative mb-5">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search for an individual or team"
//               className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-10 text-sm outline-none"
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
//             <HelpCircle
//               className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
//               size={16}
//             />
//           </div>
  
//           {/* User List */}
//           <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
//             {filteredUsers.map((user) => {
//               const isSelected = selectedUsers.includes(user.name);
//               return (
//                 <div
//                   key={user.name}
//                   onClick={() => toggleUser(user.name)}
//                   className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white cursor-pointer transition ${
//                     isSelected ? "bg-[#e4f7ec]" : "hover:bg-[#f0fdf4]"
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <img
//                       src={user.img}
//                       alt={user.name}
//                       className="w-9 h-9 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="text-sm font-medium text-black">
//                         {user.name}
//                       </div>
//                       <div className="text-xs text-gray-500">{user.role}</div>
//                     </div>
//                   </div>
  
//                   {/* Selection Check */}
//                   <div
//                     className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                       isSelected
//                         ? "bg-[#34BC68] border-[#34BC68]"
//                         : "border-gray-400"
//                     }`}
//                   >
//                     {isSelected && <Check size={12} className="text-white" />}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default AssignRoleModal;
  
// import { Briefcase, Search, XCircle, HelpCircle } from "lucide-react";
// import userImg from "../assets/kob.jpg";
// import { useState } from "react";

// const mockUsers = [
//   { name: "Ali Jouro", role: "Product Manager", img: userImg },
//   { name: "Sofia Lin", role: "UX Designer", img: userImg },
//   { name: "Liam Ben", role: "Backend Dev", img: userImg },
//   { name: "Emily Rose", role: "HR Officer", img: userImg },
//   { name: "Rachel Zed", role: "Data Scientist", img: userImg },
// ];

// const AssignRoleModal = ({ onClose }) => {
//   const [selectedUsers, setSelectedUsers] = useState([]);

//   const toggleUser = (name) => {
//     setSelectedUsers((prev) =>
//       prev.includes(name)
//         ? prev.filter((n) => n !== name)
//         : [...prev, name]
//     );
//   };

//   return (
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
//       {/* Close button */}
//       <button
//         onClick={onClose}
//         className="absolute top-6 right-6 bg-white rounded-full p-1 shadow-md"
//       >
//         <XCircle className="text-black" size={24} />
//       </button>

//       {/* Modal Box */}
//       <div className="bg-white w-[600px] max-w-[90%] rounded-xl p-6 shadow-xl relative">
//         {/* Header */}
//         <div className="flex items-center mb-4 space-x-3">
//           <div className="bg-[#e4f7ec] p-2 rounded-full">
//             <Briefcase size={20} className="text-[#34BC68]" />
//           </div>
//           <h2 className="text-lg font-semibold text-black">Assign this role</h2>
//         </div>
//         <p className="text-sm text-gray-600 mb-5">
//           Select one or multiple employees to assign to this role "Senior Design Lead"
//         </p>

//         {/* Search box */}
//         <div className="relative mb-4">
//           <input
//             type="text"
//             placeholder="Search for an individual or team"
//             className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-10 text-sm outline-none"
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
//           <HelpCircle className="absolute right-3 top-2.5 text-gray-400 cursor-pointer" size={16} />
//         </div>

//         {/* Users */}
//         <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
//           {mockUsers.map((user) => (
//             <div
//               key={user.name}
//               className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white"
//             >
//               <div className="flex items-center space-x-3">
//                 <img src={user.img} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
//                 <div>
//                   <div className="text-sm font-medium text-black">{user.name}</div>
//                   <div className="text-xs text-gray-500">{user.role}</div>
//                 </div>
//               </div>

//               {/* Toggle Circle */}
//               <div
//                 className={`w-5 h-5 rounded-full border-2 ${
//                   selectedUsers.includes(user.name)
//                     ? "bg-[#34BC68] border-[#34BC68]"
//                     : "border-gray-400"
//                 } cursor-pointer flex items-center justify-center`}
//                 onClick={() => toggleUser(user.name)}
//               >
//                 {selectedUsers.includes(user.name) && (
//                   <div className="w-2 h-2 bg-white rounded-full" />
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssignRoleModal;
