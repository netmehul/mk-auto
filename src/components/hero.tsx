"use client";

import { motion } from "motion/react";

export default function Hero() {
  const heading =
    "Connecting Global Automotive Brands with the UAE";

  const subtext =
    "We continuously embrace emerging automotive technologies, from advanced powertrains to connected mobility, ensuring our customers benefit from the latest innovations.";

  const headingWords = heading.split(" ");
  const subtextWords = subtext.split(" ");

  return (
    <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:justify-between md:gap-12 md:px-0 md:py-24">

      {/* Heading */}
      <motion.h1
        initial="hidden"
        animate="visible"
        className="max-w-[615px] text-3xl leading-[1.05] uppercase sm:text-5xl"
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

      {/* Subtext */}
      <motion.p
        initial="hidden"
        animate="visible"
        className="max-w-[380px] text-lg leading-relaxed sm:text-base md:text-md"
      >
        {subtextWords.map((word, index) => (
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
              delay: 0.55 + index * 0.025,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

    </div>
    
  );
}