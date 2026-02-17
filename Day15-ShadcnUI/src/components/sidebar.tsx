"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, Briefcase } from "lucide-react";

const menuItems = [
  {
    key: "dashboard" as const,
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    key: "users" as const,
    title: "Users",
    icon: Users,
  },
  {
    key: "clients" as const,
    title: "Clients",
    icon: Briefcase,
  },
];

type SidebarProps = {
  active: "dashboard" | "users" | "clients";
  onNavigate: (key: SidebarProps["active"]) => void;
};

export default function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <aside className="h-screen w-64 border-r bg-background p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.key;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onNavigate(item.key)}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                isActive ? "bg-muted font-semibold" : "hover:bg-muted",
              )}
            >
              <Icon size={18} />
              {item.title}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
