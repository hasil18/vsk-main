"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-2xl shadow-xl border-b border-white/20"
          : "bg-white/40 backdrop-blur-xl"
      }`}
    >
    <div className="w-full flex items-center justify-between px-5 sm:px-6 lg:px-8 py-3">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center flex-shrink-0 transition duration-300 hover:scale-105"
        >
          <Image
            src="/vskhlogo.png"
            alt="VSK Logo"
            width={150}
            height={60}
            priority
            className="w-[110px] sm:w-[130px] lg:w-[150px] h-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center justify-end flex-1 gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`group relative text-base lg:text-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-yellow-500"
                    : "text-gray-800 hover:text-yellow-500"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden relative flex flex-col justify-center items-center w-11 h-11 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 shadow-md"
        >
          <span
            className={`absolute block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>

          <span
            className={`absolute block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          <span
            className={`absolute block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-4 mb-4 rounded-3xl bg-white/80 backdrop-blur-2xl shadow-2xl border border-white/30 p-6">
          <nav className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold transition duration-300 py-2 rounded-xl ${
                    isActive
                      ? "text-yellow-500 bg-yellow-50"
                      : "text-gray-800 hover:text-yellow-500 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}