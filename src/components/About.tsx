import { Award, Clock, Users, ThumbsUp } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Licensed and insured technicians with proven expertise",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available round the clock for urgent AC servicing needs",
    },
    {
      icon: Users,
      title: "Trusted Service",
      description: "Trusted by homeowners across Ernakulam",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work with clear service assurance",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-slate-900 mb-4 text-3xl sm:text-4xl"
            data-aos="fade-up"
          >
            About Z Squad Cooling Solutions
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Professional AC installation, repair, and maintenance for residential
            properties across Ernakulam. Our focus is simple: quality workmanship,
            transparent service, and reliable support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
