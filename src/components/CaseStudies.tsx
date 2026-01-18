import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, DollarSign, Target } from "lucide-react";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: {
    proposals: { before: number; after: number; increase: string };
    contracts: { before: number; after: number; increase: string };
    revenue: { before: string; after: string; increase: string };
    conversionRate: { before: string; after: string; increase: string };
  };
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
    avatar: string;
  };
  funnelSteps: {
    name: string;
    before: number;
    after: number;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "web-dev",
    category: "Web Development",
    title: "How a Web Development Agency 3x'd Their Contract Win Rate",
    client: "Code Motion",
    industry: "Web Development",
    challenge: "Spending 4+ hours daily manually searching and applying to Upwork jobs with low success rate",
    solution: "Implemented GigRadar's anti-spam filters and automated bidding system to focus only on quality leads",
    metrics: {
      proposals: { before: 50, after: 150, increase: "+200%" },
      contracts: { before: 5, after: 25, increase: "+400%" },
      revenue: { before: "$15K", after: "$75K", increase: "+400%" },
      conversionRate: { before: "10%", after: "17%", increase: "+70%" },
    },
    testimonial: {
      quote: "GigRadar transformed our lead generation process. We went from drowning in spam to closing 25 contracts per month. The ROI was immediate.",
      author: "Alex Johnson",
      title: "CEO",
      company: "Code Motion",
      avatar: "/avatars/alex-johnson.jpg",
    },
    funnelSteps: [
      { name: "Jobs Found", before: 200, after: 300 },
      { name: "Qualified Leads", before: 50, after: 150 },
      { name: "Proposals Sent", before: 50, after: 150 },
      { name: "Interviews", before: 15, after: 50 },
      { name: "Contracts Won", before: 5, after: 25 },
    ],
  },
  {
    id: "design",
    category: "Design",
    title: "Design Agency Cuts Lead Time by 60% While Doubling Revenue",
    client: "PeCode Design",
    industry: "UI/UX Design",
    challenge: "Missing high-value design projects due to slow manual job search and generic proposals",
    solution: "Used GigRadar's self-learning AI filters to identify premium design projects and automated proposal customization",
    metrics: {
      proposals: { before: 30, after: 100, increase: "+233%" },
      contracts: { before: 8, after: 20, increase: "+150%" },
      revenue: { before: "$25K", after: "$60K", increase: "+140%" },
      conversionRate: { before: "27%", after: "20%", increase: "-26%" },
    },
    testimonial: {
      quote: "The AI filtering is incredible. We now see only high-budget design projects that match our expertise. Our team focuses on what they do best - design.",
      author: "Maria Santos",
      title: "Creative Director",
      company: "PeCode Design",
      avatar: "/avatars/maria-santos.jpg",
    },
    funnelSteps: [
      { name: "Jobs Found", before: 100, after: 400 },
      { name: "Qualified Leads", before: 30, after: 100 },
      { name: "Proposals Sent", before: 30, after: 100 },
      { name: "Interviews", before: 12, after: 30 },
      { name: "Contracts Won", before: 8, after: 20 },
    ],
  },
  {
    id: "marketing",
    category: "Marketing",
    title: "Marketing Agency Scales to $120K/mo with Automated Lead Gen",
    client: "BN Digital",
    industry: "Digital Marketing",
    challenge: "Inconsistent lead flow causing revenue volatility and team underutilization",
    solution: "Deployed GigRadar's automated bidding with custom filters for marketing projects over $5K budget",
    metrics: {
      proposals: { before: 40, after: 200, increase: "+400%" },
      contracts: { before: 12, after: 35, increase: "+192%" },
      revenue: { before: "$40K", after: "$120K", increase: "+200%" },
      conversionRate: { before: "30%", after: "18%", increase: "-40%" },
    },
    testimonial: {
      quote: "GigRadar gave us predictable pipeline. We went from feast-or-famine to steady $120K months. Our team is fully booked 3 months out.",
      author: "David Chen",
      title: "Growth Director",
      company: "BN Digital",
      avatar: "/avatars/david-chen.jpg",
    },
    funnelSteps: [
      { name: "Jobs Found", before: 150, after: 600 },
      { name: "Qualified Leads", before: 40, after: 200 },
      { name: "Proposals Sent", before: 40, after: 200 },
      { name: "Interviews", before: 18, after: 60 },
      { name: "Contracts Won", before: 12, after: 35 },
    ],
  },
];

const categories = ["All", "Web Development", "Design", "Marketing"];

export const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm font-semibold">
            PROVEN RESULTS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real Agencies, Real Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how agencies like yours used GigRadar to scale their Upwork revenue by 200-400%
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {filteredStudies.map((study) => (
            <Card key={study.id} className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {study.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{study.industry}</span>
                </div>
                <CardTitle className="text-3xl mb-4">{study.title}</CardTitle>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">Challenge:</strong> {study.challenge}</p>
                  <p><strong className="text-foreground">Solution:</strong> {study.solution}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-blue-600" />
                      <span className="text-xs font-semibold text-blue-600">PROPOSALS</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-900">{study.metrics.proposals.after}</div>
                    <div className="text-xs text-blue-700">
                      from {study.metrics.proposals.before} ({study.metrics.proposals.increase})
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span className="text-xs font-semibold text-green-600">CONTRACTS</span>
                    </div>
                    <div className="text-2xl font-bold text-green-900">{study.metrics.contracts.after}</div>
                    <div className="text-xs text-green-700">
                      from {study.metrics.contracts.before} ({study.metrics.contracts.increase})
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4 text-purple-600" />
                      <span className="text-xs font-semibold text-purple-600">REVENUE</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-900">{study.metrics.revenue.after}/mo</div>
                    <div className="text-xs text-purple-700">
                      from {study.metrics.revenue.before} ({study.metrics.revenue.increase})
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-orange-600" />
                      <span className="text-xs font-semibold text-orange-600">CONVERSION</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-900">{study.metrics.conversionRate.after}</div>
                    <div className="text-xs text-orange-700">
                      from {study.metrics.conversionRate.before}
                    </div>
                  </div>
                </div>

                {/* Funnel Visualization */}
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h4 className="font-semibold mb-6 text-center">Lead Generation Funnel Transformation</h4>
                  <div className="space-y-3">
                    {study.funnelSteps.map((step) => {
                      const beforeWidth = (step.before / study.funnelSteps[0].before) * 100;
                      const afterWidth = (step.after / study.funnelSteps[0].after) * 100;

                      return (
                        <div key={step.name}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-medium">{step.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {step.before} → {step.after}
                            </span>
                          </div>
                          <div className="relative h-10 bg-gray-200 rounded-lg overflow-hidden">
                            {/* Before (darker background) */}
                            <div
                              className="absolute top-0 left-0 h-full bg-gray-400 flex items-center justify-end px-3 text-xs font-semibold text-gray-700 transition-all"
                              style={{ width: `${beforeWidth}%` }}
                            >
                              Before
                            </div>
                            {/* After (bright overlay) */}
                            <div
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-end px-3 text-xs font-semibold text-white transition-all"
                              style={{ width: `${afterWidth}%` }}
                            >
                              After
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <img
                      src={study.testimonial.avatar}
                      alt={study.testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                      onError={(e) => {
                        // Fallback to placeholder
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(study.testimonial.author)}&size=64&background=random`;
                      }}
                    />
                    <div className="flex-1">
                      <p className="text-lg italic text-foreground mb-4">
                        "{study.testimonial.quote}"
                      </p>
                      <div>
                        <div className="font-semibold">{study.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {study.testimonial.title} at {study.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Get Similar Results for Your Agency
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
