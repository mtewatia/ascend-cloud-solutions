import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, DollarSign } from 'lucide-react';

const Careers = () => {
  const jobListings = [
    {
      id: 1,
      title: "Senior AWS Solutions Architect",
      department: "Cloud Architecture",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$140,000 - $180,000",
      description: "Lead cloud architecture design and implementation for enterprise clients. AWS certifications required.",
      requirements: [
        "AWS Solutions Architect Professional certification",
        "5+ years of cloud architecture experience",
        "Experience with Well-Architected Framework",
        "Strong communication skills"
      ]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "DevOps & Automation",
      location: "Austin, TX / Remote",
      type: "Full-time",
      salary: "$120,000 - $160,000",
      description: "Build and maintain CI/CD pipelines, infrastructure as code, and automation solutions.",
      requirements: [
        "AWS DevOps Professional certification preferred",
        "Experience with Terraform, CloudFormation",
        "Kubernetes and container orchestration",
        "Python or Go programming skills"
      ]
    },
    {
      id: 3,
      title: "Cloud Security Specialist",
      department: "Security & Compliance",
      location: "New York, NY / Remote",
      type: "Full-time",
      salary: "$130,000 - $170,000",
      description: "Implement security best practices and compliance frameworks across cloud environments.",
      requirements: [
        "AWS Security Specialty certification",
        "Knowledge of SOC 2, HIPAA, PCI compliance",
        "Experience with security automation",
        "Risk assessment and threat modeling"
      ]
    },
    {
      id: 4,
      title: "Cloud Migration Consultant",
      department: "Migration Services",
      location: "Chicago, IL / Remote",
      type: "Full-time",
      salary: "$110,000 - $150,000",
      description: "Guide clients through cloud migration projects using AWS Migration Acceleration Program.",
      requirements: [
        "AWS certifications (SAA or SAP)",
        "Experience with migration tools (AWS DMS, SCT)",
        "Project management experience",
        "Client-facing communication skills"
      ]
    },
    {
      id: 5,
      title: "Data Engineer",
      department: "Data & Analytics",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      salary: "$125,000 - $165,000",
      description: "Design and implement data pipelines, data lakes, and analytics solutions on AWS.",
      requirements: [
        "AWS Big Data Specialty certification preferred",
        "Experience with Redshift, Athena, Glue",
        "Python, SQL, and data modeling skills",
        "Real-time data processing experience"
      ]
    },
    {
      id: 6,
      title: "Technical Account Manager",
      department: "Client Success",
      location: "Los Angeles, CA / Remote",
      type: "Full-time",
      salary: "$100,000 - $140,000",
      description: "Manage client relationships and ensure successful cloud transformation outcomes.",
      requirements: [
        "AWS Cloud Practitioner certification minimum",
        "Account management or consulting experience",
        "Technical background preferred",
        "Excellent presentation and communication skills"
      ]
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
              Join Our Growing Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Help businesses transform with AWS cloud solutions. Build your career with a team of certified cloud experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Why Choose CloudForge?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Work alongside AWS certified architects and industry experts
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Competitive Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Excellent compensation with performance bonuses and equity options
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Flexible Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Remote-first culture with flexible hours and work-life balance
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    Continuous learning with AWS training and certification support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobListings.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <Badge variant="secondary">{job.type}</Badge>
                          <span>{job.salary}</span>
                        </CardDescription>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;