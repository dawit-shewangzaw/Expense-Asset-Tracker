// AddAssetModal.jsx
import {
    Briefcase,
    X,
    Plus,
  } from "lucide-react";
  import { useState } from "react";
  import AssignEmployeeModal from "./AssignEmployeeModal"; // to be created next
  import userImg from "../assets/kob.jpg";
  
  const AddAssetModal = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
      title: "",
      model: "",
      serial: "",
      description: "",
      image: null,
    });
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      setForm({ ...form, image: file });
    };
  
    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-white w-[520px] max-w-[90%] rounded-xl p-6 shadow-xl relative max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-10 -right-10 bg-white border border-gray-300 rounded-full p-[2px] shadow-sm hover:bg-gray-100 transition"
          >
            <X size={16} />
          </button>
  
          {/* Step 1 */}
          {step === 1 && (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-[#e4f7ec] p-2 rounded-full">
                  <Briefcase size={22} className="text-[#34BC68]" />
                </div>
              </div>
  
              {/* Title + Subtitle */}
              <h2 className="text-center text-lg font-semibold text-black">Record New Asset</h2>
              <p className="text-center text-sm text-gray-600 mb-6">
                Invite assets to join this workspace and help employees <br />
                to work on their maximum work rate.
              </p>
  
              {/* Title */}
              <div className="mb-4">
                <label className="text-sm text-black font-medium">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="What is your title?"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 text-sm outline-none"
                />
              </div>
  
              {/* Model & Serial */}
              <div className="flex space-x-3 mb-4">
                <div className="flex-1">
                  <label className="text-sm text-black font-medium">
                    Model <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="model"
                    placeholder="Eg. Toshiba"
                    value={form.model}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 text-sm outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-black font-medium">
                    Serial Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="serial"
                    placeholder="Eg. 235894"
                    value={form.serial}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 text-sm outline-none"
                  />
                </div>
              </div>
  
              {/* Image Upload */}
              <div className="mb-4">
                <label className="text-sm text-black font-medium">
                  Profile Image <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-4 mt-2">
                  <label className="w-9 h-9 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-full cursor-pointer">
                    <Plus size={16} />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                  <div className="border border-dashed border-gray-300 text-sm text-gray-500 rounded-md px-4 py-2 w-full">
                    Click to upload or drag and drop PNG or JPG (max. 800 x 400px)
                  </div>
                </div>
              </div>
  
              {/* Description */}
              <div className="mb-6">
                <label className="text-sm text-black font-medium">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Add your description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 text-sm outline-none resize-none"
                />
              </div>
  
              {/* Steps indicator + Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#34BC68]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </div>
                <div className="space-x-3">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="px-4 py-2 text-sm font-medium bg-black text-white rounded-md"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </>
          )}
  
          {/* Step 2 – Reuse AssignEmployeeModal */}
          {step === 2 && (
            <>
              <AssignEmployeeModal onBack={() => setStep(1)} onClose={onClose} />
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default AddAssetModal;
  