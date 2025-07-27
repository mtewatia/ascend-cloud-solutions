import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Shield, Zap, TrendingUp, Cloud, Users, Award } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from '@/components/ui/carousel';

const slides = [
  {
    id: 1,
    title: "Accelerate Your AWS Cloud Journey",
    subtitle: "with Certified Experts",
    description: "Transform your business with enterprise-grade AWS cloud solutions. We deliver security, scalability, cost optimization, and continuous managed support.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    badge: "🏆 AWS Premier Partner",
    stats: [
      { icon: Shield, label: "Enterprise Security", value: "99.9%" },
      { icon: Zap, label: "Performance Boost", value: "300%" },
      { icon: TrendingUp, label: "Cost Reduction", value: "40%" }
    ]
  },
  {
    id: 2,
    title: "Cloud Migration Made Simple",
    subtitle: "Zero Downtime Guaranteed",
    description: "Seamless migration to AWS with our proven methodologies. Our certified architects ensure your transition is smooth, secure, and optimized.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    badge: "⚡ Migration Experts",
    stats: [
      { icon: Cloud, label: "Successful Migrations", value: "500+" },
      { icon: Users, label: "Happy Clients", value: "200+" },
      { icon: Award, label: "AWS Certifications", value: "50+" }
    ]
  },
  {
    id: 3,
    title: "DevOps Automation Excellence",
    subtitle: "CI/CD Pipelines That Scale",
    description: "Implement Infrastructure as Code and automated deployment pipelines for faster, more reliable releases with our DevOps expertise.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    badge: "🚀 DevOps Leaders",
    stats: [
      { icon: Zap, label: "Deployment Speed", value: "10x" },
      { icon: Shield, label: "Uptime SLA", value: "99.99%" },
      { icon: TrendingUp, label: "Time to Market", value: "70%" }
    ]
  }
];

export const HeroSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-primary rounded-full opacity-30 blur-3xl floating-animation"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-accent rounded-full opacity-25 blur-2xl floating-animation rotate-slow"></div>
      <div className="absolute top-1/2 right-20 w-60 h-60 bg-gradient-secondary rounded-full opacity-20 blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
      
      <Carousel setApi={setApi} className="h-full">
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-full flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8 text-white">
                      <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect animate-glow">
                          <span className="text-sm font-medium">{slide.badge}</span>
                        </div>
                        
                        <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                          {slide.title}{' '}
                          <span className="text-rainbow block mt-2">
                            {slide.subtitle}
                          </span>
                        </h1>
                        
                        <p className="text-xl lg:text-2xl leading-relaxed text-white/90">
                          {slide.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {slide.stats.map((stat, idx) => (
                          <div key={idx} className="text-center glass-effect p-4 rounded-xl">
                            <stat.icon className="w-8 h-8 text-warning mx-auto mb-2" />
                            <div className="text-2xl font-bold text-rainbow">{stat.value}</div>
                            <div className="text-sm text-white/80">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-gradient-primary shadow-rainbow hover:shadow-glow transition-all duration-500 hover:scale-105 pulse-glow text-lg px-8 py-6">
                          Start Your Journey
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button variant="outline" size="lg" className="glass-effect border-white/30 hover:bg-white/20 text-white hover:text-white text-lg px-8 py-6">
                          Free Consultation
                        </Button>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="relative hidden lg:block">
                      <div className="w-full h-96 relative">
                        {/* Animated Cards */}
                        <div className="absolute top-4 right-4 glass-effect rounded-xl p-6 shadow-rainbow animate-bounce-in">
                          <div className="text-3xl font-bold text-rainbow">99.9%</div>
                          <div className="text-sm text-white/80">Uptime SLA</div>
                        </div>
                        
                        <div className="absolute bottom-4 left-4 glass-effect rounded-xl p-6 shadow-glow animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                          <div className="text-3xl font-bold text-rainbow">40%</div>
                          <div className="text-sm text-white/80">Cost Savings</div>
                        </div>
                        
                        <div className="absolute top-1/2 left-8 glass-effect rounded-xl p-4 shadow-glow animate-bounce-in" style={{ animationDelay: '1s' }}>
                          <div className="text-2xl font-bold text-rainbow">24/7</div>
                          <div className="text-xs text-white/80">Support</div>
                        </div>

                        <div className="absolute top-8 left-1/2 glass-effect rounded-xl p-4 shadow-rainbow animate-bounce-in" style={{ animationDelay: '1.5s' }}>
                          <div className="text-2xl font-bold text-rainbow">500+</div>
                          <div className="text-xs text-white/80">Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          className="glass-effect border-white/30 text-white hover:bg-white/20"
          onClick={() => api?.scrollPrev()}
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>

        {/* Dots */}
        <div className="flex space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-gradient-primary scale-125 shadow-glow' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="glass-effect border-white/30 text-white hover:bg-white/20"
          onClick={() => api?.scrollNext()}
        >
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};