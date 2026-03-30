import { Button, Cta } from "@demo/component-library";

export default function HomePage() {
  return (
    <main>
      <h1>Legacy Next.js app</h1>
      <Cta
        headline="Launch faster with scoped skills"
        actionHref="/signup"
        actionLabel="Start free trial"
      />
      <Button label="Talk to sales" kind="primary" href="/sales" />
    </main>
  );
}
