import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

// GigRadar-style testimonials
const testimonials = [
  {
    quote: "GigRadar transformed how we find clients on Upwork. Our response rate increased by 300%.",
    description: "We went from manually browsing jobs to having a steady stream of qualified leads. The AI proposals are incredibly personalized.",
    author: {
      name: "Sarah Johnson",
      title: "Founder, Design Agency",
      image: "https://i.pravatar.cc/150?img=1",
    },
    rating: 5,
  },
  {
    quote: "The best investment we made for our freelance business. ROI within the first month.",
    description: "The automated follow-ups and job matching saved us 20+ hours per week. Now we focus on actual client work.",
    author: {
      name: "Michael Chen",
      title: "Lead Developer, Tech Consultancy",
      image: "https://i.pravatar.cc/150?img=3",
    },
    rating: 5,
  },
  {
    quote: "Finally, a tool that understands what we're looking for. The ICP targeting is spot-on.",
    description: "We stopped wasting time on irrelevant proposals. Every job recommendation is now aligned with our expertise.",
    author: {
      name: "Emily Rodriguez",
      title: "Marketing Strategist",
      image: "https://i.pravatar.cc/150?img=5",
    },
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100 mb-4">
            <span className="text-sm font-medium text-primary">Reviews</span>
          </div>
          <h2 className="text-display-sm">
            <span className="text-foreground">Loved by </span>
            <span className="text-primary">freelancers worldwide</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            See what our users have to say about their experience with GigRadar.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <CardHeader className="pb-4">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg font-semibold text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {testimonial.description}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Avatar className="h-12 w-12 border-2 border-gray-100">
                    <AvatarImage
                      alt={testimonial.author.name}
                      src={testimonial.author.image}
                    />
                    <AvatarFallback className="bg-blue-50 text-primary">
                      {testimonial.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.author.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
