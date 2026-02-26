"use client";

import { useEffect, useRef, useState } from "react";

/* ================= Animated Counter ================= */
function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}+</span>;
}

/* ================= Scroll Animation Wrapper ================= */
function FadeInSection({ children }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

/* ================= Parallax Section ================= */
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
      className={`relative ${height} bg-fixed bg-center bg-cover`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        {children}
      </div>
    </section>
  );
}

/* ================= About Page ================= */
export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">

      {/* ================= Hero Parallax ================= */}
      <ParallaxSection image="/constructionimg2.png">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About VSK Construction
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Building trust through quality construction services across Gujarat.
          </p>
        </div>
      </ParallaxSection>

      {/* ================= Company Introduction ================= */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              VSK Construction is a trusted construction company in Gujarat,
              delivering premium residential and commercial projects with
              commitment, quality, and excellence.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/constructionimg2.png"
              alt="Construction"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </FadeInSection>

      {/* ================= Timeline Section ================= */}
      <FadeInSection>
        <section className="bg-white dark:bg-gray-800 py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Journey
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>

            {[
              { year: "2014", text: "VSK Construction Founded in Gujarat." },
              { year: "2016", text: "Completed First Major Residential Project." },
              { year: "2019", text: "Expanded to Commercial Construction." },
              { year: "2022", text: "Achieved 100+ Successful Projects." },
              { year: "2024", text: "Recognized for Quality & Excellence." },
            ].map((item, index) => (
              <div
                key={index}
                className={`mb-12 flex justify-${
                  index % 2 === 0 ? "start" : "end"
                } w-full`}
              >
                <div className="w-1/2 px-6">
                  <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">
                      {item.year}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* ================= CEO Parallax Section ================= */}
      <ParallaxSection image="/ceo.jpg" height="h-[70vh]">
        <div className="max-w-3xl text-white">
          <h2 className="text-4xl font-bold mb-4">
            Message From Our Founder
          </h2>
          <h3 className="text-xl font-semibold text-blue-300 mb-4">
            Mr. Founder Name
          </h3>
          <p className="text-lg leading-relaxed">
            At VSK Construction, we believe construction is not just about
            buildings — it’s about building trust, quality, and long-term
            relationships.
          </p>
        </div>
      </ParallaxSection>

    
         {/* ================= Animated Stats Section ================= */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold">
              <Counter target={10} />
            </h3>
            <p className="mt-2 text-lg">Years Experience</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              <Counter target={150} />
            </h3>
            <p className="mt-2 text-lg">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              <Counter target={100} />
            </h3>
            <p className="mt-2 text-lg">Client Satisfaction</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              <Counter target={50} />
            </h3>
            <p className="mt-2 text-lg">Skilled Workers</p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <FadeInSection>
        <section className="py-20 text-center bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-6">
            Let’s Build Your Dream Project
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Contact us today and start building your future with VSK Construction.
          </p>

          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Contact Us
          </a>
        </section>
      </FadeInSection>

    </div>
  );
}