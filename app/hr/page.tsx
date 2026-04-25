"use client";

import { UserPlus, Search } from "lucide-react";
import EmployeeCard from "@/components/hr/EmployeeCard";

const employees = [
  { 
    id: "EMP-101", 
    name: "Sarah Jenkins", 
    role: "Lead Interior Designer", 
    department: "Design", 
    email: "sarah.j@nexuserp.com", 
    phone: "+1 555-0122",
    status: "Active",
    imageColor: "bg-purple-100 text-purple-600"
  },
  { 
    id: "EMP-104", 
    name: "Marcus Thorne", 
    role: "Master Carpenter", 
    department: "Production", 
    email: "marcus.t@nexuserp.com", 
    phone: "+1 555-0190",
    status: "On Leave",
    imageColor: "bg-blue-100 text-blue-600"
  },
  // ... more employees
];

export default function HRPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Staff Directory</h2>
        <button className="flex items-center space-x-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-100 transition-all hover:bg-blue-700">
          <UserPlus className="w-4 h-4" />
          <span>Onboard Staff</span>
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search by name, role, or department..." 
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {employees.map((emp) => (
          <EmployeeCard key={emp.id} emp={emp} />
        ))}
      </div>
    </div>
  );
}