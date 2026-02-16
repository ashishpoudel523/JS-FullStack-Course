import { Card, CardContent } from "@/components/ui/card"
import { Users, Building2, TrendingUp, Activity } from "lucide-react"

const kpis = [
  {
    title: "Total Users",
    value: "24,891",
    change: "+12.5%",
    trend: "up" as const,
    icon: Users,
  },
  {
    title: "Active Clients",
    value: "1,482",
    change: "+8.2%",
    trend: "up" as const,
    icon: Building2,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+0.8%",
    trend: "up" as const,
    icon: TrendingUp,
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: "-2.1%",
    trend: "down" as const,
    icon: Activity,
  },
]

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <Card key={kpi.title} className="border-border/50">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{kpi.title}</p>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-3 flex items-end gap-2">
              <p className="text-2xl font-semibold tracking-tight text-foreground font-mono">
                {kpi.value}
              </p>
              <span
                className={`mb-0.5 text-xs font-medium ${
                  kpi.trend === "up"
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {kpi.change}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">vs last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
