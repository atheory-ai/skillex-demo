type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header style={{ display: "grid", gap: 6 }}>
      {eyebrow ? (
        <p style={{ margin: 0, color: "#334e68", fontWeight: 700, textTransform: "uppercase", fontSize: 12 }}>
          {eyebrow}
        </p>
      ) : null}
      <h1 style={{ margin: 0, fontSize: 30, lineHeight: "36px" }}>{title}</h1>
      {description ? <p style={{ margin: 0, color: "#52606d", fontSize: 16 }}>{description}</p> : null}
    </header>
  );
}
