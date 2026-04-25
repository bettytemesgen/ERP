"use client"; // <--- Add this at the very top!

import { DollarSign, ShoppingCart, Users, Activity } from "lucide-react";
import Card from "../ui/Card";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card title="Total Revenue" value="$42,500" subtext="+12% vs last month" icon={DollarSign} color="bg-blue-500" />
      <Card title="Active Orders" value="18" subtext="4 pending shipping" icon={ShoppingCart} color="bg-purple-500" />
      <Card title="Staff Count" value="124" subtext="2 new joins today" icon={Users} color="bg-orange-500" />
      <Card title="Efficiency" value="94%" subtext="+2% increase" icon={Activity} color="bg-green-500" />
    </div>
  );
}