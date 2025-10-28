import { Plane, Hotel, Map, ShieldCheck } from "lucide-react";
import Footer from "../Global/Footer";
import { Button } from "../components/ui/button";
import { useState } from "react";
import servi from "../assets/servi.jpg"; // ✅ Proper image import

const services = [
  {
    icon: <Plane size={32} />,
    title: "Flight Bookings",
    desc: "Get the best deals on international and local flights to your dream destinations.",
  },
  {
    icon: <Hotel size={32} />,
    title: "Hotel Reservations",
    desc: "Stay in hand-picked hotels offering comfort, luxury, and breathtaking views.",
  },
  {
    icon: <Map size={32} />,
    title: "Custom Tours",
    desc: "Personalized itineraries designed to match your interests and budget.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Travel Insurance",
    desc: "Peace of mind with comprehensive insurance coverage for all trips.",
  },
];

const ServicesPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 🌍 HERO SECTION */}
      <section className="relative h-[32rem] flex items-center justify-center">
        <img
          src={servi} // ✅ Fixed import used here
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
            Discover Our Premium Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            We handle every detail so you can enjoy stress-free travel.
          </p>
        </div>
      </section>

      {/* 💼 SERVICES GRID */}
      <section className="py-24 container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 -mt-18">
          What We Offer
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our comprehensive travel solutions tailored for comfort and convenience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}
              className="service-card group relative p-8 rounded-3xl border border-white/20 
                         backdrop-blur-xl bg-white/10 shadow-lg hover:shadow-2xl 
                         transition-all duration-700 cursor-pointer transform hover:scale-105"
            >
              {/* Radial light */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.25), transparent 60%)`,
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                {/* Animated icon ring */}
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-full border-2 border-yellow-500 
                               opacity-0 scale-75 transition-all duration-500 
                               ${hoveredIndex === i ? "opacity-100 scale-110 ring-spin" : ""}`}
                  ></div>
                  <div className="text-yellow-500 p-4 transition-transform duration-300 group-hover:scale-110">
                    {s.icon}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black transition">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Button className="mt-16 bg-black text-white hover:bg-gray-900 rounded-full px-8 py-5 text-lg transition-transform hover:scale-105">
          Contact us
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
