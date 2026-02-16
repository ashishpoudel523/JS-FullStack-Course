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
  { month: "Jan", retention: 92, churn: 8 },
  { month: "Feb", retention: 91, churn: 9 },
  { month: "Mar", retention: 93, churn: 7 },
  { month: "Apr", retention: 90, churn: 10 },
  { month: "May", retention: 94, churn: 6 },
  { month: "Jun", retention: 95, churn: 5 },
  { month: "Jul", retention: 93, churn: 7 },
  { month: "Aug", retention: 96, churn: 4 },
  { month: "Sep", retention: 94, churn: 6 },
  { month: "Oct", retention: 95, churn: 5 },
  { month: "Nov", retention: 97, churn: 3 },
  { month: "Dec", retention: 96, churn: 4 },
]

const EMERALD = "#10b981"
const RED = "#ef4444"

export function ClientRetentionChart() {
  return (
    <Card className="border-border/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-foreground">
          Client Retention
        </CardTitle>
        <CardDescription>
          Monthly retention and churn rates (%)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            retention: {
              label: "Retention %",
              color: EMERALD,
            },
            churn: {
              label: "Churn %",
              color: RED,
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillRetention" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={EMERALD} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={EMERALD} stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="fillChurn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={RED} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={RED} stopOpacity={0.0} />
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
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="retention"
                stroke={EMERALD}
                fill="url(#fillRetention)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="churn"
                stroke={RED}
                fill="url(#fillChurn)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
