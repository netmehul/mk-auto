"use client";

import Image from "next/image";

const decorations = [
  {
    side: "left",
    top: "75%",
    width: 264,
  },
  {
    side: "right",
    top: "60%",
    width: 264,
  },
  {
    side: "left",
    top: "140%",
    width: 264,
  },
  {
    side: "right",
    top: "160%",
    width: 264,
  },
];

export default function GlobalDecorations() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        hidden
        overflow-hidden
        md:block
      "
    >
      {decorations.map((item, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: item.top,
            width: item.width,
            ...(item.side === "left"
              ? {
                  left: "-55px",
                }
              : {
                  right: "-55px",
                }),
          }}
        >
          <Image
            src="/animation/line-decoration-animation.svg"
            alt=""
            width={264}
            height={391}
            priority={index < 2}
            className={`
              block
              h-auto
              w-full
              ${
                item.side === "left"
                  ? "-scale-x-100"
                  : ""
              }
            `}
          />
        </div>
      ))}
    </div>
  );
}