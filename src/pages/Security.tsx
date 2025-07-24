import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Data Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption"
    },
    {
      icon: Lock,
      title: "Access Controls",
      description: "Multi-factor authentication and role-based access controls protect all systems"
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous security monitoring and threat detection across all infrastructure"
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Dedicated security incident response team with 1-hour response time SLA"
    },
    {
      icon: CheckCircle,
      title: "Regular Audits",
      description: "Quarterly security audits and annual penetration testing by third parties"
    },
    {
      icon: Users,
      title: "Employee Training",
      description: "Mandatory security awareness training and background checks for all staff"
    }
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Independently verified security controls and processes",
      status: "Current"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      status: "In Progress"
    },
    {
      name: "AWS Well-Architected",
      description: "Security pillar compliance for all client implementations",
      status: "Current"
    },
    {
      name: "GDPR Compliant",
      description: "Full compliance with EU data protection regulations",
      status: "Current"
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
              Security & Trust
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Your data security is our top priority. We implement enterprise-grade security measures 
              to protect your information and maintain the highest standards of trust.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Comprehensive Security Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Security Certifications & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <Badge variant={cert.status === 'Current' ? 'default' : 'secondary'}>
                        {cert.status}
                      </Badge>
                    </div>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Policies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Security Policies & Procedures
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Protection Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement a comprehensive data protection framework that includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Data classification and handling procedures</li>
                  <li>Encryption requirements for data at rest and in transit</li>
                  <li>Data retention and disposal policies</li>
                  <li>Access logging and monitoring</li>
                  <li>Regular data protection impact assessments</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Incident Response Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our security incident response plan ensures rapid detection, containment, and resolution:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>24/7 security operations center monitoring</li>
                  <li>1-hour response time for critical security incidents</li>
                  <li>Automated threat detection and alerting</li>
                  <li>Forensic investigation capabilities</li>
                  <li>Communication and notification procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Access Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We maintain strict access controls and authentication measures:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Multi-factor authentication for all system access</li>
                  <li>Role-based access control (RBAC) implementation</li>
                  <li>Regular access reviews and certification</li>
                  <li>Privileged access management (PAM) solution</li>
                  <li>Just-in-time access for administrative functions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Network Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our network infrastructure is protected by multiple layers of security:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Network segmentation and micro-segmentation</li>
                  <li>Intrusion detection and prevention systems</li>
                  <li>Web application firewalls (WAF)</li>
                  <li>DDoS protection and mitigation</li>
                  <li>VPN access for remote connectivity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vulnerability Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We maintain a proactive approach to identifying and addressing security vulnerabilities:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Continuous vulnerability scanning and assessment</li>
                  <li>Automated patch management processes</li>
                  <li>Annual penetration testing by certified firms</li>
                  <li>Bug bounty program for responsible disclosure</li>
                  <li>Security code reviews for all applications</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Security Questions or Concerns?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our security team is available to address any questions about our security practices 
              or to discuss specific compliance requirements for your organization.
            </p>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Security Team:</strong> security@cloudforge.com
              </p>
              <p className="text-muted-foreground">
                <strong>Security Incident Reporting:</strong> incidents@cloudforge.com
              </p>
              <p className="text-muted-foreground">
                <strong>Phone:</strong> +1 (555) 123-4567 (24/7 for critical incidents)
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;