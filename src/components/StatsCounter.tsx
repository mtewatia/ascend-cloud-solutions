import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Award, Shield, Zap, Cloud } from 'lucide-react';

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ target, duration = 2000, suffix = '', prefix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(target * easeOutQuart));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef} className="animate-count-up">
      {prefix}{count}{suffix}
    </div>
  );
};

export const StatsCounter = () => {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Successful cloud transformations',
      color: 'from-primary to-accent'
    },
    {
      icon: Cloud,
      value: 1000,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'AWS implementations completed',
      color: 'from-accent to-warning'
    },
    {
      icon: Award,
      value: 50,
      suffix: '+',
      label: 'AWS Certifications',
      description: 'Certified cloud experts',
      color: 'from-warning to-secondary'
    },
    {
      icon: Shield,
      value: 99.9,
      suffix: '%',
      label: 'Uptime SLA',
      description: 'Guaranteed reliability',
      color: 'from-secondary to-info'
    },
    {
      icon: TrendingUp,
      value: 40,
      suffix: '%',
      label: 'Cost Reduction',
      description: 'Average savings achieved',
      color: 'from-info to-primary'
    },
    {
      icon: Zap,
      value: 10,
      suffix: 'x',
      label: 'Performance Boost',
      description: 'Faster deployment cycles',
      color: 'from-primary to-accent'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-card"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-glow opacity-30 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-secondary opacity-20 rounded-full blur-2xl floating-animation"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Track Record{' '}
            <span className="text-rainbow">Speaks Volumes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers don't lie. Here's the impact we've made for businesses worldwide 
            through our AWS cloud expertise and dedication to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="scroll-reveal card-hover group relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Glass Effect Container */}
              <div className="glass-effect rounded-2xl p-8 text-center relative">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Counter */}
                <div className="text-4xl lg:text-5xl font-bold text-rainbow mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Bar */}
        <div className="mt-16 glass-effect rounded-3xl p-8 scroll-reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">
                <Counter target={5} suffix=" Years" />
              </div>
              <div className="text-sm text-muted-foreground">AWS Partnership</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">
                <Counter target={24} suffix="/7" />
              </div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">
                <Counter target={15} suffix=" Countries" />
              </div>
              <div className="text-sm text-muted-foreground">Global Presence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">
                <Counter target={100} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};