import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, TrendingUp, Shield, Clock, ArrowRight } from 'lucide-react';

export const CaseStudies = () => {
  const caseStudies = [
    {
      industry: "Healthcare",
      company: "Regional Healthcare Network",
      challenge: "Legacy infrastructure with compliance requirements and data security concerns",
      solution: "HIPAA-compliant AWS migration with enhanced security and disaster recovery",
      results: [
        { metric: "60%", label: "Cost Reduction" },
        { metric: "99.99%", label: "Uptime Achieved" },
        { metric: "3x", label: "Faster Deployments" }
      ],
      testimonial: "CloudForge transformed our infrastructure while maintaining strict HIPAA compliance. The cost savings and improved reliability have been remarkable.",
      clientRole: "CTO, Regional Healthcare Network"
    },
    {
      industry: "Fintech",
      company: "Digital Banking Platform",
      challenge: "Scalability issues during peak trading hours and regulatory compliance",
      solution: "Auto-scaling serverless architecture with real-time monitoring and compliance automation",
      results: [
        { metric: "40%", label: "Performance Improvement" },
        { metric: "100%", label: "Compliance Maintained" },
        { metric: "24/7", label: "Zero Downtime" }
      ],
      testimonial: "The serverless architecture CloudForge implemented has handled our highest trading volumes seamlessly while keeping us fully compliant.",
      clientRole: "Head of Technology, Digital Banking Platform"
    },
    {
      industry: "Manufacturing",
      company: "Global Manufacturing Corp",
      challenge: "Disparate systems across multiple regions with high operational costs",
      solution: "Centralized AWS infrastructure with global content delivery and IoT integration",
      results: [
        { metric: "45%", label: "Operational Cost Savings" },
        { metric: "50%", label: "Faster Time to Market" },
        { metric: "90%", label: "Reduced Manual Processes" }
      ],
      testimonial: "CloudForge unified our global operations on AWS, delivering significant cost savings and operational efficiency improvements.",
      clientRole: "VP of IT Operations, Global Manufacturing Corp"
    }
  ];

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Success Stories from{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Clients
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real customers. See how we've helped organizations across 
            industries achieve their cloud transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="group hover:shadow-professional-lg transition-all duration-300 border-border/50 hover:border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {study.industry}
                  </span>
                  <Quote className="w-6 h-6 text-primary/40" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {study.company}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Challenge & Solution */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-primary" />
                    Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {study.challenge}
                  </p>
                  
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    Solution
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                    Results
                  </h4>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {result.metric}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-accent/50 rounded-lg p-4">
                  <p className="text-sm text-foreground italic mb-3">
                    "{study.testimonial}"
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">
                    {study.clientRole}
                  </p>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Placeholder for actual client logos */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div 
                key={index}
                className="h-12 bg-muted rounded-lg animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};