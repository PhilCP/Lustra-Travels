import { motion } from "framer-motion"
import { useRef } from "react"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"
import Footer from "../Global/Footer"

const DestinationsPage = () => {
  const destinations = [
    {
      title: "Santorini, Greece",
      image: "/src/assets/santorini.jpg",
      desc: "Iconic whitewashed villages, crystal-clear waters, and sunsets that paint the sky with magic.",
    },
    {
      title: "Tokyo, Japan",
      image: "/src/assets/tokyo.jpg",
      desc: "A dazzling mix of tradition and technology, neon lights, temples, and unforgettable cuisine.",
    },
    {
      title: "Dubai, UAE",
      image: "/src/assets/dubai.jpg",
      desc: "Luxury, innovation, and desert adventures, a city where modern marvels meet Arabian charm.",
    },
    {
      title: "Venice, Italy",
      image: "/src/assets/venice.jpg",
      desc: "Gondola rides through romantic canals and historic architecture that whispers timeless stories.",
    },
    {
      title: "Bali, Indonesia",
      image: "/src/assets/bali.jpg",
      desc: "Lush jungles, serene temples, and golden beaches, your tropical escape awaits.",
    },
    {
      title: "Cappadocia, Turkey",
      image: "/src/assets/cappadocia.jpg",
      desc: "Hot air balloons over fairy chimneys, a dreamlike landscape straight from a painting.",
    },
  ]

  //  Reference for scrolling
  const spotsRef = useRef<HTMLDivElement | null>(null)

  const handleScrollToSpots = () => {
    spotsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/*  HERO SECTION */}
      <section className="relative h-[32rem] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/src/assets/destinations.jpg"
          alt="Destinations Background"
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
            Discover Breathtaking Destinations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Explore the most stunning places on earth from exotic beaches to vibrant cities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              onClick={handleScrollToSpots}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-8 py-4 text-lg transition-transform hover:scale-105"
            >
              Start Exploring <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/*  DESTINATIONS GRID */}
      <section ref={spotsRef} className="py-24 container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold -mt-18 mb-6 text-gray-900">
          Top Travel Spots
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 
                         shadow-[0_8px_30px_rgba(0,0,0,0.1)]
                         hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                         transition-all duration-500 ease-out cursor-pointer transform hover:scale-105"
            >
              {/* IMAGE SECTION */}
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80" />
              </div>

              {/* CONTENT SECTION */}
              <div className="relative bg-white/30 backdrop-blur-lg p-6 text-left">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{dest.title}</h3>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">{dest.desc}</p>
                <Button className="w-full bg-black text-white hover:bg-gray-900 rounded-full py-4 text-sm transition-transform hover:scale-105">
                  Learn More
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
  )
}

export default DestinationsPage
