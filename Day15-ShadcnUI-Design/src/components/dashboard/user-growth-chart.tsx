"use client"

import {
  Area,
  AreaChart,
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
  { month: "Jan", users: 4200, newUsers: 1200 },
  { month: "Feb", users: 5800, newUsers: 1600 },
  { month: "Mar", users: 7100, newUsers: 1300 },
  { month: "Apr", users: 9200, newUsers: 2100 },
  { month: "May", users: 11400, newUsers: 2200 },
  { month: "Jun", users: 13200, newUsers: 1800 },
  { month: "Jul", users: 15800, newUsers: 2600 },
  { month: "Aug", users: 17500, newUsers: 1700 },
  { month: "Sep", users: 19800, newUsers: 2300 },
  { month: "Oct", users: 21200, newUsers: 1400 },
  { month: "Nov", users: 23100, newUsers: 1900 },
  { month: "Dec", users: 24891, newUsers: 1791 },
]

const BLUE = "#3b82f6"
const TEAL = "#14b8a6"

export function UserGrowthChart() {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-foreground">
          User Growth
        </CardTitle>
        <CardDescription>
          Total and new user registrations over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            users: {
              label: "Total Users",
              color: BLUE,
            },
            newUsers: {
              label: "New Users",
              color: TEAL,
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={BLUE} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={BLUE} stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="fillNewUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={TEAL} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={TEAL} stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 4% 16%)" />
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
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="users"
                stroke={BLUE}
                fill="url(#fillUsers)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="newUsers"
                stroke={TEAL}
                fill="url(#fillNewUsers)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
