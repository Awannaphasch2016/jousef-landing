import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, FileText, Star } from "lucide-react";

interface StatBlock {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  color: string;
}

const stats: StatBlock[] = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "800+",
    label: "Scaling Agencies",
    description: "Active agencies using GigRadar to grow their Upwork business",
    color: "blue",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    value: "$15M+",
    label: "Connects Spent",
    description: "Total Upwork connects optimized through our platform",
    color: "green",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    value: "20,319",
    label: "Contracts Won",
    description: "Successful contracts secured by our users in 2024",
    color: "purple",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: "3.2x",
    label: "Average ROI",
    description: "Average revenue increase within first 6 months",
    color: "orange",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
    iconBg: "bg-green-100",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-600",
    iconBg: "bg-orange-100",
  },
};

// Growth data for graph visualization (monthly revenue growth)
const growthData = [
  { month: "Jan", value: 10 },
  { month: "Feb", value: 15 },
  { month: "Mar", value: 25 },
  { month: "Apr", value: 35 },
  { month: "May", value: 50 },
  { month: "Jun", value: 70 },
  { month: "Jul", value: 95 },
  { month: "Aug", value: 120 },
  { month: "Sep", value: 150 },
  { month: "Oct", value: 180 },
  { month: "Nov", value: 220 },
  { month: "Dec", value: 250 },
];

export const StatsTrust = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && svgRef.current) {
      // Animate the SVG path drawing
      const path = svgRef.current.querySelector("path");
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;

        // Trigger animation
        setTimeout(() => {
          path.style.transition = "stroke-dashoffset 2s ease-in-out";
          path.style.strokeDashoffset = "0";
        }, 100);
      }
    }
  }, [isVisible]);

  // Calculate SVG path for growth graph
  const graphWidth = 600;
  const graphHeight = 200;
  const padding = 20;
  const maxValue = Math.max(...growthData.map(d => d.value));

  const points = growthData.map((data, index) => {
    const x = padding + (index / (growthData.length - 1)) * (graphWidth - 2 * padding);
    const y = graphHeight - padding - ((data.value / maxValue) * (graphHeight - 2 * padding));
    return `${x},${y}`;
  });

  const pathD = `M ${points.join(" L ")}`;

  return (
    <section ref={sectionRef} id="stats" className="py-20 bg-white border-y border-gray-100">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm font-semibold">
            TRUSTED BY THOUSANDS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of agencies already scaling their Upwork revenue with GigRadar
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const colors = colorClasses[stat.color as keyof typeof colorClasses];

            return (
              <Card
                key={index}
                className={`${colors.bg} ${colors.border} border-2 p-6 hover:shadow-lg transition-all ${
                  isVisible ? "animate-in fade-in slide-in-from-bottom-4 fill-mode-both" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms`, animationDuration: "600ms" }}
              >
                <div className={`${colors.iconBg} w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${colors.text}`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl font-bold mb-2 ${colors.text}`}>
                  {stat.value}
                </div>
                <div className="font-semibold text-lg mb-2 text-foreground">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Graph Visualization */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Average Agency Revenue Growth</h3>
            <p className="text-muted-foreground">
              Typical monthly revenue trajectory after implementing GigRadar
            </p>
          </div>

          {/* SVG Graph */}
          <div className="flex justify-center">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${graphWidth} ${graphHeight}`}
              className="w-full max-w-3xl h-auto"
            >
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((percent) => {
                const y = graphHeight - padding - (percent / 100) * (graphHeight - 2 * padding);
                return (
                  <g key={percent}>
                    <line
                      x1={padding}
                      y1={y}
                      x2={graphWidth - padding}
                      y2={y}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                    <text
                      x={padding - 10}
                      y={y + 4}
                      fontSize="10"
                      fill="#6b7280"
                      textAnchor="end"
                    >
                      ${Math.round((maxValue * percent) / 100)}K
                    </text>
                  </g>
                );
              })}

              {/* Area under curve */}
              <path
                d={`${pathD} L ${graphWidth - padding},${graphHeight - padding} L ${padding},${graphHeight - padding} Z`}
                fill="url(#gradient)"
                opacity="0.2"
              />

              {/* Main line */}
              <path
                d={pathD}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {growthData.map((data, index) => {
                const x = padding + (index / (growthData.length - 1)) * (graphWidth - 2 * padding);
                const y = graphHeight - padding - ((data.value / maxValue) * (graphHeight - 2 * padding));

                return (
                  <g key={index}>
                    <circle
                      cx={x}
                      cy={y}
                      r="4"
                      fill="white"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      className={isVisible ? "animate-in fade-in zoom-in fill-mode-both" : "opacity-0"}
                      style={{ animationDelay: `${2000 + index * 50}ms`, animationDuration: "300ms" }}
                    />
                    {/* Month labels */}
                    <text
                      x={x}
                      y={graphHeight - 5}
                      fontSize="10"
                      fill="#6b7280"
                      textAnchor="middle"
                    >
                      {data.month}
                    </text>
                  </g>
                );
              })}

              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Graph annotations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">0-3 Months</div>
              <div className="text-sm text-muted-foreground">
                Setup & optimization phase - 50% revenue increase
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">3-6 Months</div>
              <div className="text-sm text-muted-foreground">
                Scaling phase - 2x revenue increase
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">6-12 Months</div>
              <div className="text-sm text-muted-foreground">
                Sustained growth - 3-4x revenue increase
              </div>
            </div>
          </div>
        </div>

        {/* Trustpilot Rating */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.9/5</span>
          </div>
          <p className="text-muted-foreground">
            Based on 1,247 reviews on Trustpilot
          </p>
        </div>
      </div>
    </section>
  );
};
