import { Car, Plane, MapPin, Building, Heart, Package, Mountain } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';


const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Drivers for Local & Outstation',
      description: 'Professional drivers for your daily commute or outstation trips in your own vehicle. Safe and comfortable driving guaranteed.',
      features: ['City Drives', 'Intercity Travel', 'Hourly Hiring', 'One-Way Drops']
    },
    {
      icon: Plane,
      title: 'Airport Drop/Pickup Drivers',
      description: 'Reliable drivers to drop you or pick you up from the airport in your car. We ensure timely service for your flights.',
      features: ['Coimbatore Airport', 'Punctual Service', 'Luggage Assistance', '24/7 Availability']
    },
    {
      icon: MapPin,
      title: 'Tourist Driver Packages',
      description: 'Explore tourist destinations with our experienced drivers who know the best routes and spots. Relax while we drive your car.',
      features: ['Hill Stations', 'Temples', 'Beaches', 'Weekend Getaways']
    },
    {
      icon: Building,
      title: 'Corporate Chauffeurs',
      description: 'Professional corporate driver solutions. Daily pickup/drop services for executives in their personal or company vehicles.',
      features: ['Executive Drivers', 'Monthly Contracts', 'Verified Staff', 'Billing Support']
    },
    {
      icon: Heart,
      title: 'Wedding Chauffeurs',
      description: 'Uniformed professional chauffeurs for your special day. We handle your luxury wedding cars with utmost care.',
      features: ['Uniformed Drivers', 'Luxury Car Expertise', 'Valet Services', 'Professional Etiquette']
    },
    {
      icon: Package,
      title: 'Event Valet/Drivers',
      description: 'Drivers for parties, functions, and special events. Valet parking teams and temporary drivers available.',
      features: ['Party Drivers', 'Valet Parking', 'Group Bookings', 'Event Support']
    },
    {
      icon: Mountain,
      title: 'Hill Stations, Deep Forest Trekking & Bike Rides',
      description: 'Experience the thrill of nature with our special tour packages including hill stations, deep forests trekking, and bike rides.',
      features: ['Deep Forest Trekking', 'Hill Station Tours', 'Bike Rides', 'Nature Walks']
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide drivers tailored to different car types, including hatchbacks, sedans, SUVs, luxury cars, and commercial vehicles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-6">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-cyan-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Book Your Ride</h3>
              <p className="text-gray-600">Call us or book online through our contact form</p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-cyan-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Confirm Details</h3>
              <p className="text-gray-600">We confirm pickup location, time, and destination</p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-cyan-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Driver Arrives</h3>
              <p className="text-gray-600">Professional driver reaches your location on time</p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-cyan-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy Your Ride</h3>
              <p className="text-gray-600">Sit back and enjoy a comfortable journey</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Driver?</h2>
          <p className="text-xl mb-8">
            Call us now or send us a message to request a driver
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

export default Services;
