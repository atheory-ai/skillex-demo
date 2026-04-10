type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header style={{ display: "grid", gap: 8 }}>
      {eyebrow ? (
        <p style={{ margin: 0, color: "#1f6f8b", fontWeight: 700, textTransform: "uppercase", fontSize: 12 }}>
          {eyebrow}
        </p>
      ) : null}
      <h1 style={{ margin: 0, fontSize: 36, lineHeight: "42px" }}>{title}</h1>
      {description ? <p style={{ margin: 0, color: "#52606d", fontSize: 18 }}>{description}</p> : null}
    </header>
  );
}
