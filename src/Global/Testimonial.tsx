import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import venice from "../assets/prof.jpg"; 

export default function Testimonial() {
  const testimonials = [
    {
      name: "Isabella Rossi",
      title: "Luxury Traveler, Italy",
      quote:
        "“Lustra transformed my trip into something truly magical every moment in Venice felt like a dream curated just for me.”",
    },
    {
      name: "David Chen",
      title: "Adventure Enthusiast, Singapore",
      quote:
        "“From private gondola rides to hidden culinary gems, Lustra delivered experiences I never knew existed.”",
    },
    {
      name: "Amara Johnson",
      title: "Global Explorer, USA",
      quote:
        "“The attention to detail and personal touch were unmatched. It wasn’t just travel it was artistry in motion.”",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#fffdfa] to-[#fcfbf8] py-24 px-6 overflow-hidden">
      {/* Decorative background quote */}
      <Quote
        className="absolute top-24 left-16 w-48 h-48 text-[#f7efe4] -rotate-12 opacity-40"
        strokeWidth={1.2}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#0b0b0b] mb-14"
        >
          What Our Travelers Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-xl border border-[#f0eadd]/60 shadow-lg rounded-3xl p-8 relative hover:shadow-2xl transition-all duration-500"
            >
              {/* Floating quote icon */}
              <Quote className="w-10 h-10 text-[#f0dabb] absolute top-6 right-6 opacity-60" />

              {/* Rounded image */}
              <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-[#fff7ec] shadow-md hover:shadow-xl transition-all duration-500">
                <img
                  src={venice}
                  alt="Traveler"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Quote text */}
              <p className="text-gray-700 leading-relaxed italic mb-6">
                {t.quote}
              </p>

              {/* Name and role */}
              <div className="mt-auto">
                <h4 className="font-semibold text-[#111111] text-lg">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
