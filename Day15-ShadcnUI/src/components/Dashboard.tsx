"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ArrowUp,
  ArrowDown,
  Users,
  BarChart3,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { LogoutDialog } from "./LogoutDialog";

// User growth data
const userGrowthData = [
  { month: "Jan", users: 4200, activeUsers: 2400 },
  { month: "Feb", users: 5100, activeUsers: 2800 },
  { month: "Mar", users: 6200, activeUsers: 3200 },
  { month: "Apr", users: 7100, activeUsers: 3800 },
  { month: "May", users: 8400, activeUsers: 4200 },
  { month: "Jun", users: 9800, activeUsers: 5100 },
  { month: "Jul", users: 11200, activeUsers: 6200 },
  { month: "Aug", users: 12900, activeUsers: 7100 },
];

// Client engagement data
const clientEngagementData = [
  { month: "Jan", engagement: 65 },
  { month: "Feb", engagement: 72 },
  { month: "Mar", engagement: 78 },
  { month: "Apr", engagement: 82 },
  { month: "May", engagement: 85 },
  { month: "Jun", engagement: 88 },
  { month: "Jul", engagement: 90 },
  { month: "Aug", engagement: 92 },
];

// Revenue data
const revenueData = [
  { month: "Jan", revenue: 12000, target: 15000 },
  { month: "Feb", revenue: 15200, target: 15000 },
  { month: "Mar", revenue: 18100, target: 16000 },
  { month: "Apr", revenue: 21000, target: 18000 },
  { month: "May", revenue: 24200, target: 20000 },
  { month: "Jun", revenue: 28100, target: 22000 },
  { month: "Jul", revenue: 32400, target: 25000 },
  { month: "Aug", revenue: 36800, target: 28000 },
];

// Client distribution
const clientDistribution = [
  { name: "Enterprise", value: 32, color: "#3B82F6" },
  { name: "Mid-Market", value: 28, color: "#8B5CF6" },
  { name: "SMB", value: 24, color: "#10B981" },
  { name: "Startup", value: 16, color: "#F59E0B" },
];

// KPI component
function KPICard({
  title,
  value,
  trend,
  icon: Icon,
}: {
  title: string;
  value: string;
  trend: { value: string; direction: "up" | "down" };
  icon: React.ComponentType<{ className?: string }>;
}) {
  const isUp = trend.direction === "up";
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold mt-2">{value}</p>
            <div className="flex items-center gap-1 mt-2">
              {isUp ? (
                <ArrowUp className="w-4 h-4 text-green-600" />
              ) : (
                <ArrowDown className="w-4 h-4 text-red-600" />
              )}
              <span
                className={
                  isUp
                    ? "text-green-600 text-sm font-medium"
                    : "text-red-600 text-sm font-medium"
                }
              >
                {trend.value} {isUp ? "increase" : "decrease"}
              </span>
            </div>
          </div>
          <div className="p-3 bg-blue-100 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="p-8 max-w-7xl mx-auto">
        <div className="flex item-center justify-end">
          <LogoutDialog />
        </div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-slate-400">
            Monitor your users and clients performance in real-time
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Users"
            value="12,900"
            trend={{ value: "12.8%", direction: "up" }}
            icon={Users}
          />
          <KPICard
            title="Active Users"
            value="7,100"
            trend={{ value: "8.5%", direction: "up" }}
            icon={TrendingUp}
          />
          <KPICard
            title="Total Clients"
            value="342"
            trend={{ value: "4.2%", direction: "up" }}
            icon={BarChart3}
          />
          <KPICard
            title="Revenue"
            value="$36.8K"
            trend={{ value: "14.3%", direction: "up" }}
            icon={DollarSign}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* User Growth Chart */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">User Growth</CardTitle>
              <CardDescription className="text-slate-400">
                Total and active users over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  users: {
                    label: "Total Users",
                    color: "#f6f33bff",
                  },
                  activeUsers: {
                    label: "Active Users",
                    color: "#8B5CF6",
                  },
                }}
                className="h-80"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={userGrowthData}
                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis dataKey="month" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={{ fill: "#3B82F6", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="activeUsers"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      dot={{ fill: "#8B5CF6", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Client Distribution Pie Chart */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Client Distribution</CardTitle>
              <CardDescription className="text-slate-400">
                Breakdown by client type
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ChartContainer
                config={{
                  value: {
                    label: "Clients",
                  },
                }}
                className="h-80"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={clientDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {clientDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Revenue Performance</CardTitle>
              <CardDescription className="text-slate-400">
                Actual vs target revenue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  revenue: {
                    label: "Revenue",
                    color: "#10B981",
                  },
                  target: {
                    label: "Target",
                    color: "#F59E0B",
                  },
                }}
                className="h-80"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={revenueData}
                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis dataKey="month" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar
                      dataKey="revenue"
                      fill="#10B981"
                      radius={[8, 8, 0, 0]}
                    />
                    <Bar
                      dataKey="target"
                      fill="#F59E0B"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Engagement Trend */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Client Engagement</CardTitle>
              <CardDescription className="text-slate-400">
                Monthly engagement rate trend
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  engagement: {
                    label: "Engagement %",
                    color: "#06B6D4",
                  },
                }}
                className="h-80"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={clientEngagementData}
                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorEngagement"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#06B6D4"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#06B6D4"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis dataKey="month" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" domain={[0, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="engagement"
                      stroke="#06B6D4"
                      fillOpacity={1}
                      fill="url(#colorEngagement)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
