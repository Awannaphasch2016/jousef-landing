import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { testimonials } from "@/config/content";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const SuccessStories = () => {
  return (
    <section
      id="erfolgsgeschichten"
      className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Bewährter Ablauf</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Erfolgsgeschichten
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            So helfen wir echten Unternehmen, ihre Prozesse zu transformieren
            und nachhaltig zu wachsen.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-primary/50 transition-all"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Company Logo */}
              <div className="h-10 mb-6 mt-2">
                <img
                  src={testimonial.companyLogo}
                  alt="Company logo"
                  className="h-full w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-80 transition-opacity"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl font-semibold text-white mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {testimonial.description}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
                <Avatar className="h-12 w-12 border-2 border-slate-600">
                  <AvatarImage
                    alt={testimonial.author.name}
                    src={testimonial.author.image}
                  />
                  <AvatarFallback className="bg-slate-700 text-slate-300">
                    {testimonial.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author.name}
                  </p>
                  <p className="text-sm text-slate-400">
                    {testimonial.author.title}
                  </p>
                </div>
              </div>

              {/* Results badge (optional hover effect) */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-primary flex items-center gap-1">
                  Mehr erfahren
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-white hover:bg-slate-800 hover:border-primary"
          >
            Alle Erfolgsgeschichten ansehen
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
