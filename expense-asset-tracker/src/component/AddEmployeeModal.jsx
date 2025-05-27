// AddEmployeeModal.jsx
import { useState } from "react";
import { X, Plus } from "lucide-react";
import userImg from "../assets/kob.jpg";

const AddEmployeeModal = ({ onClose }) => {
  const [members, setMembers] = useState([
    { email: "", role: "", valid: true },
    { email: "", role: "", valid: true },
  ]);

  const handleAddRow = () => {
    if (members.length < 5) {
      setMembers([...members, { email: "", role: "", valid: true }]);
    }
  };

  const validateEmail = (email) => {
    return email.endsWith("@gmail.com");
  };

  const handleChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;

    if (field === "email") {
      updated[index].valid = validateEmail(value);
    }

    setMembers(updated);
  };

  const isFormValid = members.every(
    (member) =>
      member.email.trim() &&
      member.role.trim() &&
      validateEmail(member.email)
  );

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-[540px] max-w-[95%] rounded-xl p-6 shadow-xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex justify-center mb-4">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={userImg}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
        </div>

        <h2 className="text-center text-lg font-semibold text-black">
          Invite your team
        </h2>
        <p className="text-sm text-gray-600 text-center mt-1">
          Add new users to invite to the team and notify them with email also add their roles.
        </p>

        {/* Input Rows */}
        <div className="mt-6 space-y-4">
          {members.map((member, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-black mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={member.email}
                  onChange={(e) => handleChange(index, "email", e.target.value)}
                  className={`w-full border rounded-md px-3 py-2 text-sm outline-none ${
                    member.email && !member.valid
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {!member.valid && (
                  <p className="text-xs text-red-500 mt-1">
                    Must be a valid @gmail.com email.
                  </p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-black mb-1">
                  Role<span className="text-red-500">*</span>
                </label>
                <select
                  value={member.role}
                  onChange={(e) => handleChange(index, "role", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none"
                >
                  <option value="">Select role</option>
                  <option value="Admin">Admin</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Recruitment">Recruitment</option>
                  <option value="Sales">Sales</option>
                  <option value="Customer Services">Customer Services</option>
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* Add another (max 5) */}
        {members.length < 5 && (
          <div
            className="mt-4 flex items-center space-x-2 text-sm text-[#34BC68] cursor-pointer font-medium"
            onClick={handleAddRow}
          >
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#e4f7ec]">
              <Plus size={14} className="text-[#34BC68]" />
            </div>
            <span>Add another</span>
          </div>
        )}

        {/* Footer buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={onClose}
            className="px-12 md:px-24 py-2 border border-gray-300 rounded-md text-sm text-black"
          >
            Cancel  
          </button>
          <button
            disabled={!isFormValid}
            onClick={onClose}
            className={`px-12 md:px-24 sm:px-18 py-2 rounded-md text-sm ${
              isFormValid
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Confirm
          </button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;