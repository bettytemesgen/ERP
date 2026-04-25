import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  value: string;
  subtext: string;
  icon: LucideIcon;
  color: string;
}

export default function Card({ title, value, subtext, icon: Icon, color }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        <p className="text-xs text-green-500 mt-1">{subtext}</p>
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="text-white w-6 h-6" />
      </div>
    </div>
  );
}