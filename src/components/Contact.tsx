import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Award
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Request Submitted Successfully",
      description: "Our AWS experts will contact you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Start Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cloud Journey Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a free AWS Well-Architected Review and cloud readiness assessment 
            from our certified experts. No commitment required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-up shadow-professional-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Award className="w-6 h-6 mr-3 text-primary" />
                Free Cloud Assessment
              </CardTitle>
              <p className="text-muted-foreground">
                Get expert insights into your current AWS setup and optimization opportunities.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Business Email *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input id="company" placeholder="Your Company Name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="migration">Cloud Migration</SelectItem>
                      <SelectItem value="optimization">Cost Optimization</SelectItem>
                      <SelectItem value="architecture">Architecture Review</SelectItem>
                      <SelectItem value="devops">DevOps & Automation</SelectItem>
                      <SelectItem value="managed">Managed Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your current AWS setup and goals..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Get Free Assessment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@cloudforge.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Office</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Response Time</div>
                    <div className="text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assessment Benefits */}
            <Card className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  What You'll Get
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Comprehensive AWS infrastructure assessment",
                    "Security and compliance evaluation", 
                    "Cost optimization recommendations",
                    "Performance improvement opportunities",
                    "Migration strategy and roadmap",
                    "Custom architectural recommendations"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* AWS Partnership Badge */}
            <Card className="bg-gradient-primary text-primary-foreground animate-scale-in" style={{ animationDelay: '600ms' }}>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">AWS Advanced Consulting Partner</h3>
                <p className="text-sm opacity-90">
                  Certified expertise with proven track record of successful AWS implementations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};