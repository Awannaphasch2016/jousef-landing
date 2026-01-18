import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Bot, Zap, Target, BarChart3, Users, Shield } from "lucide-react";

// GigRadar-style feature cards
const features = [
  {
    icon: Bot,
    title: "AI-Powered Bidding",
    description: "Let our AI craft personalized proposals that win more jobs. Smart, fast, and conversion-optimized.",
  },
  {
    icon: Zap,
    title: "Real-Time Job Alerts",
    description: "Never miss a relevant opportunity. Get instant notifications for jobs matching your criteria.",
  },
  {
    icon: Target,
    title: "ICP Targeting",
    description: "Define your ideal client profile and let the AI find perfect matches automatically.",
  },
  {
    icon: BarChart3,
    title: "Conversion Analytics",
    description: "Track your proposal performance with detailed analytics and optimization insights.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Manage multiple profiles and team members from a single dashboard.",
  },
  {
    icon: Shield,
    title: "Profile Optimization",
    description: "Boost your profile visibility with AI-driven recommendations and best practices.",
  },
];

export const Services = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100 mb-4">
            <span className="text-sm font-medium text-primary">Features</span>
          </div>
          <h2 className="text-display-sm">
            <span className="text-foreground">Everything you need to </span>
            <span className="text-primary">scale your freelance business</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Powerful tools designed to automate your Upwork workflow and win more clients.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4 group-hover:from-primary/10 group-hover:to-primary/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
