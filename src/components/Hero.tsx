import { ArrowRight, Snowflake, Shield, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { SnowEffect } from "./SnowEffect";
import { useEffect, useState } from "react";
export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
<section
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      style={isMobile ? { paddingTop: "80px" } : undefined}   // or marginTop: "80px"
    >

      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-105"
          src="/sample.mp4"       // put your video in public/hero-bg.mp4
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Overlay stays the same */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-slate-700/90 to-cyan-700/80" />

        <div
          className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          data-aos="fade"
          data-aos-delay="250"
        />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
          data-aos="fade"
          data-aos-delay="350"
        />
      </div>

      {/* Snow Effect */}
      <SnowEffect count={32} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24 sm:mt-0">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full mb-6 backdrop-blur-sm"
            data-aos="fade-down"
          >
            <Snowflake className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-100">Trusted AC Specialists in Kochi</span>
          </div>

          <h1
            className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Professional AC Services
            <br />
            <span className="text-brand-gradient">You Can Trust</span>
          </h1>

          <p
            className="text-slate-200 mb-10 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Expert air conditioning installation, repair, and maintenance services across Ernakulam.
            Fast response, certified technicians, and guaranteed customer satisfaction.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-7 text-lg shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            <div
              className="flex items-center gap-2 text-white/90"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-cyan-200" />
              </div>
              <span>24/7 Emergency Service</span>
            </div>

            <div
              className="flex items-center gap-2 text-white/90"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-cyan-200" />
              </div>
              <span>Certified Technicians</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400/80 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
