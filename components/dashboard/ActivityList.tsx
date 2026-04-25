"use client";

export default function ActivityList() {
  const activities = [
    { id: 1, po: "#PO-882", vendor: "Acmetech", time: "2 mins ago" },
    { id: 2, po: "#PO-883", vendor: "Global Link", time: "10 mins ago" },
    { id: 3, po: "#PO-884", vendor: "Nexus Parts", time: "1 hour ago" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
      <h3 className="font-bold text-gray-800 mb-6 px-2">Recent System Activity</h3>
      
      <div className="space-y-1">
        {activities.map((item) => (
          <div 
            key={item.id} 
            className="group flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50 last:border-0"
          >
            {/* The Status Indicator Dot */}
            <div className="relative flex h-3 w-3 mr-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </div>
            
            {/* The Text Content */}
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                New Purchase Order <span className="font-bold text-gray-900">{item.po}</span> generated for Vendor: <span className="text-gray-800 font-medium">{item.vendor}</span>
              </p>
            </div>
            
            {/* Timestamp */}
            <div className="text-xs font-medium text-gray-400 tabular-nums">
              {item.time}
            </div>
          </div>
        ))}
      </div>
      
      {/* Optional "View All" Footer */}
      <button className="w-full mt-4 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
        View Full Audit Log
      </button>
    </div>
  );
}