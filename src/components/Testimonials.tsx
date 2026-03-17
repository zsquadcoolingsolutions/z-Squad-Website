import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Testimonials() {
  const testimonials = [
    {
      name: "Muhammad Nasim",
      content:
        "I had a great experience with Z Squad Cooling Solution AC Service Team. The technicians were professional. Highly recommend to anyone looking for reliable and affordable AC service!",
      rating: 5,
    },
    {
      name: "Misbha Muneer",
      content:
        "Had great experience with the service of Z Squad Cooling Solutions. One of the best AC servicing in Kochi.",
      rating: 5,
    },
    {
      name: "abhi",
      content:
        "Best AC service centre, staff was very professional and accurate with their work.",
      rating: 5,
    },
    {
      name: "Habeeb Rahman",
      content: "Had great experience with Z Squad Cooling Solutions. Best in Kochi.",
      rating: 5,
    },
    {
      name: "Shiril Sudheer",
      content:
        "Best AC servicing in Kochi. The staffs were so punctual and perfect with the work.",
      rating: 5,
    },
    {
      name: "Reghunathan",
      content: "Best AC servicing team in Kochi. Punctuality 👌👌",
      rating: 5,
    },
    {
      name: "Jisha Joji",
      content: "Go for it, trustworthy team, best AC servicing in Kaloor.",
      rating: 5,
    },
    {
      name: "Alen Appolo",
      content: "Good service, fast response, and professional work. Satisfied.",
      rating: 5,
    },
    {
      name: "Sumeesh KS",
      content: "Good AC service, fast response, and professional work.",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only 1 testimonial on all screen sizes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 640, // On mobile, hide arrows for cleaner UI
        settings: {
          arrows: false,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-slate-900 mb-4 text-3xl sm:text-4xl"
            data-aos="fade-up"
          >
            What Our Clients Say
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Don&apos;t just take our word for it — hear from our satisfied customers.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Quote className="h-8 w-8 text-cyan-500 mb-3 mx-auto" />
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">{testimonial.content}</p>
                  <h4 className="text-slate-900 font-semibold">{testimonial.name}</h4>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-slate-200">
          <div className="text-center" data-aos="zoom-in" data-aos-delay="150">
            <div className="text-3xl text-cyan-600 mb-2">Trusted</div>
            <div className="text-slate-600">Service in Ernakulam</div>
          </div>

          <div className="text-center" data-aos="zoom-in" data-aos-delay="250">
            <div className="text-3xl text-cyan-600 mb-2">24/7</div>
            <div className="text-slate-600">Emergency Service</div>
          </div>

          <div className="text-center" data-aos="zoom-in" data-aos-delay="350">
            <div className="text-3xl text-cyan-600 mb-2">100%</div>
            <div className="text-slate-600">Customer Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
}
