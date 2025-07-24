import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Services } from '@/components/Services';
import { Methodology } from '@/components/Methodology';
import { CaseStudies } from '@/components/CaseStudies';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Methodology />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
