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
    { name: "Contact us", path: "/contactus" },
  ];

  return (
    <header className="bg-black text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/vsklogo.png"
            alt="VSK Logo"
            width={150}
            height={60}
            priority
            className="block"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-lg lg:text-xl font-semibold tracking-wide transition-colors duration-300 hover:text-yellow-500 ${
                pathname === link.path
                  ? "text-yellow-500"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="w-7 h-0.5 bg-white mb-1.5"></div>
            <div className="w-7 h-0.5 bg-white mb-1.5"></div>
            <div className="w-7 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black px-6 py-6 flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-lg font-semibold transition-colors duration-300 hover:text-yellow-500 ${
                pathname === link.path
                  ? "text-yellow-500"
                  : "text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}