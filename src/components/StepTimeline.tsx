import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Step {
  number: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  description: string;
  features: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "Add our dedicated BM",
    titleAccent: "to your agency",
    subtitle: "How It Works",
    description: "Connect your accounts and let our AI Business Manager integrate seamlessly with your existing workflow.",
    features: [
      "One-click agency integration",
      "Automated profile setup",
      "Custom configuration options",
    ],
  },
  {
    number: "02",
    title: "Specify",
    titleAccent: "what kind of projects you are looking for",
    subtitle: "How It Works",
    description: 'Play "Tinder" with Upwork jobs to train your AI',
    features: [
      "Identify which jobs fit your ICP",
      "The more jobs you identify, the better",
      "Focus proposal submission on highly-relevant opportunities",
    ],
  },
  {
    number: "03",
    title: "Wait for the leads",
    titleAccent: "to start knocking",
    subtitle: "How It Works",
    description: "Use our AI to book them on your calendar",
    features: [
      "Automated proposal generation",
      "Smart follow-up sequences",
      "Calendar integration for meetings",
    ],
  },
];

export const StepTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // IntersectionObserver to detect when steps scroll into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleSteps((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: "0px 0px -100px 0px", // Start animation slightly before element fully in view
      }
    );

    // Observe all step elements
    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container">
        {/* Timeline with vertical line */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block" />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative timeline-step ${visibleSteps.has(index) ? "is-visible" : ""}`}
              >
                {/* Step number badge */}
                <div className="absolute left-0 md:left-0 -translate-x-0 md:-translate-x-1/2 timeline-badge">
                  <div className="w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-white shadow-lg shadow-primary/25">
                    <span className="text-xs font-medium opacity-80">Step</span>
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="ml-24 md:ml-32 timeline-content">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100 mb-4">
                    <span className="text-sm font-medium text-primary">{step.subtitle}</span>
                  </div>

                  {/* Title with mixed colors */}
                  <h2 className="text-display-sm mb-4">
                    <span className="text-foreground">{step.title}</span>
                    <br />
                    <span className="text-primary">{step.titleAccent}</span>
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg mb-6 max-w-xl">
                    {step.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
