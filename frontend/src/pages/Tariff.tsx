import { Check, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Tariff = () => {
  return (
    <div className="min-h-screen pt-32">
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="text-cyan-400">Tariff</span>
            </h1>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for our Acting Driver services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Driver Charges</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
            <p className="text-gray-600">Hire professional drivers for your own vehicle</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Standard Rates</h3>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb-8">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-gray-800">Starting First Hour</h4>
                    <p className="text-gray-500">Minimum charge for the first hour of service</p>
                  </div>
                  <div className="text-3xl font-bold text-cyan-600">₹250</div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-100 pb-8">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <h4 className="text-xl font-bold text-gray-800">Hourly Charges</h4>
                    <p className="text-gray-500">Per hour charge after the first hour</p>
                  </div>
                  <div className="text-3xl font-bold text-cyan-600">₹100<span className="text-sm text-gray-400 font-normal">/hr</span></div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Insurance for car and driver for every trip</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Night driving charges an extra ₹200</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Safety for your family</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">24 hours service</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Professional & Vetted Drivers</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white text-center py-4 rounded-sm transition-colors font-bold text-lg"
                >
                  BOOK A DRIVER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Need a Monthly Driver?</h2>
          <p className="text-xl mb-8">
            Call us for permanent full-time driver requirements
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919500747744"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-sm hover:bg-white hover:text-black transition-all duration-300 font-semibold tracking-wide"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tariff;
