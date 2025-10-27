import { useState } from "react"
import { Button } from "../components/ui/button"

const packages = [
  {
    id: 1,
    title: "Dubai Desert Adventure",
    image: "/src/assets/dubai.jpg",
    price: "From $1500",
    duration: "3 Days / 2 nights",
    description:
      "Luxury, adventure, and breathtaking views await on Dubai’s golden dunes. From thrilling rides to star-lit dinners, unforgettable memories await.",
  },
  {
    id: 2,
    title: "Palm Jumeirah",
    image: "/src/assets/palm.jpg",
    price: "From $1800",
    duration: "4 Days / 3 nights",
    description:
      "Experience luxury and serenity on Dubai’s world-famous island. From high-end resorts to vibrant beaches, it’s the ultimate getaway.",
  },
  {
    id: 3,
    title: "Kenya Safari Walk",
    image: "/src/assets/safari.jpg",
    price: "From $1200",
    duration: "5 Days / 4 nights",
    description:
      "Discover breathtaking wildlife and scenic landscapes on a journey through Kenya’s majestic savannahs.",
  },
]

export default function Packages() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white -mt-25">
      <div className="container mx-auto px-6 md:px-12 ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          {/* Left label */}
          <div>
            <h3 className="text-sm font-semibold text-yellow-500 uppercase mb-3 bg-yellow-100/40 px-3 py-1 rounded-full inline-block">
              Packages
            </h3>
          </div>

          {/* Right-aligned heading & text */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onMouseEnter={() => setActiveCard(pkg.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() =>
                setActiveCard(activeCard === pkg.id ? null : pkg.id)
              }
              className="group transition-transform duration-500 hover:scale-105"
            >
              {/* Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer">
                <img
                  src={pkg.image}
                  
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  
                </div>
              </div>

              {/* Info BELOW card */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeCard === pkg.id
                    ? "max-h-60 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 bg-gray-50 rounded-2xl shadow-inner">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{pkg.title}</h4>
                    <span className="text-sm text-gray-500">
                      {pkg.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-white px-4 py-1 rounded-full shadow-sm border">
                      {pkg.price}
                    </span>
                    <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-5 py-2 text-sm">
                      Booking now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
