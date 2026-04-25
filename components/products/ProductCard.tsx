"use client";

import { Box, Ruler, Info, ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  material: string;
  dimensions: string;
  imageColor: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      {/* Product Image Placeholder */}
      <div className={`h-48 w-full flex items-center justify-center relative ${product.imageColor}`}>
        <Box className="w-12 h-12 text-white/50 group-hover:scale-110 transition-transform" />
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-black text-gray-900 leading-tight">{product.name}</h3>
          <span className="text-lg font-black text-blue-600">{product.price}</span>
        </div>

        <p className="text-xs font-mono text-gray-400 mb-4">{product.id}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Info className="w-4 h-4 mr-2 text-gray-400" />
            <span className="font-medium">Material:</span>
            <span className="ml-1 truncate">{product.material}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Ruler className="w-4 h-4 mr-2 text-gray-400" />
            <span className="font-medium">Size:</span>
            <span className="ml-1">{product.dimensions}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 py-3 bg-gray-50 text-gray-900 text-xs font-bold rounded-xl hover:bg-gray-100 transition">
            View Details
          </button>
          <button className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-100">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}