"use client";

import { Box, BarChart3, Edit3, MoreHorizontal, Warehouse } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  supplier: string;
  status: "Active" | "Draft" | "Archived";
}

export default function ProductRow({ product }: { product: Product }) {
  return (
    <tr className="group hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
      <td className="py-4 px-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
            <Box className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
          </div>
          <div>
            <div className="font-bold text-gray-900">{product.name}</div>
            <div className="text-xs text-gray-400 font-mono">{product.id}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 text-sm text-gray-600">{product.category}</td>
      <td className="py-4 px-4">
        <div className="flex items-center text-sm font-bold text-gray-800">
          <Warehouse className="w-4 h-4 mr-2 text-gray-400" />
          {product.stock}
        </div>
      </td>
      <td className="py-4 px-4 text-sm font-black text-gray-900">{product.price}</td>
      <td className="py-4 px-4 text-sm text-gray-500">{product.supplier}</td>
      <td className="py-4 px-4">
        <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${
          product.status === 'Active' ? 'bg-green-100 text-green-600' : 
          product.status === 'Draft' ? 'bg-gray-100 text-gray-500' : 'bg-red-100 text-red-600'
        }`}>
          {product.status}
        </span>
      </td>
      <td className="py-4 px-4 text-right">
        <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition">
            <BarChart3 className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-200 text-gray-600 rounded-lg transition">
            <Edit3 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}