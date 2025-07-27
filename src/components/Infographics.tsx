import { ArrowRight, CheckCircle, Clock, Users, Zap, Shield, TrendingUp } from 'lucide-react';

export const Infographics = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current infrastructure and business requirements',
      icon: Users,
      color: 'from-primary to-accent'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Custom roadmap creation with timeline and resource allocation',
      icon: CheckCircle,
      color: 'from-accent to-warning'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Seamless migration and deployment with zero downtime',
      icon: Zap,
      color: 'from-warning to-secondary'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Performance tuning and cost optimization',
      icon: TrendingUp,
      color: 'from-secondary to-info'
    },
    {
      number: '05',
      title: 'Ongoing Support',
      description: '24/7 monitoring and continuous improvement',
      icon: Shield,
      color: 'from-info to-primary'
    }
  ];

  const benefits = [
    { label: 'Faster Deployment', value: '10x', color: 'text-primary' },
    { label: 'Cost Reduction', value: '40%', color: 'text-accent' },
    { label: 'Uptime Guarantee', value: '99.9%', color: 'text-warning' },
    { label: 'Performance Boost', value: '300%', color: 'text-secondary' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-card"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-glow opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Process Infographic */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Proven{' '}
            <span className="text-rainbow">Methodology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach that ensures success at every step of your cloud journey
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative mb-20">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-rainbow opacity-50 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="scroll-reveal relative group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Container */}
                <div className="text-center">
                  {/* Step Number */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-rainbow group-hover:scale-110 transition-all duration-500 relative`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${step.color} opacity-20 flex items-center justify-center group-hover:opacity-40 transition-opacity duration-500`}>
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-8 text-primary/50">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Infographic */}
        <div className="glass-effect rounded-3xl p-8 lg:p-12 scroll-reveal">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Measurable{' '}
              <span className="text-rainbow">Results</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Real impact on your business metrics
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-4">
                  {/* Progress Circle */}
                  <div className="w-24 h-24 mx-auto relative">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="75, 100"
                        className="text-muted/20"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={`${75 + index * 5}, 100`}
                        className={`${benefit.color} transition-all duration-1000 group-hover:brightness-125`}
                        style={{
                          animation: `slideInUp 1s ease-out ${index * 200}ms both`
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-2xl font-bold ${benefit.color}`}>
                        {benefit.value}
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {benefit.label}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mt-20 scroll-reveal">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Typical Project{' '}
              <span className="text-rainbow">Timeline</span>
            </h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-50"></div>
            
            <div className="space-y-12">
              {[
                { week: 'Week 1-2', task: 'Assessment & Planning', duration: '2 weeks' },
                { week: 'Week 3-6', task: 'Infrastructure Setup', duration: '4 weeks' },
                { week: 'Week 7-10', task: 'Migration & Testing', duration: '4 weeks' },
                { week: 'Week 11-12', task: 'Optimization & Go-Live', duration: '2 weeks' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="glass-effect rounded-xl p-6 inline-block group hover:scale-105 transition-transform duration-300">
                      <div className="font-bold text-primary mb-2">{item.week}</div>
                      <div className="text-foreground font-medium mb-1">{item.task}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow relative z-10"></div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};