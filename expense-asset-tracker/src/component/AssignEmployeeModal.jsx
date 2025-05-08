// Updated AssignEmployeeModal
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

const AssignEmployeeModal = ({ onClose }) => {
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
            Assign To
          </h2>
          <p className="text-sm text-gray-600">
            Select one or multiple employees to assign to this role
          </p>
          <p className="text-sm text-[#34BC68] font-medium">
            Senior Design Lead
          </p>
        </div>
                <div className="relative">
                  <label className="text-sm text-black font-medium">
                    Select a Team Manager <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`w-full border ${
                      errors.manager ? "border-red-400" : "border-gray-300"
                    } rounded-md py-2 px-3 text-sm flex justify-between items-center cursor-pointer`}
                    onClick={() => setManagerDropdownOpen(!managerDropdownOpen)}
                  >
                    <span>
                      {selectedManager ? selectedManager.name : "Select manager"}
                    </span>
                    <ChevronDown size={16} className="text-gray-500" />
                  </div>
  
                  {managerDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-sm max-h-40 overflow-auto">
                      {teamManagers.map((mgr) => (
                        <div
                          key={mgr.name}
                          className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSelectedManager(mgr);
                            setManagerDropdownOpen(false);
                          }}
                        >
                          <img
                            src={mgr.img}
                            alt={mgr.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-sm">{mgr.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
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


export default AssignEmployeeModal;