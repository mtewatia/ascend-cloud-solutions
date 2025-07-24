import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Globe, TrendingUp, Shield, Clock } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      certifications: ["AWS Solutions Architect Professional", "AWS DevOps Professional"],
      experience: "12+ years in cloud architecture"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      certifications: ["AWS Solutions Architect Professional", "AWS Security Specialty"],
      experience: "10+ years in enterprise cloud solutions"
    },
    {
      name: "Emily Thompson",
      role: "VP of Engineering",
      certifications: ["AWS Solutions Architect Professional", "AWS Machine Learning"],
      experience: "8+ years in cloud migration and modernization"
    },
    {
      name: "David Park",
      role: "Principal Cloud Architect",
      certifications: ["AWS Solutions Architect Professional", "AWS Big Data Specialty"],
      experience: "9+ years in data and analytics on AWS"
    }
  ];

  const milestones = [
    { year: "2020", event: "CloudForge founded with vision to democratize cloud adoption" },
    { year: "2021", event: "Achieved AWS Select Consulting Partner status" },
    { year: "2022", event: "Completed 50+ successful cloud migrations" },
    { year: "2023", event: "Advanced to AWS Advanced Consulting Partner tier" },
    { year: "2024", event: "Expanded to 50+ team members across North America" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About CloudForge
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're a team of AWS certified experts dedicated to helping businesses accelerate their cloud transformation journey with confidence and success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  To empower businesses to harness the full potential of AWS cloud services through expert guidance, 
                  proven methodologies, and comprehensive support that drives innovation and growth.
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted AWS consulting partner, known for delivering exceptional results 
                  and building long-lasting relationships with our clients.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle>200+</CardTitle>
                    <CardDescription>Successful Projects</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle>50+</CardTitle>
                    <CardDescription>Team Members</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle>15+</CardTitle>
                    <CardDescription>Countries Served</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <CardTitle>24/7</CardTitle>
                    <CardDescription>Support Available</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                    <div className="space-y-1">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="secondary" className="text-xs mr-1 mb-1">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Journey
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-lg text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Certifications & Partnerships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>AWS Advanced Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Recognized AWS Advanced Consulting Partner with proven expertise and customer success.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Security & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    SOC 2 Type II compliant with expertise in HIPAA, PCI DSS, and other frameworks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Certified Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    100% of our architects hold AWS Professional-level certifications.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12">
              <Button size="lg" className="bg-gradient-primary">
                Get Started with CloudForge
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;