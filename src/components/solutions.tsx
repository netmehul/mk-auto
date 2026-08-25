"use client";

import { useState } from "react";
import { motion } from "motion/react";

/* ============================================================
   SERVICES
   ============================================================ */

const services = [
  {
    id: "vehicle-distribution",
    name: "Vehicle Distribution",
    icon: "/icons/animated/vehicle-destribution.svg",
  },
  {
    id: "genuine-parts",
    name: "Genuine Parts",
    icon: "/icons/animated/genuine-part.svg",
  },
  {
    id: "customer-care",
    name: "Customer Care",
    icon: "/icons/animated/customer-care.svg",
  },
  {
    id: "aftersales-services",
    name: "Aftersales Services",
    icon: "/icons/animated/after-sales.svg",
  },
  {
    id: "sales-excellence",
    name: "Sales Excellence",
    icon: "/icons/animated/sales-excel.svg",
  },
  {
    id: "future-ready",
    name: "Future-Ready Solutions",
    icon: "/icons/animated/future-ready.svg",
  },
];

/* ============================================================
   HEXAGON
   ============================================================ */

function Hexagon({
  service,
  index,
  activeService,
  setActiveService,
}: {
  service: (typeof services)[number];
  index: number;
  activeService: string | null;
  setActiveService: (value: string | null) => void;
}) {
  const isActive = activeService === service.id;

  const isDimmed =
    activeService !== null && !isActive;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.88,
        y: 25,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      animate={{
        opacity: isDimmed ? 0.35 : 1,
        scale: isActive ? 1.035 : 1,
      }}
      onMouseEnter={() =>
        setActiveService(service.id)
      }
      onMouseLeave={() =>
        setActiveService(null)
      }
      className="
        group
        relative
        h-[300px]
        w-[300px]
        shrink-0
        cursor-pointer
      "
    >
      {/* ======================================================
          GLOW
          ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[170px]
          w-[170px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#67678E]
          blur-[55px]
        "
        animate={{
          opacity: isActive ? 0.42 : 0.08,
          scale: isActive ? 1.25 : 1,
        }}
        transition={{
          duration: 0.4,
        }}
      />

      {/* ======================================================
          HEXAGON
          ====================================================== */}

      <svg
        viewBox="0 0 230 230"
        className="
          absolute
          inset-0
          h-full
          w-full
        "
      >
        <defs>
          <linearGradient
            id={`hex-${service.id}`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={
                isActive
                  ? "rgba(67,67,110,0.48)"
                  : "rgba(48,48,88,0.38)"
              }
            />

            <stop
              offset="100%"
              stopColor="rgba(20,20,50,0.5)"
            />
          </linearGradient>
        </defs>

        {/* Outer hexagon */}

        <motion.path
          d="
            M115 2
            L214 59
            L214 171
            L115 228
            L16 171
            L16 59
            Z
          "
          fill={`url(#hex-${service.id})`}
          animate={{
            stroke: isActive
              ? "rgba(255,255,255,0.75)"
              : "rgba(255,255,255,0.18)",
          }}
          strokeWidth={isActive ? 1.3 : 1}
        />

        {/* Inner hexagon */}

        <path
          d="
            M115 10
            L207 63
            L207 167
            L115 220
            L23 167
            L23 63
            Z
          "
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      </svg>

      {/* ======================================================
          ANIMATED SVG ICON
          ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-10
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <motion.div
          animate={{
            y: isActive ? -5 : 0,
            scale: isActive ? 1.08 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="
            mb-7
            flex
            h-[76px]
            w-[76px]
            items-center
            justify-center
          "
        >
          <img
            src={service.icon}
            alt=""
            aria-hidden="true"
            className="
              h-full
              w-full
              object-contain
            "
          />
        </motion.div>

        {/* Service title */}

        <p
          className="
            max-w-[210px]
            text-[17px]
            uppercase
            leading-[1.35]
            text-white/75
          "
        >
          {service.name}
        </p>
      </div>
    </motion.div>
  );
}

/* ============================================================
   SOLUTIONS
   ============================================================ */

export default function Solutions() {
  const [activeService, setActiveService] =
    useState<string | null>(null);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#020229]
        py-24
        md:min-h-[1000px]
        md:py-[110px]
      "
    >
      {/* ======================================================
          BACKGROUND ATMOSPHERE
          ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Central glow */}

        <motion.div
          className="
            absolute
            left-[50%]
            top-[54%]
            h-[650px]
            w-[800px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#16164B]
            blur-[150px]
          "
          animate={{
            opacity: [0.1, 0.17, 0.1],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ==================================================
            TOP RIGHT TECHNICAL FRAME
            ================================================== */}

        <svg
          viewBox="0 0 500 250"
          className="
            absolute
            right-0
            top-0
            h-[250px]
            w-[500px]
            opacity-40
          "
        >
          <path
            d="
              M500 0
              H180
              L110 70
              V220
              H0
            "
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />

          <path
            d="
              M500 18
              H190
              L128 80
              V240
            "
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        </svg>

        {/* ==================================================
            BOTTOM LEFT TECHNICAL FRAME
            ================================================== */}

        <svg
          viewBox="0 0 450 260"
          className="
            absolute
            bottom-0
            left-0
            h-[260px]
            w-[450px]
            opacity-40
          "
        >
          <path
            d="
              M0 250
              H280
              L350 180
              V20
              H450
            "
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* ======================================================
          MAIN CONTENT
          ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-6
          md:px-10
        "
      >

        {/* ====================================================
            DESKTOP
            ==================================================== */}

        <div
          className="
            relative
            mx-auto
            hidden
            h-[820px]
            w-[1200px]
            md:block
          "
        >

          {/* ==================================================
              HEADING
              ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(8px)",
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-[620px]
              top-[70px]
              z-20
            "
          >
            <h2
              className="
                max-w-[560px]
                text-4xl
                leading-[0.95]
                uppercase
                xl:text-[56px]
                break-normal
              "
            >
              Comprehensive
              <br />
              <span className="break-keep">Automotive Solutions</span>
            </h2>
          </motion.div>

          {/* ==================================================
              TOP HEXAGON
              ================================================== */}

          <div
            className="
              absolute
              left-[200px]
              top-[20px]
              z-10
            "
          >
            <Hexagon
              service={services[0]}
              index={0}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          </div>

          {/* ==================================================
              MIDDLE — GENUINE PARTS
              ================================================== */}

          <div
            className="
              absolute
              left-[60px]
              top-[260px]
              z-10
            "
          >
            <Hexagon
              service={services[1]}
              index={1}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          </div>

          {/* ==================================================
              MIDDLE — CUSTOMER CARE
              ================================================== */}

          <div
            className="
              absolute
              left-[340px]
              top-[260px]
              z-10
            "
          >
            <Hexagon
              service={services[2]}
              index={2}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          </div>

          {/* ==================================================
              MIDDLE — AFTERSALES
              ================================================== */}

          <div
            className="
              absolute
              left-[620px]
              top-[260px]
              z-10
            "
          >
            <Hexagon
              service={services[3]}
              index={3}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          </div>

          {/* ==================================================
              BOTTOM — SALES EXCELLENCE
              ================================================== */}

          <div
            className="
              absolute
              left-[480px]
              top-[500px]
              z-10
            "
          >
            <Hexagon
              service={services[4]}
              index={4}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          </div>

          {/* ==================================================
              BOTTOM — FUTURE READY
              ================================================== */}

          <div
            className="
              absolute
              left-[760px]
              top-[500px]
              z-10
            "
          >
            <Hexagon
              service={services[5]}
              index={5}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          </div>
        </div>

        {/* ====================================================
            MOBILE
            ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-3
            md:hidden
          "
        >
          {/* Mobile heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-8"
          >
            <p
              className="
                mb-4
                text-[16px]
                uppercase
                tracking-[0.35em]
                text-white/30
              "
            >
              Our Capabilities
            </p>

            <h2
              className="
                text-3xl
                leading-[0.95]
                uppercase
              "
            >
              Comprehensive
              <br />
              Automotive
              <br />
              Solutions
            </h2>
          </motion.div>

          {/* ==================================================
              MOBILE SERVICES
              ================================================== */}

          {services.map(
            (service, index) => {
              const isActive =
                activeService === service.id;

              return (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() =>
                    setActiveService(
                      isActive
                        ? null
                        : service.id
                    )
                  }
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    gap-4
                    border
                    border-white/10
                    bg-white/[0.035]
                    p-2
                    text-left
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-18
                      w-18
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                    "
                  >
                    <img
                      src={service.icon}
                      alt=""
                      aria-hidden="true"
                      className="
                        h-14
                        w-14
                        object-contain
                      "
                    />
                  </div>

                  {/* Name */}

                  <div className="flex-1">
                    <p
                      className="
                        text-[14px]
                        uppercase
                        text-white
                      "
                    >
                      {service.name}
                    </p>
                  </div>

                  {/* Plus */}

                  
                </motion.button>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}