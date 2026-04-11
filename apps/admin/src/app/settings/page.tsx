import { Button, ErrorSummary, Fieldset, PageHeader, Stack } from "@demo/design-system";

export default function SettingsPage() {
  return (
    <main className="admin-shell">
      <Stack gap="lg" className="settings-form">
        <PageHeader
          eyebrow="Configuration"
          title="Campaign settings"
          description="Operational controls for discounts and fulfillment messaging."
        />

        <ErrorSummary
          title="Review the highlighted settings"
          errors={[
            { label: "Approval threshold must be at least 10 percent.", href: "#approval-threshold" },
            { label: "Escalation email is required.", href: "#escalation-email" }
          ]}
        />

        <form>
          <Stack gap="md">
            <Fieldset legend="Promotion controls" description="These settings affect admin review flow.">
              <label>
                Approval threshold
                <input id="approval-threshold" name="approval-threshold" defaultValue="8%" />
              </label>
              <label>
                Escalation email
                <input id="escalation-email" name="escalation-email" type="email" />
              </label>
            </Fieldset>

            <div className="form-actions">
              <Button type="submit">Save settings</Button>
              <Button href="/dashboard" variant="secondary">
                Cancel
              </Button>
            </div>
          </Stack>
        </form>
      </Stack>
    </main>
  );
}
