"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { name: "Enterprise", value: 420, fill: "#3b82f6" },
  { name: "Mid-Market", value: 380, fill: "#14b8a6" },
  { name: "Small Business", value: 510, fill: "#f59e0b" },
  { name: "Startup", value: 172, fill: "#ef4444" },
]

const COLORS = ["#3b82f6", "#14b8a6", "#f59e0b", "#ef4444"]

export function ClientDistributionChart() {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-foreground">
          Client Distribution
        </CardTitle>
        <CardDescription>
          Breakdown by company size
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            Enterprise: { label: "Enterprise", color: COLORS[0] },
            "Mid-Market": { label: "Mid-Market", color: COLORS[1] },
            "Small Business": { label: "Small Business", color: COLORS[2] },
            Startup: { label: "Startup", color: COLORS[3] },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={3}
                dataKey="value"
                nameKey="name"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-xs text-muted-foreground">{item.name}</span>
              <span className="text-xs font-medium font-mono text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
