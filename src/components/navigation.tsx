"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo/logo.svg"
import Button from "@/src/components/button"

const NAV_LINKS = [
  { href: "/", label: "Media" },
  { href: "/", label: "Careers" },
  { href: "/", label: "Contact Us" },
] as const

const linkClassName =
  "text-white text-sm hover:text-gray-300 transition-colors p-2"

export default function Navigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setOpen(false)
      }
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <nav className="relative z-50 w-full px-4 border-b-1 border-[#fff]/10">
      <div className="relative z-50 flex items-center justify-between gap-4">
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src={logo}
            alt="MAHY Khooray Automotives"
            className="h-14 w-auto md:h-18"
            priority
          />
        </Link>

        <div className="hidden items-center justify-end uppercase lg:flex lg:space-x-4">
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href} className={linkClassName}>
              {item.label}
            </Link>
          ))}
          
          {/* <Button href="/contact" variant="primary" showArrow>
            Partner With Us
          </Button> */}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="relative block h-5 w-6" aria-hidden>
            <span
              className={`absolute left-0 h-0.5 w-6 bg-white transition-all ${
                open ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-white transition-all ${
                open ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-lg lg:hidden"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}

      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-full z-50 border-t border-white/20 bg-black-500 px-4 py-4 lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-stretch gap-1 uppercase">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${linkClassName} py-3`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          {/* <Button
            href="/contact"
            variant="primary"
            showArrow
            className="mt-3 w-full justify-center"
            onClick={closeMenu}
          >
            Partner With Us
          </Button> */}
        </div>
      </div>
    </nav>
  )
}
