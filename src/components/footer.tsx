"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

// ============================================================
// FOOTER DATA
// ============================================================

const brandLinks = [
  {
    label: "Dongfeng",
    href: "#",
  },
  {
    label: "OMODA | JAECOO",
    href: "#",
  },
  {
    label: "Pre Owned",
    href: "#",
  },
];

const exploreLinks = [
  {
    label: "Careers",
    href: "#",
  },
  {
    label: "News & Insights",
    href: "#",
  },
];

const legalLinks = [
  {
    label: "Privacy & Policy",
    href: "#",
  },
  {
    label: "Cookie Policy",
    href: "#",
  },
  {
    label: "Terms of Services",
    href: "#",
  },
];

const socials = [
  {
    label: "Facebook",
    icon: "/icons/social/facebook.svg",
    href: "#",
  },
  {
    label: "Instagram",
    icon: "/icons/social/instagram.svg",
    href: "#",
  },
  {
    label: "X",
    icon: "/icons/social/x.svg",
    href: "#",
  },
  {
    label: "TikTok",
    icon: "/icons/social/tiktok.svg",
    href: "#",
  },
  {
    label: "YouTube",
    icon: "/icons/social/youtube.svg",
    href: "#",
  },
];


// ============================================================
// FOOTER
// ============================================================

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#020229]">

      {/* ======================================================
          BACKGROUND PATTERN
          ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[url('/logo/MK-pattern.svg')]
            bg-repeat
            bg-[length:110px_110px]
          "
        />
      </div>


      {/* ======================================================
          DESKTOP FOOTER
          ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          hidden
          w-full
          px-6
          py-12

          md:block
          md:px-10
          md:py-14

          lg:px-12
          lg:py-16
        "
      >
        <div
          className="
            grid
            grid-cols-[1.6fr_0.6fr_0.6fr_0.8fr]
            gap-8
            lg:gap-12
          "
        >

          {/* ==================================================
              LOGO
              ================================================== */}

          <FooterReveal>
            <Link
              href="/"
              aria-label="MAHY Khooray Automotive"
              className="inline-flex"
            >
              <Image
                src="/logo/logo.svg"
                alt="MAHY Khooray Automotive"
                width={385}
                height={127}
                className="
                  h-auto
                  w-[245px]
                  lg:w-[385px]
                "
              />
            </Link>
          </FooterReveal>


          {/* ==================================================
              OUR BRANDS
              ================================================== */}

          <FooterColumn title="Our Brands">
            <ul className="flex flex-col gap-4">
              {brandLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </FooterLink>
              ))}
            </ul>
          </FooterColumn>


          {/* ==================================================
              EXPLORE
              ================================================== */}

          <FooterColumn title="Explore">
            <ul className="flex flex-col gap-4">
              {exploreLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </FooterLink>
              ))}
            </ul>
          </FooterColumn>


          {/* ==================================================
              CONTACT
              ================================================== */}

          <FooterColumn title="Contact">
            <ContactContent />
          </FooterColumn>

        </div>
      </div>


      {/* ======================================================
          MOBILE FOOTER
          ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-col
          items-center
          px-6
          py-12
          md:hidden
        "
      >

        {/* ====================================================
            LOGO
            ==================================================== */}

        <FooterReveal>
          <Link
            href="/"
            aria-label="MAHY Khooray Automotive"
            className="
              inline-flex
              items-center
              justify-center
            "
          >
            <Image
              src="/logo/logo.svg"
              alt="MAHY Khooray Automotive"
              width={285}
              height={72}
              className="
                h-auto
                w-[235px]
              "
            />
          </Link>
        </FooterReveal>


        {/* ====================================================
            MOBILE NAV ACCORDIONS
            ==================================================== */}

        <div
          className="
            mt-10
            flex
            w-full
            max-w-[420px]
            flex-col
          "
        >

          <MobileFooterAccordion
            title="Our Brands"
            items={brandLinks}
          />

          <MobileFooterAccordion
            title="Explore"
            items={exploreLinks}
          />

        </div>


        {/* ====================================================
            MOBILE CONTACT

            ALWAYS VISIBLE
            NOT AN ACCORDION
            ==================================================== */}

        <div
          className="
            mt-10
            flex
            w-full
            max-w-[420px]
            flex-col
            items-center
            text-center
          "
        >
          <ContactContent mobile />
        </div>

      </div>


      {/* ======================================================
          LEGAL BAR
          ====================================================== */}

      <div
        className="
          relative
          z-10
          border-t
          border-white/[0.06]
          bg-black/20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1440px]
            flex-col
            items-center
            gap-3
            px-6
            py-4
            text-center

            md:flex-row
            md:justify-between
            md:px-10
            md:py-3
            md:text-left

            lg:px-12
          "
        >

          {/* COPYRIGHT */}

          <p
            className="
              text-[14px]
              uppercase
              tracking-[0.02em]
              text-white/45
              md:text-[16px]
            "
          >
            Copyright © 2026 MAHYKhooray.com - All
            rights reserved.
          </p>


          {/* LEGAL LINKS */}

          <nav
            aria-label="Legal"
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-2
            "
          >
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  text-[14px]
                  uppercase
                  tracking-[0.02em]
                  text-white/45
                  md:text-[16px]

                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>
      </div>

    </footer>
  );
}


// ============================================================
// MOBILE FOOTER ACCORDION
// ============================================================

function MobileFooterAccordion({
  title,
  items,
}: {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        w-full
        border-b
        border-white/[0.10]
      "
    >

      {/* ======================================================
          ACCORDION HEADER
          ====================================================== */}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="
          flex
          w-full
          items-center
          justify-between
          py-5
        "
      >

        <span
          className="
            text-[14px]
            uppercase
            tracking-[0.22em]
            text-white
          "
        >
          {title}
        </span>


        {/* PLUS / MINUS */}

        <span
          className="
            relative
            flex
            h-5
            w-5
            shrink-0
            items-center
            justify-center
          "
          aria-hidden="true"
        >

          {/* Horizontal */}

          <span
            className="
              absolute
              h-px
              w-3
              bg-white
            "
          />

          {/* Vertical */}

          <motion.span
            animate={{
              rotate: open ? 90 : 0,
              opacity: open ? 0 : 1,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-3
              w-px
              bg-white
            "
          />

        </span>

      </button>


      {/* ======================================================
          ACCORDION CONTENT
          ====================================================== */}

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{
          height: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          },
          opacity: {
            duration: 0.2,
          },
        }}
        className="overflow-hidden"
      >
        <div
          className="
            flex
            flex-col
            items-center
            gap-4
            pb-5
          "
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                text-[14px]
                uppercase
                tracking-[0.04em]
                text-white/60

                transition-colors
                duration-300

                hover:text-white
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>

    </div>
  );
}


// ============================================================
// CONTACT CONTENT
// ============================================================

function ContactContent({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  return (
    <div
      className={`
        flex
        flex-col

        ${
          mobile
            ? "items-center text-center"
            : "items-start text-left"
        }
      `}
    >

      {/* ====================================================
          EMAIL
          ==================================================== */}

      <ContactItem
        label="Email"
        value="info@mahykhoorayautomotive.com"
        href="mailto:info@mahykhoorayautomotive.com"
        mobile={mobile}
      />


      {/* ====================================================
          CALL
          ==================================================== */}

      <ContactItem
        label="Call"
        value="+971 - 1234 - 568 - 7891"
        href="tel:+9711234567891"
        mobile={mobile}
      />


      {/* ====================================================
          ADDRESS
          ==================================================== */}

      <div
        className={`
          flex
          flex-col
          gap-2

          ${
            mobile
              ? "items-center"
              : "items-start"
          }
        `}
      >

        <span
          className="
            text-[14px]
            uppercase
            tracking-[0.22em]
            text-white
            md:text-[16px]
          "
        >
          Address
        </span>

        <p
          className="
            text-[14px]
            leading-relaxed
            text-white/60
          "
        >
          41, Near Abu Hail Metro Station, Dubai, UAE.
        </p>

      </div>


      {/* ====================================================
          SOCIAL LINKS
          ==================================================== */}

      <SocialLinks
        className={`
          mt-6
          ${
            mobile
              ? "justify-center"
              : "justify-start"
          }
        `}
      />

    </div>
  );
}


// ============================================================
// CONTACT ITEM
// ============================================================

function ContactItem({
  label,
  value,
  href,
  mobile = false,
}: {
  label: string;
  value: string;
  href: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`
        mb-6
        flex
        flex-col
        gap-2
        

        ${
          mobile
            ? "items-center text-center"
            : ""
        }
      `}
    >

      <span
        className="
          text-[14px]
          uppercase
          tracking-[0.22em]
          text-white
          md:text-[16px]
        "
      >
        {label}
      </span>

      <Link
        href={href}
        className="
          max-w-full
          break-all
          text-[14px]
          md:text-[16px]
          leading-relaxed
          text-white/60

          transition-colors
          duration-300

          hover:text-white
        "
      >
        {value}
      </Link>

    </div>
  );
}


// ============================================================
// SOCIAL LINKS
// ============================================================
//
// These are your actual Figma-exported SVG files.
// No lucide-react dependency here.
//
// ============================================================

function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        flex
        items-center
        gap-2
        ${className}
      `}
    >

      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="
            group
            flex
            h-10
            w-10
            items-center
            justify-center

            border
            border-white/15

            bg-transparent

            transition-all
            duration-300
            ease-in-out

            hover:border-white
            hover:bg-white/10
          "
        >

          <Image
            src={social.icon}
            alt=""
            width={13}
            height={13}
            className="
              h-[36px]
              w-[36px]

              object-contain

              transition-all
              duration-300
              ease-in-out

              group-hover:brightness-0
              group-hover:invert
            "
          />

        </Link>
      ))}

    </div>
  );
}


// ============================================================
// DESKTOP FOOTER COLUMN
// ============================================================

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FooterReveal>

      <div className="flex flex-col">

        <h3
          className="
            mb-5
            text-[14px]
            uppercase
            tracking-[0.22em]
            text-white
            md:text-[16px]
          "
        >
          {title}
        </h3>

        {children}

      </div>

    </FooterReveal>
  );
}


// ============================================================
// FOOTER LINK
// ============================================================

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>

      <Link
        href={href}
        className="
          text-[14px]
          uppercase
          tracking-[0.03em]
          text-white/65
          md:text-[16px]

          transition-colors
          duration-300

          hover:text-white
        "
      >
        {children}
      </Link>

    </li>
  );
}


// ============================================================
// FOOTER REVEAL
// ============================================================

function FooterReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}