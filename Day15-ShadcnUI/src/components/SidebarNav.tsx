import { NavLink, Outlet } from "react-router-dom";
import { BarChart3, LayoutDashboard, Users } from "lucide-react";

import { ModeToggle } from "./mode-toggle";

const menuItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/users", label: "Users", icon: Users },
  { to: "/reports", label: "Reports", icon: BarChart3 },
];

export function SidebarNav() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-800 bg-slate-900/95 backdrop-blur">
        <div className="flex h-full flex-col">
          <div className="border-b border-slate-800 px-6 py-5">
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Admin Panel
            </p>
            <h1 className="mt-1 text-lg font-semibold">Shadcn Dashboard</h1>
          </div>

          <nav className="flex-1 space-y-2 p-4">
            {menuItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white",
                  ].join(" ")
                }
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-slate-800 p-4">
            <ModeToggle />
          </div>
        </div>
      </aside>

      <main className="ml-64 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
