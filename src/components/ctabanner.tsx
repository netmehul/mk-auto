"use client"

import Image from "next/image"
import { motion } from "motion/react"
import Button from "./button";

export default function CtaBanner() {
  const heading = "Let's Drive the Future Together";
  const subtext =
    "Connect with our team to discover vehicles, services, and automotive solutions tailored to your needs.";
  const headingWords = heading.split(" ");
  const subtextWords = subtext.split(" ");

  const CtaImage = "/images/CTA_image.webp";
  const CtaAltText = "MAHY Khooray Automotive Banner";

  return (
    <section className="w-full mt-18">
      <div className="mx-auto gap-4 px-8 flex flex-col md:flex-row md:max-w-[1140px] w-full md:items-center md:place-content-between ">
        <div className="w-full md:max-w-[650px]">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
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
        </div>

        <div className="flex w-full flex-col gap-2 items-center justify-center md:max-w-[450px] md:items-start md:gap-4">
          <motion.p
            initial="hidden"
            animate="visible"
            className="
              w-full
              text-center
              text-sm
              leading-relaxed
              sm:text-base
              md:text-left
              md:text-md
            "
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

          <Button
            href="/contact"
            variant="primary"
            showArrow
            className="mt-3"
          >
            Partner With Us
          </Button>
        </div>
      </div>

      <div>
        <img src={CtaImage} alt={CtaAltText} className="md:w-full md:mt-[-100px] " />
      </div>
    </section>
  );
}