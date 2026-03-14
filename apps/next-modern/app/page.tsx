import { Button, CallToAction } from "@demo/component-library";

export default function HomePage() {
  return (
    <main>
      <h1>Modern Next.js app</h1>
      <CallToAction title="Ship the right skills to the right scope" href="/signup">
        Start free trial
      </CallToAction>
      <Button tone="brand" href="/sales">
        Talk to sales
      </Button>
    </main>
  );
}
