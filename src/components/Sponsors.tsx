// GigRadar-style client logos section
const clientLogos = [
  { name: "Upwork", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg" },
  { name: "Fiverr", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Fiverr_Logo_09.2020.svg" },
  { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
  { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
];

export const Sponsors = () => {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="sponsors" className="py-12 bg-white border-t border-gray-100">
      {/* Logo strip header */}
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by agencies and freelancers worldwide
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling logos */}
        <div className="flex animate-marquee">
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
