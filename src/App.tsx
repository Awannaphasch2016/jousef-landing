/**
 * Landing Page - GigRadar.io Style
 * Light theme with blue gradient accents
 * SaaS/Tech aesthetic
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Sponsors } from "./components/Sponsors";
import { StepTimeline } from "./components/StepTimeline";
import { Services } from "./components/Services";
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
      {/* Section 4: Features/Services */}
      <Services />
      {/* Section 5: Testimonials/Reviews */}
      <Testimonials />
      {/* Section 6: FAQ */}
      <FAQ />
      {/* Section 7: Final CTA */}
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
