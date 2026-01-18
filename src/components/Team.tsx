import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  email?: string;
  expertise: string[];
}

const coreTeam: TeamMember[] = [
  {
    name: "Alex Thompson",
    title: "Co-Founder & CEO",
    role: "Leadership",
    bio: "Serial entrepreneur with 15+ years in SaaS. Previously built and exited a $20M ARR marketing automation platform. Passionate about helping agencies scale efficiently.",
    avatar: "/avatars/alex-thompson.jpg",
    linkedin: "https://linkedin.com/in/alexthompson",
    email: "alex@gigradar.io",
    expertise: ["SaaS Strategy", "Growth", "Product Vision"],
  },
  {
    name: "Sarah Chen",
    title: "Co-Founder & CTO",
    role: "Technology",
    bio: "Former ML Engineer at Google. PhD in AI from Stanford. Built recommendation systems serving 100M+ users. Expert in NLP and predictive analytics.",
    avatar: "/avatars/sarah-chen.jpg",
    linkedin: "https://linkedin.com/in/sarahchen",
    expertise: ["Machine Learning", "AI/NLP", "Platform Architecture"],
  },
  {
    name: "Marcus Rodriguez",
    title: "Head of Product",
    role: "Product",
    bio: "10+ years building B2B SaaS products. Previously led product at Upwork marketplace tools team. Deep understanding of freelancer and agency workflows.",
    avatar: "/avatars/marcus-rodriguez.jpg",
    linkedin: "https://linkedin.com/in/marcusrodriguez",
    expertise: ["Product Strategy", "UX Design", "Marketplace Dynamics"],
  },
  {
    name: "Emily Watson",
    title: "VP of Customer Success",
    role: "Customer Success",
    bio: "Scaled CS teams from 2 to 50+ at two unicorn startups. 98% customer retention rate. Obsessed with ensuring agencies succeed with GigRadar.",
    avatar: "/avatars/emily-watson.jpg",
    linkedin: "https://linkedin.com/in/emilywatson",
    expertise: ["Customer Success", "Agency Operations", "Onboarding"],
  },
];

const advisors: TeamMember[] = [
  {
    name: "Dr. James Mitchell",
    title: "AI Advisor",
    role: "Advisory",
    bio: "Professor of Computer Science at MIT. Published 50+ papers on machine learning and recommendation systems. Advisor to Fortune 500 companies on AI strategy.",
    avatar: "/avatars/james-mitchell.jpg",
    linkedin: "https://linkedin.com/in/jamesmitchell",
    expertise: ["AI Research", "Academic Collaboration", "Algorithm Design"],
  },
  {
    name: "Lisa Park",
    title: "Go-to-Market Advisor",
    role: "Advisory",
    bio: "Former CMO at HubSpot and Salesforce. Led teams generating $500M+ in revenue. Expert in B2B SaaS growth and channel strategy.",
    avatar: "/avatars/lisa-park.jpg",
    linkedin: "https://linkedin.com/in/lisapark",
    expertise: ["B2B Marketing", "Growth Strategy", "Brand Building"],
  },
  {
    name: "Raj Patel",
    title: "Marketplace Advisor",
    role: "Advisory",
    bio: "Co-founded and sold a marketplace platform to Fiverr. 20+ years in gig economy. Deep connections in the freelancing and agency ecosystem.",
    avatar: "/avatars/raj-patel.jpg",
    linkedin: "https://linkedin.com/in/rajpatel",
    expertise: ["Marketplace Economics", "Gig Economy", "Strategic Partnerships"],
  },
];

const TeamMemberCard = ({ member, isAdvisor = false }: { member: TeamMember; isAdvisor?: boolean }) => (
  <Card className="border-2 hover:shadow-xl transition-all h-full">
    <CardContent className="p-6">
      {/* Avatar */}
      <div className="relative mb-4">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
          onError={(e) => {
            // Fallback to UI Avatars
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=96&background=random&bold=true`;
          }}
        />
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
          >
            <Linkedin className="h-4 w-4 text-white" />
          </a>
        )}
      </div>

      {/* Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <div className="text-primary font-semibold mb-1">{member.title}</div>
        {!isAdvisor && member.email && (
          <a
            href={`mailto:${member.email}`}
            className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1"
          >
            <Mail className="h-3 w-3" />
            {member.email}
          </a>
        )}
      </div>

      {/* Bio */}
      <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
        {member.bio}
      </p>

      {/* Expertise Tags */}
      <div className="flex flex-wrap gap-2 justify-center">
        {member.expertise.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm font-semibold">
            MEET THE TEAM
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built by Experts, Backed by Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our team combines deep expertise in AI, SaaS, and the gig economy to help agencies scale on Upwork
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Core Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Advisors & Board</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advisors.map((advisor, index) => (
              <TeamMemberCard key={index} member={advisor} isAdvisor />
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <Card className="mt-12 bg-primary/5 border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Join Our Growing Team</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented engineers, designers, and agency success specialists to help us build the future of freelance automation.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:careers@gigradar.io" className="inline-flex items-center gap-2">
                <Mail className="h-5 w-5" />
                View Open Positions
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
