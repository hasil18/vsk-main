import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen relative bg-[url('/constructionimg2.png')] bg-cover bg-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-0">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Building Strong Foundations
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-6 max-w-2xl">
            We provide top-notch construction services with quality and reliability you can trust.
          </p>
          <Link
            href="/contactus"
            className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Optional subtle gradient at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
      </section>

      <section className="py-16 bg-gray-100 text-gray-800 px-4 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
    
    {/* Text Section */}
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-3xl font-bold mb-4">Why Choose VSK Construction?</h2>
      <p>
        With years of experience in the construction industry, we focus on delivering high-quality projects on time and within budget. Our team of experts ensures every detail is taken care of.
      </p>
      <p>
        Safety, quality, and professionalism are at the heart of everything we do. Whether it's residential or commercial projects, we build with precision and care.
      </p>

      {/* Features / Key Points */}
      <ul className="mt-6 space-y-4">
        <li className="flex items-start gap-3">
          <span className="text-yellow-500 text-xl">✅</span>
          <span>
            <strong>Unmatched Expertise:</strong> Our team of skilled engineers and technicians brings years of hands-on experience in construction and flooring solutions.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-500 text-xl">✅</span>
          <span>
            <strong>Superior Quality & Durability:</strong> We use cutting-edge technology and premium materials to ensure strong, smooth, and long-lasting surfaces.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-500 text-xl">✅</span>
          <span>
            <strong>On-Time Project Completion:</strong> We value your time and guarantee fast, efficient, and hassle-free project execution without compromising quality.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-yellow-500 text-xl">✅</span>
          <span>
            <strong>Client-Centric Approach:</strong> Your satisfaction is our priority! We work closely with clients to understand their needs and deliver tailor-made solutions that exceed expectations.
          </span>
        </li>
      </ul>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2">
      <img
        src="/constructionimg1.png"
        alt="Construction Team"
        className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
</section>
    </div>        
  );
}