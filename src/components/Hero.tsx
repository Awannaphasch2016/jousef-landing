import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

// Floating platform icons for GigRadar-style hero
const floatingIcons = [
  { icon: "in", label: "LinkedIn", position: "top-20 right-[15%]", delay: "0s" },
  { icon: "up", label: "Upwork", position: "top-32 right-[25%]", delay: "0.2s" },
  { icon: "★", label: "Rating", position: "top-16 right-[35%]", delay: "0.4s" },
  { icon: "✓", label: "Qualified", position: "top-40 right-[10%]", delay: "0.1s" },
  { icon: "📅", label: "Schedule", position: "bottom-32 right-[20%]", delay: "0.3s" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">AI Lead Generation Platform</span>
            </div>

            {/* Headline with mixed colors - GigRadar style */}
            <h1 className="text-display leading-tight">
              <span className="text-foreground">Your </span>
              <span className="text-primary">AI</span>
              <br />
              <span className="text-primary">Business</span>
              <br />
              <span className="text-primary">Manager</span>
              <br />
              <span className="text-foreground">for Upwork</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Extend your team with an AI-powered bidder, real-time job feed alerts,
              conversion analytics, and profile optimization tech!
            </p>

            {/* CTA + Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg shadow-primary/25"
              >
                Get a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              {/* Trustpilot-style rating */}
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">Excellent</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-green-500 flex items-center justify-center">
                        <span className="text-white text-xs">★</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">Based on 150 reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Floating Icons Visual */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Central workflow diagram placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl border border-blue-200/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                    <span className="text-3xl">✨</span>
                  </div>
                  <span className="text-sm font-medium text-primary">Qualification</span>
                </div>
              </div>
            </div>

            {/* Floating platform badges */}
            {floatingIcons.map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.position} animate-float`}
                style={{ animationDelay: item.delay }}
              >
                <div className="px-4 py-2 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              </div>
            ))}

            {/* Connection lines decoration */}
            <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 400 400">
              <path
                d="M 100 200 Q 150 150 200 200 T 300 200"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom feature bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="container py-4">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            {["Self-Improve", "Send Follow-Ups", "Define Your Niche", "Manage Budgets", "Manage Profiles"].map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-50 rounded flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
