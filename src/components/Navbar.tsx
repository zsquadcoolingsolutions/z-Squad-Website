import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center"
          >
            <img
              src="/Group.svg"   // ✅ make sure this path is correct
              alt="Z Squad Cooling Solutions"
              className={`h-10 w-auto transition-all ${
                isScrolled ? 'filter-none' : 'brightness-0 invert'
              }`}
            />
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors hover:text-cyan-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <Button
              size="sm"
              onClick={() => (window.location.href = 'tel:+918089596969')}
              className={`${
                isScrolled
                  ? 'bg-cyan-500 hover:bg-slate-900 text-white'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col gap-3 p-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <Button
                size="sm"
                onClick={() => (window.location.href = 'tel:+918089596969')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white w-full"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
