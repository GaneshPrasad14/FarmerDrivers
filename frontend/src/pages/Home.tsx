import { ArrowRight, Car, Users, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/mp1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-cyan-400 text-xl md:text-2xl font-light mb-4 tracking-wide">
            The Best Acting Drivers Service in Coimbatore
          </h2>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider">
            FARMER DRIVERS
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Safe, Reliable & Professional Chauffeurs for Your Car
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-sm hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide"
          >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>


      </section>

      <section className="relative py-20 bg-gradient-to-b from-cyan-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            YOUR RIDE, OUR RESPONSIBILITY
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-white text-lg max-w-3xl mx-auto">
            We offer you a super VIP experience. Experience luxury travel with our professional drivers in your own car.
          </p>
          <div className="mt-12">
            <img
              src="/images/tembo.jpg"
              alt="Luxury Cars"
              className="mx-auto max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-cover bg-center bg-fixed" style={{
        backgroundImage: "url('/images/pexels-background.jpg')",
      }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            WE PROMISE, YOU WILL HAVE THE BEST EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Not only for airport, parties, functions, or business trips — we take you wherever you want to go safely and on time.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-sm hover:bg-cyan-500 transition-all duration-300 font-semibold tracking-wide"
          >
            Book Now
          </Link>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/mp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            OR ANYWHERE YOU NEED US TO TAKE YOU
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We provide drivers tailored to different car types, including hatchbacks, sedans, SUVs, luxury cars, and commercial vehicles.
          </p>

          <div className="text-2xl font-light mb-6 text-cyan-400">OR</div>
          <Link
            to="/contact"
            className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-sm hover:bg-cyan-500 transition-all duration-300 font-semibold tracking-wide text-lg"
          >
            Book Online
          </Link>
        </div>
      </section>

      <section className="relative py-24 bg-green-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-green-800 text-green-200 text-sm font-semibold tracking-wider mb-4 border border-green-700">
              EXCLUSIVE OFFER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-green-400">Nature</span> Awaits You
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto font-light">
              Experience the serenity of nature with our specialized tour packages.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/80 to-black/50 backdrop-blur-sm border border-green-800/50 rounded-2xl p-8 md:p-12 text-center transform hover:scale-[1.01] transition-transform duration-500 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif italic">
              Hill Stations, Deep Forests Trekking & Bike Rides
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Escape the city chaos. Let our expert drivers guide you through winding mountain roads and dense forest trails safely. We also offer thrilling bike rides for adventure enthusiasts. Perfect for adventure seekers and peace lovers alike.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-full transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-green-500/30 group"
            >
              Book Your Adventure
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              WHAT ABOUT PRICING?
            </h2>
            <p className="text-lg text-gray-600">
              Don't worry. We provide very nice deals and the most competitive price just for you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Cars</h3>
              <p className="text-gray-600">Well-maintained and spotless vehicles for your comfort</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Drivers</h3>
              <p className="text-gray-600">Experienced and courteous drivers at your service</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe Journey</h3>
              <p className="text-gray-600">Your safety is our top priority on every trip</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Available</h3>
              <p className="text-gray-600">Round-the-clock service for your convenience</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/tariff"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold text-lg"
            >
              Check Rates
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
