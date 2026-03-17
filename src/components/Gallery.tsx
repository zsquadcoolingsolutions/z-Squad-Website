export function Gallery() {
  const galleryImages = [
    {
      url: "/img1.jpeg",
      title: "HVAC Equipment",
      category: "Equipment",
    },
    {
      url: "/img3.jpeg",
      title: "Residential AC Unit",
      category: "Installation",
    },
    {
      url: "/img2.jpeg",
      title: "Maintenance Service",
      category: "Maintenance",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-slate-900 mb-4 text-3xl sm:text-4xl"
            data-aos="fade-up"
          >
            Our Work
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Take a look at some of our recent installations and maintenance projects
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all aspect-square"
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-cyan-500 text-white rounded-full mb-2">
                    {image.category}
                  </span>
                  <h4 className="text-white">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
