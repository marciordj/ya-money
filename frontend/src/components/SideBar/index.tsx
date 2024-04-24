import { NavBar } from "./NavBar";

export function SideBar() {
  return (
    <aside className="space-y-6 px-5 py-8 bg-slate-900">
      <h2 className="text-slate-100 pt-6">Ya-Finance</h2>
      <NavBar />
    </aside>
  )
}