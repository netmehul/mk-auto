"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  PanInfo,
} from "motion/react";

import Button from "./button";


// ================================================================
// BRANDS
// ================================================================

const brands = [
  {
    id: "dongfeng",
    name: "Dongfeng",
    logo: "/brands/dongfeng-logo.svg",
    image: "/images/dongfeng-lineup.webp",

    description:
      "A global automotive maker offering innovative, reliable passenger and commercial vehicles.",

    cta: "Visit Website",
    href: "#",

    // White SVG → black when active desktop tab
    darkOnActive: true,
  },

  {
    id: "omoda-jaecoo",
    name: "OMODA | JAECOO",
    logo: "/brands/omoda-jaecoo.svg",
    image: "/images/oj-lineup.webp",

    description:
      "Next-generation vehicles combining intelligent technology, distinctive design, and modern mobility.",

    cta: "Visit Website",
    href: "#",

    // White SVG → black when active desktop tab
    darkOnActive: true,
  },

  {
    id: "certified",
    name: "Certified Pre-Owned",
    logo: "/brands/certified-pre-owned.svg",
    image: "/images/preowned-lineup.webp",

    description:
      "Quality-assured pre-owned vehicles selected to deliver confidence, value, and peace of mind.",

    cta: "Explore Vehicles",
    href: "#",

    // Keep this false unless you also want this logo black
    darkOnActive: false,
  },
];


// ================================================================
// MOBILE SWIPE SETTINGS
// ================================================================

const swipeConfidenceThreshold = 8000;

const swipePower = (
  offset: number,
  velocity: number
) => {
  return Math.abs(offset) * velocity;
};


// ================================================================
// BRAND SHOWCASE
// ================================================================

export default function BrandShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeBrand = brands[activeIndex];


  // ==============================================================
  // DESKTOP TAB CHANGE
  // ==============================================================

  const selectBrand = (index: number) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
  };


  // ==============================================================
  // MOBILE SLIDER
  // ==============================================================

  const paginate = (direction: number) => {
    setActiveIndex((current) => {
      const next = current + direction;

      if (next < 0) {
        return brands.length - 1;
      }

      if (next >= brands.length) {
        return 0;
      }

      return next;
    });
  };


  // ==============================================================
  // MOBILE DRAG
  // ==============================================================

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    {
      offset,
      velocity,
    }: PanInfo
  ) => {
    const swipe = swipePower(
      offset.x,
      velocity.x
    );

    if (
      swipe < -swipeConfidenceThreshold
    ) {
      paginate(1);
    } else if (
      swipe > swipeConfidenceThreshold
    ) {
      paginate(-1);
    }
  };


  return (
    <section className="w-full overflow-hidden">

      <div className="mx-auto w-full">


        {/* ==========================================================
            DESKTOP BRAND TABS
            ========================================================== */}

        <div className="hidden px-6 pt-10 md:block">

          <div
            className="
              mx-auto
              flex
              w-fit
              overflow-hidden
              rounded-xl
              bg-white/10
              md:gap-[-80px]
              md:max-w-[1140px]
              md:w-full
            "
          >

            {brands.map((brand, index) => {

              const isActive =
                index === activeIndex;

              return (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() =>
                    selectBrand(index)
                  }
                  className="
                    relative
                    flex
                    h-[58px]
                    min-w-[240px]
                    items-center
                    justify-center
                    px-8
                    outline-none
                    md:w-full
                  "
                >

                  {/* ==================================================
                      ACTIVE TAB BACKGROUND
                      ================================================== */}

                  {isActive && (
                    <motion.div
                      layoutId="brand-active-tab"
                      className="
                        absolute
                        inset-0
                        rounded-md
                        bg-white
                      "
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                        mass: 0.7,
                      }}
                    />
                  )}


                  {/* ==================================================
                      DESKTOP LOGO
                      
                      White SVG becomes black ONLY when:
                      1. tab is active
                      2. brand has darkOnActive = true
                      ================================================== */}

                  <motion.div
                    animate={{
                      opacity: isActive
                        ? 1
                        : 0.6,

                      scale: isActive
                        ? 1
                        : 0.96,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                    "
                  >

                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={190}
                      height={55}
                      className="
                        h-auto
                        max-h-[38px]
                        w-auto
                        max-w-[175px]
                        object-contain
                      "
                      style={{
                        filter:
                          isActive &&
                          brand.darkOnActive
                            ? "brightness(0)"
                            : "none",
                      }}
                    />

                  </motion.div>

                </button>
              );
            })}

          </div>

        </div>


        {/* ==========================================================
            MOBILE BRAND SELECTOR
            ========================================================== */}

        <div className="px-5 pt-8 md:hidden">

          <div
            className="
              flex
              items-center
              justify-center
              gap-4
            "
          >

            {/* Previous */}

            <button
              type="button"
              onClick={() =>
                paginate(-1)
              }
              aria-label="Previous brand"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-white/70
                transition
                hover:border-white/30
                hover:text-white
              "
            >
              ←
            </button>


            {/* Active Brand */}

            <div
              className="
                flex
                h-[58px]
                min-w-[210px]
                items-center
                justify-center
                rounded-xl
                bg-white/10
                px-6
              "
            >

              <AnimatePresence
                mode="wait"
              >

                <motion.div
                  key={activeBrand.id}
                  initial={{
                    opacity: 0,
                    y: 8,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                    filter: "blur(6px)",
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                  "
                >

                  {/* ==================================================
                      MOBILE LOGO

                      Always white because mobile selector is dark.
                      ================================================== */}

                  <Image
                    src={activeBrand.logo}
                    alt={activeBrand.name}
                    width={180}
                    height={50}
                    className="
                      h-auto
                      max-h-[38px]
                      w-auto
                      max-w-[175px]
                      object-contain
                    "
                  />

                </motion.div>

              </AnimatePresence>

            </div>


            {/* Next */}

            <button
              type="button"
              onClick={() =>
                paginate(1)
              }
              aria-label="Next brand"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-white/70
                transition
                hover:border-white/30
                hover:text-white
              "
            >
              →
            </button>

          </div>


          {/* Mobile Progress */}

          <div
            className="
              mt-4
              flex
              justify-center
              gap-2
            "
          >

            {brands.map(
              (brand, index) => (
                <button
                  key={brand.id}
                  type="button"
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  aria-label={`Go to ${brand.name}`}
                  className="p-1"
                >

                  <motion.span
                    animate={{
                      width:
                        index ===
                        activeIndex
                          ? 28
                          : 6,

                      opacity:
                        index ===
                        activeIndex
                          ? 1
                          : 0.3,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      block
                      h-1
                      rounded-full
                      bg-white
                    "
                  />

                </button>
              )
            )}

          </div>

        </div>


        {/* ==========================================================
            IMAGE + OVERLAY
            ========================================================== */}

        <div className="mt-8 md:mt-0">

          <AnimatePresence
            mode="wait"
            initial={false}
          >

            <motion.div
              key={activeBrand.id}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="w-full"
            >

              {/* ====================================================
                  IMAGE CONTAINER
                  ==================================================== */}

              <motion.div
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.08}
                onDragEnd={
                  handleDragEnd
                }
                className="
                  relative
                  aspect-[16/10]
                  md:aspect-[1920/720]
                  w-full
                  overflow-hidden
                  bg-[#020229]
                  md:cursor-default
                "
              >

                {/* ==================================================
                    BRAND IMAGE
                    ================================================== */}

                <motion.div
                  initial={{
                    scale: 1.035,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    absolute
                    inset-0
                  "
                >

                  <Image
                    src={activeBrand.image}
                    alt={activeBrand.name}
                    fill
                    priority={
                      activeIndex === 0
                    }
                    sizes="80vw"
                    className="
                      object-cover
                    "
                  />

                </motion.div>


                {/* ==================================================
                    EXACT FIGMA BLENDING OVERLAY
                    ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                  "
                  style={{
                    background: `
                      linear-gradient(
                        0deg,
                        #020229 0%,
                        rgba(2, 2, 41, 0.98) 0.51%,
                        rgba(4, 5, 4, 0.00) 25%
                      ),
                      linear-gradient(
                        0deg,
                        rgba(4, 5, 4, 0.00) 63.89%,
                        rgba(2, 2, 41, 0.98) 99.26%,
                        #020229 100%
                      )
                    `,
                  }}
                />


                {/* ==================================================
                    SUBTLE SIDE BLEND
                    ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    z-10
                    hidden
                    w-[8%]
                    bg-gradient-to-r
                    from-[#020229]/30
                    to-transparent
                    md:block
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    right-0
                    z-10
                    hidden
                    w-[8%]
                    bg-gradient-to-l
                    from-[#020229]/30
                    to-transparent
                    md:block
                  "
                />

              </motion.div>


              {/* ====================================================
                  CONTENT
                  ==================================================== */}

              <div
                className="
                  mx-auto
                  flex
                  w-full
                  max-w-[1140px]
                  flex-col
                  gap-6
                  px-6
                  py-8

                  md:flex-row
                  md:items-center
                  md:justify-between
                  md:gap-12
                  md:px-0
                  md:py-10
                "
              >

                {/* ==================================================
                    DESCRIPTION
                    ================================================== */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.55,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    max-w-[720px]
                    text-center
                    leading-relaxed
                    text-white/75

                    md:text-left
                    md:text-base
                    md:text-[20px]
                  "
                >
                  {activeBrand.description}
                </motion.p>


                {/* ==================================================
                    CTA
                    ================================================== */}

                <Button
                  variant="primary"
                  showArrow
                  href={activeBrand.href}
                  delay={0.25}
                  className="
                    shrink-0
                    px-6
                    py-4
                    text-[14px]
                  "
                >
                  {activeBrand.cta}
                </Button>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>


        {/* ==========================================================
            DESKTOP PROGRESS
            ========================================================== */}

        <div
          className="
            mx-auto
            hidden
            max-w-[1140px]
            px-6
            pb-10

            md:block
            md:px-0
          "
        >

          <div
            className="
              flex
              h-px
              w-full
              bg-white/10
            "
          >

            {brands.map(
              (brand, index) => (
                <motion.button
                  key={brand.id}
                  type="button"
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  animate={{
                    opacity:
                      index ===
                      activeIndex
                        ? 1
                        : 0.2,
                  }}
                  className="
                    relative
                    h-px
                    flex-1
                  "
                >

                  {index ===
                    activeIndex && (
                    <motion.span
                      layoutId="brand-progress"
                      className="
                        absolute
                        inset-y-0
                        left-0
                        w-full
                        bg-white
                      "
                    />
                  )}

                </motion.button>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}