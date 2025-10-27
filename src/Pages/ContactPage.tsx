import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Footer from "../Global/Footer"
import Navbar from "../Global/Navbar"
import { Button } from "../components/ui/button"
import { useState } from "react"
import contactBg from "/src/assets/contact.jpg";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for reaching out! We’ll respond shortly.")
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[32rem] flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Let’s start planning your next extraordinary adventure.
          </p>
        </div>
      </section>

      {/* ✉️ Contact Section */}
      <section className="py-24 container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* 📍 Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-serif font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We’re here to answer any questions, customize your itinerary, or help plan your dream trip.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 group">
              <MapPin className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700">Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-4 group">
              <Phone className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700">+254 757 159 543</span>
            </div>
            <div className="flex items-center gap-4 group">
              <Mail className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700">info@lustratravels.com</span>
            </div>
          </div>

          {/* 🌐 Social Media */}
          <div className="flex gap-5 mt-8">
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition-transform hover:scale-110">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition-transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition-transform hover:scale-110">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition-transform hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* 💌 Contact Form */}
        <div className="relative bg-white/70 backdrop-blur-xl border border-yellow-100 shadow-xl p-8 rounded-3xl transition-all hover:shadow-[0_8px_30px_rgba(255,215,0,0.2)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="Inquiry or Booking"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder="Tell us about your dream trip..."
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Soft Glow Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-gradient-to-t from-yellow-400/10 to-transparent blur-3xl" />

      <Footer />
    </div>
  )
}

export default ContactPage
