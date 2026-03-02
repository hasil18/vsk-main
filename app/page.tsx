"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
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
      <section className="h-screen relative bg-[url('/constructionimg2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Building Strong Foundations
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-6 max-w-2xl">
            We provide top-notch construction services with quality and reliability you can trust.
          </p>
          <Link
            href="/contactus"
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <h3 className="text-2xl font-semibold text-yellow-500 mb-6">
              Innovating Construction, Delivering Excellence
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              We don’t just build structures—we create lasting foundations.
              With years of expertise in high-performance flooring, roads,
              and surface finishing.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              We specialize in Trimix Flooring, RCC Roads, Laser Finishing,
              Epoxy Coatings, Groove Cutting, and VDF Finishing. We deliver
              solutions that are built to last.
            </p>
          </div>

          <div>
            <img
              src="/constructionimg1.png"
              alt="About Construction"
              className="rounded-xl shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Reputation Section */}
      <section className="py-16 bg-gray-900 text-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-yellow-500">
            We've Reputation for Excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ReputationCard icon="🏆" title="Reputation for Excellence" />
            <ReputationCard icon="🤝" title="We Build Partnerships" />
            <ReputationCard icon="🎯" title="Guided by Commitment" />
            <ReputationCard icon="👷" title="A Team of Professionals" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">What We Do</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <ServiceCard emoji="🏗️" title="Trimix Work" />
          <ServiceCard emoji="🛣️" title="RCC Road" />
          <ServiceCard emoji="✨" title="Laser Finishing" />
          <ServiceCard emoji="🪚" title="Groove Cutting" />
          <ServiceCard emoji="🧱" title="Floor Epoxy" />
          <ServiceCard emoji="🏢" title="VDF Finishing" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <WhyCard
            icon="🏆"
            title="Unmatched Expertise"
            description="Our team of skilled engineers and technicians brings years of hands-on experience in construction and flooring solutions."
          />
          <WhyCard
            icon="🛡️"
            title="Superior Quality & Durability"
            description="We use cutting-edge technology and premium materials to ensure strong, smooth, and long-lasting surfaces."
          />
          <WhyCard
            icon="⏱️"
            title="On-Time Project Completion"
            description="We value your time and guarantee fast, efficient, and hassle-free project execution without compromising quality."
          />
          <WhyCard
            icon="🤝"
            title="Client-Centric Approach"
            description="Your satisfaction is our priority! We work closely with clients to understand their needs and deliver tailor-made solutions that exceed expectations."
          />
        </div>
      </section>

      {/* Happy Clients */}
      <section className="py-20 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Happy Clients</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <ClientCard image="/happyclient1.png" />
          <ClientCard image="/happyclient2.png" />
          <ClientCard image="/happyclient3.png" />
          <ClientCard image="/happyclient4.png" />
          <ClientCard image="/happyclient5.png" />
          <ClientCard image="/happyclient6.png" />
        </div>
      </section>

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-400 text-black w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition duration-300"
        >
          ^
        </button>
      )}
    </div>
  );
}

/* Components */

function ReputationCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl hover:bg-yellow-500 hover:text-black transition duration-300 text-center transform hover:-translate-y-2">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

function ServiceCard({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center transform hover:-translate-y-2">
      <div className="text-5xl mb-4 text-yellow-500">{emoji}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
}

function WhyCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-3 text-center">
      <div className="text-5xl mb-4 text-yellow-500">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ClientCard({ image }: { image: string }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 flex items-center justify-center transform hover:-translate-y-2">
      <img src={image} alt="Client Logo" className="h-24 object-contain" />
    </div>
  );
}