"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div className="flex flex-col items-start">
          <Image
            src="/vsklogo.png"
            alt="VSK Logo"
            width={150}
            height={60}
            className="mb-4"
          />
          <h3 className="text-yellow-500 font-semibold mb-3">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            VSK Construction specializes in high-performance flooring,
            RCC roads, Trimix flooring, laser finishing, epoxy coatings,
            and surface solutions built for durability and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="text-yellow-500 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-yellow-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-yellow-500 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col items-start">
          <h3 className="text-yellow-500 font-semibold mb-3">Working Hours</h3>
          <p className="text-gray-400 text-sm">
           We work 7 days a week, every day excluding major holidays.
            Contact us if you have an emergency, with our Hotline and Contact form.
             </p>
          <ul className="mt-2 text-gray-400 text-sm space-y-1">
            <li>Monday - Friday: 10:00 - 16:00</li>
            <li>Saturday: 12:00 - 15:00</li>
            <li>Sunday: 09:00 - 12:00</li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col items-start">
          <h3 className="text-yellow-500 font-semibold mb-3">Our Services</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Pre-Construction</li>
            <li>General Contracting</li>
            <li>Construction Management</li>
            <li>Design and Build</li>
            <li>Self-Perform Construction</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm px-6">
        <p>© {new Date().getFullYear()} VSK Construction. All rights reserved.</p>
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
    </footer>
  );
}