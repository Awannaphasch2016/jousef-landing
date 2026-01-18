import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";

export const Cta = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-primary via-blue-600 to-blue-700">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to scale your
            <br />
            freelance business?
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers and agencies who are winning more clients with AI-powered automation.
          </p>

          {/* Feature checklist */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {["14-day free trial", "No credit card required", "Cancel anytime"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/90">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold bg-white text-primary hover:bg-gray-100 rounded-full shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-white/30 text-white hover:bg-white/10 rounded-full"
            >
              Book a Demo
            </Button>
          </div>

          {/* Trust badge */}
          <p className="text-white/60 text-sm mt-8">
            Trusted by 10,000+ freelancers worldwide
          </p>
        </div>
      </div>
    </section>
  );
};
