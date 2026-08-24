"use client";

import { motion } from "motion/react";

export default function FounderNote() {
  const content =
    "Our success is built on trust, partnerships, and commitment to customers. These values remain central as we grow.";
  const founder = "— Chairman / CEO";

  const contentWords = content.split(" ");
  const founderWords = founder.split(" ");

  return (
    <div className="flex flex col-3 gap-4 mt-10 mb-10">
      <div className="hidden md:block w-full border-1 border-white/10" />

      <div
        className="
          flex
          w-full
          min-w-0
          flex-col
          gap-8
          p-8
          bg-white/10
          md:min-w-4xl md:p8
        "
      >
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="text-lg md:text-xl"
        >
          {contentWords.map((word, index) => (
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
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="text-md md:text-xl w-full text-right"
        >
          {founderWords.map((word, index) => (
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
        </motion.p>
      </div>

      <div className="hidden md:block w-full border-1 border-white/10" />
    </div>
  );
}