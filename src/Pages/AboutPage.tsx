import Footer from "../Global/Footer"
import { Sparkles, Globe2, Heart, Users, Quote } from "lucide-react"
import { Button } from "../components/ui/button"

const AboutPage = () => {
  const info = [
    {
      icon: <Sparkles size={30} />,
      title: "Our Mission",
      text: "To redefine luxury travel by blending elegance, authenticity, and seamless experiences worldwide.",
    },
    {
      icon: <Globe2 size={30} />,
      title: "Our Vision",
      text: "To become the most trusted travel partner, known for innovation, personalization, and world-class service.",
    },
    {
      icon: <Users size={30} />,
      title: "Our Team",
      text: "A passionate group of explorers, travel experts, and creatives committed to crafting journeys that inspire.",
    },
    {
      icon: <Heart size={30} />,
      title: "Our Promise",
      text: "Every trip is designed with care, ensuring comfort, safety, and unforgettable memories for our clients.",
    },
  ]

  const testimonials = [
    {
      name: "Emily Johnson",
      text: "Lustra crafted the most unforgettable honeymoon for us in the Maldives. Every detail was flawless!",
      location: "USA",
      image: "/src/assets/servi.jpg",
    },
    {
      name: "Chen Wei",
      text: "Professional, elegant, and seamless. My trip to Paris was pure magic thanks to Lustra Travels.",
      location: "China",
      image: "/src/assets/tokyo.jpg",
    },
    {
      name: "Amara N’diaye",
      text: "The best travel experience I’ve ever had from the moment I booked to the moment I returned home.",
      location: "Senegal",
      image: "/src/assets/safari.jpg",
    },
    {
      name: "Luca Rossi",
      text: "Lustra goes above and beyond. The personalized service and luxury touch are unmatched.",
      location: "Italy",
      image: "/src/assets/paris.jpg",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty("--x", `${x}px`)
    card.style.setProperty("--y", `${y}px`)
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[32rem] flex items-center justify-center">
        <img
          src="/src/assets/servi.jpg"
          alt="About Lustra"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            About Lustra Travels
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Redefining luxury travel one unforgettable journey at a time.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-3xl blur-3xl" />
          <img
            src="/src/assets/dubai.jpg"
            alt="Luxury travel"
            className="relative rounded-3xl shadow-2xl object-cover w-full h-[28rem]"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Discover the Lustra Experience
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Lustra Travels was founded with one mission — to make luxury travel accessible, seamless, and unforgettable.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            From curated itineraries to 24/7 concierge support, we take care of every detail so you can travel effortlessly.
          </p>
          <p className="text-yellow-600 font-semibold italic">
            “Travel not to escape life, but for life not to escape you.”
          </p>
          <Button className="mt-8 bg-black text-white hover:bg-gray-900 rounded-full px-8 py-5 text-lg transition-transform hover:scale-105">
            Learn More
          </Button>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-24 container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 -mt-22">
          What Drives Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {info.map((item, i) => (
            <div
              key={i}
              onMouseMove={handleMouseMove}
              className="group relative p-8 rounded-3xl border border-white/20 backdrop-blur-xl bg-white/10 shadow-lg transition-all duration-700 cursor-pointer overflow-hidden"
            >
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.3), transparent 60%)`,
                }}
              />
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="text-yellow-500 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💎 Premium Testimonials with Images */}
      <section className="py-24 bg-gradient-to-b from-yellow-50 to-white relative">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-yellow-500">
            What Our Clients Say
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative bg-white/70 backdrop-blur-md rounded-3xl border border-yellow-100 p-8 flex flex-col items-center text-center shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,215,0,0.2)]"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-400 shadow-md mb-5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Quote className="text-yellow-500 mb-3" size={28} />
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  “{t.text}”
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-yellow-600 text-sm">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Glow Bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-gradient-to-t from-yellow-400/10 to-transparent blur-3xl" />
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage