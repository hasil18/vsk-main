"use client";

import { useEffect, useRef, useState } from "react";

/* ================= Animated Counter ================= */
function Counter({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

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
    <section ref={ref} className="bg-blue-700 text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">

        <div>
          <h3 className="text-3xl md:text-5xl font-bold">
            <Counter target={1500} start={startCount} />
          </h3>
          <p className="mt-2">Total Projects</p>
        </div>

        <div>
          <h3 className="text-3xl md:text-5xl font-bold">
            <Counter target={150} start={startCount} />
          </h3>
          <p className="mt-2">Staff Members</p>
        </div>

        <div>
          <h3 className="text-3xl md:text-5xl font-bold">
            <Counter target={100} start={startCount} />
          </h3>
          <p className="mt-2">Client Satisfaction</p>
        </div>

        <div>
          <h3 className="text-3xl md:text-5xl font-bold">
            <Counter target={50} start={startCount} />
          </h3>
          <p className="mt-2">Skilled Workers</p>
        </div>

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

  return (
    <div>

      {/* ================= MOBILE VERSION ================= */}
      <div className="md:hidden w-full overflow-hidden">

        {/* HERO */}
        <section className="relative text-center">

          <img
            src="/constructionimg4.png"
            alt="construction"
            className="w-full h-auto"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <h1 className="text-3xl font-bold text-white mb-3">
              About VSK Construction
            </h1>

            <p className="text-sm text-gray-200">
              Building trust with quality construction services across Gujarat.
            </p>
          </div>

        </section>

       {/* ================= COMPANY INTRO ================= */}
<section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-14 items-center">

  {/* TEXT SIDE */}
  <div>

    <h2 className="text-4xl font-bold mb-6 text-gray-900">
      Who We Are
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed mb-8">
      We are specialists in <span className="text-blue-600 font-semibold">high-quality concrete flooring</span> 
      and <span className="text-blue-600 font-semibold">road construction solutions</span>.  
      With a commitment to durability, precision and excellence, we deliver
      industry-leading services designed for long-lasting performance.
    </p>

    {/* SERVICES GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Trimix Work</h3>
        <p className="text-sm text-gray-600">
          Durable concrete flooring with vacuum dewatering for superior strength.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">RCC Roads</h3>
        <p className="text-sm text-gray-600">
          Heavy-duty reinforced concrete roads built for durability.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Laser Finishing</h3>
        <p className="text-sm text-gray-600">
          Precision surface finishing for perfect leveling and durability.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Groove Cutting</h3>
        <p className="text-sm text-gray-600">
          Strategic joints to prevent cracks and improve structural stability.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Floor Epoxy</h3>
        <p className="text-sm text-gray-600">
          Glossy seamless coating that protects against wear and chemicals.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">VDF Finishing</h3>
        <p className="text-sm text-gray-600">
          Vacuum Dewatered Flooring for stronger and durable surfaces.
        </p>
      </div>

    </div>

    <p className="text-gray-600 mt-8">
      Our skilled team and advanced techniques ensure every project meets
      the highest standards of quality, durability and performance.
    </p>

  </div>


  {/* IMAGE SIDE */}
  <div className="relative">

    <img
      src="/constructionimg3.png"
      className="rounded-2xl shadow-2xl w-full"
      alt="construction"
    />

    

  </div>

</section>

        {/* TIMELINE */}
        <section className="py-12 px-5 bg-gray-100">

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Our Journey
          </h2>

          <div className="space-y-4">

            {[
              { year: "2014", text: "Company founded in Gujarat." },
              { year: "2016", text: "First residential project completed." },
              { year: "2019", text: "Started commercial construction projects." },
              { year: "2022", text: "Successfully completed 100+ projects." },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100"
              >

                <h3 className="text-base font-semibold text-blue-600 mb-1">
                  {item.year}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </section>

      </div>
      {/* ================= TABLET VERSION ================= */}
{/* ================= TABLET VERSION ================= */}
<div className="hidden md:block lg:hidden w-full overflow-hidden">

  {/* HERO */}
  <section className="relative text-center">

    <img
      src="/constructionimg4.png"
      alt="construction"
      className="w-full h-[60vh] object-cover"
    />

    <div className="absolute inset-0 bg-black/60"></div>

    <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-white mb-4">
        About VSK Construction
      </h1>

      <p className="text-lg text-gray-200 max-w-xl">
        Building trust with quality construction services across Gujarat.
      </p>
    </div>

  </section>


  {/* ================= COMPANY INTRO ================= */}
<section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-14 items-center">

  {/* TEXT SIDE */}
  <div>

    <h2 className="text-4xl font-bold mb-6 text-gray-900">
      Who We Are
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed mb-8">
      We are specialists in <span className="text-blue-600 font-semibold">high-quality concrete flooring</span> 
      and <span className="text-blue-600 font-semibold">road construction solutions</span>.  
      With a commitment to durability, precision and excellence, we deliver
      industry-leading services designed for long-lasting performance.
    </p>

    {/* SERVICES GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Trimix Work</h3>
        <p className="text-sm text-gray-600">
          Durable concrete flooring with vacuum dewatering for superior strength.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">RCC Roads</h3>
        <p className="text-sm text-gray-600">
          Heavy-duty reinforced concrete roads built for durability.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Laser Finishing</h3>
        <p className="text-sm text-gray-600">
          Precision surface finishing for perfect leveling and durability.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Groove Cutting</h3>
        <p className="text-sm text-gray-600">
          Strategic joints to prevent cracks and improve structural stability.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Floor Epoxy</h3>
        <p className="text-sm text-gray-600">
          Glossy seamless coating that protects against wear and chemicals.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">VDF Finishing</h3>
        <p className="text-sm text-gray-600">
          Vacuum Dewatered Flooring for stronger and durable surfaces.
        </p>
      </div>

    </div>

    <p className="text-gray-600 mt-8">
      Our skilled team and advanced techniques ensure every project meets
      the highest standards of quality, durability and performance.
    </p>

  </div>


  {/* IMAGE SIDE */}
  <div className="relative">

    <img
      src="/constructionimg3.png"
      className="square-4xl shadow-2xl w-full"
      alt="construction"
    />

    

  </div>

</section>


  {/* TIMELINE */}
  <section className="py-14 px-8 bg-gray-100">

    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
      Our Journey
    </h2>

    <div className="grid grid-cols-2 gap-6">

      {[
        { year: "2014", text: "Company founded in Gujarat." },
        { year: "2016", text: "First residential project completed." },
        { year: "2019", text: "Started commercial construction projects." },
        { year: "2022", text: "Successfully completed 100+ projects." },
      ].map((item, i) => (

        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
        >

          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            {item.year}
          </h3>

          <p className="text-gray-600 text-sm">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </section>

</div>     


      {/* ================= DESKTOP VERSION ================= */}
      <div className="hidden lg:block">

        {/* HERO */}
        <section
          className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/constructionimg4.png')" }}
        >

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 text-white max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">
              About VSK Construction
            </h1>

            <p className="text-xl text-gray-200">
              Building trust through quality construction services across Gujarat.
            </p>
          </div>

        </section>

       {/* ================= COMPANY INTRO ================= */}
<section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-14 items-center">

  {/* TEXT SIDE */}
  <div>

    <h2 className="text-4xl font-bold mb-6 text-gray-900">
      Who We Are
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed mb-8">
      We are specialists in <span className="text-blue-600 font-semibold">high-quality concrete flooring</span> 
      and <span className="text-blue-600 font-semibold">road construction solutions</span>.  
      With a commitment to durability, precision and excellence, we deliver
      industry-leading services designed for long-lasting performance.
    </p>

    {/* SERVICES GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Trimix Work</h3>
        <p className="text-sm text-gray-600">
          Durable concrete flooring with vacuum dewatering for superior strength.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">RCC Roads</h3>
        <p className="text-sm text-gray-600">
          Heavy-duty reinforced concrete roads built for durability.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Laser Finishing</h3>
        <p className="text-sm text-gray-600">
          Precision surface finishing for perfect leveling and durability.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Groove Cutting</h3>
        <p className="text-sm text-gray-600">
          Strategic joints to prevent cracks and improve structural stability.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">Floor Epoxy</h3>
        <p className="text-sm text-gray-600">
          Glossy seamless coating that protects against wear and chemicals.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition">
        <h3 className="font-semibold text-blue-700">VDF Finishing</h3>
        <p className="text-sm text-gray-600">
          Vacuum Dewatered Flooring for stronger and durable surfaces.
        </p>
      </div>

    </div>

    <p className="text-gray-600 mt-8">
      Our skilled team and advanced techniques ensure every project meets
      the highest standards of quality, durability and performance.
    </p>

  </div>


  {/* IMAGE SIDE */}
  <div className="relative">

    <img
      src="/constructionimg3.png"
      className="rounded-2xl shadow-2xl w-full"
      alt="construction"
    />

    

  </div>

</section>

        {/* TIMELINE */}
        <section className="py-20 px-6 bg-gray-100">

          <h2 className="text-3xl font-bold text-center mb-14">
            Our Journey
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">

            {[
              { year: "2014", text: "Company founded in Gujarat." },
              { year: "2016", text: "First residential project." },
              { year: "2019", text: "Commercial construction expansion." },
              { year: "2022", text: "100+ successful projects." },
              { year: "2024", text: "Industry recognition for excellence." },
            ].map((item, index) => (

              <div key={index} className="bg-white p-8 rounded-xl shadow">

                <h3 className="text-xl font-bold text-blue-600">
                  {item.year}
                </h3>

                <p className="text-gray-600 text-lg">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </section>

      </div>

      {/* ================= STATS ================= */}
      <StatsSection />

      {/* ================= SCROLL TOP ================= */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        >
          ↑
        </button>
      )}

    </div>
  );
}