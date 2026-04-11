import type { CSSProperties, ReactNode } from "react";

type StackProps = {
  children: ReactNode;
  gap?: "sm" | "md" | "lg";
  className?: string;
};

const gapMap: Record<NonNullable<StackProps["gap"]>, CSSProperties["gap"]> = {
  sm: 6,
  md: 12,
  lg: 20
};

export function Stack({ children, gap = "md", className }: StackProps) {
  return (
    <div className={className} style={{ display: "grid", gap: gapMap[gap] }}>
      {children}
    </div>
  );
}
