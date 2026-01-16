/**
 * Landing Page - Leadflow-Marketing Style
 * Structure: Matches https://www.leadflow-marketing.de/
 * Content: German - B2B Process Architecture
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { DemoProjects } from "./components/DemoProjects"; // NEW: Portfolio showcase
import { LocalTrust } from "./components/LocalTrust"; // NEW: Personal trust section
import { ProblemMirror } from "./components/ProblemMirror"; // Pain points grid
import { ProblemSolution } from "./components/ProblemSolution"; // NEW: Dark problem/solution comparison
import { TargetAudience } from "./components/TargetAudience"; // NEW: "Für wen wir arbeiten" + Benefits
import { SuccessStories } from "./components/SuccessStories"; // NEW: Dark testimonials with logos
import { Timeline } from "./components/Timeline"; // Process methodology
import { FAQ } from "./components/FAQ"; // FAQ accordion
import { Cta } from "./components/Cta"; // Final CTA
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { AvailableIndicator } from "./components/AvailableIndicator";
import "./App.css";

/**
 * Section Order (Matching Leadflow):
 * 1. Hero - Two-column with video + floating stats
 * 2. Demo Projects - Portfolio showcase
 * 3. Local Trust - Personal credibility
 * 4. Problems - Pain points "Deine Herausforderungen"
 * 5. Problem/Solution - Dark gradient comparison
 * 6. Target Audience - "Für wen wir arbeiten" + Benefits
 * 7. Success Stories - Dark testimonials (Erfolgsgeschichten)
 * 8. Process Timeline - "Dein Weg zur perfekten Website"
 * 9. FAQ - Frequently asked questions
 * 10. CTA - Final call-to-action
 * 11. Footer
 */

function App() {
  return (
    <>
      <Navbar />
      {/* Section 1: Hero */}
      <Hero />
      {/* Section 2: Demo Projects (Portfolio) */}
      <DemoProjects />
      {/* Section 3: Local Trust (Personal credibility) */}
      <LocalTrust />
      {/* Section 4: Problems (Pain points) */}
      <ProblemMirror />
      {/* Section 5: Problem/Solution (Dark gradient comparison) */}
      <ProblemSolution />
      {/* Section 6: Target Audience + Benefits */}
      <TargetAudience />
      {/* Section 7: Success Stories (Dark testimonials) */}
      <SuccessStories />
      {/* Section 8: Process Timeline */}
      <Timeline />
      {/* Section 9: FAQ */}
      <FAQ />
      {/* Section 10: Final CTA */}
      <Cta />
      <Footer />
      <ScrollToTop />
      <AvailableIndicator />
    </>
  );
}

export default App;
