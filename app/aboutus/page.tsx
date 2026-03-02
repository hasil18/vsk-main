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

/* ================= Fade In Section ================= */
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
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        {children}
      </div>
    </section>
  );
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

  return (
    <div>

      {/* Hero Section */}
      <section className="h-screen relative bg-[url('/constructionimg4.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About VSK Construction
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
            Building trust through quality construction services across Gujarat.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              VSK Construction is a trusted construction company in Gujarat,
              delivering premium residential and commercial projects with
              commitment, quality, and excellence.
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

      {/* Timeline */}
      <FadeInSection>
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Journey
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: "2014", text: "Company Founded in Gujarat." },
              { year: "2016", text: "First Major Residential Project." },
              { year: "2019", text: "Expanded to Commercial Construction." },
              { year: "2022", text: "100+ Successful Projects." },
              { year: "2024", text: "Recognized for Quality Excellence." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {item.year}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Founder Section */}
      <ParallaxSection image="/ceo.jpg">
        <div className="max-w-3xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Message From Our Founder
          </h2>
          <p className="text-lg leading-relaxed">
            We believe construction is about building trust, quality,
            and long-term relationships.
          </p>
        </div>
      </ParallaxSection>

      {/* Stats */}
      <StatsSection />

      {/* CTA */}
      <section className="py-16 text-center bg-gray-100 px-6">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Your Dream Project
        </h2>
        <a
          href="/contactus"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
        >
          Contact Us
        </a>
      </section>

      {/* GO TO TOP BUTTON */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 
                     bg-blue-600 hover:bg-blue-700 
                     text-white w-12 h-12 
                     rounded-full shadow-xl 
                     flex items-center justify-center 
                     transition duration-300"
        >
          ↑
        </button>
      )}

    </div>
  );
}