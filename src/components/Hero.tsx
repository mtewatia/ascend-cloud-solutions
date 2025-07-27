import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-glow opacity-40"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full opacity-20 blur-3xl floating-animation"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-secondary rounded-full opacity-20 blur-2xl floating-animation" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground shadow-glow animate-glow">
                <span className="text-sm font-medium">🏆 AWS Premier Consulting Partner</span>
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
              <Button size="lg" className="bg-gradient-primary shadow-glow hover:shadow-professional-hero transition-all duration-500 hover:scale-105 pulse-glow">
                Start Your Cloud Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="glass-effect border-primary/30 hover:bg-gradient-accent hover:text-white transition-all duration-300">
                Free Well-Architected Review
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-6">Trusted by Leading Organizations</p>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-4xl overflow-hidden"
              >
                <CarouselContent className="-ml-2">
                  {Array.from({ length: 20 }, (_, i) => (
                    <CarouselItem key={i} className="pl-2 basis-1/6 lg:basis-1/8">
                      <div className="p-1">
                        <div className="w-20 h-12 bg-muted/50 rounded border border-border/50 flex items-center justify-center hover:bg-muted transition-colors duration-200">
                          <span className="text-xs text-muted-foreground font-medium">
                            Logo {i + 1}
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-glow card-hover">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Cloud infrastructure team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/30"></div>
              <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
              
              {/* Floating Stats Cards */}
              <div className="absolute top-4 right-4 glass-effect rounded-xl p-4 shadow-glow animate-bounce-in">
                <div className="text-2xl font-bold text-gradient">99.9%</div>
                <div className="text-xs text-white/80">Uptime SLA</div>
              </div>
              
              <div className="absolute bottom-4 left-4 glass-effect rounded-xl p-4 shadow-glow animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-bold text-gradient">40%</div>
                <div className="text-xs text-white/80">Cost Reduction</div>
              </div>
              
              <div className="absolute top-1/2 left-4 glass-effect rounded-xl p-3 shadow-glow animate-bounce-in" style={{ animationDelay: '1s' }}>
                <div className="text-lg font-bold text-gradient">24/7</div>
                <div className="text-xs text-white/80">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};