import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// GigRadar-style FAQ items
const faqItems = [
  {
    question: "How does the AI-powered bidding work?",
    answer: "Our AI analyzes successful proposals in your niche, learns your writing style, and crafts personalized cover letters for each job. It considers the job requirements, client history, and your expertise to create compelling proposals.",
  },
  {
    question: "Can I use GigRadar with multiple Upwork accounts?",
    answer: "Yes! GigRadar supports team collaboration with multiple profiles. You can manage all your agency's accounts from a single dashboard with role-based access controls.",
  },
  {
    question: "What's the average ROI for GigRadar users?",
    answer: "Most users see a positive ROI within the first month. On average, our users report a 3x increase in response rates and a 50% reduction in time spent on proposals.",
  },
  {
    question: "Is my Upwork account safe?",
    answer: "Absolutely. We use secure OAuth authentication and never store your Upwork credentials. Our system operates within Upwork's terms of service and uses official APIs.",
  },
  {
    question: "How long does setup take?",
    answer: "Most users are up and running within 15 minutes. Simply connect your Upwork account, define your ideal client profile, and let the AI start finding relevant opportunities.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. There are no long-term contracts or hidden fees.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100 mb-4">
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-display-sm">
            <span className="text-foreground">Frequently Asked </span>
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Everything you need to know about GigRadar.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-6 bg-white data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Still have questions?{" "}
              <a
                href="#"
                className="text-primary font-semibold hover:underline underline-offset-4 transition-all"
              >
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
