import { useState } from "react";
import { Button } from "../components/ui/button";

// ✅ Import images instead of using /src/assets paths
import dubai from "../assets/dubai.jpg";
import palm from "../assets/palm.jpg";
import safari from "../assets/safari.jpg";

const packages = [
  {
    id: 1,
    title: "Dubai Desert Adventure",
    image: dubai,
    price: "From $1500",
    duration: "3 Days / 2 Nights",
    description:
      "Luxury, adventure, and breathtaking views await on Dubai’s golden dunes. From thrilling rides to star-lit dinners, unforgettable memories await.",
  },
  {
    id: 2,
    title: "Palm Jumeirah",
    image: palm,
    price: "From $1800",
    duration: "4 Days / 3 Nights",
    description:
      "Experience luxury and serenity on Dubai’s world-famous island. From high-end resorts to vibrant beaches, it’s the ultimate getaway.",
  },
  {
    id: 3,
    title: "Kenya Safari Walk",
    image: safari,
    price: "From $1200",
    duration: "5 Days / 4 Nights",
    description:
      "Discover breathtaking wildlife and scenic landscapes on a journey through Kenya’s majestic savannahs.",
  },
];

export default function Packages() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white" id="packages">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h3 className="text-sm font-semibold text-yellow-500 uppercase mb-3 bg-yellow-100/40 px-3 py-1 rounded-full inline-block">
              Packages
            </h3>
          </div>

          <div className="w-full md:w-1/2 md:ml-auto text-right">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Let our travel packages <br /> fuel your wanderlust.
            </h2>
            <p className="text-gray-600 mt-4 max-w-md ml-auto">
              Dive into epic destinations, unbeatable deals, and nonstop
              adventure. From curated itineraries to once-in-a-lifetime
              experiences—your next journey starts now!
            </p>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onMouseEnter={() => setActiveCard(pkg.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() =>
                setActiveCard(activeCard === pkg.id ? null : pkg.id)
              }
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />

              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h4 className="text-xl font-semibold">{pkg.title}</h4>
                <p className="text-sm text-gray-200 mt-1">{pkg.duration}</p>
              </div>

              {/* Expandable Content */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md text-gray-800 rounded-t-3xl transition-all duration-500 ease-in-out overflow-hidden ${
                  activeCard === pkg.id ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold bg-yellow-50 border border-yellow-300 px-4 py-1 rounded-full shadow-sm">
                      {pkg.price}
                    </span>
                    <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-5 py-2 text-sm">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
