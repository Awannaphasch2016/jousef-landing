import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Target, Zap, Brain, Shield, TrendingUp, AlertCircle, Users } from "lucide-react";

interface MatrixFeature {
  category: string;
  icon: React.ReactNode;
  items: {
    feature: string;
    gigradar: boolean | string;
    manual: boolean | string;
    description: string;
  }[];
}

const matrixData: MatrixFeature[] = [
  {
    category: "Lead Discovery",
    icon: <Target className="h-5 w-5" />,
    items: [
      {
        feature: "24/7 Job Monitoring",
        gigradar: true,
        manual: false,
        description: "Continuous monitoring vs manual checking",
      },
      {
        feature: "AI Spam Filtering",
        gigradar: "95% accuracy",
        manual: false,
        description: "Automated filtering vs manual review",
      },
      {
        feature: "Custom Match Criteria",
        gigradar: true,
        manual: "Limited",
        description: "Unlimited filters vs basic search",
      },
      {
        feature: "Instant Notifications",
        gigradar: true,
        manual: false,
        description: "Real-time alerts vs periodic checking",
      },
    ],
  },
  {
    category: "Proposal Management",
    icon: <Zap className="h-5 w-5" />,
    items: [
      {
        feature: "Template Library",
        gigradar: "Unlimited",
        manual: "Manual",
        description: "Smart templates vs copy-paste",
      },
      {
        feature: "Auto-Customization",
        gigradar: true,
        manual: false,
        description: "AI personalization vs manual editing",
      },
      {
        feature: "Proposal Analytics",
        gigradar: true,
        manual: false,
        description: "Track performance vs guesswork",
      },
      {
        feature: "Follow-up Automation",
        gigradar: true,
        manual: false,
        description: "Scheduled follow-ups vs spreadsheets",
      },
    ],
  },
  {
    category: "Intelligence & Insights",
    icon: <Brain className="h-5 w-5" />,
    items: [
      {
        feature: "Client Behavior Analysis",
        gigradar: true,
        manual: false,
        description: "Predict hiring patterns",
      },
      {
        feature: "Success Probability Scoring",
        gigradar: true,
        manual: false,
        description: "AI-powered win rate prediction",
      },
      {
        feature: "Competitive Intelligence",
        gigradar: true,
        manual: false,
        description: "Analyze market trends",
      },
      {
        feature: "ROI Optimization",
        gigradar: true,
        manual: false,
        description: "Maximize connects spend efficiency",
      },
    ],
  },
  {
    category: "Workflow Automation",
    icon: <Clock className="h-5 w-5" />,
    items: [
      {
        feature: "Automated Bidding",
        gigradar: true,
        manual: false,
        description: "Set rules and let AI bid",
      },
      {
        feature: "Multi-Account Support",
        gigradar: true,
        manual: "Manual switching",
        description: "Manage multiple profiles",
      },
      {
        feature: "Team Collaboration",
        gigradar: true,
        manual: "Email threads",
        description: "Built-in team workspace",
      },
      {
        feature: "Pipeline Management",
        gigradar: true,
        manual: "Spreadsheets",
        description: "CRM-style tracking",
      },
    ],
  },
  {
    category: "Safety & Compliance",
    icon: <Shield className="h-5 w-5" />,
    items: [
      {
        feature: "Upwork TOS Compliant",
        gigradar: true,
        manual: true,
        description: "Fully approved automation",
      },
      {
        feature: "Risk Detection",
        gigradar: true,
        manual: false,
        description: "Flag problematic clients",
      },
      {
        feature: "Data Security",
        gigradar: "Enterprise-grade",
        manual: "Your responsibility",
        description: "Encrypted storage and transmission",
      },
      {
        feature: "Audit Logs",
        gigradar: true,
        manual: false,
        description: "Complete activity tracking",
      },
    ],
  },
  {
    category: "Performance & Growth",
    icon: <TrendingUp className="h-5 w-5" />,
    items: [
      {
        feature: "Win Rate Tracking",
        gigradar: true,
        manual: "Manual tracking",
        description: "Automatic performance metrics",
      },
      {
        feature: "Revenue Analytics",
        gigradar: true,
        manual: false,
        description: "Track growth over time",
      },
      {
        feature: "A/B Testing",
        gigradar: true,
        manual: false,
        description: "Test and optimize approaches",
      },
      {
        feature: "Learning Recommendations",
        gigradar: true,
        manual: false,
        description: "AI suggests improvements",
      },
    ],
  },
];

const renderValue = (value: boolean | string) => {
  if (value === true) {
    return <CheckCircle className="h-6 w-6 text-green-600" />;
  } else if (value === false) {
    return <XCircle className="h-6 w-6 text-red-400" />;
  } else if (value === "Limited" || value === "Manual" || value === "Manual switching" || value === "Spreadsheets" || value === "Email threads" || value === "Your responsibility" || value === "Manual tracking") {
    return (
      <div className="flex items-center gap-2">
        <AlertCircle className="h-5 w-5 text-orange-400" />
        <span className="text-sm text-orange-600 font-medium">{value}</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <span className="text-sm text-green-700 font-semibold">{value}</span>
      </div>
    );
  }
};

export const FeatureMatrix = () => {
  return (
    <section id="feature-matrix" className="py-20 bg-white border-y border-gray-100">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm font-semibold">
            FEATURE COMPARISON
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GigRadar vs Manual Lead Generation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See exactly what you get with automation compared to the manual approach
          </p>
        </div>

        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white border-b-2 border-gray-200 mb-8">
          <div className="grid grid-cols-12 gap-4 py-4">
            <div className="col-span-6">
              <div className="font-semibold text-muted-foreground">Feature</div>
            </div>
            <div className="col-span-3 text-center">
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-bold text-primary">GigRadar</span>
              </div>
            </div>
            <div className="col-span-3 text-center">
              <div className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="font-bold text-muted-foreground">Manual</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="space-y-12">
          {matrixData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              {/* Feature Rows */}
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="border-2 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        {/* Feature Name */}
                        <div className="col-span-6">
                          <div className="font-semibold mb-1">{item.feature}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>

                        {/* GigRadar Column */}
                        <div className="col-span-3 flex justify-center">
                          {renderValue(item.gigradar)}
                        </div>

                        {/* Manual Column */}
                        <div className="col-span-3 flex justify-center">
                          {renderValue(item.manual)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <Card className="mt-12 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">The Bottom Line</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Automated features</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Time savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3-4x</div>
                <div className="text-sm text-muted-foreground">Revenue growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">$0</div>
                <div className="text-sm text-muted-foreground">Setup fees</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
