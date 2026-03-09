"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {

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

{/* MOBILE HERO */}
<section className="md:hidden relative text-center">
<img src="/constructionimg6.png" className="w-full h-auto"/>
<div className="absolute inset-0 bg-black/60"></div>

<div className="absolute inset-0 flex flex-col justify-center items-center px-6">
<h1 className="text-3xl font-bold mb-3">Contact VSK Construction</h1>
<p className="text-gray-200 text-sm">
Let’s build something extraordinary together.
</p>
</div>
</section>


{/* TABLET HERO */}
<section className="hidden md:block lg:hidden relative h-[70vh]">

<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: "url('/constructionimg6.png')" }}
></div>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative flex flex-col justify-center items-center h-full text-center">

<h1 className="text-5xl font-light">
Contact VSK Construction
</h1>

<p className="text-gray-300 mt-4 text-lg">
Let’s build something extraordinary together.
</p>

</div>

</section>


{/* DESKTOP HERO */}
<section className="hidden lg:block relative h-screen">

<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: "url('/constructionimg6.png')" }}
></div>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative flex flex-col justify-center items-center h-full text-center">

<h1 className="text-6xl font-light">
Contact VSK Construction
</h1>

<p className="text-gray-300 mt-6 text-xl">
Let’s build something extraordinary together.
</p>

</div>

</section>



{/* ================= CONTACT FORM ================= */}

{/* MOBILE FORM */}
<section className="md:hidden bg-white text-black py-14 px-6">

<form onSubmit={handleSubmit} className="space-y-5">

<input
name="name"
placeholder="Name"
value={form.name}
onChange={handleChange}
required
className="w-full border-b border-gray-400 py-3 outline-none"
/>

<input
name="email"
placeholder="Email"
type="email"
value={form.email}
onChange={handleChange}
required
className="w-full border-b border-gray-400 py-3 outline-none"
/>

<input
name="phone"
placeholder="Phone"
value={form.phone}
onChange={handleChange}
className="w-full border-b border-gray-400 py-3 outline-none"
/>

<textarea
name="message"
rows={4}
placeholder="Message"
value={form.message}
onChange={handleChange}
required
className="w-full border-b border-gray-400 py-3 outline-none"
/>

<button
type="submit"
className="w-full bg-black text-white py-3 rounded-full"
>
{loading ? "Sending..." : "Send Message"}
</button>

{success && <p className="text-green-600 text-center">{success}</p>}

</form>

</section>


{/* TABLET FORM */}
<section className="hidden md:block lg:hidden bg-white text-black py-20">

<div className="max-w-3xl mx-auto px-10">

<form onSubmit={handleSubmit} className="space-y-6">

<input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full border-b py-4 outline-none"/>

<input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required className="w-full border-b py-4 outline-none"/>

<input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full border-b py-4 outline-none"/>

<textarea name="message" rows={4} placeholder="Message" value={form.message} onChange={handleChange} required className="w-full border-b py-4 outline-none"/>

<button className="w-full bg-black text-white py-4 rounded-full">
{loading ? "Sending..." : "Send Message"}
</button>

</form>

</div>

</section>


{/* DESKTOP FORM */}
<section className="hidden lg:block bg-white text-black py-24">

<div className="max-w-4xl mx-auto px-6">

<form onSubmit={handleSubmit} className="space-y-8">

<input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full border-b py-4 outline-none"/>

<input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required className="w-full border-b py-4 outline-none"/>

<input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full border-b py-4 outline-none"/>

<textarea name="message" rows={4} placeholder="Message" value={form.message} onChange={handleChange} required className="w-full border-b py-4 outline-none"/>

<button className="w-full bg-black text-white py-4 rounded-full">
{loading ? "Sending..." : "Send Message"}
</button>

</form>

</div>

</section>



{/* ================= MAP ================= */}

{/* MOBILE MAP */}
<section className="md:hidden bg-white pb-16 px-6">

<iframe
src="https://www.google.com/maps?q=Gujarat,India&output=embed&z=12"
height="350"
className="w-full rounded-xl"
/>

</section>


{/* TABLET MAP */}
<section className="hidden md:block lg:hidden bg-white pb-20 px-10">

<iframe
src="https://www.google.com/maps?q=Gujarat,India&output=embed&z=12"
height="420"
className="w-full rounded-2xl"
/>

</section>


{/* DESKTOP MAP */}
<section className="hidden lg:block bg-white pb-24 px-6">

<div className="max-w-6xl mx-auto">

<iframe
src="https://www.google.com/maps?q=Gujarat,India&output=embed&z=12"
height="450"
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
className="fixed bottom-6 right-6 z-50 bg-black text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center"
>
↑
</motion.button>

)}

</div>

);
}