import { Banner, Button, PageHeader, Stack } from "@demo/design-system";
import { buildPromotionMessage } from "@demo/commerce-workflows";

const message = buildPromotionMessage({
  campaign: "Spring reset",
  benefit: "15 percent off bundles",
  region: "US and Canada"
});

export default function PromotionsPage() {
  return (
    <main className="storefront-shell">
      <Stack gap="lg">
        <PageHeader
          eyebrow="Promotions"
          title="Current offers"
          description="Customer-facing merchandising messages composed with the current design-system API."
        />

        <Banner tone="warning">
          <Banner.Icon />
          <Banner.Content>
            <Banner.Title>{message.headline}</Banner.Title>
            <Banner.Description>{message.body}</Banner.Description>
          </Banner.Content>
          <Banner.Actions>
            <Button href="/">Continue shopping</Button>
          </Banner.Actions>
        </Banner>
      </Stack>
    </main>
  );
}
