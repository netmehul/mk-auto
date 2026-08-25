"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import arrow from "@/public/icons/chevron-right.svg";


// ============================================================
// TYPES
// ============================================================

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";


// ============================================================
// VARIANT STYLES
// ============================================================

const variantStyles: Record<ButtonVariant, string> = {
  // ----------------------------------------------------------
  // PRIMARY
  // Rest  : White
  // Hover : #020229
  // ----------------------------------------------------------

  primary: `
    bg-white
    text-[#020229]
    border-white

    hover:bg-[#020229]
    hover:text-white
    hover:border-white
  `,

  // ----------------------------------------------------------
  // SECONDARY
  // Rest  : White 10%
  // Hover : #020229
  // ----------------------------------------------------------

  secondary: `
    bg-white/[0.10]
    text-white
    border-white/[0.14]

    hover:bg-[#020229]
    hover:text-white
    hover:border-white
  `,

  // ----------------------------------------------------------
  // OUTLINE
  // ----------------------------------------------------------

  outline: `
    bg-transparent
    text-white
    border-white/[0.30]

    hover:bg-[#020229]
    hover:text-white
    hover:border-white
  `,

  // ----------------------------------------------------------
  // GHOST
  // ----------------------------------------------------------

  ghost: `
    bg-transparent
    text-white
    border-transparent

    hover:bg-[#020229]
    hover:text-white
    hover:border-white
  `,
};


// ============================================================
// BASE STYLES
// ============================================================
//
// Mobile:
//   min-height 42px
//   px-4
//   py-3
//   gap-2.5
//   text 12px
//
// Desktop:
//   min-height 48px
//   px-6
//   py-3.5
//   gap-3
//   text 14px
//
// ============================================================

const baseStyles = `
  group
  relative
  inline-flex
  min-h-[42px]
  items-center
  justify-center
  gap-2.5

  overflow-hidden

  border

  px-4
  py-3

  text-[12px]
  font-medium
  uppercase
  tracking-[0.02em]
  leading-none
  whitespace-nowrap

  select-none
  touch-manipulation

  transition-[background-color,color,border-color]
  duration-300
  ease-in-out

  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-white/40
  focus-visible:ring-offset-2
  focus-visible:ring-offset-[#020229]

  md:min-h-[48px]
  md:gap-3
  md:px-6
  md:py-3.5
  md:text-sm
`;


// ============================================================
// PROPS
// ============================================================

type SharedProps = {
  variant?: ButtonVariant;
  showArrow?: boolean;

  /**
   * Delay before the scroll reveal.
   * Useful when several buttons appear together.
   *
   * Example:
   * delay={0.15}
   */
  delay?: number;

  children: React.ReactNode;
  className?: string;
};

type ButtonAsLink = SharedProps &
  Omit<
    React.ComponentProps<typeof Link>,
    keyof SharedProps
  > & {
    href: string;
  };

type ButtonAsButton = SharedProps &
  Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof SharedProps
  > & {
    href?: never;
  };

export type ButtonProps =
  | ButtonAsLink
  | ButtonAsButton;


// ============================================================
// BUTTON CONTENT
// ============================================================

function ButtonContent({
  variant,
  showArrow,
  children,
}: {
  variant: ButtonVariant;
  showArrow: boolean;
  children: React.ReactNode;
}) {
  return (
    <>

      {/* ======================================================
          SHIMMER
      ====================================================== */}

      <motion.span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-[50%]
          -left-[35%]
          z-[1]

          h-[200%]
          w-[18%]

          rotate-[20deg]

          bg-gradient-to-r
          from-transparent
          via-white/[0.35]
          to-transparent

          opacity-0
          blur-[1px]
        "
        initial={{
          x: "-120%",
          opacity: 0,
        }}
        whileHover={{
          x: "720%",
          opacity: [0, 0.9, 0],
        }}
        transition={{
          x: {
            duration: 0.9,
            ease: "easeInOut",
          },

          opacity: {
            duration: 0.9,
            ease: "easeInOut",
          },
        }}
      />


      {/* ======================================================
          INNER WHITE BORDER HIGHLIGHT
      ====================================================== */}

      <motion.span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          border
          border-transparent
        "
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
          borderColor:
            "rgba(255,255,255,0.35)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />


      {/* ======================================================
          TEXT
      ====================================================== */}

      <span
        className="
          relative
          z-10
          transition-colors
          duration-300
          ease-in-out
        "
      >
        {children}
      </span>


      {/* ======================================================
          ARROW
      ====================================================== */}

      {showArrow && (
        <span
          className="
            relative
            z-10
            inline-flex
            shrink-0
            items-center
            justify-center
          "
          aria-hidden="true"
        >
          <Image
            src={arrow}
            alt=""
            width={18}
            height={18}
            className={`
              h-4
              w-4

              transition-[filter]
              duration-300
              ease-in-out

              md:h-[18px]
              md:w-[18px]

              ${
                variant === "primary"
                  ? `
                    brightness-0
                    saturate-100

                    group-hover:brightness-0
                    group-hover:invert
                  `
                  : `
                    brightness-0
                    invert
                  `
              }
            `}
          />
        </span>
      )}

    </>
  );
}


// ============================================================
// BUTTON
// ============================================================

export default function Button({
  variant = "primary",
  showArrow = false,
  delay = 0,
  children,
  className = "",
  ...props
}: ButtonProps) {

  // ----------------------------------------------------------
  // Classes
  // ----------------------------------------------------------

  const classes = [
    baseStyles,
    variantStyles[variant],
    className,
  ]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();


  // ----------------------------------------------------------
  // Wrapper
  // ----------------------------------------------------------

  const wrapperClassName =
    className.includes("w-full")
      ? "inline-flex w-full"
      : "inline-flex";


  // ==========================================================
  // SCROLL REVEAL
  // ==========================================================

  const revealProps = {
    initial: {
      opacity: 0,
      y: 18,
      filter: "blur(8px)",
    },

    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },

    viewport: {
      once: true,
      amount: 0.2,
    },

    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };


  // ==========================================================
  // LINK
  // ==========================================================

  if ("href" in props && props.href) {

    const {
      href,
      ...linkProps
    } = props;

    return (
      <motion.span
        className={wrapperClassName}
        {...revealProps}
      >
        <Link
          href={href}
          className={classes}
          {...linkProps}
        >
          <ButtonContent
            variant={variant}
            showArrow={showArrow}
          >
            {children}
          </ButtonContent>
        </Link>
      </motion.span>
    );
  }


  // ==========================================================
  // BUTTON
  // ==========================================================

  return (
    <motion.span
      className={wrapperClassName}
      {...revealProps}
    >
      <button
        type="button"
        className={classes}
        {...(
          props as React.ButtonHTMLAttributes<HTMLButtonElement>
        )}
      >
        <ButtonContent
          variant={variant}
          showArrow={showArrow}
        >
          {children}
        </ButtonContent>
      </button>
    </motion.span>
  );
}