import HeroSection from './components/HeroSection';
import TrustBanner from './components/TrustBanner';
import TopLandmarks from './components/TopLandmarks';
import CardGrid from './components/CardGrid';
import CampaignCarousel from './components/CampaignCarousel';
import BenefitsSection from './components/BenefitsSection';
import MobileAppSection from './components/MobileAppSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import AboutSection from './components/AboutSection';
import { getDestinations, getTravelPackages } from './lib/api';

export default async function Home() {
  const destinations = await getDestinations();
  const packages = await getTravelPackages();

  return (
    <div className="bg-gray-50">
      <HeroSection />
      
      <TrustBanner />
      
      <TopLandmarks />
      
      <CampaignCarousel 
        items={packages.slice(0, 6)} 
        title="Special Offers & Packages"
      />
      
      <CardGrid items={destinations} />
      
      <BenefitsSection />
      
      <MobileAppSection />
      
      <TestimonialsSection />
      
      <NewsletterSection />
      
      <AboutSection />
    </div>
  );
}
