"use client";

import Image from "next/image";
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <Image
            src="/vsklogo.png"
            alt="VSK Logo"
            width={150}
            height={60}
            className="mb-4"
          />

          <h2 className="text-lg font-semibold text-yellow-500 mb-3 tracking-wide font-[var(--font-playfair)]">
            About Us
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            We build durable RCC roads using quality materials and advanced
            techniques, ensuring strength, longevity, and low maintenance
            for industrial and commercial projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-3 tracking-wide font-[var(--font-playfair)]">
            Quick Links
          </h2>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-yellow-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-3 tracking-wide font-[var(--font-playfair)]">
            Working Hours
          </h2>

          <p className="text-gray-400 text-sm mb-3 leading-relaxed">
            We work 7 days a week, excluding major holidays.
            Contact us for emergencies through our hotline.
          </p>

          <ul className="text-gray-400 text-sm space-y-1">
            <li>Mon - Fri: 10:00 AM - 4:00 PM</li>
            <li>Saturday: 12:00 PM - 3:00 PM</li>
            <li>Sunday & Holidays: 9:00 AM - 12:00 PM</li>
          </ul>
        </div>

        {/* Services + QR */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-3 tracking-wide font-[var(--font-playfair)]">
            Our Services
          </h2>

          <ul className="text-gray-400 text-sm space-y-1 mb-4">
            <li>Pre-Construction</li>
            <li>General Contracting</li>
            <li>Construction Management</li>
            <li>Design & Build</li>
            <li>Self-Perform Construction</li>
          </ul>

          <div className="mt-4">
            <h3 className="text-sm font-medium text-white mb-2">
              Scan to Visit Techstrota
            </h3>

            <div className="bg-white p-2 rounded-md w-fit">
              <QRCodeCanvas
                value="https://techstrota.com"
                size={95}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">

          <p>
            © {new Date().getFullYear()} VSK Construction. All rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Designed by{" "}
            <Link
              href="https://techstrota.com"
              target="_blank"
              className="text-yellow-500 hover:underline"
            >
              Techstrota
            </Link>
          </p>

        </div>
      </div>
    </footer>
  );
}