import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section
      className="relative h-[32rem] bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center px-6 md:px-16 text-white z-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mt-60 mb-2 leading-tight">
              Luxury Travel.<br />Tailored for you
            </h1>
            <p className="max-w-md text-white/90 mb-8">
              From major cities to hidden gems, we transform your travel fantasies
              into unforgettable adventures. Adventure begins here.
            </p>
          </div>

          {/* Button aligned to the right */}
          <Button
            className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-6 flex items-center gap-2 text-lg mt-4 -mb-75 md:mt-0"
            onClick={() => alert('Booking coming soon!')}
          >
            Book now <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
