import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Reports</h1>
          <p className="text-slate-400">
            Generate and view detailed analytics reports
          </p>
        </div>

        {/* Placeholder Content */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Analytics Reports
            </CardTitle>
            <CardDescription className="text-slate-400">
              Detailed reporting and export tools coming soon
            </CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p>Build your reports interface here.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
