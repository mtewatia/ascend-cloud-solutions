import { Header } from '@/components/Header';
import { HeroSlider } from '@/components/HeroSlider';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Services } from '@/components/Services';
import { StatsCounter } from '@/components/StatsCounter';
import { Infographics } from '@/components/Infographics';
import { Methodology } from '@/components/Methodology';
import { CaseStudies } from '@/components/CaseStudies';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollEffects } from '@/components/ScrollEffects';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ScrollEffects />
      <Header />
      <HeroSlider />
      <WhyChooseUs />
      <StatsCounter />
      <Services />
      <Infographics />
      <Methodology />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
