"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import arrow from "@/public/icons/chevron-right.svg";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-white/10 text-white hover:bg-white/20",
  secondary: "bg-white text-[#c41e3a] hover:bg-gray-100",
  outline: "border border-white text-white bg-transparent hover:bg-white/10",
  ghost: "bg-transparent text-white hover:text-gray-300",
};

const baseStyles =
  "inline-flex items-center gap-4 uppercase text-sm py-4 px-6";

const buttonMotion = {
  initial: "rest" as const,
  animate: "rest" as const,
  whileHover: "hover" as const,
  whileTap: "tap" as const,
  variants: {
    rest: { scale: 1 },
    hover: { scale: 1.04 },
    tap: { scale: 0.97 },
  },
  transition: {
    type: "spring" as const,
    stiffness: 520,
    damping: 28,
    mass: 0.55,
  },
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 6 },
  tap: { x: 2 },
};

type SharedProps = {
  variant?: ButtonVariant;
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsLink = SharedProps &
  Omit<React.ComponentProps<typeof Link>, keyof SharedProps> & {
    href: string;
  };

type ButtonAsButton = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    href?: never;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({
  variant = "primary",
  showArrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();
  const wrapperClassName = className.includes("w-full")
    ? "inline-flex w-full origin-center will-change-transform"
    : "inline-flex origin-center will-change-transform";

  const content = (
    <>
      {children}
      {showArrow ? (
        <motion.span className="inline-flex" variants={arrowVariants} aria-hidden>
          <Image src={arrow} alt="" width={18} height={18} />
        </motion.span>
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <motion.span className={wrapperClassName} {...buttonMotion}>
        <Link href={href} className={classes} {...linkProps}>
          {content}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.span className={wrapperClassName} {...buttonMotion}>
      <button
        type="button"
        className={classes}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    </motion.span>
  );
}
