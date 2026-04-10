import { Banner, Button, PageHeader, Stack } from "@demo/design-system";
import { getFeaturedProducts } from "@demo/api-client";

const products = getFeaturedProducts();

export default function HomePage() {
  return (
    <main className="storefront-shell">
      <Stack gap="lg">
        <section className="hero-band">
          <PageHeader
            eyebrow="New season"
            title="Everyday goods for spring routines"
            description="Curated essentials, limited bundles, and shipping incentives for returning customers."
          />
          <Banner tone="success">
            <Banner.Icon />
            <Banner.Content>
              <Banner.Title>Member discount applied at checkout</Banner.Title>
              <Banner.Description>Spend $75 today and unlock complimentary priority shipping.</Banner.Description>
            </Banner.Content>
            <Banner.Actions>
              <Button href="/promotions">Shop promotions</Button>
            </Banner.Actions>
          </Banner>
        </section>

        <section className="product-grid" aria-label="Featured products">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </article>
          ))}
        </section>
      </Stack>
    </main>
  );
}
