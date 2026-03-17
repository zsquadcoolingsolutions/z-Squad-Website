import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const EMAILJS_SERVICE_ID = "service_ubel6kp";
const EMAILJS_TEMPLATE_ID = "template_16ijjkm";
const EMAILJS_PUBLIC_KEY = "tBUpxJkvoAU3j2357";

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;

    // minimal validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service.trim()) {
      toast.error("Please fill all required fields.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.phone,
          reply_to: formData.email?.trim() || "no-reply@zsquadcooling.com",
          service: formData.service,
          message: formData.message || "-",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      toast.success("Thank you! We will contact you shortly.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "08089596969",
      link: "tel:+918089596969",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@zsquadcooling.com",
      link: "mailto:info@zsquadcooling.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Palarivattom, Kochi, Ernakulam",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "24/7 Emergency Support",
      link: "#",
    },
  ] as const;

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4 text-3xl sm:text-4xl" data-aos="fade-up">
            Get in Touch
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Ready to experience professional cooling solutions? Contact us today for a free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm" data-aos="fade-right">
            <h3 className="text-slate-900 mb-6" data-aos="fade-up">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div data-aos="fade-up" data-aos-delay="80">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="Your name"
                />
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                data-aos="fade-up"
                data-aos-delay="140"
              >
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <Label htmlFor="service">Service Required *</Label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2 w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Select a service</option>
                  <option value="installation">AC Installation</option>
                  <option value="repair">AC Repair</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="amc">AMC</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div data-aos="fade-up" data-aos-delay="260">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="Tell us about your cooling needs..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSending}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white disabled:opacity-60"
                data-aos="zoom-in"
                data-aos-delay="320"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSending ? "Sending..." : "Submit Enquiry"}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    data-aos="fade-up"
                    data-aos-delay={index * 120}
                  >
                    <Icon className="h-6 w-6 text-cyan-500 mb-3" />
                    <h4 className="text-slate-900 mb-1">{info.title}</h4>
                    <p className="text-slate-600">{info.content}</p>
                  </a>
                );
              })}
            </div>

            {/* Map */}
            <div
              className="bg-slate-200 rounded-xl h-80 flex items-center justify-center overflow-hidden"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <iframe
                src="https://www.google.com/maps?q=Z+Squad+Cooling+Solutions+Kochi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Z Squad Cooling Solutions Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
