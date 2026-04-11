import type { ReactNode } from "react";

type Tone = "info" | "success" | "warning" | "critical";

type BannerRootProps = {
  tone?: Tone;
  children: ReactNode;
};

const toneStyles: Record<Tone, { border: string; background: string; color: string }> = {
  info: { border: "#5e8ca8", background: "#eef7fb", color: "#17384d" },
  success: { border: "#4f9f72", background: "#effaf3", color: "#1d4630" },
  warning: { border: "#c99a2e", background: "#fff8e5", color: "#5c420c" },
  critical: { border: "#c65353", background: "#fff0f0", color: "#672525" }
};

function BannerRoot({ tone = "info", children }: BannerRootProps) {
  const styles = toneStyles[tone];

  return (
    <section
      aria-live={tone === "critical" ? "assertive" : "polite"}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        border: `1px solid ${styles.border}`,
        borderRadius: 8,
        background: styles.background,
        color: styles.color,
        padding: 16
      }}
    >
      {children}
    </section>
  );
}

function BannerIcon() {
  return (
    <span aria-hidden="true" style={{ fontWeight: 700, lineHeight: "24px" }}>
      i
    </span>
  );
}

function BannerContent({ children }: { children: ReactNode }) {
  return <div style={{ display: "grid", gap: 4, flex: "1 1 auto" }}>{children}</div>;
}

function BannerTitle({ children }: { children: ReactNode }) {
  return <h2 style={{ margin: 0, fontSize: 16, lineHeight: "24px" }}>{children}</h2>;
}

function BannerDescription({ children }: { children: ReactNode }) {
  return <p style={{ margin: 0, fontSize: 14, lineHeight: "22px" }}>{children}</p>;
}

function BannerActions({ children }: { children: ReactNode }) {
  return <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{children}</div>;
}

export const Banner = Object.assign(BannerRoot, {
  Icon: BannerIcon,
  Content: BannerContent,
  Title: BannerTitle,
  Description: BannerDescription,
  Actions: BannerActions
});
