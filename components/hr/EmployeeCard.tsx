"use client";

import { Mail, Phone, MapPin, MoreHorizontal, Briefcase } from "lucide-react";

interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  status: string;
  imageColor: string;
}

export default function EmployeeCard({ emp }: { emp: Employee }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      {/* Status Badge */}
      <div className={`absolute top-0 right-0 px-4 py-1 rounded-bl-xl text-[10px] font-black uppercase tracking-widest ${
        emp.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
      }`}>
        {emp.status}
      </div>

      <div className="flex items-start space-x-5">
        {/* Avatar Placeholder */}
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner flex-shrink-0 ${emp.imageColor}`}>
          {emp.name.split(' ').map(n => n[0]).join('')}
        </div>

        {/* Employee Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div className="truncate">
              <h3 className="text-lg font-black text-gray-900 leading-tight truncate">{emp.name}</h3>
              <div className="flex items-center text-blue-600 text-xs font-bold mt-1">
                <Briefcase className="w-3 h-3 mr-1 flex-shrink-0" />
                {emp.role}
              </div>
            </div>
            <button className="text-gray-300 hover:text-gray-600 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2">
            <div className="flex items-center text-sm text-gray-500 truncate">
              <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="truncate">{emp.email}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              {emp.phone}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              {emp.department} Office
            </div>
          </div>

          <div className="mt-6 flex space-x-2">
            <button className="flex-1 py-2 text-xs font-bold bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition">View Profile</button>
            <button className="flex-1 py-2 text-xs font-bold bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition">Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}