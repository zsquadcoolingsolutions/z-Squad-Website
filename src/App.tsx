import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ServiceAreas } from "./components/ServiceAreas";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ContactSidebar } from "./components/ContactSidebar";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      offset: 80,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ServiceAreas />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
      <ContactSidebar /> {/* <-- sidebar will now definitely appear */}
    </div>
  );
}
