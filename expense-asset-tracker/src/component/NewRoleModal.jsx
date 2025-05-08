import {
    Briefcase,
    X,
    ChevronDown,
  } from "lucide-react";
  import { useState } from "react";
  import userImg from "../assets/kob.jpg";
  import AssignRoleModal from "./AssignRoleModal";
  import AssignEmployeeModal from "./AssignEmployeeModal";
  
  const teamManagers = [
    { name: "Ali Jouro", img: userImg },
    { name: "Sofia Lin", img: userImg },
    { name: "James Wu", img: userImg },
  ];
  
  const NewRoleModal = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [managerDropdownOpen, setManagerDropdownOpen] = useState(false);
    const [selectedManager, setSelectedManager] = useState(null);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
  
    const validateStep1 = () => {
      const newErrors = {};
      if (!title.trim()) newErrors.title = true;
      if (!category.trim()) newErrors.category = true;
      if (!selectedManager) newErrors.manager = true;
      if (!description.trim()) newErrors.description = true;
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleContinue = () => {
      if (validateStep1()) {
        setStep(2);
      }
    };
  
    const handleConfirm = () => {
      onClose(); // Handle role creation final confirmation here
    };
  
    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white w-[540px] max-w-[90%] rounded-xl p-6 shadow-xl relative">
          {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={18} />
        </button>
  
          {/* Step Circles */}
          
  
          {step === 1 ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-[#e4f7ec] p-3 rounded-full">
                  <Briefcase size={22} className="text-[#34BC68]" />
                </div>
              </div>
  
              {/* Title */}
              <h2 className="text-lg font-semibold text-center mb-1">Set Up New Role</h2>
              <p className="text-sm text-gray-600 text-center mb-6">
                Invite employees to join this workspace and collaborate on managing assets efficiently.
              </p>
  
              {/* Form Inputs */}
              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="text-sm text-black font-medium">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What is your title?"
                    className={`w-full border ${
                      errors.title ? "border-red-400" : "border-gray-300"
                    } rounded-md py-2 px-3 text-sm outline-none`}
                  />
                </div>
  
                {/* Category */}
                <div>
                  <label className="text-sm text-black font-medium">
                    Select Category <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Search for label"
                    className={`w-full border ${
                      errors.category ? "border-red-400" : "border-gray-300"
                    } rounded-md py-2 px-3 text-sm outline-none`}
                  />
                </div>
  
                {/* Manager */}
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
  
                {/* Description */}
                <div>
                  <label className="text-sm text-black font-medium">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add your description"
                    className={`w-full border ${
                      errors.description ? "border-red-400" : "border-gray-300"
                    } rounded-md py-2 px-3 text-sm outline-none min-h-[100px]`}
                  />
                </div>
              </div>
                <div className="flex justify-center mb-4 space-x-2">
                    <div
                    className={`w-3 h-3 rounded-full ${
                        step === 1 ? "bg-[#34BC68]" : "bg-gray-300"
                    }`}
                    />
                    <div
                    className={`w-3 h-3 rounded-full ${
                        step === 2 ? "bg-[#34BC68]" : "bg-gray-300"
                    }`}
                    />
                </div>
  
              {/* Buttons */}
              <div className="flex justify-center space-x-3 mt-6">
                    {/* <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md bg-white"
                    >
                    Cancel
                    </button>
                    <button
                    onClick={handleContinue}
                    className="px-4 py-2 text-sm font-medium bg-black text-white rounded-md"
                    >
                    Continue
                    </button> */}
                <button
                    onClick={onClose}
                    className="px-24 py-2 text-sm border border-gray-300 rounded-md bg-white text-black"
                >
                    Cancel
                </button>
                <button
                    onClick={handleContinue}
                    className="px-24 py-2 text-sm rounded-md bg-black text-white"
                >
                    Continue
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Reuse AssignRoleModal */}
              <AssignEmployeeModal onClose={onClose} hideBackdrop hideXButton onConfirm={handleConfirm} />
              {/* Add back-step or just let Cancel/Confirm handle it */}
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default NewRoleModal;
  