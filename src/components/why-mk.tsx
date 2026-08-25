"use client"

import { motion } from "motion/react"
import Image from "next/image";

export default function WhyMk() {
  const heading = "Why MAHY Khoory Automotive";
  const subtext = "At MAHY Khoory Automotive, we go beyond delivering vehicles - we build lasting relationships through trust, quality, and exceptional service. Backed by years of industry expertise, we provide customers across the UAE with world-class automotive solutions, genuine parts, certified after-sales support, and a commitment to excellence at every stage of the ownership journey. Whether you're an individual customer or managing a business fleet, our experienced team is dedicated to delivering a seamless, reliable, and customer-first experience.";
  const headingWords = heading.split(" ");
  const subtextWords = subtext.split(" ");

  const aboutImage = "/images/why-mahy-khooray-image.png";
  const altText = "MAHY Khooray Image";

  return (
    <section className="bg-[#040504] md:pt-[270px]">
      <Image src="/animation/animation-line.svg" alt="Decorative Line" width={130} height={80} className="w-full absolute" />
      <div className="w-full mx-auto flex flex-col p-12 gap-8 md:max-w-[1140px]">
      
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
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
        <motion.p
            initial="hidden"
            animate="visible"
            className="
              w-full
              text-sm
              leading-relaxed
              sm:text-base
              md:text-lg
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
                  delay:
                    0.55 +
                    index * 0.025,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
      </div>


      <div className="md:w-full mt-[-180px] md:mt-[-450px]">
        <img src={aboutImage} alt={altText}/>
      </div>
    </section>
  );
}