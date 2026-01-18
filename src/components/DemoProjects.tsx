import { Button } from "./ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// Demo project cards - Leadflow style portfolio showcase
const demoProjects = [
  {
    title: "B2B SaaS",
    subtitle: "Automatisierte Lead-Generierung",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "E-Commerce",
    subtitle: "Conversion-optimierte Prozesse",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Dienstleister",
    subtitle: "Skalierbare Kundenakquise",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Agentur",
    subtitle: "Effiziente Projektabwicklung",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    link: "#",
  },
];

export const DemoProjects = () => {
  return (
    <section id="demo-projekte" className="relative py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              So könnte deine neue{" "}
              <span className="text-primary">Prozessarchitektur</span> aussehen
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Modernes Design trifft auf bewährte Strategien. Entdecke, wie wir
              Unternehmen wie deines transformiert haben.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoProjects.map((project, index) => (
            <ScrollReveal key={index} animation="fadeInUp" delay={index * 100}>
              <div className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] cursor-pointer">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mb-3">
                  {project.subtitle}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Demo ansehen
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button */}
        <ScrollReveal animation="fadeInUp" delay={400}>
          <div className="text-center mt-10">
            <Button size="lg" className="px-8">
              Jetzt Projekt starten
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
