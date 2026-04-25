"use client";

import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  MoreVertical, 
  AlertTriangle 
} from "lucide-react";

export default function InventoryPage() {
  const furnitureStock = [
    { 
      id: "FUR-9920", 
      name: "Velvet Shell Armchair", 
      category: "Seating", 
      material: "Velvet / Gold Steel", 
      dimensions: "85x80x75 cm",
      stock: 12, 
      price: "$450.00", 
      status: "In Stock" 
    },
    { 
      id: "FUR-8812", 
      name: "Marble Top Coffee Table", 
      category: "Living Room", 
      material: "Carrara Marble", 
      dimensions: "120x60 cm",
      stock: 3, 
      price: "$890.00", 
      status: "Low Stock" 
    },
    { 
      id: "FUR-7701", 
      name: "Oakwood King Bed Frame", 
      category: "Bedroom", 
      material: "Solid Oak", 
      dimensions: "200x180 cm",
      stock: 0, 
      price: "$1,250.00", 
      status: "Out of Stock" 
    },
    { 
      id: "FUR-6625", 
      name: "Minimalist Floating Shelf", 
      category: "Storage", 
      material: "Walnut Wood", 
      dimensions: "100x20 cm",
      stock: 45, 
      price: "$85.00", 
      status: "In Stock" 
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Inventory</h2>
          <p className="text-gray-500 mt-1">Real-time warehouse stock and material tracking.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition">
            <Plus className="w-4 h-4" />
            <span>New Item</span>
          </button>
        </div>
      </div>

      {/* Quick Stats bar for Furniture House */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-orange-50 border border-orange-100 p-4 rounded-2xl flex items-center space-x-4">
          <div className="bg-orange-500 p-2 rounded-lg text-white">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-orange-600 uppercase">Reorder Alerts</p>
            <p className="text-lg font-black text-orange-900">4 Items Low</p>
          </div>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by SKU, Material, or Name..." 
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
          />
        </div>
        <button className="flex items-center justify-center space-x-2 px-6 py-2 border border-gray-100 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition">
          <Filter className="w-4 h-4" />
          <span>Category</span>
        </button>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Furniture Item</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Specs & Material</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Stock</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Price</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {furnitureStock.map((item) => (
                <tr key={item.id} className="group hover:bg-blue-50/30 transition-all duration-200">
                  <td className="p-5">
                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</div>
                    <div className="text-xs font-mono text-gray-400 mt-0.5">{item.id}</div>
                  </td>
                  <td className="p-5">
                    <div className="text-sm text-gray-700 font-medium">{item.material}</div>
                    <div className="text-xs text-gray-400">{item.dimensions}</div>
                  </td>
                  <td className="p-5 text-center">
                    <span className={`text-sm font-black ${item.stock === 0 ? 'text-red-500' : 'text-gray-800'}`}>
                      {item.stock}
                    </span>
                  </td>
                  <td className="p-5 text-sm font-bold text-gray-900">{item.price}</td>
                  <td className="p-5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      item.status === 'In Stock' ? 'bg-green-100 text-green-700' : 
                      item.status === 'Low Stock' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-5 text-right">
                    <button className="text-gray-400 hover:text-gray-600 p-1">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}