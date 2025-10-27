import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#111111] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-xl md:text-2xl font-light text-center md:text-left text-white">
            Every great story begins with a packed bag.{" "}
            <br className="hidden md:block" />
            <span className="font-normal">Start yours today.</span>
          </h2>

          <button className="bg-white text-black rounded-full px-5 py-2.5 font-medium flex items-center gap-2 hover:bg-gray-100 transition">
            Book a vacation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {["Instagram", "Facebook", "Tiktok", "Youtube"].map((s, i) => (
            <button
              key={i}
              className="border border-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-800 transition"
            >
              {s}
            </button>
          ))}
        </div>

        <hr className="border-gray-800" />

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="text-white font-medium mb-3">Top Destinations</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Dubai</li>
              <li>Nairobi</li>
              <li>Abu Dhabi</li>
              <li>Kipushi</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">About Us</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Our Story</li>
              <li>Testimonies</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">Support</h4>
            <ul className="space-y-1 text-gray-400">
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Booking Policies</li>
              <li>Travel Insurance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Lustra Travels. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Powered by Terrvio</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
