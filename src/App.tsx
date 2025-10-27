import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Global/Footer"
import Navbar from "./Global/Navbar"
import Testimonial from "./Global/Testimonial"
import WhyChoose from "./Global/WhyChoose"
import Destinations from "./Home/Destinations"
import Hero from "./Home/Hero"
import Packages from "./Home/Packages"

import DestinationsPage from "./Pages/DestinationsPage"
import PackagesPage from "./Pages/PackagesPage"
import ServicesPage from "./Pages/ServicesPage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Page (your current layout) */}
        <Route
          path="/"
          element={
            <div className="relative">
              <Hero />
              <Destinations />
              <Packages />
              <WhyChoose />
              <Testimonial />
              <Footer />
            </div>
          }
        />

        {/* Other Pages */}
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
