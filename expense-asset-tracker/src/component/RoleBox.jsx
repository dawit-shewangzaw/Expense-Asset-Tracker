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