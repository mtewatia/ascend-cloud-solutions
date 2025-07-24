import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileCheck, Shield, Globe, Building, Heart } from 'lucide-react';

const Compliance = () => {
  const complianceFrameworks = [
    {
      icon: Shield,
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 - Security, Availability, Processing Integrity, Confidentiality, and Privacy",
      status: "Certified",
      industries: ["All Industries"],
      details: "Annual audits conducted by independent third parties to verify our security controls and processes."
    },
    {
      icon: Heart,
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act - Healthcare data protection",
      status: "Compliant",
      industries: ["Healthcare", "Life Sciences"],
      details: "Comprehensive safeguards for protected health information (PHI) with business associate agreements available."
    },
    {
      icon: Building,
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard - Credit card data protection",
      status: "Certified",
      industries: ["Retail", "E-commerce", "Financial Services"],
      details: "Level 1 PCI DSS compliance for handling, processing, and storing credit card information."
    },
    {
      icon: Globe,
      name: "GDPR",
      description: "General Data Protection Regulation - EU data privacy and protection",
      status: "Compliant",
      industries: ["All Industries with EU presence"],
      details: "Full compliance with EU data protection regulations including data subject rights and privacy by design."
    },
    {
      icon: FileCheck,
      name: "FedRAMP",
      description: "Federal Risk and Authorization Management Program - US Government cloud security",
      status: "In Progress",
      industries: ["Government", "Public Sector"],
      details: "Currently pursuing FedRAMP Moderate authorization for government cloud services."
    },
    {
      icon: CheckCircle,
      name: "ISO 27001",
      description: "International standard for information security management systems",
      status: "In Progress",
      industries: ["All Industries"],
      details: "Implementing comprehensive information security management system with planned certification in 2024."
    }
  ];

  const industryCompliance = [
    {
      industry: "Healthcare & Life Sciences",
      requirements: ["HIPAA", "HITECH", "FDA 21 CFR Part 11", "GxP"],
      description: "Specialized compliance for protected health information and clinical trial data"
    },
    {
      industry: "Financial Services",
      requirements: ["PCI DSS", "SOX", "GLBA", "FFIEC"],
      description: "Banking-grade security and regulatory compliance for financial data"
    },
    {
      industry: "Government & Public Sector",
      requirements: ["FedRAMP", "FISMA", "NIST 800-53", "CJIS"],
      description: "Government security standards and authorization frameworks"
    },
    {
      industry: "Retail & E-commerce",
      requirements: ["PCI DSS", "CCPA", "CPRA", "COPPA"],
      description: "Consumer data protection and payment security compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Compliance & Regulations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We maintain the highest standards of compliance across multiple industries and regulatory frameworks 
              to ensure your cloud infrastructure meets all necessary requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Compliance Certifications & Standards
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <framework.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{framework.name}</CardTitle>
                          <Badge variant={framework.status === 'Certified' || framework.status === 'Compliant' ? 'default' : 'secondary'}>
                            {framework.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-4">
                      {framework.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{framework.details}</p>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Applicable Industries:</h4>
                      <div className="flex flex-wrap gap-1">
                        {framework.industries.map((industry, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Compliance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Industry-Specific Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industryCompliance.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.industry}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Key Requirements:</h4>
                    <div className="space-y-2">
                      {item.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-muted-foreground">{req}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Compliance Process
            </h2>
            <div className="space-y-8">
              
              <Card>
                <CardHeader>
                  <CardTitle>Assessment & Gap Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We begin every engagement with a comprehensive assessment of your current compliance posture, 
                    identifying gaps and requirements specific to your industry and regulatory environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance Design & Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our team designs and implements compliant cloud architectures that meet all relevant 
                    regulatory requirements while maintaining security, performance, and cost-effectiveness.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Documentation & Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide comprehensive documentation including compliance reports, audit artifacts, 
                    and evidence packages required for regulatory audits and certifications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Monitoring & Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuous monitoring ensures ongoing compliance with automated compliance checks, 
                    regular assessments, and updates to address evolving regulatory requirements.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Data Processing Agreement */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Data Processing Agreement (DPA)</CardTitle>
                <CardDescription className="text-center">
                  GDPR-compliant data processing terms for enterprise clients
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Our DPA Covers:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-muted-foreground">Categories of personal data processed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-muted-foreground">Purposes and legal basis for processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-muted-foreground">Data subject rights and procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-muted-foreground">Data breach notification procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-muted-foreground">International data transfer safeguards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-muted-foreground">Data retention and deletion policies</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center pt-4">
                  <p className="text-muted-foreground mb-4">
                    Request a copy of our Data Processing Agreement for your review
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Legal Team:</strong> legal@cloudforge.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>DPO Contact:</strong> dpo@cloudforge.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Compliance;