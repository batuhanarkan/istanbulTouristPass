import HeroSection from './components/HeroSection';
import CardGrid from './components/CardGrid';
import CampaignCarousel from './components/CampaignCarousel';
import MobileAppSection from './components/MobileAppSection';
import PopularDestinations from './components/PopularDestinations';
import AboutSection from './components/AboutSection';
import { getDestinations, getTravelPackages } from './lib/api';

export default async function Home() {
  const destinations = await getDestinations();
  const packages = await getTravelPackages();

  return (
    <div className="bg-gray-50">
      <HeroSection />
      
      <CampaignCarousel 
        items={packages.slice(0, 6)} 
        title="Special Offers & Campaigns"
      />
      
      <CardGrid items={destinations} />
      
      <CampaignCarousel 
        items={packages.slice(3, 6)} 
        title="Best Deals This Week"
      />
      
      <MobileAppSection />
      
      <PopularDestinations />
      
      <AboutSection />
    </div>
  );
}
