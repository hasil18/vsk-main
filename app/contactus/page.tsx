"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

export default function Contact() {
  const heroRef = useRef(null);
  const formRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Luxury background effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const isFormInView = useInView(formRef, { once: true });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-black text-white">

      {/* ================= LUXURY HERO ================= */}
<section
  ref={heroRef}
  className="relative h-screen overflow-hidden flex items-center justify-center"
>
  {/* Moving + Zooming Background */}
  <motion.div
    style={{
      y: imageY,
      scale,
    }}
    className="absolute inset-0"
  >
    <div
      className="w-full h-full 
                 bg-contain bg-center bg-no-repeat 
                 md:bg-cover"
      style={{ backgroundImage: "url('/constructionimg6.png')" }}
    />
  </motion.div>

  {/* Premium Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

  {/* Glassmorphism Content */}
  <motion.div
    style={{ y: textY, opacity }}
    className="relative z-10 text-center backdrop-blur-md bg-white/5 px-6 sm:px-10 py-10 sm:py-12 rounded-3xl border border-white/10 shadow-2xl"
  >
    <motion.h1
      initial={{ letterSpacing: "0px", opacity: 0 }}
      animate={{ letterSpacing: "2px", opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="text-3xl sm:text-5xl md:text-6xl font-light tracking-wide"
    >
      Contact VSK Construction
    </motion.h1>

    <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
      Precision. Excellence. Innovation.  
      Let’s build something extraordinary together.
    </p>
  </motion.div>
</section>

      {/* ================= CONTACT SECTION ================= */}
      <div className="py-24 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">

          {/* Animated Form Card */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.1)] p-12"
          >
            <h2 className="text-4xl font-light text-center mb-10">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">

              {["name", "email", "phone"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={(form as any)[field]}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-4 outline-none focus:border-black transition duration-500"
                />
              ))}

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-4 outline-none focus:border-black transition duration-500"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full tracking-widest text-sm"
              >
                {loading ? "Sending..." : "SEND MESSAGE"}
              </motion.button>

              {success && (
                <p className="text-green-600 text-center">{success}</p>
              )}
            </form>
          </motion.div>

          {/* Premium Info Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-24 text-center space-y-4"
          >
            <h3 className="text-2xl font-light">Contact Information</h3>
            <p>+91 9979206812 | +91 7874152686</p>
            <p>vskconstruction32@gmail.com</p>
            <p>Gujarat, India</p>
          </motion.div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mt-16">
            <iframe
              src="https://www.google.com/maps?q=Gujarat,India&output=embed&z=12"
              width="100%"
              height="450"
              loading="lazy"
              className="w-full border-0"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}