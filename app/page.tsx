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

  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Istanbul Tourist Pass",
    "alternateName": "Istanbul Tourist Pass®",
    "description": "Book your perfect holiday with amazing deals on hotels, flights, tours and travel packages in Istanbul and Turkey. Access 100+ attractions with skip-the-line instant e-tickets.",
    "url": "https://istanbul-tourist-pass.vercel.app",
    "logo": "https://istanbul-tourist-pass.vercel.app/logo.png",
    "image": "https://images.istanbultouristpass.com/unsafe/1200x600/static.istanbultouristpass.com/app/img/hero-istanbul.jpg?v5.4.7",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Istanbul",
      "addressRegion": "Istanbul",
      "addressCountry": "TR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "12500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "€139-€229",
    "areaServed": {
      "@type": "City",
      "name": "Istanbul"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Istanbul Tourist Pass Packages",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Tourist Passes",
          "itemListElement": packages.slice(0, 3).map((pkg, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "TouristTrip",
              "name": pkg.title,
              "description": pkg.description
            },
            "price": pkg.price,
            "priceCurrency": "EUR"
          }))
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/istanbultouristpass",
      "https://www.instagram.com/istanbultouristpass",
      "https://twitter.com/istanbultouristpass"
    ]
  };

  return (
    <div className="bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }}
      />
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
