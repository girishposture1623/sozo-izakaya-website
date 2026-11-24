import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "cream";
type Size = "sm" | "md" | "lg";

const SIZE: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[10px]",
  md: "px-7 py-3.5 text-[11px]",
  lg: "px-9 py-4 text-xs",
};

const VARIANT: Record<Variant, string> = {
  solid: "bg-aka text-cream hover:text-ink",
  outline: "border border-cream/25 text-cream hover:border-cream hover:text-ink",
  cream: "bg-cream text-ink hover:text-cream",
};

const SWEEP: Record<Variant, string> = {
  solid: "bg-cream",
  outline: "bg-cream",
  cream: "bg-aka",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  ariaLabel?: string;
  /** Internal react-router destination */
  to?: string;
  /** External / tel / mailto link */
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

/**
 * Polymorphic button with a premium left-to-right sweep on hover.
 * Renders a router <Link>, an <a>, or a <button> depending on props.
 */
export default function Button({
  children,
  variant = "solid",
  size = "md",
  className = "",
  icon,
  ariaLabel,
  to,
  href,
  external,
  type = "button",
  onClick,
  disabled,
}: Props) {
  const cls = `group/btn relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap font-bold uppercase tracking-[0.22em] transition-colors duration-500 disabled:pointer-events-none disabled:opacity-50 ${SIZE[size]} ${VARIANT[variant]} ${className}`;

  const inner = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/btn:scale-x-100 ${SWEEP[variant]}`}
      />
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
        {icon}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}
