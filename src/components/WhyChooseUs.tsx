import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Award, 
  DollarSign, 
  Shield, 
  Wrench, 
  Headphones,
  CheckCircle 
} from 'lucide-react';

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "Expertise & Certification",
      description: "AWS certified architects with deep expertise in Well-Architected Framework, specialized certifications, and CNCF partnerships.",
      highlights: [
        "20+ AWS Certified Professionals",
        "Well-Architected Partners",
        "Advanced Consulting Partner"
      ]
    },
    {
      icon: DollarSign,
      title: "Cost & Performance Optimization",
      description: "Proven track record of delivering significant cost savings while improving performance and scalability.",
      highlights: [
        "Average 40% cost reduction",
        "Performance optimization",
        "Resource rightsizing"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance expertise across industries and regulatory frameworks.",
      highlights: [
        "SOC 2, HIPAA, PCI DSS",
        "Zero-trust architecture",
        "24/7 security monitoring"
      ]
    },
    {
      icon: Wrench,
      title: "Architecture & Migration",
      description: "Comprehensive Well-Architected reviews and migration acceleration with minimal downtime using AWS MAP.",
      highlights: [
        "Well-Architected Reviews",
        "Migration Acceleration Program",
        "Zero-downtime deployments"
      ]
    },
    {
      icon: Headphones,
      title: "Continuous Support",
      description: "24/7 monitoring, proactive support, comprehensive documentation, and team training programs.",
      highlights: [
        "24/7 monitoring & support",
        "Proactive maintenance",
        "Knowledge transfer"
      ]
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose CloudForge as Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AWS Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With proven expertise and a track record of successful cloud transformations, 
            we deliver measurable business outcomes for enterprises worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-professional-lg transition-all duration-300 border-border/50 hover:border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { metric: "500+", label: "Projects Delivered" },
            { metric: "99.9%", label: "Uptime SLA" },
            { metric: "40%", label: "Average Cost Savings" },
            { metric: "24/7", label: "Expert Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.metric}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};