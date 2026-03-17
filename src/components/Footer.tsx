import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'AC Installation', href: '#services' },
      { label: 'AC Repair', href: '#services' },
      { label: 'AC Maintenance', href: '#services' },
      { label: 'AC Servicing', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Work', href: '#gallery' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Z-squad-Cooling-Solutions/61579961562796/?sk=photos', label: 'Facebook' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/z_squad_coolingsolutions/', label: 'Instagram' },
    // { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    // IMPORTANT: relative + overflow-hidden blocks diagonal background bleed
    <footer className="relative bg-slate-900 text-white overflow-hidden">

      {/* HARD BACKGROUND LAYER – blocks global gradients/patterns */}
      <div className="absolute inset-0 bg-slate-900 z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div>
            <h3 className="mb-4">Z Squad Cooling Solutions</h3>
            <p className="text-slate-400 mb-6">
              Professional AC services you can trust. Serving Ernakulam with 24/7 support and certified technicians.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+918089596969"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    08089 596 969
                  </a>
                  <p className="text-slate-500">24/7 Emergency</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@zsquadcooling.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  info@zsquadcooling.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Kent Hail Garden A block, 15A4,
                  <br />
                  Stadium Link Rd, Kathrikadavu,
                  <br />
                  Palarivattom, Kochi, Ernakulam,
                  <br />
                  Kerala 682025
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">
              © {currentYear} Z Squad Cooling Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 flex-wrap justify-center">
              {/* <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a> */}
              <a
                href="https://www.orqueinnovations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Crafted by Orque Innovations LLP
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
