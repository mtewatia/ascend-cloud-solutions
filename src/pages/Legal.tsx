import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scale, FileText, Shield, Users } from 'lucide-react';

const Legal = () => {
  const legalDocuments = [
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      icon: Shield,
      link: "/privacy-policy"
    },
    {
      title: "Terms of Service",
      description: "Terms and conditions for using our services",
      icon: FileText,
      link: "/terms-of-service"
    },
    {
      title: "Security Compliance",
      description: "Our security standards and compliance certifications",
      icon: Scale,
      link: "/security"
    },
    {
      title: "Data Processing Agreement",
      description: "GDPR-compliant data processing terms for enterprise clients",
      icon: Users,
      link: "/compliance"
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
              Legal Information
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Important legal documents and policies that govern our services and protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalDocuments.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <doc.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {doc.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={doc.link}>View Document</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Company Information
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>CloudForge Technologies Inc.</CardTitle>
                <CardDescription>Legal Entity Information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Registered Address</h4>
                    <p className="text-muted-foreground">
                      123 Technology Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Registration</h4>
                    <p className="text-muted-foreground">
                      Delaware Corporation<br />
                      EIN: 12-3456789<br />
                      Registration #: 5432109
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Legal Contact</h4>
                    <p className="text-muted-foreground">
                      legal@cloudforge.com<br />
                      +1 (555) 123-4567<br />
                      Business Hours: 9 AM - 5 PM PST
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Licenses</h4>
                    <p className="text-muted-foreground">
                      AWS Advanced Partner<br />
                      SOC 2 Type II Certified<br />
                      GDPR Compliant
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Important Legal Notice</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The information provided on this website is for general informational purposes only. 
                  While we strive to keep the information up to date and correct, we make no representations 
                  or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                  suitability, or availability of the information contained on the website.
                </p>
                <p className="text-muted-foreground">
                  Any reliance you place on such information is therefore strictly at your own risk. 
                  In no event will we be liable for any loss or damage including without limitation, 
                  indirect or consequential loss or damage, or any loss or damage whatsoever arising 
                  from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
                <p className="text-muted-foreground">
                  Through this website, you are able to link to other websites which are not under our control. 
                  We have no control over the nature, content, and availability of those sites. The inclusion 
                  of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Last updated: January 2024
                  </p>
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

export default Legal;