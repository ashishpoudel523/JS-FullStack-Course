"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
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
  { month: "Jan", revenue: 42000, expenses: 28000 },
  { month: "Feb", revenue: 53000, expenses: 31000 },
  { month: "Mar", revenue: 48000, expenses: 29000 },
  { month: "Apr", revenue: 61000, expenses: 35000 },
  { month: "May", revenue: 55000, expenses: 32000 },
  { month: "Jun", revenue: 72000, expenses: 38000 },
  { month: "Jul", revenue: 68000, expenses: 36000 },
  { month: "Aug", revenue: 79000, expenses: 41000 },
  { month: "Sep", revenue: 85000, expenses: 43000 },
  { month: "Oct", revenue: 91000, expenses: 45000 },
  { month: "Nov", revenue: 88000, expenses: 42000 },
  { month: "Dec", revenue: 96000, expenses: 48000 },
]

const BLUE = "#3b82f6"
const AMBER = "#f59e0b"

export function ClientRevenueChart() {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-foreground">
          Client Revenue vs Expenses
        </CardTitle>
        <CardDescription>
          Monthly financial performance breakdown
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            revenue: {
              label: "Revenue",
              color: BLUE,
            },
            expenses: {
              label: "Expenses",
              color: AMBER,
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 4% 16%)" vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="revenue"
                fill={BLUE}
                radius={[4, 4, 0, 0]}
                barSize={14}
              />
              <Bar
                dataKey="expenses"
                fill={AMBER}
                radius={[4, 4, 0, 0]}
                barSize={14}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
