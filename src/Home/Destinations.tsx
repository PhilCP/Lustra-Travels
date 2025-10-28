import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

// ✅ Import your images like this
import uea from "../assets/uea.jpg";
import congo from "../assets/congo.jpg";
import kenya from "../assets/kenya.jpg";

const destinations = [
  {
    id: 1,
    title: "United Arab Emirates",
    label: "10 Destinations",
    image: uea,
  },
  {
    id: 2,
    title: "DR Congo",
    label: "10 Destinations",
    image: congo,
  },
  {
    id: 3,
    title: "Kenya",
    label: "10 Destinations",
    image: kenya,
  },
];

const Destinations = () => {
  return (
    <section className="py-20 -mt-12 bg-white" id="destinations">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="inline-block bg-yellow-400/20 border border-yellow-400 text-yellow-600 text-sm font-semibold uppercase px-3 py-1 rounded-md mb-4 tracking-wide backdrop-blur-sm">
              Our Destinations
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Your next <br /> adventure awaits
            </h2>
          </div>

          <div className="mt-6 md:mt-0 max-w-md text-gray-600">
            <p className="mb-5">
              Get the best value for your trips with exclusive discounts,
              seasonal promotions, and deals to save while exploring the world!
            </p>
            <Button className="bg-black text-white hover:bg-black/80 rounded-full px-6 py-5">
              See all <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute top-4 left-4 bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                {item.label}
              </div>

              {/* Title */}
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
