import { Cloud, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const navigation = {
    services: [
      { name: 'Cloud Migration', href: '#' },
      { name: 'Well-Architected Review', href: '#' },
      { name: 'DevOps & Automation', href: '#' },
      { name: 'Managed Services', href: '#' },
    ],
    solutions: [
      { name: 'Healthcare', href: '#' },
      { name: 'Fintech', href: '#' },
      { name: 'Manufacturing', href: '#' },
      { name: 'Retail', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CloudForge</span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Your trusted AWS Advanced Consulting Partner, helping enterprises 
              accelerate their cloud journey with proven expertise and comprehensive solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-background/70" />
                <span className="text-sm text-background/70">hello@cloudforge.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-background/70" />
                <span className="text-sm text-background/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-background/70" />
                <span className="text-sm text-background/70">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-background mb-4">Solutions</h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-background mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm text-background/70 hover:text-background transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-background mb-2">
                Stay Updated
              </h3>
              <p className="text-background/70">
                Get the latest AWS insights, best practices, and industry trends delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-sm text-background/70">
                © 2024 CloudForge. All rights reserved.
              </p>
              
              {/* AWS Partner Badge */}
              <div className="flex items-center space-x-2 px-3 py-1 bg-background/10 rounded-full">
                <div className="w-4 h-4 bg-primary rounded-sm"></div>
                <span className="text-xs text-background/70">AWS Advanced Partner</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4 text-background/70" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors duration-200"
              >
                <Twitter className="w-4 h-4 text-background/70" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors duration-200"
              >
                <Github className="w-4 h-4 text-background/70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};