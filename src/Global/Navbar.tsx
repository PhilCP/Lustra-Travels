import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/lustra-logo.png" // ✅ Proper image import for Vercel

const Navbar = () => {
  const location = useLocation()
  const [active, setActive] = useState(location.pathname)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* ✅ Logo Image instead of text */}
        <Link to="/" onClick={() => setActive("/")}>
          <img
            src={logo}
            alt="Lustra Travels Logo"
            className="w-32 md:w-40 object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-4 text-white/90 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setActive(link.path)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                active === link.path
                  ? "bg-white text-black"
                  : "bg-white/10 hover:bg-white hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
