import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  TrendingDown,
  AlertCircle,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";

interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    manual: {
      status: "bad" | "poor" | "ok";
      description: string;
    };
    automated: {
      status: "good" | "excellent";
      description: string;
    };
  }[];
}

const comparisonData: ComparisonFeature[] = [
  {
    category: "Lead Discovery",
    features: [
      {
        name: "Job Search Speed",
        manual: {
          status: "bad",
          description: "4-6 hours daily manually browsing Upwork",
        },
        automated: {
          status: "excellent",
          description: "Automated 24/7 monitoring, instant notifications",
        },
      },
      {
        name: "Spam Filtering",
        manual: {
          status: "bad",
          description: "Manually read every job post, 70% are spam/low-quality",
        },
        automated: {
          status: "excellent",
          description: "AI filters out 95% of spam automatically",
        },
      },
      {
        name: "Lead Quality",
        manual: {
          status: "poor",
          description: "Mix of good and bad leads, hard to prioritize",
        },
        automated: {
          status: "excellent",
          description: "Only high-quality leads matching your criteria",
        },
      },
    ],
  },
  {
    category: "Proposal Management",
    features: [
      {
        name: "Response Time",
        manual: {
          status: "poor",
          description: "Hours or days to respond, miss early bird advantage",
        },
        automated: {
          status: "excellent",
          description: "Respond within minutes of job posting",
        },
      },
      {
        name: "Proposal Customization",
        manual: {
          status: "ok",
          description: "Copy-paste templates with manual tweaks",
        },
        automated: {
          status: "good",
          description: "AI-powered customization based on job details",
        },
      },
      {
        name: "Tracking & Follow-ups",
        manual: {
          status: "poor",
          description: "Spreadsheets, easy to miss follow-ups",
        },
        automated: {
          status: "excellent",
          description: "Automatic tracking, scheduled follow-ups",
        },
      },
    ],
  },
  {
    category: "Performance & ROI",
    features: [
      {
        name: "Connects Efficiency",
        manual: {
          status: "bad",
          description: "Waste connects on low-quality jobs, <10% win rate",
        },
        automated: {
          status: "excellent",
          description: "Optimize spend on high-probability jobs, 15-25% win rate",
        },
      },
      {
        name: "Revenue Growth",
        manual: {
          status: "poor",
          description: "Inconsistent pipeline, feast-or-famine cycles",
        },
        automated: {
          status: "excellent",
          description: "Predictable 2-4x revenue growth within 6 months",
        },
      },
      {
        name: "Team Time Saved",
        manual: {
          status: "bad",
          description: "50-70% of time spent on lead gen, not delivery",
        },
        automated: {
          status: "excellent",
          description: "90% time savings, focus on client delivery",
        },
      },
    ],
  },
];

const statusIcons = {
  bad: <XCircle className="h-5 w-5 text-red-500" />,
  poor: <AlertCircle className="h-5 w-5 text-orange-500" />,
  ok: <CheckCircle className="h-5 w-5 text-yellow-500" />,
  good: <CheckCircle className="h-5 w-5 text-green-500" />,
  excellent: <CheckCircle className="h-5 w-5 text-green-600" />,
};

export const Comparison = () => {
  return (
    <section id="comparison" className="py-20 bg-white border-y border-gray-100">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm font-semibold">
            MANUAL VS AUTOMATED
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stop Wasting Time on Manual Lead Generation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how automation transforms your Upwork workflow from time-consuming to revenue-generating
          </p>
        </div>

        {/* Cost Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Manual Card */}
          <Card className="border-2 border-red-200 bg-red-50/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-900">Manual Process</h3>
                  <p className="text-sm text-red-600">The old way</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingDown className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-red-900">4-6 hours daily</div>
                    <div className="text-sm text-red-700">Manually searching and filtering jobs</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-red-900">70% spam jobs</div>
                    <div className="text-sm text-red-700">Wasting time on low-quality leads</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingDown className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-red-900">5-10% win rate</div>
                    <div className="text-sm text-red-700">Low proposal conversion</div>
                  </div>
                </div>

                <div className="border-t border-red-200 pt-4 mt-6">
                  <div className="text-3xl font-bold text-red-900">$0/month</div>
                  <div className="text-sm text-red-600">Cost: Your time and sanity</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Automated Card */}
          <Card className="border-2 border-primary bg-primary/5 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground">RECOMMENDED</Badge>
            </div>

            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">GigRadar Automation</h3>
                  <p className="text-sm text-muted-foreground">The smart way</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">30 minutes weekly</div>
                    <div className="text-sm text-muted-foreground">AI handles the rest 24/7</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">95% spam filtered</div>
                    <div className="text-sm text-muted-foreground">Only see quality opportunities</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">15-25% win rate</div>
                    <div className="text-sm text-muted-foreground">3x better conversion rate</div>
                  </div>
                </div>

                <div className="border-t border-primary/20 pt-4 mt-6">
                  <div className="text-3xl font-bold text-primary">$97/month</div>
                  <div className="text-sm text-muted-foreground">Average 3-4x ROI within 6 months</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Comparison Table */}
        <div className="space-y-8">
          {comparisonData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {categoryIndex + 1}
                </div>
                {category.category}
              </h3>

              <div className="grid gap-4">
                {category.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="border-2 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="font-semibold text-lg mb-4">{feature.name}</div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Manual Column */}
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            {statusIcons[feature.manual.status]}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-muted-foreground mb-1">
                              Manual Process
                            </div>
                            <div className="text-sm">{feature.manual.description}</div>
                          </div>
                        </div>

                        {/* Automated Column */}
                        <div className="flex gap-3 bg-primary/5 -m-6 p-6 rounded-r-lg md:rounded-r-none md:rounded-br-lg">
                          <div className="flex-shrink-0 mt-0.5">
                            {statusIcons[feature.automated.status]}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-primary mb-1">
                              With GigRadar
                            </div>
                            <div className="text-sm font-semibold">{feature.automated.description}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="#cta" className="inline-flex items-center gap-2">
              Start Automating Your Lead Generation
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            7-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
