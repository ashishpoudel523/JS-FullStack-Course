import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { KpiCards } from "@/components/dashboard/kpi-cards"
import { UserGrowthChart } from "@/components/dashboard/user-growth-chart"
import { ClientRevenueChart } from "@/components/dashboard/client-revenue-chart"
import { UserActivityChart } from "@/components/dashboard/user-activity-chart"
import { ClientDistributionChart } from "@/components/dashboard/client-distribution-chart"
import { UserDemographicsChart } from "@/components/dashboard/user-demographics-chart"
import { ClientRetentionChart } from "@/components/dashboard/client-retention-chart"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <DashboardHeader />

        <section className="mt-8" aria-label="Key performance indicators">
          <KpiCards />
        </section>

        <section className="mt-8" aria-label="User analytics">
          <h2 className="mb-4 text-lg font-medium text-foreground">
            User Analytics
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <UserGrowthChart />
            <UserActivityChart />
          </div>
        </section>

        <section className="mt-8" aria-label="Client analytics">
          <h2 className="mb-4 text-lg font-medium text-foreground">
            Client Analytics
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ClientRevenueChart />
            <ClientDistributionChart />
          </div>
        </section>

        <section className="mt-8 pb-8" aria-label="Detailed analytics">
          <h2 className="mb-4 text-lg font-medium text-foreground">
            Detailed Breakdown
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <UserDemographicsChart />
            <ClientRetentionChart />
          </div>
        </section>
      </div>
    </main>
  )
}
