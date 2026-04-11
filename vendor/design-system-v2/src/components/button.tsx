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
    minHeight: 34,
    padding: "0 12px",
    borderRadius: 6,
    border: "1px solid #334e68",
    background: variant === "primary" ? "#334e68" : "#ffffff",
    color: variant === "primary" ? "#ffffff" : "#334e68",
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
