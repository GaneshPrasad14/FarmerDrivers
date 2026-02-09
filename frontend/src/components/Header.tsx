import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg' : ''}`}>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex flex-col">
            <img src="/logo.png" alt="Farmer Drivers Logo" className="h-20 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide transition-colors ${isActive('/')
                ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                : 'text-gray-600 hover:text-cyan-600'
                }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium tracking-wide transition-colors ${isActive('/about')
                ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                : 'text-gray-600 hover:text-cyan-600'
                }`}
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium tracking-wide transition-colors ${isActive('/services')
                ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                : 'text-gray-600 hover:text-cyan-600'
                }`}
            >
              SERVICES
            </Link>
            <Link
              to="/tariff"
              className={`text-sm font-medium tracking-wide transition-colors ${isActive('/tariff')
                ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                : 'text-gray-600 hover:text-cyan-600'
                }`}
            >
              TARIFF
            </Link>
            <Link
              to="/gallery"
              className={`text-sm font-medium tracking-wide transition-colors ${isActive('/gallery')
                ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                : 'text-gray-600 hover:text-cyan-600'
                }`}
            >
              GALLERY
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium tracking-wide transition-colors ${isActive('/contact')
                ? 'text-cyan-600 border-b-2 border-cyan-600 pb-1'
                : 'text-gray-600 hover:text-cyan-600'
                }`}
            >
              CONTACT
            </Link>
            <Link
              to="/booking"
              className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition-colors font-medium"
            >
              BOOK NOW
            </Link>
          </nav>

          <button
            className="lg:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white border-gray-200">
          <nav className="flex flex-col space-y-4 py-4 px-4">
            <Link to="/" className="text-gray-600 hover:text-cyan-600" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
            <Link to="/about" className="text-gray-600 hover:text-cyan-600" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
            <Link to="/services" className="text-gray-600 hover:text-cyan-600" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
            <Link to="/tariff" className="text-gray-600 hover:text-cyan-600" onClick={() => setIsMobileMenuOpen(false)}>TARIFF</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-cyan-600" onClick={() => setIsMobileMenuOpen(false)}>GALLERY</Link>
            <Link to="/contact" className="text-gray-600 hover:text-cyan-600" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
            <Link to="/booking" className="text-cyan-600 font-bold" onClick={() => setIsMobileMenuOpen(false)}>BOOK NOW</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
