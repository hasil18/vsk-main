"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {

const heroRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"],
});

const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
  const handleScroll = () => {
    setShowTop(window.scrollY > 400);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleChange = (e:any) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e:any) => {

  e.preventDefault();
  setLoading(true);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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

<div className="bg-black text-white overflow-x-hidden">

{/* ================= HERO ================= */}


{/* -------- MOBILE HERO -------- */}

<section
  ref={heroRef}
  className="block md:hidden relative w-full aspect-[400/459] overflow-hidden"
>

  <motion.img
    src="/constructionimg6.png"
    alt="Construction"
    style={{ y: imageY, scale }}
    className="absolute inset-0 w-full h-full object-contain object-center"
  />

  <div className="absolute inset-0 bg-black/60" />

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center px-6 z-10">

      <h1 className="text-3xl font-light tracking-wide">
        Contact VSK Construction
      </h1>

      <p className="mt-3 text-gray-300 text-sm">
        Let’s build something extraordinary together.
      </p>

    </div>
  </div>

</section>
{/* -------- TABLET HERO -------- */}
<section className="hidden md:flex lg:hidden relative h-[75vh] items-center justify-center overflow-hidden">

<div
className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat"
style={{ backgroundImage: "url('/constructionimg6.png')" }}
/>

<div className="absolute inset-0 bg-black/60" />

<div className="relative z-10 text-center px-10 max-w-3xl">

<h1 className="text-5xl font-light tracking-wide">
Contact VSK Construction
</h1>

<p className="mt-4 text-gray-300 text-lg">
Let’s build something extraordinary together.
</p>

</div>

</section>


{/* -------- DESKTOP HERO -------- */}

<section className="hidden lg:flex relative h-screen items-center justify-center overflow-hidden">

<div
className="absolute inset-0 bg-cover bg-center bg-no-repeat"
style={{ backgroundImage: "url('/constructionimg6.png')" }}
/>

<div className="absolute inset-0 bg-black/60" />

<div className="relative z-10 text-center max-w-4xl">

<h1 className="text-6xl font-light tracking-wide">
Contact VSK Construction
</h1>

<p className="mt-6 text-gray-300 text-xl">
Let’s build something extraordinary together.
</p>

</div>

</section>



{/* ================= FORM ================= */}

<section className="bg-white text-black py-16 md:py-20 lg:py-24">

<div className="max-w-4xl mx-auto px-6">

<form
onSubmit={handleSubmit}
className="space-y-6 md:space-y-8"
>

<input
name="name"
placeholder="Name"
value={form.name}
onChange={handleChange}
required
className="w-full border-b border-gray-400 py-3 md:py-4 outline-none"
/>

<input
name="email"
placeholder="Email"
type="email"
value={form.email}
onChange={handleChange}
required
className="w-full border-b border-gray-400 py-3 md:py-4 outline-none"
/>

<input
name="phone"
placeholder="Phone"
value={form.phone}
onChange={handleChange}
className="w-full border-b border-gray-400 py-3 md:py-4 outline-none"
/>

<textarea
name="message"
rows={4}
placeholder="Message"
value={form.message}
onChange={handleChange}
required
className="w-full border-b border-gray-400 py-3 md:py-4 outline-none"
/>

<button
type="submit"
className="w-full bg-black text-white py-3 md:py-4 rounded-full hover:bg-gray-900 transition"
>

{loading ? "Sending..." : "Send Message"}

</button>

{success && (
<p className="text-green-600 text-center">{success}</p>
)}

</form>

</div>

</section>



{/* ================= MAP ================= */}

<section className="bg-white pb-16 md:pb-20 lg:pb-24 px-6">

<div className="max-w-6xl mx-auto">

<iframe
src="https://www.google.com/maps?q=Gujarat,India&output=embed&z=12"
height="420"
className="w-full rounded-2xl shadow-xl"
/>

</div>

</section>



{/* ================= SCROLL TO TOP ================= */}

{showTop && (

<motion.button
onClick={scrollToTop}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
className="fixed bottom-6 right-6 z-50 bg-black text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:bg-gray-900"
>

↑

</motion.button>

)}

</div>

);

}