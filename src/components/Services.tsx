import { Snowflake, Wrench, Wind, Settings } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Services() {
  const services = [
    {
      icon: Snowflake,
      title: "AC Installation",
      description:
        "Professional installation for residential and commercial systems with proper setup and testing.",
      features: [
        "Split AC installation",
        "Cassette AC installation",
        "Ductable AC units",
        "VRF / VRV systems",
      ],
    },
    {
      icon: Wind,
      title: "AC Servicing",
      description:
        "Thorough cleaning and servicing to improve cooling performance, air quality, and energy efficiency.",
      features: ["Deep water servicing", "Chemical coil cleaning", "Filter and drain cleaning"],
    },
    {
      icon: Settings,
      title: "AMC (Annual Maintenance Contract)",
      description:
        "Hassle-free maintenance plans that keep your AC running smoothly throughout the year.",
      features: ["Scheduled periodic servicing", "Priority support", "Extended AC lifespan"],
    },
    {
      icon: Wrench,
      title: "AC Repair & Troubleshooting",
      description:
        "Accurate diagnosis and repair for issues affecting cooling, efficiency, or performance.",
      features: ["Cooling problem fixes", "Electrical & gas issues", "All AC brands supported"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-slate-900 mb-4 text-3xl sm:text-4xl"
            data-aos="fade-up"
          >
            Our Services
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Reliable air conditioning services designed for comfort, efficiency, and long-term performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-slate-200 hover:border-cyan-500 transition-all hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-500 rounded-lg">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-slate-900 mb-3" data-aos="fade-up" data-aos-delay={index * 120 + 80}>
                        {service.title}
                      </h3>

                      <p className="text-slate-600 mb-4" data-aos="fade-up" data-aos-delay={index * 120 + 140}>
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-slate-700"
                            data-aos="fade-up"
                            data-aos-delay={index * 120 + 200 + idx * 60}
                          >
                            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
