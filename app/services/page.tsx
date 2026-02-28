"use client";

import { motion } from "framer-motion";
import React from "react";

/* ================= Parallax Section (No Extra Space Fix) ================= */
function ParallaxSection({
  image,
  children,
  height = "h-screen",
}: {
  image: string;
  children: React.ReactNode;
  height?: string;
}) {
  return (
    <section
      className={`
        relative
        w-full h-full
        bg-center
        bg-no-repeat
        bg-contain
        md:${height}
        md:bg-cover
        md:bg-fixed
      `}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center 
        min-h-[60vh] md:h-full text-center px-6">
        {children}
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">

      {/* ================= HERO PARALLAX ================= */}
      <ParallaxSection image="/constructionimg4.png" height="h-screen" >
        <div className="text-white max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Delivering premium flooring, RCC roadwork, finishing & concrete
            solutions with quality you can trust.
          </p>
        </div>
      </ParallaxSection>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-6xl mx-auto py-14 sm:py-16 md:py-20 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Comprehensive Construction Specialties
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
          At VSK Construction, we craft strong foundations and engineered
          solutions that stand the test of time. With expertise in high-performance
          flooring systems, precision surface finishing, and RCC road construction,
          we deliver durability, efficiency, and excellence in every project.
        </p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-6xl mx-auto pb-14 sm:pb-16 md:pb-20 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {[
            {
              icon: "🧱",
              title: "Trimix Work",
              desc: "High-strength concrete flooring using vacuum dewatered flooring technology for smooth and durable surfaces.",
            },
            {
              icon: "🛣️",
              title: "RCC Roads",
              desc: "Reinforced concrete roads built for long life, strength, and low maintenance.",
            },
            {
              icon: "✨",
              title: "Laser Finishing",
              desc: "Precision laser screed finishing for perfect level and flat floors.",
            },
            {
              icon: "✂️",
              title: "Groove Cutting",
              desc: "Accurate joint cutting to prevent cracks and enhance concrete durability.",
            },
            {
              icon: "🔷",
              title: "Epoxy Flooring",
              desc: "Chemical-resistant, seamless, and glossy epoxy coatings for industrial spaces.",
            },
            {
              icon: "🏗️",
              title: "VDF Finishing",
              desc: "Vacuum Dewatered Flooring for high-load industrial and warehouse areas.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 text-center"
            >
              <div className="text-4xl sm:text-5xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SECOND PARALLAX SECTION ================= */}
      <ParallaxSection image="/constructionimg5.jpg" height="h-[60vh] sm:h-[65vh] md:h-[70vh]">
        <div className="text-white max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Building Strong Foundations
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            From industrial flooring to RCC road construction, we ensure
            strength, durability, and long-lasting performance.
          </p>
        </div>
      </ParallaxSection>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 text-white py-12 sm:py-14 md:py-16 text-center px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6 text-sm sm:text-base md:text-lg">
          Contact VSK Construction today and let’s build something strong together.
        </p>
        <a
          href="/contactus"
          className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}