/**
 * Landing Page - GigRadar.io Style
 * Light theme with blue gradient accents
 * SaaS/Tech aesthetic
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Sponsors } from "./components/Sponsors";
import { StepTimeline } from "./components/StepTimeline";
import { CaseStudies } from "./components/CaseStudies";
import { Comparison } from "./components/Comparison";
import { AutomationFeatures } from "./components/AutomationFeatures";
import { FeatureMatrix } from "./components/FeatureMatrix";
import { StatsTrust } from "./components/StatsTrust";
import { Services } from "./components/Services";
import { AdditionalProducts } from "./components/AdditionalProducts";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* Section 1: Hero with floating icons */}
      <Hero />
      {/* Section 2: Social proof logos */}
      <Sponsors />
      {/* Section 3: How It Works - Step Timeline */}
      <StepTimeline />
      {/* Section 4: Case Studies with ROI metrics */}
      <CaseStudies />
      {/* Section 5: Comparison - Manual vs Automated */}
      <Comparison />
      {/* Section 6: Automation Features - Sardor + Laziza AI */}
      <AutomationFeatures />
      {/* Section 7: Feature Comparison Matrix */}
      <FeatureMatrix />
      {/* Section 8: Stats and Trust indicators */}
      <StatsTrust />
      {/* Section 9: Features/Services */}
      <Services />
      {/* Section 10: Additional Products - CRM + Inbound */}
      <AdditionalProducts />
      {/* Section 11: Team - Core + Advisors */}
      <Team />
      {/* Section 12: Testimonials/Reviews */}
      <Testimonials />
      {/* Section 13: FAQ */}
      <FAQ />
      {/* Section 14: Final CTA */}
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
