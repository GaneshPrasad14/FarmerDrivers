import { Clock, Send, Phone } from 'lucide-react';
import { useState } from 'react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `*New Booking Request*%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0ADate: ${formData.date}%0ATime: ${formData.time}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919500747744?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-32">
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Contact <span className="text-cyan-400">Us</span>
            </h1>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us for bookings, inquiries, or any assistance
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. You can also
                reach us directly through phone or WhatsApp for immediate assistance.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4">
                    <WhatsAppIcon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <a href="https://wa.me/919500747744" className="text-gray-600 hover:text-cyan-600 transition-colors flex items-center mt-1">
                      <WhatsAppIcon className="w-5 h-5 mr-2 text-green-500" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Landline</h3>
                    <a href="tel:+914223158800" className="text-gray-600 hover:text-cyan-600 transition-colors flex items-center mt-1">
                      +91-4223158800
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Pricing & Hours</h3>
                    <p className="text-gray-600">
                      Starting first hour: ₹250<br />
                      Every additional hour: ₹100<br />
                      24/7 Service Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Book Your Ride</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Local Ride">Local Ride</option>
                    <option value="Outstation Trip">Outstation Trip</option>
                    <option value="Airport Transfer">Airport Transfer</option>
                    <option value="Tourist Package">Tourist Package</option>
                    <option value="Corporate Travel">Corporate Travel</option>
                    <option value="Wedding Car">Wedding Car</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Pickup location, destination, any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-sm transition-colors font-semibold flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section >


    </div >
  );
};

export default Contact;
