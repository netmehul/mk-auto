"use client";

import Image from "next/image";
import { motion } from "motion/react";

const values = [
  {
    title: "Trusted Partnerships",
    icon: "/icons/trusted.svg",

    // Manual staircase position
    cardMarginTop: "mt-[170px]",

    // Manual connector height
    lineHeight: 125,
  },
  {
    title: "Customer Excellence",
    icon: "/icons/customer.svg",

    cardMarginTop: "mt-[145px]",
    lineHeight: 105,
  },
  {
    title: "Quality & Reliability",
    icon: "/icons/quality.svg",

    cardMarginTop: "mt-[120px]",
    lineHeight: 85,
  },
  {
    title: "Innovation & Growth",
    icon: "/icons/innovation.svg",

    cardMarginTop: "mt-[95px]",
    lineHeight: 65,
  },
];


export default function DNASection() {
  const heading = "More Than";
  const heading2 = "Just Vehicles";

  const headingWords = heading.split(" ");
  const heading2Words = heading2.split(" ");

  return (
    <section className="relative w-full overflow-hidden special-bg py-12">

      {/* ============================================================
          HEADING
      ============================================================ */}

      <div className="relative z-30 mx-auto w-full">
        <div
          className="
            relative
            flex
            flex-col
            items-center
            px-5
            pt-16
            sm:pt-20
            md:pt-24
          "
        >

          {/* More Than */}

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="
              relative
              z-10
              text-center
              text-3xl
              leading-[1.05]
              uppercase
              sm:text-4xl
              md:text-5xl
            "
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    filter: "blur(8px)",
                    y: 8,
                  },
                  visible: {
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Just Vehicles */}

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="
              relative
              z-10
              text-center
              text-3xl
              leading-[1.05]
              uppercase
              sm:text-4xl
              md:text-5xl
            "
          >
            {heading2Words.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    filter: "blur(8px)",
                    y: 8,
                  },
                  visible: {
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.12 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* ============================================================
          DESKTOP DNA AREA
          DO NOT CHANGE
      ============================================================ */}

      <div
        className="
          relative
          mx-auto
          hidden
          h-[600px]
          w-full
          overflow-hidden
          lg:block
          md:mt-[-150px]
        "
      >

        {/* VIDEO */}

        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="
              absolute
              left-1/2
              top-0
              h-[600px]
              w-full
              -translate-x-1/2
              object-cover
              object-center
            "
          >
            <source
              src="/images/dna.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* DESKTOP CARD GRID */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-30
            mx-auto
            w-full
            max-w-[1140px]
            px-5
          "
        >
          <div
            className="
              grid
              grid-cols-4
              items-start
              gap-[4px]
            "
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className={`
                  relative
                  w-full
                  ${value.cardMarginTop}
                `}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.85 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* STRAIGHT CONNECTOR */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    bottom-full
                    left-1/2
                    z-20
                    w-px
                    -translate-x-1/2
                    bg-white
                  "
                  style={{
                    height: `${value.lineHeight}px`,
                    opacity: 1,
                    transformOrigin: "bottom",
                  }}
                  initial={{
                    scaleY: 0,
                  }}
                  whileInView={{
                    scaleY: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.55 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* DNA POINT */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    z-30
                    h-[8px]
                    w-[8px]
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                  style={{
                    top: `-${value.lineHeight}px`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  <div
                    className="
                      absolute
                      inset-[-5px]
                      rounded-full
                      bg-white/100
                      blur-[8px]
                    "
                  />

                  <motion.div
                    className="
                      absolute
                      inset-[-9px]
                      rounded-full
                      border
                      border-white/10
                    "
                    animate={{
                      scale: [0.8, 1.35, 0.8],
                      opacity: [0.15, 0.45, 0.15],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.25,
                    }}
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-white
                      shadow-[0_0_10px_rgba(255,255,255,0.9)]
                    "
                  />
                </motion.div>

                {/* DESKTOP CARD */}

                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    h-[190px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border
                    border-white/[0.08]
                    bg-[#fff]/10
                    px-4
                    backdrop-blur-md
                  "
                >

                  <div
                    className="
                      mb-8
                      h-[80px]
                      w-[80px]
                      shrink-0
                    "
                  >
                    <Image
                      src={value.icon}
                      alt=""
                      width={80}
                      height={80}
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />
                  </div>

                  <span
                    className="
                      text-center
                      text-[20px]
                      uppercase
                      leading-none
                      tracking-[0.01em]
                      text-white
                    "
                  >
                    {value.title}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE
          ONLY THIS PART HAS BEEN CHANGED
      ============================================================ */}

      <div
        className="
          relative
          mt-[-20px]
          block
          w-full
          lg:hidden
        "
      >
        <div
          className="
            relative
            min-h-[500px]
            w-full
            overflow-hidden
          "
        >

          {/* ========================================================
              MOBILE VIDEO BACKGROUND
          ======================================================== */}

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="
              absolute
              inset-0
              z-0
              h-full
              w-full
              object-cover
              object-center
            "
          >
            <source
              src="/images/dna.mp4"
              type="video/mp4"
            />
          </video>

          {/* ========================================================
              MOBILE CONTENT
          ======================================================== */}

          <div
            className="
              relative
              z-20
              mx-auto
              w-full
              max-w-[720px]
              px-4
              sm:px-6
            "
          >

            {/* ======================================================
                MOBILE CARD GRID
            ====================================================== */}

            <div
              className="
                grid
                grid-cols-2
                items-start
                gap-x-2
                gap-y-3
                
                sm:gap-x-3
                sm:gap-y-4
                sm:pt-[240px]
              "
            >

              {/* ====================================================
                  CARD 1
              ==================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  mt-[80px]
                "
              >

                {/* Card */}

                <motion.div
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    min-h-[165px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border
                    border-white/[0.08]
                    bg-[#fff]/10
                    px-2
                    py-5
                    backdrop-blur-md
                    sm:min-h-[180px]
                  "
                >
                  <div
                    className="
                      mb-5
                      h-[70px]
                      w-[70px]
                      shrink-0
                      sm:h-[80px]
                      sm:w-[80px]
                    "
                  >
                    <Image
                      src={values[0].icon}
                      alt=""
                      width={80}
                      height={80}
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />
                  </div>

                  <span
                    className="
                      text-center
                      text-[14px]
                      uppercase
                      leading-[1.2]
                      tracking-[0.01em]
                      text-white
                      sm:text-[14px]
                    "
                  >
                    {values[0].title}
                  </span>
                </motion.div>
              </motion.div>

              {/* ====================================================
                  CARD 2
              ==================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  mt-[55px]
                "
              >

                

                {/* Card */}

                <motion.div
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    min-h-[165px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border
                    border-white/[0.08]
                    bg-[#fff]/10
                    px-2
                    py-5
                    backdrop-blur-md
                    sm:min-h-[180px]
                  "
                >
                  <div
                    className="
                      mb-5
                      h-[70px]
                      w-[70px]
                      shrink-0
                      sm:h-[80px]
                      sm:w-[80px]
                    "
                  >
                    <Image
                      src={values[1].icon}
                      alt=""
                      width={80}
                      height={80}
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />
                  </div>

                  <span
                    className="
                      text-center
                      text-[14px]
                      uppercase
                      leading-[1.2]
                      tracking-[0.01em]
                      text-white
                      sm:text-[14px]
                    "
                  >
                    {values[1].title}
                  </span>
                </motion.div>
              </motion.div>

              {/* ====================================================
                  CARD 3
              ==================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  mt-[50px]
                "
              >

                

                {/* Card */}

                <motion.div
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    min-h-[165px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border
                    border-white/[0.08]
                    bg-[#fff]/10
                    px-2
                    py-5
                    backdrop-blur-md
                    sm:min-h-[180px]
                  "
                >
                  <div
                    className="
                      mb-5
                      h-[70px]
                      w-[70px]
                      shrink-0
                      sm:h-[80px]
                      sm:w-[80px]
                    "
                  >
                    <Image
                      src={values[2].icon}
                      alt=""
                      width={80}
                      height={80}
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />
                  </div>

                  <span
                    className="
                      text-center
                      text-[14px]
                      uppercase
                      leading-[1.2]
                      tracking-[0.01em]
                      text-white
                      sm:text-[14px]
                    "
                  >
                    {values[2].title}
                  </span>
                </motion.div>
              </motion.div>

              {/* ====================================================
                  CARD 4
              ==================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  mt-[25px]
                "
              >

                
                {/* Card */}

                <motion.div
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    min-h-[165px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    border
                    border-white/[0.08]
                    bg-[#fff]/10
                    px-2
                    py-5
                    backdrop-blur-md
                    sm:min-h-[180px]
                  "
                >
                  <div
                    className="
                      mb-5
                      h-[70px]
                      w-[70px]
                      shrink-0
                      sm:h-[80px]
                      sm:w-[80px]
                    "
                  >
                    <Image
                      src={values[3].icon}
                      alt=""
                      width={80}
                      height={80}
                      className="
                        h-full
                        w-full
                        object-contain
                      "
                    />
                  </div>

                  <span
                    className="
                      text-center
                      text-[14px]
                      uppercase
                      leading-[1.2]
                      tracking-[0.01em]
                      text-white
                      sm:text-[14px]
                    "
                  >
                    {values[3].title}
                  </span>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}