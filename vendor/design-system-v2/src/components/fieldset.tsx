import type { ReactNode } from "react";

type FieldsetProps = {
  legend: string;
  description?: string;
  children: ReactNode;
};

export function Fieldset({ legend, description, children }: FieldsetProps) {
  return (
    <fieldset
      style={{ display: "grid", gap: 10, border: "1px solid #cbd2d9", borderRadius: 6, padding: 14, margin: 0 }}
    >
      <legend style={{ fontWeight: 700, padding: "0 4px" }}>{legend}</legend>
      {description ? <p style={{ margin: 0, color: "#52606d" }}>{description}</p> : null}
      {children}
    </fieldset>
  );
}
