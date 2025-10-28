import Footer from "../Global/Footer";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "../components/ui/button";


import contactBg from "../assets/servi.jpg";

const ContactPage = () => {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <img src={contactBg} alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-200">We’d love to hear from you. Reach out anytime.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center space-y-4">
          <MapPin size={40} className="text-yellow-500" />
          <h3 className="font-semibold text-lg">Visit Us</h3>
          <p className="text-gray-600">123 Luxury St, Nairobi, Kenya</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center space-y-4">
          <Mail size={40} className="text-yellow-500" />
          <h3 className="font-semibold text-lg">Email Us</h3>
          <p className="text-gray-600">info@lustra.com</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center space-y-4">
          <Phone size={40} className="text-yellow-500" />
          <h3 className="font-semibold text-lg">Call Us</h3>
          <p className="text-gray-600">+254 700 123 456</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Send Us a Message</h2>
          <form className="space-y-6 bg-white p-8 rounded-3xl shadow-lg">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
            <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
            <textarea placeholder="Your Message" rows={6} className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-900 rounded-full py-4 text-lg transition-transform hover:scale-105">Send Message</Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
