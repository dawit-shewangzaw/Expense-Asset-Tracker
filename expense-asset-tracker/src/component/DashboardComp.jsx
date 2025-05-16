import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { FileText, Users, Briefcase } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import userImg from "../assets/kob.jpg";

const data = [
  { name: "Active", value: 190 },
  { name: "Inactive", value: 127 },
];

const COLORS = ["#34BC68", "#F2C94C"];

const DashboardComp = () => {
  return (
    <div className="px-6 py-6 space-y-6">
      {/* Title */}
      <h1 className="text-xl font-semibold text-black">Welcome Back!</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Total Assets</h4>
              <div className="text-2xl font-semibold text-black">317</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <ArrowUpRight size={14} className="mr-1" /> +5.3% from last year
              </div>
            </div>
            <div className="bg-[#e4f7ec] p-2 rounded-full">
              <FileText size={20} className="text-[#34BC68]" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Total Employees</h4>
              <div className="text-2xl font-semibold text-black">43</div>
              <div className="flex items-center text-sm text-red-600 mt-1">
                <ArrowDownRight size={14} className="mr-1" /> -10% from last year
              </div>
            </div>
            <div className="bg-[#e4f7ec] p-2 rounded-full">
              <Users size={20} className="text-[#34BC68]" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-sm font-medium text-gray-500">No of Departments</h4>
              <div className="text-2xl font-semibold text-black">17</div>
              <div className="flex items-center text-sm text-green-600 mt-1">
                <ArrowUpRight size={14} className="mr-1" /> +5.3% from last year
              </div>
            </div>
            <div className="w-10 h-10 bg-[#e4f7ec] rounded-full flex items-center justify-center">
              <Briefcase size={18} className="text-[#34BC68]" />
            </div>
          </div>
        </div>
      </div>

    {/* Bottom Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Asset Analysis */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow ">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-black">Asset Analysis</h3>
          <p className="text-base text-gray-500 mt-1">+5.3% From Last Year</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Pie Chart */}
          <div className="relative w-full flex flex-col items-center justify-center lg:w-3/5 mt-[-30px]">
            <PieChart width={300} height={260}>
              <Pie
                data={data}
                startAngle={180}
                endAngle={0}
                cx={150}
                cy={150}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={2}
                cornerRadius={8}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>

            {/* Center Text */}
            <div className="absolute top-[50%] translate-y-[-50%] text-center">
              <div className="text-2xl font-bold text-black">317</div>
              <div className="text-sm text-gray-500">Total Assets</div>
            </div>
          </div>

          {/* Divider line */}
          <div className="hidden lg:block w-px bg-gray-200 mx-6 h-[150px]"></div>

          {/* Legend */}
          <div className="mt-6 lg:mt-0 lg:ml-2 w-full lg:w-2/5 space-y-5">
            {data.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div
                  className="h-10 w-1.5 rounded-xl mt-[10px]"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <div>
                  <div className="text-sm font-semibold text-gray-400">{item.name} Assets</div>
                  <div className="text-black font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow pb-2">
        <h3 className="text-lg font-semibold text-black mb-1">Team Members</h3>
        <p className="text-sm text-gray-600 mb-4">
          Manage your organization’s members, roles, and access levels.
        </p>

        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                src={userImg}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-medium text-black">User {i}</div>
                <div className="text-xs text-gray-500">user{i}@company.com</div>
              </div>
            </div>
            <select className="border border-gray-300 text-sm rounded-md px-3 py-2 outline-none">
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
            </select>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DashboardComp;


