"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const brands = [
  {
    name: "Dongfeng",
    logo: "/brands/dongfeng-logo.svg",
    panelImage: "/images/brands/dongfeng-panel.webp",
    fullImage: "/images/brands/dongfeng-full.webp",
    href: "/brands/dongfeng",
  },
  {
    name: "OMODA | JAECOO",
    logo: "/brands/omoda-jaecoo.svg",
    panelImage: "/images/brands/omoda-panel.webp",
    fullImage: "/images/brands/omoda-jaecoo-full.webp",
    href: "/brands/omoda-jaecoo",
  },
  {
    name: "Certified Pre-Owned",
    logo: "/brands/certified-pre-owned.svg",
    panelImage: "/images/brands/certified-panel.webp",
    fullImage: "/images/brands/certified-full.webp",
    href: "/pre-owned",
  },
];

const overlayStyle = {
  background: `
    linear-gradient(
      0deg,
      rgba(0, 0, 77, 0.60) 0%,
      rgba(0, 0, 77, 0.00) 16.26%
    ),
    linear-gradient(
      0deg,
      rgba(0, 0, 77, 0.00) 76.72%,
      rgba(0, 0, 77, 0.60) 100%
    )
  `,
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.96,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },

  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.96,
  }),
};

export default function BrandShowcase() {
  const [activeBrand, setActiveBrand] = useState<number | null>(null);

  // Mobile slider
  const [mobileIndex, setMobileIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = (newIndex: number) => {
    if (newIndex === mobileIndex) return;

    setDirection(newIndex > mobileIndex ? 1 : -1);
    setMobileIndex(newIndex);
  };

  const goNext = () => {
    setDirection(1);
    setMobileIndex((current) =>
      current === brands.length - 1 ? 0 : current + 1
    );
  };

  const goPrevious = () => {
    setDirection(-1);
    setMobileIndex((current) =>
      current === 0 ? brands.length - 1 : current - 1
    );
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#020229] md:min-h-[820px]"
      onMouseLeave={() => setActiveBrand(null)}
    >
      {/* ============================================================
          MOBILE SLIDER
          ============================================================ */}

      <div className="relative block md:hidden">
        {/* Slider */}
        <div className="relative aspect-[1920/870] w-full overflow-hidden">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="sync"
          >
            <motion.div
              key={mobileIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: "spring",
                  stiffness: 300,
                  damping: 32,
                  mass: 0.8,
                },
                opacity: {
                  duration: 0.25,
                  ease: "easeOut",
                },
                scale: {
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                const swipeThreshold = 50;

                if (info.offset.x < -swipeThreshold) {
                  goNext();
                }

                if (info.offset.x > swipeThreshold) {
                  goPrevious();
                }
              }}
              className="absolute inset-0 touch-pan-y"
            >
              {/* Image */}
              <Image
                src={brands[mobileIndex].fullImage}
                alt={brands[mobileIndex].name}
                fill
                sizes="100vw"
                priority={mobileIndex === 0}
                className="select-none object-cover"
                draggable={false}
              />

              {/* Exact Figma gradient */}
              <div
                className="pointer-events-none absolute inset-0"
                style={overlayStyle}
              />

              {/* Logo */}
              <div className="absolute left-1/2 top-6 -translate-x-1/2">
                <Image
                  src={brands[mobileIndex].logo}
                  alt={brands[mobileIndex].name}
                  width={180}
                  height={60}
                  className="h-auto w-auto max-w-[180px] object-contain"
                />
              </div>

              {/* Learn More */}
              <a
                href={brands[mobileIndex].href}
                className="
                  absolute
                  bottom-6
                  left-6
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  uppercase
                  tracking-wide
                  text-white
                "
              >
                <span>Learn More</span>

                <span className="text-base leading-none">
                  →
                </span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ============================================================
            MOBILE PAGINATION
            ============================================================ */}

        <div className="flex items-center justify-center gap-2 py-5">
          {brands.map((brand, index) => (
            <button
              key={brand.name}
              type="button"
              aria-label={`Go to ${brand.name}`}
              aria-current={mobileIndex === index}
              onClick={() => goToSlide(index)}
              className="flex h-8 w-8 items-center justify-center"
            >
              <motion.span
                initial={false}
                animate={{
                  width: mobileIndex === index ? 24 : 6,
                  opacity: mobileIndex === index ? 1 : 0.4,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block h-1 rounded-full bg-white"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ============================================================
          DESKTOP — DEFAULT THREE PANELS
          ============================================================ */}

      <motion.div
        className="
          absolute
          inset-0
          z-0
          hidden
          grid-cols-3
          gap-2
          md:grid
        "
        initial={false}
        animate={{
          opacity: activeBrand === null ? 1 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="relative min-h-[820px] overflow-hidden"
          >
            <Image
              src={brand.panelImage}
              alt={brand.name}
              fill
              sizes="33vw"
              className="object-cover"
            />

            {/* Figma gradient */}
            <div
              className="pointer-events-none absolute inset-0"
              style={overlayStyle}
            />
          </div>
        ))}
      </motion.div>

      {/* ============================================================
          DESKTOP — FULL WIDTH HOVER IMAGES
          ============================================================ */}

      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: activeBrand === index ? 1 : 0,
              scale: activeBrand === index ? 1 : 1.03,
            }}
            transition={{
              opacity: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
              scale: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          >
            <Image
              src={brand.fullImage}
              alt={brand.name}
              fill
              sizes="100vw"
              className="object-cover"
            />

            {/* Figma gradient */}
            <div
              className="pointer-events-none absolute inset-0"
              style={overlayStyle}
            />
          </motion.div>
        ))}
      </div>

      {/* ============================================================
          DESKTOP — PERSISTENT 8PX GAPS
          ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-30
          hidden
          md:block
        "
      >
        <div
          className="
            absolute
            inset-y-0
            left-1/3
            w-2
            -translate-x-1/2
            bg-[#020229]
          "
        />

        <div
          className="
            absolute
            inset-y-0
            left-2/3
            w-2
            -translate-x-1/2
            bg-[#020229]
          "
        />
      </div>

      {/* ============================================================
          DESKTOP — INTERACTION AREAS
          ============================================================ */}

      <div
        className="
          absolute
          inset-0
          z-40
          hidden
          grid-cols-3
          md:grid
        "
      >
        {brands.map((brand, index) => (
          <div
            key={brand.name}
            className="group relative min-h-[820px]"
            onMouseEnter={() => setActiveBrand(index)}
          >
            {/* Logo */}
            <motion.div
              initial={false}
              animate={{
                opacity:
                  activeBrand === null || activeBrand === index
                    ? 1
                    : 0.45,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                absolute
                left-1/2
                top-10
                -translate-x-1/2
              "
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={190}
                height={60}
                className="
                  h-auto
                  w-auto
                  max-w-[190px]
                  object-contain
                "
              />
            </motion.div>

            {/* Learn More */}
            <motion.a
              href={brand.href}
              initial={false}
              animate={{
                opacity: activeBrand === index ? 1 : 0,
                y: activeBrand === index ? 0 : 12,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                bottom-10
                left-10
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                uppercase
                tracking-wide
                text-white
              "
            >
              <span>Learn More</span>

              <span className="text-lg leading-none">
                →
              </span>
            </motion.a>
          </div>
        ))}
      </div>
    </section>
  );
}