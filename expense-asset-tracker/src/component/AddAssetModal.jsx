import {
  Briefcase,
  Search,
  X,
  Check,
  ChevronDown,
  Image as ImageIcon,
} from "lucide-react";
import { useState, useRef } from "react";
import userImg from "../assets/kob.jpg";

const AddAssetModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [description, setDescription] = useState("");
  const [managerDropdownOpen, setManagerDropdownOpen] = useState(false);
  const [selectedManager, setSelectedManager] = useState(null);
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const fileInputRef = useRef(null);

  const validateStep1 = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = true;
    if (!model.trim()) newErrors.model = true;
    if (!serialNumber.trim()) newErrors.serialNumber = true;
    if (!profileImage) newErrors.profileImage = true;
    if (!description.trim()) newErrors.description = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

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

  const mockUsers = [
    { name: "Ali Jouro", role: "Product Manager", email: "ali@company.com", img: userImg },
    { name: "Sofia Lin", role: "UX Designer", email: "sofia@company.com", img: userImg },
    { name: "Liam Ben", role: "Backend Dev", email: "liam@company.com", img: userImg },
    { name: "Emily Rose", role: "HR Officer", email: "emily@company.com", img: userImg },
    { name: "Rachel Zed", role: "Data Scientist", email: "rachel@company.com", img: userImg },
  ];
  const teamManagers = [
      { name: "Ali Jouro", img: userImg },
      { name: "Sofia Lin", img: userImg },
      { name: "James Wu", img: userImg },
    ];

  const filteredUsers = mockUsers.filter(
    (user) =>
      `${user.name} ${user.role}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const shouldShowList = dropdownOpen || searchQuery.length > 0;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white w-[540px] max-w-[90%] rounded-xl p-6 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={18} />
        </button>

        {step === 1 ? (
          <>
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-[#e4f7ec] p-3 rounded-full">
                <Briefcase size={22} className="text-[#34BC68]" />
              </div>
            </div>

            <h2 className="text-lg font-semibold text-center mb-1">Record New Asset</h2>
            <p className="text-sm text-gray-600 text-center mb-6">
              Invite employees to join this workspace and collaborate on managing assets efficiently.
            </p>
            {/* Form Inputs */}
            <div className="space-y-4">
              {/* Title */}
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

            {/* Model & Serial Number */}
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="text-sm font-medium text-black">
                  Model <span className="text-red-500">*</span>
                </label>
                <input
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="Eg. Toshiba"
                  className={`w-full border ${
                    errors.model ? "border-red-400" : "border-gray-300"
                  } rounded-md py-2 px-3 text-sm outline-none`}
                />
              </div>
              <div className="w-1/2">
                <label className="text-sm font-medium text-black">
                  Serial Number <span className="text-red-500">*</span>
                </label>
                <input
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  placeholder="Eg. 235894"
                  className={`w-full border ${
                    errors.serialNumber ? "border-red-400" : "border-gray-300"
                  } rounded-md py-2 px-3 text-sm outline-none`}
                />
              </div>
            </div>

            {/* Profile Image */}
            <div className="mb-4">
            <div className="flex justify-between items-start">
              <label className="text-sm font-medium text-black">
                Asset Image <span className="text-red-500">*</span>
              </label>

              <div className="flex items-center space-x-5">
                <div
                  onClick={() => fileInputRef.current.click()}
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full border border-gray-300 cursor-pointer"
                >
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Preview"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <ImageIcon size={20} className="text-gray-500" />
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>

                <div
                  onClick={() => fileInputRef.current.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files[0];
                    if (file && file.type.startsWith("image/")) {
                      setProfileImage(URL.createObjectURL(file));
                    }
                  }}
                  className="w-70 border border-dashed border-gray-300 rounded-md p-2 cursor-pointer hover:border-[#6941C6] text-sm text-gray-500"
                >
                  <p className="leading-snug">
                    <span className="text-[#6941C6] ">Click to upload</span> or drag and
                    drop PNG or JPG (max. 800 x 400px)
                  </p>
                </div>
              </div>
            </div>

            {errors.profileImage && (
              <p className="text-sm text-red-500 mt-1">Profile image is required.</p>
            )}
          </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-black">
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

            {/* Step Circles */}
            <div className="flex justify-center mb-4 space-x-2 mt-4">
              <div className={`w-3 h-3 rounded-full ${step === 1 ? "bg-[#34BC68]" : "bg-gray-300"}`} />
              <div className={`w-3 h-3 rounded-full ${step === 2 ? "bg-[#34BC68]" : "bg-gray-300"}`} />
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-3 mt-4">
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
            {/* Step 2 */}
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

            <div className="text-center mb-6">
              <h2 className="text-lg font-semibold text-black mb-1">Assign this asset</h2>
              <p className="text-sm text-gray-600">
                Select one or multiple employees to assign to this asset
              </p>
              <p className="text-sm text-[#34BC68] font-medium">
                {title || "Role Title"}
              </p>
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

            {/* Team Members */}
            <p className="text-sm text-black mb-2 font-medium">Team members</p>

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
                        <img src={user.img} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <div className="text-sm font-medium text-black">{user.name}</div>
                          <div className="text-xs text-gray-500">{user.role}</div>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                          isSelected ? "bg-[#34BC68] border-[#34BC68]" : "border-gray-400"
                        }`}
                      >
                        {isSelected && <Check size={12} className="text-white" />}
                      </div>
                    </div>
                  );
                })}
                {filteredUsers.length === 0 && (
                  <div className="text-sm text-gray-500 text-center py-4">No users found.</div>
                )}
              </div>
            )}

            {selectedUsers.length > 0 && (
              <div className="mb-6 space-y-2">
                {selectedUsers.map((user) => (
                  <div key={user.name} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img src={user.img} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
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
            {/* Step Circles */}
            <div className="flex justify-center mb-4 space-x-2 mt-4">
              <div className={`w-3 h-3 rounded-full ${step === 1 ? "bg-[#34BC68]" : "bg-gray-300"}`} />
              <div className={`w-3 h-3 rounded-full ${step === 2 ? "bg-[#34BC68]" : "bg-gray-300"}`} />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleBack}
                className="px-24 py-2 text-sm border border-gray-300 rounded-md bg-white text-black"
              >
                Back
              </button>
              <button
                onClick={onClose}
                className="px-24 py-2 text-sm rounded-md bg-black text-white"
              >
                Confirm
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddAssetModal;