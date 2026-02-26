import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen relative bg-[url('/constructionimg2.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

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

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-100 text-gray-800 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
          
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose VSK Construction?
            </h2>

            <p>
              With years of experience in the construction industry, we focus on delivering high-quality projects on time and within budget.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">🏆</span>
                <span>
                  <strong>Unmatched Expertise:</strong> Our team of skilled engineers and technicians brings years of 
                  hands-on experience in construction and flooring solutions.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">🏆</span>
                <span>
                  <strong>Superior Quality:</strong> We use cutting-edge technology and premium materials to ensure 
                  strong, smooth, and long-lasting surfaces.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">🏆</span>
                <span>
                  <strong>On-Time Completion:</strong>We value your time and guarantee fast, efficient, and 
                  hassle-free project execution without compromising quality.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">🏆</span>
                <span>
                  <strong>Client-Centric Approach:</strong>Your satisfaction is our priority! We work closely 
                  with clients to understand their needs and deliver tailor-made solutions that exceed expectations.
                </span>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <img
              src="/constructionimg1.png"
              alt="Construction Team"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            About Us
          </h2>

          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
            Innovating Construction, Delivering Excellence
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            We don’t just build structures — we create lasting foundations.
            With years of expertise in high-performance flooring, roads,
            and surface finishing, we specialize in Trimix Flooring,
            RCC Roads, Laser Finishing, Epoxy Coatings, Groove Cutting,
            and VDF Finishing.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We take pride in our commitment to quality, innovation,
            and precision, ensuring that every project meets the highest
            standards of durability and excellence.
          </p>
        </div>
      </section>

      {/* Reputation Section */}
      <section className="py-16 bg-gray-900 text-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-yellow-500">
            We've Reputation for Excellence
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            
            <div className="bg-gray-800 p-8 rounded-xl hover:bg-yellow-500 hover:text-black transition duration-300">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-semibold text-lg">
                Reputation for Excellence
              </h3>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl hover:bg-yellow-500 hover:text-black transition duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-semibold text-lg">
                We Build Partnerships
              </h3>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl hover:bg-yellow-500 hover:text-black transition duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg">
                Guided by Commitment
              </h3>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl hover:bg-yellow-500 hover:text-black transition duration-300">
              <div className="text-5xl mb-4">👷</div>
              <h3 className="font-semibold text-lg">
                A Team of Professionals
              </h3>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}