"use client";

import { useEffect, useRef, useState } from "react";

/* ================= Animated Counter ================= */
function Counter({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000;
    const increment = target / (duration / 56);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, start]);

  return <span>{count}+</span>;
}

/* ================= Stats Section ================= */
function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
   <section ref={ref} className="relative py-20 overflow-hidden">

  {/* 🔷 TRIANGLE BACKGROUND */}
  <div
    className="absolute inset-0"
    style={{
      background: "linear-gradient(to right, #171515, #3b82f6)",
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
    }}
  ></div>

  {/* 🔥 CONTENT (always relative) */}
  <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">

    {[
      { value: 1500, label: "Projects" },
      { value: 150, label: "Staff" },
      { value: 100, label: "Clients" },
      { value: 50, label: "Workers" },
    ].map((item) => (
      <div
        key={item.label}
        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-3xl font-bold text-blue-700">
          <Counter target={item.value} start={startCount} />
        </h3>
        <p className="mt-2 text-gray-600">{item.label}</p>
      </div>
    ))}

  </div>
</section>
  );
}

/* ================= MAIN PAGE ================= */
export default function About() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = ["Trimix","RCC","Laser","Groove","Epoxy","VDF"];
  const flow = ["Plan","Design","Build","Deliver"];

  return (
    <div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">

        <section className="relative text-center">
          <img src="/constructionimg4.png" className="w-full" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-3xl text-white font-bold">About VSK</h1>
            
          </div>
        </section>

         <section className="py-16 px-6">
  <h2 className="text-4xl font-bold mb-8 text-blue-700 text-left">
    Who We Are
  </h2>

  <div className=" max-w-6xl mx-left grid md:grid-cols-2 gap-10 items-center">
    
    {/* IMAGE */}
    <div>
      <img
        src="/constructionimg3.png"
        className="rounded-xl shadow-lg w-full"
      />
    </div>

    {/* TEXT */}
<div className="space-y-7">

  <p className="text-gray-800 text-xl leading-relaxed font-medium">
    We are a leading construction company specializing in
    <span className="text-blue-700 font-semibold"> high-quality concrete flooring</span>,
    industrial projects, and road construction.
  </p>

  <p className="text-gray-800 text-xl leading-relaxed font-medium">
    With years of experience, we deliver
    <span className="text-blue-700 font-semibold">
      {" "}durable cost-effective innovative solutions
    </span>,
    tailored to client needs.
  </p>

  <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-indigo-500 pl-5 italic bg-gradient-to-r from-indigo-50 to-blue-50 py-4 rounded-r-md">
    Our expert team ensures every project meets industry standards
    while maintaining safety, efficiency, and precision.
  </p>

  {/* HIGHLIGHT POINTS */}
  <div className="grid grid-cols-2 gap-5 pt-5">
    {[
      "10+ Years Experience",
      "1500+ Projects",
      "Expert Engineers",
      "100% Satisfaction",
    ].map((item) => (
      <div
        key={item}
        className="flex items-center gap-3 text-base text-gray-800"
      >
        <span className="text-blue-600 text-lg font-bold">✔</span>
        {item}
      </div>
    ))}
  </div>

</div>
  </div>
</section>

        <StatsSection />

        <section className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    {/* 🔥 Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-blue-600">
        What We Do
      </h2>
      <p className="mt-3 text-gray-500 max-w-xl mx-auto">
        High-quality flooring and construction solutions with durability,
        precision, and modern techniques.
      </p>
    </div>

    {/* 🔥 Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((item) => (
        <div
          key={item}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
        >
          {/* 🔹 Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600 text-white mb-4 group-hover:scale-110 transition">
            ⚡
          </div>

          {/* 🔹 Title */}
          <h3 className="text-lg font-semibold text-gray-800">
            {item}
          </h3>

          {/* 🔹 Description */}
          <p className="text-gray-500 text-sm mt-2">
            High-quality {item} flooring solutions with durability and precision.
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

       <section className="py-20 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold text-center text-blue-700 mb-16">
    Our Process
  </h2>

  <div className="relative max-w-5xl mx-auto">

    {/* 🔷 CENTER LINE */}
    <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-300 -translate-x-1/2"></div>

    {flow.map((item, index) => (
      <div
        key={index}
        className={`mb-12 flex items-center w-full ${
          index % 2 === 0 ? "justify-start" : "justify-end"
        }`}
      >
        {/* 🔥 CARD */}
        <div className="w-[45%] bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition relative">

          <h3 className="font-semibold text-lg text-blue-700">
            {item}
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Step {index + 1} ensures quality execution of the project.
          </p>
        </div>

        {/* 🔵 NUMBER CIRCLE */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg">
          {index + 1}
        </div>
      </div>
    ))}
  </div>
</section>
        <section className="py-16 px-6">
          <h2 className="text-2xl font-bold">Mission & Vision</h2>
        </section>

        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-2xl font-bold">Why Choose Us</h2>
        </section>

        <ClientSection />

      </div>

      {/* ================= TABLET ================= */}
      <div className="hidden md:block lg:hidden">

         <section className="relative text-center">
          <img src="/constructionimg4.png" className="w-full" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-3xl text-white font-bold">About VSK</h1>
            
          </div>
        </section>

         <section className="py-16 px-6">
  <h2 className="text-4xl font-bold -mb-20 text-blue-700 text-left">
    Who We Are
  </h2>

  <div className=" max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* IMAGE */}
    <div>
      <img
        src="/constructionimg3.png"
        className="rounded-xl shadow-lg w-full"
      />
    </div>

    {/* TEXT */}
<div className="space-y-7">

  <p className="text-gray-800 text-xl leading-relaxed font-medium">
    We are a leading construction company specializing in
    <span className="text-blue-700 font-semibold"> high-quality concrete flooring</span>,
    industrial projects, and road construction.
  </p>

  <p className="text-gray-800 text-xl leading-relaxed font-medium">
    With years of experience, we deliver
    <span className="text-blue-700 font-semibold">
      {" "}durable cost-effective innovative solutions
    </span>,
    tailored to client needs.
  </p>

  <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-indigo-500 pl-5 italic bg-gradient-to-r from-indigo-50 to-blue-50 py-4 rounded-r-md">
    Our expert team ensures every project meets industry standards
    while maintaining safety, efficiency, and precision.
  </p>

  {/* HIGHLIGHT POINTS */}
  <div className="grid grid-cols-2 gap-5 pt-5">
    {[
      "10+ Years Experience",
      "1500+ Projects",
      "Expert Engineers",
      "100% Satisfaction",
    ].map((item) => (
      <div
        key={item}
        className="flex items-center gap-3 text-base text-gray-800"
      >
        <span className="text-blue-600 text-lg font-bold">✔</span>
        {item}
      </div>
    ))}
  </div>

</div>
  </div>
</section>

        <StatsSection />

        <section className="py-16 px-6">
          <h2 className="text-2xl font-bold mb-6">What We Do</h2>
          <div className="grid gap-4">
            {services.map((item)=>(
              <div key={item} className="p-4 bg-gray-100 rounded">{item}</div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold text-center text-blue-700 mb-16">
    Our Process
  </h2>

  <div className="relative max-w-5xl mx-auto">

    {/* 🔷 CENTER LINE */}
    <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-300 -translate-x-1/2"></div>

    {flow.map((item, index) => (
      <div
        key={index}
        className={`mb-12 flex items-center w-full ${
          index % 2 === 0 ? "justify-start" : "justify-end"
        }`}
      >
        {/* 🔥 CARD */}
        <div className="w-[45%] bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition relative">

          <h3 className="font-semibold text-lg text-blue-700">
            {item}
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Step {index + 1} ensures quality execution of the project.
          </p>
        </div>

        {/* 🔵 NUMBER CIRCLE */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg">
          {index + 1}
        </div>
      </div>
    ))}
  </div>
</section>
        <ClientSection />

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block">

         <section className="relative text-center">
          <img src="/constructionimg4.png" className="w-full" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-3xl text-white font-bold">About VSK</h1>
            
          </div>
        </section>

      <section className="py-16 px-6">
  <h2 className="text-4xl font-bold mb-1 text-blue-700 text-left">
    Who We Are
  </h2>

  <div className=" max-w-6xl mx-left grid md:grid-cols-2 gap-10 items-center">
    
    {/* IMAGE */}
    <div>
      <img
        src="/constructionimg3.png"
        className="rounded-xl shadow-lg w-full"
      />
    </div>

    {/* TEXT */}
<div className="space-y-7">

  <p className="text-gray-800 text-xl leading-relaxed font-medium">
    We are a leading construction company specializing in
    <span className="text-blue-700 font-semibold"> high-quality concrete flooring</span>,
    industrial projects, and road construction.
  </p>

  <p className="text-gray-800 text-xl leading-relaxed font-medium">
    With years of experience, we deliver
    <span className="text-blue-700 font-semibold">
      {" "}durable cost-effective innovative solutions
    </span>,
    tailored to client needs.
  </p>

  <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-indigo-500 pl-5 italic bg-gradient-to-r from-indigo-50 to-blue-50 py-4 rounded-r-md">
    Our expert team ensures every project meets industry standards
    while maintaining safety, efficiency, and precision.
  </p>

  {/* HIGHLIGHT POINTS */}
  <div className="grid grid-cols-2 gap-5 pt-5">
    {[
      "10+ Years Experience",
      "1500+ Projects",
      "Expert Engineers",
      "100% Satisfaction",
    ].map((item) => (
      <div
        key={item}
        className="flex items-center gap-3 text-base text-gray-800"
      >
        <span className="text-blue-600 text-lg font-bold">✔</span>
        {item}
      </div>
    ))}
  </div>

</div>
  </div>
</section>

        <StatsSection />

   return (
  <>
    <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50">

      {/* 🔷 HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          What We Do
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          We provide high-quality flooring and construction solutions with
          durability, precision, and modern techniques.
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">

        {services.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
          >
            {/* 🔷 HOVER BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* 🔥 CONTENT */}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white transition">
                {item}
              </h3>

              <p className="text-gray-500 text-sm mt-2 group-hover:text-gray-100 transition">
                High-quality {item} flooring solutions with durability and precision.
              </p>
            </div>

            {/* 🔹 BOTTOM LINE EFFECT */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}

      </div>
    </section>

    {/* 🔼 SCROLL BUTTON */}
    {showTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        ↑
      </button>
    )}
  </>
);
     <section className="py-20 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold text-center text-blue-700 mb-16">
    Our Process
  </h2>

  <div className="relative max-w-5xl mx-auto">

    {/* 🔷 CENTER LINE */}
    <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-300 -translate-x-1/2"></div>

    {flow.map((item, index) => (
      <div
        key={index}
        className={`mb-12 flex items-center w-full ${
          index % 2 === 0 ? "justify-start" : "justify-end"
        }`}
      >
        {/* 🔥 CARD */}
        <div className="w-[45%] bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition relative">

          <h3 className="font-semibold text-lg text-blue-700">
            {item}
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Step {index + 1} ensures quality execution of the project.
          </p>
        </div>

        {/* 🔵 NUMBER CIRCLE */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-lg">
          {index + 1}
        </div>
      </div>
    ))}
  </div>
</section>
        <section className="py-16 px-6">
  <h2 className="text-2xl font-bold mb-6 text-blue-700">
    Mission & Vision
  </h2>

  <div className="grid gap-6">
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
      <p className="text-gray-600">
        To deliver high-quality construction services with innovation,
        safety, and customer satisfaction at the core.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
      <p className="text-gray-600">
        To become a trusted leader in construction by providing
        reliable and sustainable infrastructure solutions.
      </p>
    </div>
  </div>
</section>

       <section className="py-16 px-6 bg-gray-100">
  <h2 className="text-2xl font-bold mb-6 text-blue-700">
    Why Choose Us
  </h2>

  <div className="grid gap-4">
    {[
      "Experienced Team",
      "Modern Equipment",
      "On-Time Delivery",
      "High Quality Work",
    ].map((item)=>(
      <div
        key={item}
        className="bg-white p-5 rounded-xl shadow flex items-center gap-3 hover:shadow-lg transition"
      >
        <span className="text-blue-600 text-xl">✔</span>
        <p className="text-gray-700">{item}</p>
      </div>
    ))}
  </div>
</section>

        <ClientSection />

      </div>

      {/* SCROLL TOP */}
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

/* ================= CLIENT SECTION ================= */
function ClientSection() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-14">
        Trusted Clients
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-scroll whitespace-nowrap">
          {[1,2].map((_,i)=>(
            <div key={i} className="flex gap-8">
              {["1","2","3","4","5","6"].map((num)=>(
                <ClientCard key={num} image={`/happyclient${num}.png`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CLIENT CARD ================= */
function ClientCard({ image }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center justify-center min-w-[150px] hover:scale-105 transition">
      <img src={image} className="h-14 object-contain" />
    </div>
  );
}