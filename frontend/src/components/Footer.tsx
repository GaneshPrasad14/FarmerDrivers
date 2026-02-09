
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Farmer Drivers Logo"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Farmer Drivers is a prominent driver-for-provide service primarily based in coimbatore, India. Brand of mounith&mithula.
            </p>
          </div>



          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-cyan-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-cyan-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-cyan-600 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/tariff" className="text-sm hover:text-cyan-600 transition-colors">
                  Tariff
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-cyan-600 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-cyan-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            Copyright 2025 Farmer Drivers. All Rights Reserved
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
