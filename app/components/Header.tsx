"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-8 py-3">

        {/* LOGO */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/vsklogo.png"
            alt="VSK Logo"
            width={150}
            height={60}
            priority
            className="w-[110px] sm:w-[130px] lg:w-[150px] h-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">

          {navLinks.map((link) => {

            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-base lg:text-lg font-semibold transition duration-300
                ${
                  isActive
                    ? "text-yellow-500"
                    : "text-white hover:text-yellow-500"
                }`}
              >
                {link.name}

                {/* underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-500 transition-all duration-300
                  ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-white transition ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black border-t border-gray-800 transition-all duration-300 ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 space-y-6 text-center">

          {navLinks.map((link) => {

            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold transition duration-300
                ${
                  isActive
                    ? "text-yellow-500"
                    : "text-white hover:text-yellow-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

        </nav>
      </div>

    </header>
  );
}