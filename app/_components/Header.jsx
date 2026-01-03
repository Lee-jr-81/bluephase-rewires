"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../public/bluephase_logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white pt-6 relative z-50">
      <div className="max-w-screen-xl mx-auto w-11/12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Bluephase Rewires logo" width={150} />
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-darkAccent"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-darkAccent">
          <Link href="/about">About</Link>
          <Link href="/locations/halesowen">Halesowen</Link>
          <Link href="/locations/stourbridge">Stourbridge</Link>
          <Link href="/locations/kidderminster">Kidderminster</Link>
        </nav>
      </div>

      {/* Mobile Menu (animated) */}
      <div
        className={`
          md:hidden absolute left-0 right-0
          transition-all duration-300 ease-in-out
          ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
          bg-gray-50
          border-t border-gray-200
        `}
      >
        <nav className="flex flex-col gap-6 px-6 py-8 text-lg font-semibold text-darkAccent">
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/locations/halesowen" onClick={() => setOpen(false)}>
            Halesowen
          </Link>
          <Link href="/locations/stourbridge" onClick={() => setOpen(false)}>
            Stourbridge
          </Link>
          <Link href="/locations/kidderminster" onClick={() => setOpen(false)}>
            Kidderminster
          </Link>
        </nav>
      </div>
    </header>
  );
}
