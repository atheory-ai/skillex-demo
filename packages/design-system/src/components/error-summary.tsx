type ErrorSummaryProps = {
  title: string;
  errors: Array<{ label: string; href: string }>;
};

export function ErrorSummary({ title, errors }: ErrorSummaryProps) {
  return (
    <section
      aria-labelledby="error-summary-title"
      style={{ border: "1px solid #c65353", borderRadius: 8, padding: 16, background: "#fff0f0" }}
    >
      <h2 id="error-summary-title" style={{ margin: "0 0 8px", fontSize: 16 }}>
        {title}
      </h2>
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        {errors.map((error) => (
          <li key={error.href}>
            <a href={error.href}>{error.label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
