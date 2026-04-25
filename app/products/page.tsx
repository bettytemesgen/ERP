"use client";

import { Plus, Search, Filter, Download, ListFilter } from "lucide-react";
import ProductRow from "@/components/products/ProductRow";

const products = [
  { id: "PROD-101", name: "Chesterfield Sofa", category: "Living Room", stock: 24, price: "$1,450", supplier: "Luxury Woods Co.", status: "Active" },
  { id: "PROD-202", name: "Marble Dining Set", category: "Dining", stock: 8, price: "$2,800", supplier: "Italian Stone Ltd.", status: "Active" },
  { id: "PROD-305", name: "ErgoDesk Pro", category: "Office", stock: 0, price: "$850", supplier: "Tech-Fit Furniture", status: "Archived" },
  { id: "PROD-409", name: "Velvet Wingback", category: "Seating", stock: 15, price: "$620", supplier: "SoftFabrics Global", status: "Active" },
] as const;

export default function ProductsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* ERP Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Master Product Catalog</h2>
          <p className="text-gray-500 text-sm">Centralized management for SKUs, inventory levels, and procurement.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-white transition shadow-sm">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition">
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Advanced Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by SKU, Name or Supplier..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
          />
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-100 transition">
            <Filter className="w-4 h-4" />
            <span>Category</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-100 transition">
            <ListFilter className="w-4 h-4" />
            <span>Status</span>
          </button>
        </div>
      </div>

      {/* ERP Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Product Information</th>
                <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Category</th>
                <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Stock Level</th>
                <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Unit Price</th>
                <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Primary Supplier</th>
                <th className="p-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                <th className="p-4 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <ProductRow key={p.id} product={p} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}