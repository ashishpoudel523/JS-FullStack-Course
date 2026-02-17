"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

// ------------------ MOCK DATA ------------------

const userGrowthData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 1200 },
  { month: "May", users: 1500 },
  { month: "Jun", users: 2000 },
];

const clientDistributionData = [
  { name: "Enterprise", value: 400 },
  { name: "Startup", value: 300 },
  { name: "Individual", value: 300 },
];

const revenueData = [
  { month: "Jan", revenue: 2400 },
  { month: "Feb", revenue: 1398 },
  { month: "Mar", revenue: 9800 },
  { month: "Apr", revenue: 3908 },
  { month: "May", revenue: 4800 },
  { month: "Jun", revenue: 3800 },
];

// ------------------ COMPONENT ------------------

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* USER GROWTH */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  strokeWidth={2}
                  stroke="#ed3b28ff"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* CLIENT DISTRIBUTION */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Client Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Pie
                  data={clientDistributionData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {clientDistributionData.map((_, index) => (
                    <Cell key={index} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* REVENUE ANALYSIS */}
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>Revenue Analysis</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2f7fd0ff" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
