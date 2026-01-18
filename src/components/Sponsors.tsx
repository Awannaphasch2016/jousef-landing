// GigRadar-style client logos section
// Actual client agency logos from GigRadar.io
const clientLogos = [
  { name: "Code Motion", logo: "/logos/codemotion.svg" },
  { name: "Requestum", logo: "/logos/requestum.svg" },
  { name: "PeCode", logo: "/logos/pecode.svg" },
  { name: "BN Digital", logo: "/logos/bn-digital.svg" },
  { name: "EZops", logo: "/logos/ezops.svg" },
  { name: "LitsLink", logo: "/logos/litslink.svg" },
];

export const Sponsors = () => {
  // Duplicate logos for seamless infinite scroll
  const allLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="sponsors" className="py-12 bg-white border-t border-gray-100">
      {/* Logo strip header */}
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Join 800+ Scaling Upwork Agencies
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
