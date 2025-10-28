import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg"; // ✅ Proper import for Vercel

const Hero = () => {
  return (
    <section
      className="relative h-[36rem] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center px-6 md:px-16 text-white z-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
              Luxury Travel. <br /> Tailored for You.
            </h1>
            <p className="max-w-md text-white/90 mb-8">
              From major cities to hidden gems, we transform your travel fantasies
              into unforgettable adventures. Adventure begins here.
            </p>

            <Button
              className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 flex items-center gap-2 text-lg transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("destinations")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Exploring <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
