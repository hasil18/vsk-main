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
        w-full
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

/* ================= Stats Section (Scroll Activated + Responsive) ================= */
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
    <section ref={ref} className="bg-blue-700 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">

        <div>
          <h3 className="text-4xl md:text-5xl font-bold">
            <Counter target={10} start={startCount} />
          </h3>
          <p className="mt-2 text-base md:text-lg">Years Experience</p>
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl font-bold">
            <Counter target={150} start={startCount} />
          </h3>
          <p className="mt-2 text-base md:text-lg">Projects Completed</p>
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl font-bold">
            <Counter target={100} start={startCount} />
          </h3>
          <p className="mt-2 text-base md:text-lg">Client Satisfaction</p>
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl font-bold">
            <Counter target={50} start={startCount} />
          </h3>
          <p className="mt-2 text-base md:text-lg">Skilled Workers</p>
        </div>

      </div>
    </section>
  );
}

/* ================= About Page ================= */
export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white overflow-x-hidden">

      {/* ================= Hero Parallax ================= */}
      <ParallaxSection image="/constructionimg4.png">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            About VSK Construction
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Building trust through quality construction services across Gujarat.
          </p>
        </div>
      </ParallaxSection>

      {/* ================= Company Introduction ================= */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto py-16 md:py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              VSK Construction is a trusted construction company in Gujarat,
              delivering premium residential and commercial projects with
              commitment, quality, and excellence. We focus on strong
              foundations, modern design, and customer satisfaction.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/constructionimg3.png"
              alt="Construction"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </FadeInSection>

      {/* ================= Timeline Section ================= */}
      <FadeInSection>
        <section className="bg-white dark:bg-gray-800 py-16 md:py-20 px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            Our Journey
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>

            {[
              { year: "2014", text: "Company Founded in Gujarat." },
              { year: "2016", text: "Completed First Major Residential Project." },
              { year: "2019", text: "Expanded to Commercial Construction." },
              { year: "2022", text: "Achieved 100+ Successful Projects." },
              { year: "2024", text: "Recognized for Quality & Excellence." },
            ].map((item, index) => (
              <div
                key={index}
                className={`mb-12 flex w-full ${
                  index % 2 === 0
                    ? "md:justify-start justify-center"
                    : "md:justify-end justify-center"
                }`}
              >
                <div className="md:w-1/2 w-full px-4">
                  <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-2">
                      {item.year}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* ================= Founder Section ================= */}
      <ParallaxSection image="/ceo.jpg" height="h-[60vh] md:h-[70vh]">
        <div className="max-w-3xl text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Message From Our Founder
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">
            Mr. Founder Name
          </h3>
          <p className="text-base md:text-lg leading-relaxed">
            At VSK Construction, we believe construction is not just about
            buildings — it’s about building trust, quality, and long-term
            relationships with our clients.
          </p>
        </div>
      </ParallaxSection>

      {/* ================= Animated Stats Section ================= */}
      <StatsSection />

      {/* ================= CTA ================= */}
      <FadeInSection>
        <section className="py-16 md:py-20 text-center bg-gray-100 dark:bg-gray-800 px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Let’s Build Your Dream Project
          </h2>
          <p className="mb-8 text-base md:text-lg text-gray-600 dark:text-gray-300">
            Contact us today and start building your future with VSK Construction.
          </p>

          <a
            href="/contactus"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Contact Us
          </a>
        </section>
      </FadeInSection>

    </div>
  );
}