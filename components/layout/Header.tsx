export default function Header({ title }: { title: string }) {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="font-bold text-lg">{title}</h1>

      <div className="flex items-center gap-3">
        <div className="text-right hidden md:block">
          <p className="text-sm font-bold">Admin User</p>
          <p className="text-xs text-gray-400">System Controller</p>
        </div>

        <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
      </div>
    </header>
  );
}