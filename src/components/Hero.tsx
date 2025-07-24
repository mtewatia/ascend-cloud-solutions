import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-card opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">AWS Premier Consulting Partner</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Accelerate Your{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AWS Cloud Journey
                </span>{' '}
                with Certified Experts
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your business with enterprise-grade AWS cloud solutions. 
                We deliver security, scalability, cost optimization, and continuous 
                managed support to accelerate your digital transformation.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Performance Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Cost Efficient</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary shadow-professional-md hover:shadow-professional-lg transition-all duration-300">
                Start Your Cloud Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
                Free Well-Architected Review
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
              <div className="flex items-center space-x-8 opacity-60">
                {/* Placeholder for client logos */}
                <div className="h-8 w-24 bg-muted rounded"></div>
                <div className="h-8 w-24 bg-muted rounded"></div>
                <div className="h-8 w-24 bg-muted rounded"></div>
                <div className="h-8 w-24 bg-muted rounded"></div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-up">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-professional-hero">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Cloud infrastructure team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/20"></div>
              
              {/* Floating Stats Cards */}
              <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-professional-md">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime SLA</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-professional-md">
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-xs text-muted-foreground">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};