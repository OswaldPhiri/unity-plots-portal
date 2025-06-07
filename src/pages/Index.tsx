
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import FeaturedPlots from '@/components/home/FeaturedPlots';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BenefitsSection />
      <FeaturedPlots />
    </Layout>
  );
};

export default Index;
