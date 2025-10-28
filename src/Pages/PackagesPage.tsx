import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import Footer from "../Global/Footer";

// ✅ Import all images correctly (Vite/Vercel compatible)
import escape from "../assets/escape.jpg";
import paris from "../assets/paris.jpg";
import safari from "../assets/safari.jpg";
import bali from "../assets/bali.jpg";
import maldives from "../assets/maldives.jpg";
import switzerland from "../assets/switzerland.jpg";
import pack from "../assets/pack.jpg";

const PackagesPage = () => {
  const packages = [
    {
      title: "Dubai Luxury Escape",
      price: "$1,200",
      duration: "7 Days • 6 Nights",
      image: escape,
      desc: "Indulge in a world of luxury — from golden deserts and 7-star hotels to yacht cruises along Dubai Marina.",
    },
    {
      title: "Paris Romantic Getaway",
      price: "$1,550",
      duration: "5 Days • 4 Nights",
      image: paris,
      desc: "Wander through charming Parisian streets, visit the Eiffel Tower, and experience fine dining in style.",
    },
    {
      title: "African Safari Adventure",
      price: "$980",
      duration: "6 Days • 5 Nights",
      image: safari,
      desc: "Witness the Big Five up close in Kenya’s Maasai Mara. Experience nature and wildlife like never before.",
    },
    {
      title: "Bali Paradise Retreat",
      price: "$1,250",
      duration: "8 Days • 7 Nights",
      image: bali,
      desc: "Discover lush jungles, stunning temples, and serene beaches — your island escape to pure tranquility.",
    },
    {
      title: "Maldives Overwater Bliss",
      price: "$1,800",
      duration: "6 Days • 5 Nights",
      image: maldives,
      desc: "Wake up above turquoise waters in your private villa. Perfect for honeymoons and luxury seekers.",
    },
    {
      title: "Swiss Alps Explorer",
      price: "$1,400",
      duration: "7 Days • 6 Nights",
      image: switzerland,
      desc: "Explore breathtaking Alpine landscapes, ride scenic trains, and discover the charm of Swiss villages.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* 🌍 HERO SECTION */}
      <section className="relative h-[32rem] flex items-center justify-center text-center overflow-hidden">
        <img
          src={pack}
          alt="Luxury travel background"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        <div className="relative z-10 px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white font-serif leading-tight mb-6 drop-shadow-lg"
          >
            Discover Luxury. <br /> Experience the World.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Handpicked travel experiences that redefine comfort, style, and adventure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-8 py-4 text-lg transition-transform hover:scale-105">
              Start Your Journey <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ✈️ PACKAGES SECTION */}
      <section className="py-24 container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold -mt-18 mb-6 text-gray-900">
          Our Signature Travel Packages
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-white/20 
                         shadow-[0_8px_30px_rgba(0,0,0,0.1)]
                         hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                         transition-all duration-500 ease-out cursor-pointer transform hover:scale-105"
            >
              {/* IMAGE SECTION */}
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80" />
              </div>

              {/* CONTENT SECTION */}
              <div className="relative bg-white/30 backdrop-blur-lg p-6 text-left">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.title}</h3>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">{pkg.desc}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{pkg.duration}</span>
                  <span className="text-yellow-600 font-semibold">{pkg.price}</span>
                </div>
                <Button className="w-full bg-black text-white hover:bg-gray-900 rounded-full py-4 text-sm transition-transform hover:scale-105">
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button className="mt-20 bg-black text-white hover:bg-gray-900 rounded-full px-8 py-5 text-lg transition-transform hover:scale-105">
            Explore More <ArrowRight className="ml-2" size={18} />
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default PackagesPage;
