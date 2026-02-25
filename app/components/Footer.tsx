"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About Us */}
        <div className="flex flex-col items-start">
          <Image
            src="/vsklogo.png"
            alt="VSK Logo"
            width={150}
            height={60}
            className="mb-4"
          />
          <h3 className="text-yellow-500 font-semibold mb-2">About Us</h3>
          <p className="text-gray-400 text-sm">
            Constra – We build durable RCC roads using quality materials and advanced techniques, ensuring strength, longevity, and low maintenance for various projects.
          </p>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col items-start">
          <h3 className="text-yellow-500 font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-400 text-sm">
            We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our Hotline and Contact form.
          </p>
          <ul className="mt-2 text-gray-400 text-sm space-y-1">
            <li>Monday - Friday: 10:00 - 16:00</li>
            <li>Saturday: 12:00 - 15:00</li>
            <li>Sunday and holidays: 09:00 - 12:00</li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col items-start">
          <h3 className="text-yellow-500 font-semibold mb-2">Services</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>Pre-Construction</li>
            <li>General Contracting</li>
            <li>Construction Management</li>
            <li>Design and Build</li>
            <li>Self-Perform Construction</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start">
          <h3 className="text-yellow-500 font-semibold mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">📍 Ahmedabad, Gujarat</p>
          <p className="text-gray-400 text-sm">📞 +91 9714810703</p>
          <p className="text-gray-400 text-sm">📧 hassildevmurari@gmail.com</p>
        </div>
      </div>

      {/* Bottom copyright and designed by */}
      <div className="border-t border-gray-700 mt-6 py-4 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm px-6">
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

    <footer className="bg-gray-900 text-gray-300 mt-20 py-8 text-center">
      <p>📍 Ahmedabad, Gujarat</p>
      <p>📞 +91 9979206812</p>
       <p>📞 +91 7874152686</p>
      <p>📧 vskconstruction32@gmail.com</p>
      <p className="mt-4 text-sm">
        © {new Date().getFullYear()} VSK Construction
      </p>
>>>>>>> b419857df27eacfb9c8e7517f2c151783aa3dd29
    </footer>
  );
}