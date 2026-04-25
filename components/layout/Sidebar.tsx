"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Layers,
  UserCheck,
  Factory,
  Truck,
  DollarSign,
  BarChart3,
  Settings,
  Boxes,
  Hammer,
  ClipboardList,
  Warehouse,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { id: "production", label: "Production", href: "/production", icon: Factory },
  { id: "work-orders", label: "Work Orders", href: "/work-orders", icon: ClipboardList },
  { id: "process", label: "Manufacturing Steps", href: "/process", icon: Hammer },
  { id: "products", label: "Finished Products", href: "/products", icon: Boxes },
  { id: "sales", label: "Sales Orders", href: "/sales", icon: ShoppingBag },
  { id: "delivery", label: "Delivery", href: "/delivery", icon: Truck },
  { id: "customers", label: "Customers", href: "/customers", icon: UserCheck },
  { id: "hr", label: "Human Resources", href: "/hr", icon: Users },
  { id: "finance", label: "Finance", href: "/finance", icon: DollarSign },
  { id: "reports", label: "Reports", href: "/reports", icon: BarChart3 },
  { id: "settings", label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openInventory, setOpenInventory] = useState(true);

  return (
    <aside className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col h-screen sticky top-0">
      
      {/* LOGO */}
      <div className="flex items-center space-x-3 mb-10 px-2">
        <div className="bg-blue-600 p-2 rounded-xl">
          <Layers className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-black text-gray-800 uppercase tracking-tighter">
          Factory ERP
        </span>
      </div>

      <nav className="space-y-2 flex-1 overflow-y-auto custom-scrollbar">

        {/* 1. DASHBOARD */}
        <Link
          href="/dashboard"
          className={`flex items-center space-x-3 p-3 rounded-xl transition ${
            pathname === "/dashboard"
              ? "bg-blue-600 text-white shadow-md"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </Link>

        {/* 2. SUPPLY CHAIN SECTION */}
        <p className="text-xs font-bold text-gray-400 px-2 mt-6 mb-2 uppercase tracking-wider">
          Supply Chain
        </p>

        <button
          onClick={() => setOpenInventory(!openInventory)}
          className={`flex items-center justify-between w-full p-3 rounded-xl transition group ${
            openInventory ? "text-blue-600 bg-blue-50/50" : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <div className="flex items-center space-x-3">
            <Warehouse className="w-5 h-5" />
            <span className="font-medium">Inventory</span>
          </div>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${
              openInventory ? "rotate-180" : "rotate-0"
            }`} 
          />
        </button>

        {/* DROPDOWN ITEMS WITH ICONS */}
        <div className={`overflow-hidden transition-all duration-300 ${
          openInventory ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}>
          <div className="ml-6 flex flex-col gap-1 border-l-2 border-gray-100 pl-2 py-1">
            
            <Link 
              href="/inventory/raw-materials" 
              className={`flex items-center space-x-3 p-2 rounded-lg transition ${
                pathname === "/inventory/raw-materials" ? "text-blue-600 bg-blue-50/50" : "text-gray-500 hover:text-blue-600 hover:bg-blue-50/30"
              }`}
            >
              <Package className="w-4 h-4" />
              <span className="text-sm font-medium">Raw Materials</span>
            </Link>

            <Link 
              href="/inventory/production-materials" 
              className={`flex items-center space-x-3 p-2 rounded-lg transition ${
                pathname === "/inventory/production-materials" ? "text-blue-600 bg-blue-50/50" : "text-gray-500 hover:text-blue-600 hover:bg-blue-50/30"
              }`}
            >
              <Hammer className="w-4 h-4" />
              <span className="text-sm font-medium">Production Materials</span>
            </Link>

            <Link 
              href="/inventory/manufacturing-stock" 
              className={`flex items-center space-x-3 p-2 rounded-lg transition ${
                pathname === "/inventory/manufacturing-stock" ? "text-blue-600 bg-blue-50/50" : "text-gray-500 hover:text-blue-600 hover:bg-blue-50/30"
              }`}
            >
              <Boxes className="w-4 h-4" />
              <span className="text-sm font-medium">Manufacturing</span>
            </Link>
          </div>
        </div>

        {/* 3. OPERATIONS SECTION */}
        <p className="text-xs font-bold text-gray-400 px-2 mt-8 mb-2 uppercase tracking-wider">
          Operations
        </p>

        {navItems
          .filter(i => i.id !== "dashboard") 
          .map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center space-x-3 p-3 rounded-xl transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
      </nav>
    </aside>
  );
}