import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

type ButtonProps =
  | (CommonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string })
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

export function Button({ children, variant = "primary", href, ...props }: ButtonProps) {
  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 38,
    padding: "0 14px",
    borderRadius: 8,
    border: "1px solid #1f6f8b",
    background: variant === "primary" ? "#1f6f8b" : "#ffffff",
    color: variant === "primary" ? "#ffffff" : "#1f6f8b",
    fontWeight: 650,
    textDecoration: "none"
  };

  if (href) {
    const anchorProps = props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

    return (
      <a href={href} {...anchorProps} style={{ ...style, ...anchorProps.style }}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button {...buttonProps} style={{ ...style, ...buttonProps.style }}>
      {children}
    </button>
  );
}
