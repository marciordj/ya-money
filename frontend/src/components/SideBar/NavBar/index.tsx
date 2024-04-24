import { Home, LayoutDashboard } from "lucide-react";

export function NavBar() {
  return (
    <nav className="space-y-0.5">
      <a href="" className="flex items-center gap-3 px-3 py-2 rounded">
        <Home className="w-5 h-5 text-slate-100"/>
        <span className="text-slate-100">Home</span>
      </a>
      <a href="" className="flex items-center gap-3 px-3 py-2 rounded">
        <LayoutDashboard className="w-5 h-5 text-slate-100"/>
        <span className="text-slate-100">Dashboard</span>
      </a>
    </nav>
  )
}