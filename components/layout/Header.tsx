"use client";

import { Bell, Search, Settings, User } from "lucide-react";

interface HeaderProps {
  title?: string;
}

export default function Header({ title = "Nexus ERP" }: HeaderProps) {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
      
      {/* Left Side: Dynamic Title & Search */}
      <div className="flex items-center space-x-8">
        <h1 className="font-black text-2xl text-gray-900 tracking-tight">
          {title}
        </h1>
        
        <div className="hidden lg:flex items-center bg-gray-50 border border-gray-100 px-4 py-2 rounded-2xl w-80 group focus-within:ring-2 focus-within:ring-blue-500/10 transition-all">
          <Search className="w-4 h-4 text-gray-400 group-focus-within:text-blue-600" />
          <input 
            type="text" 
            placeholder="Search everything..." 
            className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full text-gray-600 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right Side: Actions & Profile */}
      <div className="flex items-center space-x-6">
        
        {/* Utility Icons */}
        <div className="flex items-center space-x-2 border-r border-gray-100 pr-6">
          <button className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center group cursor-pointer">
          <div className="text-right mr-4 hidden sm:block">
            <p className="text-sm font-black text-gray-900 group-hover:text-blue-600 transition-colors">
              Bethlehem T.
            </p>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              System Controller
            </p>
          </div>
          
          <div className="relative">
            <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform overflow-hidden">
              <User className="w-6 h-6" />
            </div>
            {/* Online Status Indicator */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-white rounded-full"></div>
          </div>
        </div>
        
      </div>
    </header>
  );
}