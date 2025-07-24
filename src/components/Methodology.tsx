import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Search, 
  Lightbulb, 
  Rocket, 
  Settings, 
  Headphones,
  ArrowRight 
} from 'lucide-react';

export const Methodology = () => {
  const phases = [
    {
      icon: Search,
      title: "Assess",
      description: "Comprehensive evaluation of your current infrastructure, applications, and business requirements.",
      activities: [
        "Infrastructure audit",
        "Security assessment", 
        "Cost analysis",
        "Workload discovery"
      ]
    },
    {
      icon: Lightbulb,
      title: "Design",
      description: "Architect optimal AWS solutions following Well-Architected Framework principles and best practices.",
      activities: [
        "Solution architecture",
        "Security design",
        "Migration strategy",
        "Cost optimization plan"
      ]
    },
    {
      icon: Rocket,
      title: "Migrate",
      description: "Execute migration with minimal business disruption using proven methodologies and automation tools.",
      activities: [
        "Phased migration",
        "Testing & validation",
        "Cutover execution", 
        "Risk mitigation"
      ]
    },
    {
      icon: Settings,
      title: "Optimize",
      description: "Continuous improvement and optimization for performance, cost, security, and operational efficiency.",
      activities: [
        "Performance tuning",
        "Cost optimization",
        "Security hardening",
        "Process automation"
      ]
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Ongoing managed services with 24/7 monitoring, proactive maintenance, and expert support.",
      activities: [
        "24/7 monitoring",
        "Incident response",
        "Preventive maintenance",
        "Team training"
      ]
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Proven{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Engagement Methodology
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured, risk-minimized approach to cloud transformation with knowledge transfer 
            and collaboration at every step, following AWS Well-Architected Framework principles.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary/20 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {phases.map((phase, index) => (
              <Card 
                key={index}
                className="group hover:shadow-professional-lg transition-all duration-300 border-border/50 hover:border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <phase.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {index + 1}. {phase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 text-center">
                    {phase.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Principles */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-card animate-scale-in">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Knowledge Transfer
            </h3>
            <p className="text-muted-foreground">
              Comprehensive documentation and training ensure your team can effectively manage and operate the new cloud environment.
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gradient-card animate-scale-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Collaborative Approach
            </h3>
            <p className="text-muted-foreground">
              Close partnership with your internal teams throughout the engagement, ensuring alignment with business objectives.
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gradient-card animate-scale-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Well-Architected Framework
            </h3>
            <p className="text-muted-foreground">
              Every project leverages AWS Well-Architected principles for security, reliability, performance, cost optimization, and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};