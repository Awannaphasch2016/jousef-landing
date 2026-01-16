import { Button } from "./ui/button";
import { siteConfig } from "@/config/content";
import { Check, Play, Clock, Users, Shield, Award } from "lucide-react";

// Stats badges configuration (Leadflow-style)
const heroStats = [
  { value: "100+", label: "implementierte Projekte", icon: Award },
  { value: "1:1", label: "Persönliche Betreuung", icon: Users },
  { value: "Wenige Wochen", label: "Bis zur Umsetzung", icon: Clock },
  { value: "100%", label: "Ergebnisorientiert", icon: Shield },
];

// Feature bullet points
const heroFeatures = [
  "Systematisch & effizient: Klare Prozesse von Analyse bis Umsetzung",
  "Messbar & transparent: Du siehst genau, was passiert und warum",
  "Persönlich betreut: Kein anonymer Support – du hast einen festen Ansprechpartner",
  "Zukunftssicher: Architekturen, die mit deinem Wachstum skalieren",
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Top badge */}
      <div className="container pt-8">
        <div className="flex justify-center md:justify-end mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Prozessarchitektur | Für B2B-Unternehmen
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="container pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Video/Image area */}
          <div className="relative order-2 lg:order-1">
            {/* Video thumbnail container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
              {/* Placeholder video thumbnail */}
              <img
                src="https://via.placeholder.com/640x360/1e293b/64748b?text=Video+Preview"
                alt="Prozessarchitektur Vorstellung"
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-105 shadow-lg">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                </button>
              </div>
            </div>

            {/* Stats badges - positioned around video */}
            <div className="hidden md:block">
              {/* Top-left badge */}
              <div className="absolute -left-4 top-8 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">{heroStats[0].value}</div>
                    <div className="text-xs text-muted-foreground">{heroStats[0].label}</div>
                  </div>
                </div>
              </div>

              {/* Top-right badge */}
              <div className="absolute -right-4 top-8 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">{heroStats[1].value}</div>
                    <div className="text-xs text-muted-foreground">{heroStats[1].label}</div>
                  </div>
                </div>
              </div>

              {/* Bottom-left badge */}
              <div className="absolute -left-4 bottom-8 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">{heroStats[2].value}</div>
                    <div className="text-xs text-muted-foreground">{heroStats[2].label}</div>
                  </div>
                </div>
              </div>

              {/* Bottom-right badge */}
              <div className="absolute -right-4 bottom-8 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">{heroStats[3].value}</div>
                    <div className="text-xs text-muted-foreground">{heroStats[3].label}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile stats grid */}
            <div className="grid grid-cols-2 gap-3 mt-6 md:hidden">
              {heroStats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-3 border border-slate-100">
                  <div className="text-lg font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {siteConfig.title}
              <br />
              <span className="text-primary italic">{siteConfig.titleAccent}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {siteConfig.tagline}{" "}
              <span className="font-semibold text-foreground">
                Damit dein Unternehmen skaliert, nicht nur überlebt.
              </span>
            </p>

            {/* Feature bullets */}
            <ul className="space-y-3">
              {heroFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                <a href={siteConfig.cta.href} target="_blank" rel="noreferrer">
                  {siteConfig.cta.text}
                  <span className="ml-2">→</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-base font-medium"
              >
                <a href="#testimonials">
                  Erfolgsgeschichten ansehen
                </a>
              </Button>
            </div>

            {/* Trust line */}
            <p className="text-xs text-muted-foreground pt-2">
              Unverbindlich • Kostenlos • Keine versteckten Kosten
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};
