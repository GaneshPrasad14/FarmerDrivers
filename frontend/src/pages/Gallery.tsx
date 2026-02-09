import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: '/images/swift.png',
      title: 'Maruti Suzuki Swift'
    },
    {
      url: '/images/swift_dzire.png',
      title: 'Maruti Suzuki Dzire'
    },
    {
      url: '/images/etios.png',
      title: 'Toyota Etios'
    },
    {
      url: '/images/ertiga.png',
      title: 'Maruti Suzuki Ertiga'
    },
    {
      url: '/images/innova.png',
      title: 'Toyota Innova Crysta'
    },
    {
      url: '/images/tempo.png',
      title: 'Force Tempo Traveller'
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="text-cyan-400">Gallery</span>
            </h1>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our fleet of well-maintained vehicles and professional services
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-video"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services in Action</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From corporate events to wedding celebrations, airport transfers to tourist packages,
              we've successfully served thousands of satisfied customers across Tiruppur and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">15+</div>
              <div className="text-gray-700">Vehicles</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">5000+</div>
              <div className="text-gray-700">Happy Customers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">7+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-gray-700">Available</div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
