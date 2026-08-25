"use client";

import {
  Children,
  isValidElement,
  ReactNode,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus } from "lucide-react";


// ============================================================
// TYPES
// ============================================================

type FAQProps = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  children: ReactNode;
};


// ============================================================
// FAQ CONTENT COMPONENT
// ============================================================

export function FAQ({
  question,
  answer,
}: FAQProps) {
  /*
   * FAQ only carries the content.
   * FAQSection controls the accordion behaviour.
   */

  return null;
}


// ============================================================
// FAQ SECTION
// ============================================================

export default function FAQSection({
  children,
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  // ----------------------------------------------------------
  // Normalize children
  // ----------------------------------------------------------

  const items = Children.toArray(children).filter(
    isValidElement
  );

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        py-24
        md:py-32
      "
    >

      {/* ======================================================
          WHOLE SECTION SCROLL REVEAL
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          filter: "blur(12px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: true,
          amount: 0.18,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mx-auto
          w-full
          max-w-[1140px]
          px-5
          md:px-8
        "
      >

        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            mb-12
            flex
            flex-col
            items-center
            text-center
            md:mb-16
          "
        >
          {/* Main heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 14,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-center
              text-3xl
              uppercase
              leading-[1.05]
              sm:text-4xl
              md:text-5xl
            "
          >
            Everything You Need To Know
          </motion.h2>

        </div>


        {/* ==================================================
            FAQ LIST
        ================================================== */}

        <div
          className="
            w-full
            border-t
            border-white/[0.1]
          "
        >

          {items.map((item, index) => {

            const {
              question,
              answer,
            } = item.props as FAQProps;

            const isOpen =
              activeIndex === index;


            return (
              <div
                key={`${question}-${index}`}
                className="
                  w-full
                  border-b
                  border-white/[0.08]
                "
              >

                {/* ==================================================
                    QUESTION ROW
                ================================================== */}

                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => {
                    setActiveIndex(
                      isOpen
                        ? null
                        : index
                    );
                  }}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    gap-5
                    py-6
                    text-left
                    md:gap-6
                    md:py-6
                  "
                >

                  {/* ==================================================
                      PLUS / MINUS
                      THIS NOW REPLACES THE OLD NUMBER
                  ================================================== */}

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-white/[0.14]
                      text-white
                      transition-all
                      duration-300
                      group-hover:border-white/30
                      md:h-10
                      md:w-10
                    "
                  >

                    <AnimatePresence
                      mode="wait"
                      initial={false}
                    >

                      {isOpen ? (

                        <motion.span
                          key="minus"
                          initial={{
                            opacity: 0,
                            scale: 0.7,
                            filter: "blur(4px)",
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.7,
                            filter: "blur(4px)",
                          }}
                          transition={{
                            duration: 0.2,
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
                          <Minus
                            size={16}
                            strokeWidth={1.5}
                          />
                        </motion.span>

                      ) : (

                        <motion.span
                          key="plus"
                          initial={{
                            opacity: 0,
                            scale: 0.7,
                            filter: "blur(4px)",
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.7,
                            filter: "blur(4px)",
                          }}
                          transition={{
                            duration: 0.2,
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
                          <Plus
                            size={16}
                            strokeWidth={1.5}
                          />
                        </motion.span>

                      )}

                    </AnimatePresence>

                  </span>


                  {/* ==================================================
                      QUESTION
                  ================================================== */}

                  <span
                    className="
                      w-full
                      flex-1
                      text-sm
                      uppercase
                      leading-[1.3]
                      text-white
                      transition-opacity
                      duration-300
                      group-hover:opacity-70
                      sm:text-base
                      md:text-lg
                    "
                  >
                    {question}
                  </span>

                </button>


                {/* ==================================================
                    ANSWER
                ================================================== */}

                <AnimatePresence
                  initial={false}
                >

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.45,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        },
                        opacity: {
                          duration: 0.3,
                        },
                      }}
                      className="
                        overflow-hidden
                      "
                    >

                      {/* ==================================================
                          ANSWER BLUR IN / OUT
                      ================================================== */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -10,
                          filter: "blur(12px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          y: -8,
                          filter: "blur(12px)",
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
                        className="
                          max-w-full
                          pb-7
                          pl-[53px]
                          pr-8
                          text-sm
                          leading-[1.7]
                          text-white
                          md:pb-9
                          md:pl-[68px]
                          md:pr-12
                          md:text-base
                        "
                      >
                        {answer}
                      </motion.div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </motion.div>

    </section>
  );
}