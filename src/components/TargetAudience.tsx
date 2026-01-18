import { Building2, Briefcase, Users, ShoppingBag, Rocket, Award } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// Target audience segments - Leadflow "Für wen wir arbeiten" style
const audiences = [
  {
    icon: Building2,
    title: "B2B-Unternehmen",
    description: "Mit komplexen Vertriebsprozessen und langen Sales-Cycles",
  },
  {
    icon: Briefcase,
    title: "Dienstleister",
    description: "Die ihre Kapazitäten skalieren wollen ohne mehr Personal",
  },
  {
    icon: Users,
    title: "Agenturen",
    description: "Die effizientere Projektabwicklung und höhere Margen anstreben",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description: "Mit wiederkehrenden manuellen Prozessen und Skalierungsbedarf",
  },
  {
    icon: Rocket,
    title: "Scale-ups",
    description: "Die Strukturen für das nächste Wachstumslevel benötigen",
  },
  {
    icon: Award,
    title: "Marktführer",
    description: "Die ihren Vorsprung durch Automatisierung ausbauen wollen",
  },
];

// Benefits grid - "Deine Vorteile" style
const benefits = [
  {
    value: "3x",
    label: "Mehr Output",
    description: "Durchschnittliche Kapazitätssteigerung",
  },
  {
    value: "50%",
    label: "Weniger Aufwand",
    description: "Reduzierung manueller Tätigkeiten",
  },
  {
    value: "100%",
    label: "Transparenz",
    description: "Volle Übersicht über alle Prozesse",
  },
  {
    value: "24/7",
    label: "Verfügbarkeit",
    description: "Automatisierte Systeme arbeiten rund um die Uhr",
  },
];

export const TargetAudience = () => {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Target Audience Grid */}
      <div id="zielgruppe" className="relative py-20">
        <div className="container">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2">Für wen wir arbeiten</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ist dein Unternehmen dabei?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Wir arbeiten mit ambitionierten Unternehmen, die bereit sind,
                ihre Prozesse auf das nächste Level zu heben.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <ScrollReveal key={index} animation="fadeInUp" delay={index * 100}>
                  <div className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {audience.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="vorteile" className="relative py-20">
        <div className="container">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2">Deine Vorteile</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Konkrete Vorteile für dein Unternehmen
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Messbare Ergebnisse statt leerer Versprechen
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} animation="scaleIn" delay={index * 100}>
                <div className="text-center p-6 rounded-2xl bg-white border border-slate-200 h-full">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {benefit.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {benefit.label}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
