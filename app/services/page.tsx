"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Services() {

  /* ===== Go To Top Button ===== */
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* ===== Desktop Hero (md and above) ===== */}
        <div className="hidden md:block absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/constructionimg5.png')" }}
          />
        </div>

        {/* ===== Mobile Hero (below md) ===== */}
        <div className="md:hidden absolute inset-0 bg-black">
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/constructionimg5.png')" }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <div className="backdrop-blur-md bg-white/5 
                          px-6 sm:px-10 py-10 sm:py-12 
                          rounded-3xl border border-white/10 shadow-2xl
                          w-full max-w-xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-wide">
              Our services
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300">
              Delivering premium flooring, RCC roadwork, finishing & concrete solutions with quality you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto py-14 sm:py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Comprehensive Construction Specialties
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
          At VSK Construction, we craft strong foundations and engineered
          solutions that stand the test of time.
        </p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="bg-white text-black">
        <div className="max-w-6xl mx-auto pb-16 sm:pb-20 px-4 sm:px-6 pt-16 sm:pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              { icon: "🧱", title: "Trimix Work" },
              { icon: "🛣️", title: "RCC Roads" },
              { icon: "✨", title: "Laser Finishing" },
              { icon: "✂️", title: "Groove Cutting" },
              { icon: "🔷", title: "Epoxy Flooring" },
              { icon: "🏗️", title: "VDF Finishing" },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl shadow-lg p-6 sm:p-8 text-center"
              >
                <div className="text-4xl sm:text-5xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 text-white py-14 sm:py-16 text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <a
          href="/contactus"
          className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>

      {/* ================= GO TO TOP BUTTON ================= */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 
                     bg-blue-600 hover:bg-blue-700 
                     text-white w-11 h-11 sm:w-12 sm:h-12 
                     rounded-full shadow-xl 
                     flex items-center justify-center"
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}