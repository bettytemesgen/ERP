export default function SalesPage() {
  const sales = [
    { customer: 'Global Logistics', date: 'Oct 24, 2023', amount: '$12,400', status: 'Paid' },
    { customer: 'Tech Corp', date: 'Oct 23, 2023', amount: '$2,150', status: 'Pending' },
    { customer: 'Delta Inc', date: 'Oct 22, 2023', amount: '$540', status: 'Overdue' }
  ];

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Sales Ledger</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-blue-700 transition">
          Create Invoice
        </button>
      </div>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-xs font-bold text-gray-400 uppercase">Customer</th>
              <th className="p-4 text-xs font-bold text-gray-400 uppercase">Date</th>
              <th className="p-4 text-xs font-bold text-gray-400 uppercase">Amount</th>
              <th className="p-4 text-xs font-bold text-gray-400 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sales.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="p-4 font-semibold">{item.customer}</td>
                <td className="p-4 text-gray-500">{item.date}</td>
                <td className="p-4 text-gray-900 font-medium">{item.amount}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                    item.status === 'Paid' ? 'bg-green-100 text-green-600' : 
                    item.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}