type BannerProps = {
  tone?: "info" | "success" | "warning" | "critical";
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
};

const toneStyles = {
  info: { border: "#65758b", background: "#f3f6f9", color: "#273444" },
  success: { border: "#5b936d", background: "#f1f8f3", color: "#254a32" },
  warning: { border: "#b9852f", background: "#fff8e8", color: "#5b4217" },
  critical: { border: "#b65050", background: "#fff1f1", color: "#602626" }
};

export function Banner({ tone = "info", title, description, action }: BannerProps) {
  const styles = toneStyles[tone];

  return (
    <section
      aria-live={tone === "critical" ? "assertive" : "polite"}
      style={{
        display: "grid",
        gap: 8,
        border: `1px solid ${styles.border}`,
        borderRadius: 8,
        background: styles.background,
        color: styles.color,
        padding: 14
      }}
    >
      <h2 style={{ margin: 0, fontSize: 16 }}>{title}</h2>
      {description ? <p style={{ margin: 0, fontSize: 14 }}>{description}</p> : null}
      {action ? (
        <a href={action.href} style={{ color: styles.color, fontWeight: 700 }}>
          {action.label}
        </a>
      ) : null}
    </section>
  );
}
