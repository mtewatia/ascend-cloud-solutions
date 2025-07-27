import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Search, 
  GitBranch, 
  Boxes, 
  BarChart3, 
  ShieldCheck,
  ArrowRight,
  Heart,
  CreditCard,
  Tv,
  Scale,
  Factory,
  ShoppingCart
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration & Modernization",
      description: "Seamless migration to AWS with minimal downtime using proven methodologies and AWS MAP program.",
      features: [
        "Lift & Shift Migration",
        "Application Refactoring", 
        "Legacy System Modernization",
        "Migration Acceleration Program (MAP)"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Search,
      title: "Well-Architected Review & Optimization", 
      description: "Comprehensive assessment and optimization of your AWS infrastructure following the Well-Architected Framework.",
      features: [
        "Security Assessment",
        "Cost Optimization",
        "Performance Tuning", 
        "Operational Excellence"
      ],
      color: "bg-green-500"
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD Automation",
      description: "Implement Infrastructure as Code and automated deployment pipelines for faster, more reliable releases.",
      features: [
        "Terraform & AWS CDK",
        "CI/CD Pipeline Setup",
        "Automated Testing",
        "Infrastructure as Code"
      ],
      color: "bg-purple-500"
    },
    {
      icon: Boxes,
      title: "Serverless & Microservices",
      description: "Build scalable, cost-effective solutions using AWS Lambda, ECS, EKS, and containerization technologies.",
      features: [
        "AWS Lambda Functions",
        "Container Orchestration",
        "API Gateway Integration",
        "Event-Driven Architecture"
      ],
      color: "bg-orange-500"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics Solutions",
      description: "Unlock insights from your data with AWS analytics services, data lakes, and AI/ML implementations.",
      features: [
        "AWS QuickSight Dashboards",
        "Data Lake Architecture",
        "Machine Learning Pipelines",
        "Real-time Analytics"
      ],
      color: "bg-cyan-500"
    },
    {
      icon: ShieldCheck,
      title: "Managed Cloud Services",
      description: "Comprehensive ongoing support with monitoring, backup, security operations, and performance optimization.",
      features: [
        "24/7 Infrastructure Monitoring",
        "Automated Backup Solutions",
        "Security Operations Center",
        "Performance Optimization"
      ],
      color: "bg-red-500"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AWS Cloud Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From migration to optimization, we provide end-to-end AWS cloud services 
            tailored to your business needs and industry requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group card-hover border-border/50 hover:border-primary/30 animate-slide-up relative overflow-hidden bg-gradient-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500 hover:shadow-glow border-primary/20">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Focus */}
        <div className="mt-20 bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-professional-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
          <div className="text-center mb-12 relative">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Industry{' '}
              <span className="text-gradient">Expertise</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Deep domain knowledge across key verticals with compliance and regulatory understanding
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Healthcare", icon: Heart },
              { name: "Fintech", icon: CreditCard },
              { name: "Media & Entertainment", icon: Tv }, 
              { name: "Legal Tech", icon: Scale },
              { name: "Manufacturing", icon: Factory },
              { name: "Retail & E-commerce", icon: ShoppingCart }
            ].map((industry, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl glass-effect hover:bg-white/20 transition-all duration-500 animate-scale-in card-hover group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-glow">
                  <industry.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-sm font-medium text-foreground group-hover:text-gradient transition-all duration-300">{industry.name}</div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};