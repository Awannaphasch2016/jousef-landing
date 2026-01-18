import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Sparkles,
  Zap,
  Target,
  Brain,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface AutomationProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  status: "coming-soon" | "beta" | "available";
  pricing: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  highlights: string[];
  color: {
    bg: string;
    border: string;
    text: string;
    iconBg: string;
  };
}

const automationProducts: AutomationProduct[] = [
  {
    id: "sardor-ai",
    name: "Sardor AI",
    tagline: "Your Intelligent Proposal Assistant",
    description: "AI-powered proposal generation that learns from your best-performing proposals and adapts to each job's unique requirements.",
    icon: <Brain className="h-8 w-8" />,
    status: "coming-soon",
    pricing: "$49/month",
    features: [
      {
        icon: <Brain className="h-5 w-5" />,
        title: "Smart Learning",
        description: "Analyzes your winning proposals to understand what works",
      },
      {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Auto-Customization",
        description: "Tailors proposals based on client history and job requirements",
      },
      {
        icon: <Target className="h-5 w-5" />,
        title: "Tone Matching",
        description: "Adapts writing style to match client preferences",
      },
      {
        icon: <TrendingUp className="h-5 w-5" />,
        title: "A/B Testing",
        description: "Tests different proposal approaches and optimizes over time",
      },
    ],
    highlights: [
      "3x faster proposal writing",
      "25% higher win rates",
      "Learns from your style",
      "Multi-language support",
    ],
    color: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-600",
      iconBg: "bg-purple-100",
    },
  },
  {
    id: "laziza-ai",
    name: "Laziza AI",
    tagline: "Advanced Behavioral Analytics",
    description: "Predictive AI that analyzes client behavior patterns, hiring history, and project success indicators to rank opportunities by likelihood of winning.",
    icon: <Bot className="h-8 w-8" />,
    status: "coming-soon",
    pricing: "$79/month",
    features: [
      {
        icon: <Target className="h-5 w-5" />,
        title: "Client Scoring",
        description: "Predicts which clients are most likely to hire based on behavior",
      },
      {
        icon: <Clock className="h-5 w-5" />,
        title: "Optimal Timing",
        description: "Recommends best time to submit proposals for each client",
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "Risk Detection",
        description: "Flags potentially problematic clients before you apply",
      },
      {
        icon: <Zap className="h-5 w-5" />,
        title: "Priority Queue",
        description: "Auto-ranks jobs by win probability and ROI potential",
      },
    ],
    highlights: [
      "40% increase in interview rate",
      "Avoid bad clients",
      "Optimize connects spend",
      "Data-driven decisions",
    ],
    color: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
      iconBg: "bg-blue-100",
    },
  },
];

export const AutomationFeatures = () => {
  return (
    <section id="automation-products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm font-semibold">
            NEXT-GENERATION AI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by Advanced AI Automation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            GigRadar's AI assistants work 24/7 to optimize every aspect of your Upwork workflow
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {automationProducts.map((product) => (
            <Card
              key={product.id}
              className={`${product.color.border} border-2 hover:shadow-xl transition-all relative overflow-hidden`}
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                {product.status === "coming-soon" && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    COMING SOON
                  </Badge>
                )}
                {product.status === "beta" && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300">
                    BETA
                  </Badge>
                )}
                {product.status === "available" && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
                    AVAILABLE NOW
                  </Badge>
                )}
              </div>

              <CardHeader className={product.color.bg}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${product.color.iconBg} w-16 h-16 rounded-xl flex items-center justify-center ${product.color.text}`}>
                    {product.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-1">{product.name}</CardTitle>
                    <p className={`text-sm font-semibold ${product.color.text}`}>
                      {product.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{product.description}</p>
              </CardHeader>

              <CardContent className="pt-6">
                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="space-y-2">
                      <div className={`${product.color.iconBg} w-10 h-10 rounded-lg flex items-center justify-center ${product.color.text}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{feature.title}</div>
                        <div className="text-xs text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className={`${product.color.bg} p-4 rounded-lg mb-6`}>
                  <div className="text-sm font-semibold mb-3">Key Benefits</div>
                  <div className="grid grid-cols-2 gap-2">
                    {product.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className={`h-4 w-4 ${product.color.text} flex-shrink-0`} />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className={`text-3xl font-bold ${product.color.text}`}>
                      {product.pricing}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Add-on to GigRadar subscription
                    </div>
                  </div>
                  <Button variant="outline" disabled={product.status === "coming-soon"}>
                    {product.status === "coming-soon" ? "Notify Me" : "Learn More"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Combined Value Prop */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">Complete Automation Suite</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Combine GigRadar's core platform with Sardor AI and Laziza AI for the ultimate Upwork automation system.
              Our AI agents work together to find opportunities, predict success, and generate winning proposals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5x</div>
                <div className="text-sm text-muted-foreground">Faster lead generation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">90%</div>
                <div className="text-sm text-muted-foreground">Time saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3-4x</div>
                <div className="text-sm text-muted-foreground">Revenue increase</div>
              </div>
            </div>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#cta" className="inline-flex items-center gap-2">
                Get Early Access
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Join the waitlist for Sardor AI and Laziza AI beta access
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
