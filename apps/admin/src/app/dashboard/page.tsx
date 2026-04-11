import { Banner, PageHeader, Stack } from "@demo/design-system";
import { listOperationalMetrics } from "@demo/api-client";

const metrics = listOperationalMetrics();

export default function DashboardPage() {
  return (
    <main className="admin-shell">
      <Stack gap="lg">
        <PageHeader
          eyebrow="Operations"
          title="Admin dashboard"
          description="Monitor campaigns, fulfillment pressure, and account operations."
        />

        <Banner
          tone="success"
          title="Spring discount is active"
          description="The current campaign is live across eligible storefront regions."
          action={{ label: "View campaign", href: "/campaigns/spring" }}
        />

        <section className="admin-grid" aria-label="Operational metrics">
          {metrics.map((metric) => (
            <article className="admin-panel" key={metric.label}>
              <h2>{metric.value}</h2>
              <p>{metric.label}</p>
            </article>
          ))}
        </section>
      </Stack>
    </main>
  );
}
