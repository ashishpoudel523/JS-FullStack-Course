"use client"

import {
  Line,
  LineChart,
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
  { day: "Mon", sessions: 1420, pageViews: 5200 },
  { day: "Tue", sessions: 1620, pageViews: 5900 },
  { day: "Wed", sessions: 1850, pageViews: 6800 },
  { day: "Thu", sessions: 1740, pageViews: 6400 },
  { day: "Fri", sessions: 1580, pageViews: 5600 },
  { day: "Sat", sessions: 980, pageViews: 3200 },
  { day: "Sun", sessions: 870, pageViews: 2800 },
]

const BLUE = "#3b82f6"
const EMERALD = "#10b981"

export function UserActivityChart() {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-foreground">
          User Activity
        </CardTitle>
        <CardDescription>
          Weekly sessions and page views
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            sessions: {
              label: "Sessions",
              color: BLUE,
            },
            pageViews: {
              label: "Page Views",
              color: EMERALD,
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 4% 16%)" />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(v) => `${(v / 1000).toFixed(1)}k`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="sessions"
                stroke={BLUE}
                strokeWidth={2}
                dot={{ r: 4, fill: BLUE, strokeWidth: 0 }}
                activeDot={{ r: 6, fill: BLUE, strokeWidth: 0 }}
              />
              <Line
                type="monotone"
                dataKey="pageViews"
                stroke={EMERALD}
                strokeWidth={2}
                dot={{ r: 4, fill: EMERALD, strokeWidth: 0 }}
                activeDot={{ r: 6, fill: EMERALD, strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
