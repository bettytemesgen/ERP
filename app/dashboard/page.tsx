import DashboardCards from "@/components/dashboard/DashboardCards";
import ActivityList from "@/components/dashboard/ActivityList";

export default function DashboardPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
      <DashboardCards />
      <ActivityList />
    </div>
  );
}