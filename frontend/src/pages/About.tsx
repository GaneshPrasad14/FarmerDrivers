import { Award, Users, Car, Clock, Shield, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-32">
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-cyan-400">Farmer Drivers</span>
            </h1>
            <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80"
                alt="Farmer Drivers Fleet"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-cyan-600">Farmer Driver</span>
              </h2>
              <div className="w-16 h-1 bg-cyan-600 mb-6"></div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Farmer Driver is a prominent driver-for-provide service primarily based in coimbatore, India, specializing in permanent full-time drivers for various vehicles. The company focuses on safe, reliable, and professional chauffeurs for personal, family, corporate, and commercial needs, with services starting at competitive rates.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A separate entity, <span className="font-semibold text-gray-800">Farmer Driver Travels & Tourism</span>, operates in Tamil Nadu for similar needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-cyan-600">Farmer Driver?</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Car className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Services Offered</h3>
              <p className="text-gray-600">
                They provide drivers tailored to different car types, including hatchbacks, sedans, SUVs, luxury cars, and commercial vehicles, ensuring expertise across categories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Corporate B2B Options</h3>
              <p className="text-gray-600">
                Corporate B2B options cater to executives, while flexible monthly tariffs emphasize affordability and satisfaction guarantees.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Key Features</h3>
              <p className="text-gray-600">
                Farmer Driver employs over 10,000 vetted drivers through a rigorous six-step selection process, including background checks and training.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Operating Since 2015</h3>
              <p className="text-gray-600">
                They serve coimbatore widely with 24/7 support and have earned trust from over 8,000 clients for punctual, courteous service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <ThumbsUp className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Client Feedback</h3>
              <p className="text-gray-600">
                Customers praise the reliability for family commutes and luxury handling, often noting stress-free experiences and professional etiquette.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe & Reliable</h3>
              <p className="text-gray-600">
                The company focuses on safe, reliable, and professional chauffeurs for personal, family, corporate, and commercial needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2015</div>
              <div className="text-xl">Operating Since</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">8000+</div>
              <div className="text-xl">Trusted Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl">Vetted Drivers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              To focus on safe, reliable, and professional chauffeurs for personal, family, corporate, and commercial needs. Farmer Drivers operates in Tamil Nadu with a commitment to stress-free experiences and professional etiquette.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
