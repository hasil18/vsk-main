"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Services() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
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
    <div className="overflow-x-hidden">

{/* ================= MOBILE VIEW ================= */}
<div className="md:hidden bg-black text-white">

{/* HERO */}
<section className="relative text-center">

<img
src="/constructionimg5.png"
className="w-full h-auto"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center px-6">
<h1 className="text-3xl font-bold mb-3">
Our Services
</h1>

<p className="text-sm text-gray-200">
Delivering premium flooring, RCC roadwork & concrete solutions.
</p>
</div>

</section>

{/* INTRO */}
<section className="py-12 px-6 text-center">

<h2 className="text-2xl font-bold mb-4">
Comprehensive Construction Specialties
</h2>

<p className="text-gray-300 text-sm">
At VSK Construction we craft strong foundations that last.
</p>

</section>

{/* SERVICES */}
<section className="bg-white text-black py-14 px-6">

<div className="grid grid-cols-1 gap-6">

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
whileHover={{ y: -5 }}
className="bg-gray-100 p-6 rounded-xl text-center shadow"
>

<div className="text-4xl mb-2">{service.icon}</div>

<h3 className="text-lg font-semibold">
{service.title}
</h3>

</motion.div>

))}

</div>

</section>

{/* CTA */}
<section className="bg-blue-600 text-white py-12 text-center">

<h2 className="text-xl font-bold mb-4">
Ready t Start Your Project?
</h2>

<a
href="/contactus"
className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
>
Contact Us
</a>

</section>

</div>

{/* ================= TABLET VIEW ================= */}
<div className="hidden md:block lg:hidden bg-black text-white">

{/* HERO */}
<section className="relative text-center">

<img
src="/constructionimg5.png"
className="w-full h-[60vh] object-cover"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center">

<h1 className="text-4xl font-bold mb-4">
Our Services
</h1>

<p className="text-lg text-gray-200 max-w-xl">
Delivering premium flooring, RCC roadwork & concrete solutions.
</p>

</div>

</section>

{/* INTRO */}
<section className="py-14 px-8 text-center">

<h2 className="text-3xl font-bold mb-6">
Comprehensive Construction Specialties
</h2>

<p className="text-gray-300">
At VSK Construction we craft strong foundations that last.
</p>

</section>

{/* SERVICES */}
<section className="bg-white text-black py-16 px-8">

<div className="grid grid-cols-2 gap-8">

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
whileHover={{ y: -6 }}
className="bg-gray-100 p-8 rounded-xl text-center shadow"
>

<div className="text-5xl mb-3">{service.icon}</div>

<h3 className="text-xl font-semibold">
{service.title}
</h3>

</motion.div>

))}

</div>

</section>

{/* CTA */}
<section className="bg-blue-600 text-white py-14 text-center">

<h2 className="text-3xl font-bold mb-4">
Ready to Start Your Project?
</h2>

<a
href="/contactus"
className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold"
>
Contact Us
</a>

</section>

</div>

{/* ================= DESKTOP VIEW ================= */}
<div className="hidden lg:block bg-black text-white">

{/* HERO */}
<section
className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
style={{ backgroundImage: "url('/constructionimg5.png')" }}
>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10">

<h1 className="text-6xl font-bold mb-6">
Our Services
</h1>

<p className="text-xl text-gray-200 max-w-2xl mx-auto">
Delivering premium flooring, RCC roadwork, finishing &
concrete solutions with quality you can trust.
</p>

</div>

</section>

{/* INTRO */}
<section className="py-20 text-center max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold mb-6">
Comprehensive Construction Specialties
</h2>

<p className="text-gray-300 max-w-3xl mx-auto">
At VSK Construction we craft strong foundations and
engineered solutions that stand the test of time.
</p>

</section>

{/* SERVICES */}
<section className="bg-white text-black py-20">

<div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 px-6">

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
whileHover={{ y: -10 }}
className="bg-gray-100 p-10 rounded-2xl text-center shadow-xl"
>

<div className="text-6xl mb-4">{service.icon}</div>

<h3 className="text-2xl font-semibold">
{service.title}
</h3>

</motion.div>

))}

</div>

</section>

{/* CTA */}
<section className="bg-blue-600 text-white py-20 text-center">

<h2 className="text-4xl font-bold mb-6">
Ready to Start Your Project?
</h2>

<a
href="/contactus"
className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold"
>
Contact Us
</a>

</section>

</div>

{/* GO TO TOP */}
{showTop && (
<motion.button
onClick={scrollToTop}
className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
>
↑
</motion.button>
)}

</div>
  );
}