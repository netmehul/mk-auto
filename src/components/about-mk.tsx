"use client";

import Image from "next/image";
import { motion } from "motion/react";

const mkanimation = [
  {
    name: "MK Animation",
    href: "/animation/mk-line-animation.svg",
  },
];

export default function AboutMk() {
  const heading = "A Legacy of Trust";
  const heading2 = "A Vision for Tomorrow.";

  const subtext = `MAHY Khooray Automotive is a trusted automotive company in the UAE, committed to delivering exceptional products, services, and experiences through strategic partnerships with globally recognized automotive brands. With a strong foundation built on integrity, quality, and customer satisfaction, we continue to connect people with reliable mobility solutions that meet the evolving needs of today’s drivers and businesses.

As the automotive industry continues to transform, MAHY Khooray Automotive remains focused on growth, innovation, and long-term value. From vehicle sales and aftersales support to genuine parts and customer care, every aspect of our business is driven by a passion for excellence and a commitment to building lasting relationships. Together with our partners, we are shaping a stronger automotive future for the communities we serve.`;

  const headingWords = heading.split(" ");
  const heading2Words = heading2.split(" ");

  // Split the single string into two paragraphs
  const paragraphs = subtext.split(/\n\s*\n/);

  return (
    <div
      className="
        mx-auto
        mt-20
        mb-10
        w-full
        max-w-[1140px]
        px-5
        md:mt-[140px]
        md:mb-[140px]
        md:px-0
      "
    >
      {/* ============================================================
          HEADING LINE 1
          ============================================================ */}

      <motion.h1
        initial="hidden"
        animate="visible"
        className="
          text-center
          text-3xl
          leading-[1.05]
          uppercase
          sm:text-5xl
          md:text-left
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

      {/* ============================================================
          HEADING LINE 2
          ============================================================ */}

      <motion.h1
        initial="hidden"
        animate="visible"
        className="
          mt-1
          text-center
          text-3xl
          leading-[1.05]
          uppercase
          sm:text-5xl
          md:ml-[140px]
          md:text-left
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
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* ============================================================
          MK + CONTENT
          ============================================================ */}

      <div
        className="
          mt-12
          flex
          w-full
          flex-col
          items-center
          gap-10
          md:mt-[70px]
          md:flex-row
          md:items-center
          md:gap-[70px]
        "
      >
        {/* ============================================================
            MK ANIMATION
            ============================================================ */}

        <div
          className="
            flex
            w-full
            shrink-0
            justify-center
            md:w-auto
          "
        >
          <Image
            src={mkanimation[0].href}
            alt={mkanimation[0].name}
            width={390}
            height={390}
            className="
              h-auto
              w-[250px]
              md:w-[390px]
            "
          />
        </div>

        {/* ============================================================
            TEXT
            ============================================================ */}

            <motion.div
            initial="hidden"
            animate="visible"
            className="
                flex
                w-full
                max-w-[650px]
                flex-col
                gap-[24px]
            "
            variants={{
                hidden: {},
                visible: {
                transition: {
                    staggerChildren: 0.025,
                },
                },
            }}
            >
            {paragraphs.map((paragraph, paragraphIndex) => (
                <motion.p
                key={paragraphIndex}
                variants={{
                    hidden: {},
                    visible: {},
                }}
                className="
                    text-left
                    text-base
                    leading-relaxed
                    sm:text-base
                    md:text-md
                "
                >
                {paragraph.split(/\s+/).map((word, index) => (
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
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mr-[0.25em] inline-block"
                    >
                    {word}
                    </motion.span>
                ))}
                </motion.p>
            ))}
            </motion.div>
      </div>
    </div>
  );
}