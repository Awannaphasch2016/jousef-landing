import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Megaphone, CheckCircle } from "lucide-react";

const products = [
  {
    id: "crm",
    name: "GigRadar CRM",
    tagline: "Pipeline Management for Agencies",
    description: "Purpose-built CRM for managing your Upwork pipeline. Track proposals, follow-ups, client relationships, and revenue all in one place.",
    image: "/products/gigradar-crm-screenshot.png",
    icon: <Database className="h-8 w-8" />,
    features: [
      "Visual pipeline with drag-and-drop",
      "Automated follow-up reminders",
      "Client history and notes",
      "Revenue forecasting",
      "Team collaboration tools",
      "Integration with GigRadar core",
    ],
    pricing: "Included in Pro plan",
    link: "/products/crm",
    color: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
      iconBg: "bg-blue-100",
    },
  },
  {
    id: "inbound",
    name: "GigRadar Inbound",
    tagline: "Turn Your Profile into a Lead Magnet",
    description: "Optimize your Upwork profile to attract high-quality inbound invitations. Get discovered by clients looking for your specific expertise.",
    image: "/products/gigradar-inbound-screenshot.png",
    icon: <Megaphone className="h-8 w-8" />,
    features: [
      "Profile optimization recommendations",
      "Keyword analysis and suggestions",
      "Client search behavior insights",
      "Invitation quality scoring",
      "Auto-decline low-quality invites",
      "Performance tracking dashboard",
    ],
    pricing: "Starting at $49/month",
    link: "/products/inbound",
    color: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-600",
      iconBg: "bg-green-100",
    },
  },
];

export const AdditionalProducts = () => {
  return (
    <section id="additional-products" className="py-20 bg-white border-y border-gray-100">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm font-semibold">
            COMPLETE ECOSYSTEM
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            More Tools to Scale Your Agency
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Extend GigRadar with powerful add-ons designed specifically for agency workflows
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`${product.color.border} border-2 hover:shadow-2xl transition-all overflow-hidden`}
            >
              {/* Product Screenshot */}
              <div className={`${product.color.bg} p-8 border-b ${product.color.border}`}>
                <img
                  src={product.image}
                  alt={`${product.name} screenshot`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg border-2 border-white"
                  onError={(e) => {
                    // Fallback to placeholder
                    e.currentTarget.src = `https://via.placeholder.com/800x400/E5E7EB/6B7280?text=${encodeURIComponent(product.name)}+Screenshot`;
                  }}
                />
              </div>

              <CardHeader>
                <div className="flex items-start gap-4 mb-2">
                  <div className={`${product.color.iconBg} w-16 h-16 rounded-lg flex items-center justify-center ${product.color.text} flex-shrink-0`}>
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

              <CardContent>
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className={`h-5 w-5 ${product.color.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className={`text-2xl font-bold ${product.color.text}`}>
                      {product.pricing}
                    </div>
                  </div>
                  <Button variant="outline" size="lg" asChild>
                    <a href={product.link} className="inline-flex items-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bundle CTA */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Get the Complete GigRadar Suite</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Combine GigRadar Core, CRM, and Inbound for the ultimate Upwork automation ecosystem. Save 20% when you bundle.
            </p>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$197/mo</div>
                <div className="text-sm text-muted-foreground">Complete Suite</div>
              </div>
              <div className="text-2xl text-muted-foreground">vs</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground line-through">$243/mo</div>
                <div className="text-sm text-muted-foreground">Individual pricing</div>
              </div>
            </div>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#cta" className="inline-flex items-center gap-2">
                Start with Complete Suite
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              7-day free trial • No credit card required • Cancel anytime
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
