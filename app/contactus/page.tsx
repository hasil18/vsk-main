"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
 import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {

  const heroRef = useRef(null);
  const formRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
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
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://127.0.0.1:8000/api/contacts",  {
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
    <div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

       {/* HERO (Kept structure as requested) */}
        <section
          ref={heroRef}
          className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            style={{ y: imageY, scale }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/constructionimg6.png')",
              }}
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/40"></div>

          <motion.div
            style={{ y: textY, opacity }}
            className="relative z-10 text-center"
          >
            <h1 className="text-6xl font-bold text-white">Contact Us</h1>
          </motion.div>
        </section>
        {/* FORM SECTION - Modified for 2-column layout */}
        <section className="py-24 bg-[#fcfcfc]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
          

{/* Left Side: Text Content */}
<div className="space-y-6">

  {/* 🔹 Top Tag */}
  <div className="flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs uppercase">
    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
    Get In Touch
  </div>

  {/* 🔹 Heading */}
  <h2 className="text-6xl font-serif font-bold leading-tight">
    Let's start a <br />
    <span className="text-blue-500">conversation</span>
  </h2>

  {/* 🔹 Description */}
  <p className="text-gray-500 text-lg max-w-md leading-relaxed">
    Have a project in mind? Fill out the form and our team will get back to you within 24 hours.
  </p>

  {/* 🔥 Contact Info */}
  <div className="space-y-4 pt-4">

    {/* Phone */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <Phone size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Phone</p>
        <p className="font-semibold text-gray-700">+91 98765 43210</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <Mail size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Email</p>
        <p className="font-semibold text-gray-700">info@vskconstruction.com</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <MapPin size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Location</p>
        <p className="font-semibold text-gray-700">Ahmedabad, Gujarat, India</p>
      </div>
    </div>

    {/* Working Hours */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <Clock size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Working Hours</p>
        <p className="font-semibold text-gray-700">Mon - Sat : 9:00 AM - 7:00 PM</p>
      </div>
    </div>

  </div>

  {/* 🔹 Bottom Lines */}
  <div className="pt-8 border-t border-gray-200 w-2/3 space-y-2">
    <div className="h-1 bg-gray-100 w-full"></div>
    <div className="h-1 bg-gray-100 w-3/4"></div>
  </div>

</div>
            {/* Right Side: The Form Card */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 40 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-12 rounded-3xl"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                {["Your Name", "Email Address", "Phone Number"].map((label, idx) => {
                  const fields = ["name", "email", "phone"];
                  const field = fields[idx];
                  return (
                    <div key={field} className="relative">
                      <input
                        type="text"
                        name={field}
                        placeholder={label}
                        value={(form as any)[field]}
                        onChange={handleChange}
                        className="w-full border-b border-gray-200 py-4 outline-none focus:border-blue-500 transition-colors placeholder:text-gray-400 text-gray-700"
                      />
                    </div>
                  );
                })}

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 py-4 outline-none focus:border-blue-500 transition-colors placeholder:text-gray-400 text-gray-700 resize-none"
                />

                <button className="w-full bg-[#2962ff] hover:bg-blue-700 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-200">
                  {loading ? "Sending..." : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </section>


      </div>

      {/* ================= TABLET ================= */}
      <div className="hidden md:block lg:hidden">

        {/* HERO (Kept structure as requested) */}
        <section
          ref={heroRef}
          className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            style={{ y: imageY, scale }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/constructionimg6.png')",
              }}
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/40"></div>

          <motion.div
            style={{ y: textY, opacity }}
            className="relative z-10 text-center"
          >
            <h1 className="text-6xl font-bold text-white">Contact Us</h1>
          </motion.div>
        </section>

        {/* FORM SECTION - Modified for 2-column layout */}
        <section className="py-24 bg-[#fcfcfc]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
          

{/* Left Side: Text Content */}
<div className="space-y-6">

  {/* 🔹 Top Tag */}
  <div className="flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs uppercase">
    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
    Get In Touch
  </div>

  {/* 🔹 Heading */}
  <h2 className="text-6xl font-serif font-bold leading-tight">
    Let's start a <br />
    <span className="text-blue-500">conversation</span>
  </h2>

  {/* 🔹 Description */}
  <p className="text-gray-500 text-lg max-w-md leading-relaxed">
    Have a project in mind? Fill out the form and our team will get back to you within 24 hours.
  </p>

  {/* 🔥 Contact Info */}
  <div className="space-y-4 pt-4">

    {/* Phone */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <Phone size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Phone</p>
        <p className="font-semibold text-gray-700">+91 98765 43210</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <Mail size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Email</p>
        <p className="font-semibold text-gray-700">info@vskconstruction.com</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <MapPin size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Location</p>
        <p className="font-semibold text-gray-700">Ahmedabad, Gujarat, India</p>
      </div>
    </div>

    {/* Working Hours */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <Clock size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Working Hours</p>
        <p className="font-semibold text-gray-700">Mon - Sat : 9:00 AM - 7:00 PM</p>
      </div>
    </div>

  </div>

  {/* 🔹 Bottom Lines */}
  <div className="pt-8 border-t border-gray-200 w-2/3 space-y-2">
    <div className="h-1 bg-gray-100 w-full"></div>
    <div className="h-1 bg-gray-100 w-3/4"></div>
  </div>

</div>
            {/* Right Side: The Form Card */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 40 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-12 rounded-3xl"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                {["Your Name", "Email Address", "Phone Number"].map((label, idx) => {
                  const fields = ["name", "email", "phone"];
                  const field = fields[idx];
                  return (
                    <div key={field} className="relative">
                      <input
                        type="text"
                        name={field}
                        placeholder={label}
                        value={(form as any)[field]}
                        onChange={handleChange}
                        className="w-full border-b border-gray-200 py-4 outline-none focus:border-blue-500 transition-colors placeholder:text-gray-400 text-gray-700"
                      />
                    </div>
                  );
                })}

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 py-4 outline-none focus:border-blue-500 transition-colors placeholder:text-gray-400 text-gray-700 resize-none"
                />

                <button className="w-full bg-[#2962ff] hover:bg-blue-700 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-200">
                  {loading ? "Sending..." : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </section>


      </div>
{/* ================= DESKTOP ================= */}
      <div className="hidden lg:block bg-white text-black">

        {/* HERO (Kept structure as requested) */}
        <section
          ref={heroRef}
          className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            style={{ y: imageY, scale }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/constructionimg6.png')",
              }}
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/40"></div>

          <motion.div
            style={{ y: textY, opacity }}
            className="relative z-10 text-center"
          >
            <h1 className="text-6xl font-bold text-white">Contact Us</h1>
          </motion.div>
        </section>

        {/* FORM SECTION - Modified for 2-column layout */}
        <section className="py-24 bg-[#fcfcfc]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
         

{/* Left Side: Text Content */}
<div className="space-y-6">

  {/* 🔹 Top Tag */}
  <div className="flex items-center gap-2 text-blue-600 font-bold tracking-widest text-xs uppercase">
    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
    Get In Touch
  </div>

  {/* 🔹 Heading */}
  <h2 className="text-6xl font-serif font-bold leading-tight">
    Let's start a <br />
    <span className="text-blue-500">conversation</span>
  </h2>

  {/* 🔹 Description */}
  <p className="text-gray-500 text-lg max-w-md leading-relaxed">
    Have a project in mind? Fill out the form and our team will get back to you within 24 hours.
  </p>

  {/* 🔥 Contact Info */}
  <div className="space-y-4 pt-4">

    {/* Phone */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <Phone size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Phone</p>
        <p className="font-semibold text-gray-700">+91 98765 43210</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <Mail size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Email</p>
        <p className="font-semibold text-gray-700">info@vskconstruction.com</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <MapPin size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Location</p>
        <p className="font-semibold text-gray-700">Ahmedabad, Gujarat, India</p>
      </div>
    </div>

    {/* Working Hours */}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
        <Clock size={18} />
      </div>
      <div>
        <p className="text-sm text-gray-400">Working Hours</p>
        <p className="font-semibold text-gray-700">Mon - Sat : 9:00 AM - 7:00 PM</p>
      </div>
    </div>

  </div>

  {/* 🔹 Bottom Lines */}
  <div className="pt-8 border-t border-gray-200 w-2/3 space-y-2">
    <div className="h-1 bg-gray-100 w-full"></div>
    <div className="h-1 bg-gray-100 w-3/4"></div>
  </div>

</div>
            {/* Right Side: The Form Card */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 40 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-12 rounded-3xl"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                {["Your Name", "Email Address", "Phone Number"].map((label, idx) => {
                  const fields = ["name", "email", "phone"];
                  const field = fields[idx];
                  return (
                    <div key={field} className="relative">
                      <input
                        type="text"
                        name={field}
                        placeholder={label}
                        value={(form as any)[field]}
                        onChange={handleChange}
                        className="w-full border-b border-gray-200 py-4 outline-none focus:border-blue-500 transition-colors placeholder:text-gray-400 text-gray-700"
                      />
                    </div>
                  );
                })}

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-200 py-4 outline-none focus:border-blue-500 transition-colors placeholder:text-gray-400 text-gray-700 resize-none"
                />

                <button className="w-full bg-[#2962ff] hover:bg-blue-700 text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-200">
                  {loading ? "Sending..." : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </section>

         {/* MAP */}
        <section className="pb-20 bg-white px-6">

          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=Gujarat,India&output=embed&z=12"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0 w-full"
            />

          </div>

        </section>

      </div>

      {/* ================= SCROLL TOP ================= */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full"
        >
          ↑
        </button>
      )}

    </div>
  );
}