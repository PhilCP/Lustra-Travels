
import {
  Globe2,
  Crown,
  ShieldPlus,
  Headphones,
  Target,
  Boxes,
} from "lucide-react";



export default function WhyChoose() {
  const iconColor = "text-[#072443]"; 
  const features = [
    {
      icon: <Globe2 className={`w-20 h-20 ${iconColor} mx-auto`} />,
      title: "EXPERT TRAVEL SPECIALISTS",
      description:
        "Our team brings extensive experience in high-end travel planning and personalized itinerary creation.",
    },
    {
      icon: <Boxes className={`w-20 h-20 ${iconColor} mx-auto`} />,
      title: "SEAMLESS & STRESS-FREE PLANNING",
      description:
        "We take care of everything, from the smallest details to the grandest arrangements, so you can relax and enjoy.",
    },
    {
      icon: <Crown className={`w-20 h-20 ${iconColor} mx-auto`} />,
      title: "VIP & LUXURY SERVICES",
      description:
        "Gain priority bookings, private access to exclusive locations, and top-tier concierge services.",
    },
    {
      icon: <ShieldPlus className={`w-20 h-20 ${iconColor} mx-auto`} />,
      title: "SAFETY",
      description:
        "We use top-quality, internationally approved equipment, and our guides are trained in first aid and personal protective gear — so you’re always in safe hands!",
    },
    {
      icon: <Headphones className={`w-20 h-20 ${iconColor} mx-auto`} />,
      title: "24/7 CONCIERGE SUPPORT",
      description: "No matter the time zone or request, we’re always available to assist you.",
    },
    {
      icon: <Target className={`w-20 h-20 ${iconColor} mx-auto`} />,
      title: "TAILORED FOR YOU",
      description:
        "Every trip is custom-designed based on your preferences, lifestyle, and expectations.",
    },
  ];

  return (
    <section className="relative bg-[#fcfbf8] py-20">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Left pill — Positioned to the left like the screenshot */}
        <div className="absolute left-6 top-6">
          <span className="inline-block bg-[#fff6e6] text-[#b8862f] text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            Lustra Travels
          </span>
        </div>

        {/* Center heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b0b0b] leading-tight text-center">
            Why choose <span className="block">Lustra Travels?</span>
          </h2>

          {/* subtle gold underline */}
          <div className="w-12 h-[3px] bg-[#f3d9a6] rounded mt-6 mb-12"></div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 text-center mt-6">
          {features.map((f, i) => (
            <div key={i} className="px-6">
              <div className="flex justify-center">{f.icon}</div>

              <h3 className="mt-6 text-sm font-semibold text-[#0b0b0b] uppercase tracking-wide">
                {f.title}
              </h3>

              <p className="mt-3 text-sm text-[#6b6b6b] leading-relaxed max-w-xs mx-auto">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
