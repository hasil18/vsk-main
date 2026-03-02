"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ================= Parallax Section ================= */
function ParallaxSection({
  image,
  children,
  height = "h-[60vh] md:h-[70vh]",
}: {
  image: string;
  children: React.ReactNode;
  height?: string;
}) {
  return (
    <section
      className={`relative w-full ${height} bg-cover bg-center bg-no-repeat md:bg-fixed`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        {children}
      </div>
    </section>
  );
}

/* ================= Services Page ================= */
export default function Services() {
  const heroRef = useRef(null);

  /* ===== Hero Parallax Scroll ===== */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden flex items-center justify-center"
      >
        <motion.div
          style={{ y: imageY, scale }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/constructionimg6.png')" }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

        <motion.div
          style={{ y: textY, opacity }}
          className="relative z-10 text-center backdrop-blur-md bg-white/5 px-8 py-12 rounded-3xl border border-white/10 shadow-2xl"
        >
          <motion.h1
            initial={{ letterSpacing: "0px", opacity: 0 }}
            animate={{ letterSpacing: "2px", opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide"
          >
            Our Services
          </motion.h1>

          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
            Delivering premium flooring, RCC roadwork, finishing & concrete
            solutions with quality you can trust.
          </p>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Comprehensive Construction Specialties
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          At VSK Construction, we craft strong foundations and engineered
          solutions that stand the test of time. With expertise in high-performance
          flooring systems, precision surface finishing, and RCC road construction,
          we deliver durability, efficiency, and excellence in every project.
        </p>
      </section>

     {/* ================= WHITE SECTION WRAPPER ================= */}
<section className="bg-white text-black">

  {/* ================= SERVICES GRID ================= */}
  <div className="max-w-6xl mx-auto pb-20 px-6 pt-20">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        {
          icon: "🧱",
          title: "Trimix Work",
          desc: "High-strength concrete flooring using vacuum dewatered technology for smooth and durable surfaces.",
        },
        {
          icon: "🛣️",
          title: "RCC Roads",
          desc: "Reinforced concrete roads built for long life and low maintenance.",
        },
        {
          icon: "✨",
          title: "Laser Finishing",
          desc: "Precision laser screed finishing for perfectly level floors.",
        },
        {
          icon: "✂️",
          title: "Groove Cutting",
          desc: "Accurate joint cutting to prevent cracks and enhance durability.",
        },
        {
          icon: "🔷",
          title: "Epoxy Flooring",
          desc: "Chemical-resistant, seamless, and glossy coatings for industrial spaces.",
        },
        {
          icon: "🏗️",
          title: "VDF Finishing",
          desc: "Vacuum Dewatered Flooring for high-load warehouse areas.",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl shadow-lg p-8 text-center"
        >
          <div className="text-5xl mb-4">{service.icon}</div>
          <h3 className="text-2xl font-semibold mb-4">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* ================= SECOND SECTION (WHITE BG VERSION) ================= */}
  <div className="py-20 px-6 text-center bg-white">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        Building Strong Foundations
      </h2>
      <p className="text-lg text-gray-600">
        From industrial flooring to RCC road construction,
        we ensure strength, durability, and long-lasting performance.
      </p>
    </div>
  </div>

</section>
      {/* ================= CTA ================= */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6 text-lg">
          Contact VSK Construction today and let’s build something strong together.
        </p>
        <a
          href="/contactus"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
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
          className="fixed bottom-6 right-6 z-50 
                     bg-blue-600 hover:bg-blue-700 
                     text-white w-12 h-12 
                     rounded-full shadow-xl 
                     flex items-center justify-center 
                     transition"
        >
          ↑
        </motion.button>
      )}

    </div>
  );
}