import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "./CTASection";

export const metadata: Metadata = {
  title: "Galata Tower - Skip the Line Entry with Audio Guide | Istanbul Tourist Pass",
  description: "Visit Galata Tower with hosted entry and audio guide. Skip the ticket lines and enjoy panoramic 360-degree views of Istanbul. Included with Istanbul Tourist Pass®. Available daily except Fridays.",
  keywords: "Galata Tower, Istanbul landmarks, historical sites Istanbul, Galata Tower guided tour, skip the line Galata Tower, Galata Tower audio guide, Istanbul observation deck, medieval tower Istanbul, Beyoğlu attractions, Istanbul tourist attractions",
  openGraph: {
    title: "Galata Tower - Skip the Line Entry with Audio Guide | Istanbul Tourist Pass",
    description: "Visit Galata Tower with hosted entry and audio guide. Skip the ticket lines and enjoy panoramic 360-degree views of Istanbul.",
    type: "website",
    images: [
      {
        url: "https://images.istanbultouristpass.com/unsafe/1200x630/static.istanbultouristpass.com/app/img/inclusions/thumbnails/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg?v5.4.7",
        width: 1200,
        height: 630,
        alt: "Galata Tower Istanbul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galata Tower - Skip the Line Entry with Audio Guide",
    description: "Visit Galata Tower with hosted entry and audio guide. Skip the ticket lines and enjoy panoramic views of Istanbul.",
    images: ["https://images.istanbultouristpass.com/unsafe/1200x630/static.istanbultouristpass.com/app/img/inclusions/thumbnails/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg?v5.4.7"],
  },
  alternates: {
    canonical: "/attractions/galata-tower",
  },
};

const GALATA_TOWER_IMAGE = "https://images.istanbultouristpass.com/unsafe/1200x600/static.istanbultouristpass.com/app/img/inclusions/thumbnails/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg?v5.4.7";

export default function GalataTowerPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Galata Tower",
    "description": "Visit Galata Tower with hosted entry and audio guide. Skip the ticket lines and enjoy panoramic 360-degree views of Istanbul.",
    "image": GALATA_TOWER_IMAGE,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Galata Kulesi, Galata Mahallesi",
      "addressLocality": "Beyoğlu",
      "addressRegion": "Istanbul",
      "postalCode": "34420",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0256",
      "longitude": "28.9744"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    },
    "offers": {
      "@type": "Offer",
      "price": "40",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": "/attractions/galata-tower"
    },
    "touristType": "Historical Landmark",
    "openingHours": "Mo-Th, Sa-Su 09:00-20:00"
  };

  return (
    <div className="bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={GALATA_TOWER_IMAGE}
            alt="Galata Tower Istanbul - Panoramic view of the iconic medieval tower"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">Historical Landmarks • Towers & Observation Decks</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Galata Tower
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Hosted Entry with Audio Guide - Skip the Ticket Lines & Enjoy Panoramic Views of Istanbul
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-sm text-white/80 block mb-1">Regular Price</span>
                <span className="text-2xl font-bold line-through text-white/60">€40</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3">
                <span className="text-sm text-gray-600 block mb-1">With Istanbul Tourist Pass</span>
                <span className="text-3xl font-bold" style={{ color: '#F0034E' }}>Included</span>
              </div>
            </div>
            <CTASection variant="hero" />
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#F0034E' }}>€40</div>
              <div className="text-xs sm:text-sm text-gray-600">Regular Price</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#F0034E' }}>1 Hour</div>
              <div className="text-xs sm:text-sm text-gray-600">Visit Duration</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#F0034E' }}>25</div>
              <div className="text-xs sm:text-sm text-gray-600">Audio Guide Languages</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#F0034E' }}>4.8</div>
              <div className="text-xs sm:text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Galata Tower</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed">
                The <strong>Galata Tower</strong> is one of Istanbul&apos;s most iconic landmarks and a symbol of the city&apos;s rich history. 
                Standing tall in the vibrant Beyoğlu district, this medieval stone tower offers visitors breathtaking panoramic views 
                of Istanbul, including the Golden Horn, Bosphorus Strait, and the historic peninsula.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Originally constructed in <strong>1348</strong> during the Genoese expansion in Constantinople, the Galata Tower has 
                served various purposes throughout its history—from a watchtower and prison to an observatory. The tower stands at 
                approximately <strong>67 meters (220 feet)</strong> tall and features a distinctive cylindrical body with circular 
                arched windows, showcasing a blend of Genoese and Ottoman architectural styles.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                One of the tower&apos;s most legendary stories dates back to the 17th century when <strong>Hezarfen Ahmed Çelebi</strong> 
                is said to have launched himself from the tower&apos;s pinnacle, achieving a legendary flight across the Bosphorus using 
                artificial wings—a feat that has become part of Istanbul&apos;s folklore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">What&apos;s Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0034E20' }}>
                    <i className="pi pi-ticket text-2xl" style={{ color: '#F0034E' }}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hosted Entry</h3>
                    <p className="text-gray-600">Skip the ticket lines with hosted entry service. Meet your host at the designated meeting point for seamless access.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0034E20' }}>
                    <i className="pi pi-volume-up text-2xl" style={{ color: '#F0034E' }}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Audio Guide</h3>
                    <p className="text-gray-600">Explore at your own pace with a professionally prepared audio guide available in 25 different languages.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0034E20' }}>
                    <i className="pi pi-eye text-2xl" style={{ color: '#F0034E' }}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">360° Panoramic Views</h3>
                    <p className="text-gray-600">Ascend to the observation deck and enjoy breathtaking 360-degree views of Istanbul&apos;s skyline, Golden Horn, and Bosphorus.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0034E20' }}>
                    <i className="pi pi-clock text-2xl" style={{ color: '#F0034E' }}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Timing</h3>
                    <p className="text-gray-600">Available daily except Fridays at multiple time slots: 11:30, 13:45, 15:00, 16:00, and 17:00.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Information Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Visiting Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-calendar" style={{ color: '#F0034E' }}></i>
                  Availability & Schedule
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    <strong>Available:</strong> Daily, except Fridays
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Time Slots:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>11:30 AM</li>
                    <li>1:45 PM</li>
                    <li>3:00 PM</li>
                    <li>4:00 PM</li>
                    <li>5:00 PM</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    <strong>Duration:</strong> Approximately 1 hour (suggested visiting time)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-map-marker" style={{ color: '#F0034E' }}></i>
                  Meeting Point
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Location:</strong> In front of the Bereketzade Fountain, right next to the Galata Tower
                  </p>
                  <p className="text-gray-700">
                    <strong>Important:</strong> Please arrive at least <strong>15 minutes before</strong> your scheduled tour time.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-info-circle" style={{ color: '#F0034E' }}></i>
                  Important Notes
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Reservation is recommended to secure your preferred time slot</li>
                    <li>The tower features an elevator to the observation deck</li>
                    <li>Wear comfortable shoes as there may be some walking involved</li>
                    <li>The observation deck can be crowded during peak hours</li>
                    <li>Best time to visit for photography: Early morning or late afternoon</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get There Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">How to Get There</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-car" style={{ color: '#F0034E' }}></i>
                  By Tram (T1 Line)
                </h3>
                <p className="text-gray-700 mb-2">
                  Take the <strong>T1 Tram Line</strong> (Bağcılar-Kabataş) and alight at the <strong>Karaköy</strong> stop.
                </p>
                <p className="text-gray-700">
                  From there, it&apos;s a <strong>10-15 minute uphill walk</strong> to the Galata Tower. Follow the signs or use a map app for directions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-compass" style={{ color: '#F0034E' }}></i>
                  By Metro (M2 Line)
                </h3>
                <p className="text-gray-700 mb-2">
                  Use the <strong>M2 Metro Line</strong> and get off at the <strong>Şişhane</strong> station.
                </p>
                <p className="text-gray-700">
                  The Galata Tower is within walking distance from the Şişhane metro station (approximately 5-10 minutes).
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-map" style={{ color: '#F0034E' }}></i>
                  Address
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Galata Tower (Galata Kulesi)</strong>
                </p>
                <p className="text-gray-700">
                  Galata Kulesi, Galata Mahallesi, 34420 Beyoğlu/İstanbul, Turkey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & History Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Architecture & History</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Architectural Features</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  The Galata Tower showcases a unique blend of <strong>Genoese and Ottoman architectural styles</strong>. The cylindrical 
                  body is adorned with circular arched windows made of bricks, creating a distinctive medieval appearance. The observation 
                  deck beneath the cone-shaped roof offers a metal-decorated network encircling the floor, providing both structural support 
                  and aesthetic appeal.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  The tower&apos;s design reflects its original purpose as a watchtower, with thick stone walls and strategic positioning that 
                  allowed for excellent visibility of the surrounding area, including the Golden Horn and the historic peninsula.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Historical Significance</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  Throughout its long history, the Galata Tower has served multiple purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                  <li><strong>14th Century:</strong> Built by the Genoese as a watchtower and defensive structure</li>
                  <li><strong>Ottoman Era:</strong> Used as a prison and later as an observatory</li>
                  <li><strong>17th Century:</strong> Site of Hezarfen Ahmed Çelebi&apos;s legendary flight across the Bosphorus</li>
                  <li><strong>Modern Era:</strong> Restored and opened to the public as a tourist attraction and observation deck</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What You&apos;ll See</h3>
                <p className="text-base sm:text-lg leading-relaxed">
                  From the observation deck, visitors can enjoy panoramic views of:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-4">
                  <li><strong>Historic Peninsula:</strong> Hagia Sophia, Blue Mosque, Topkapi Palace</li>
                  <li><strong>Golden Horn:</strong> The historic waterway dividing European Istanbul</li>
                  <li><strong>Bosphorus Strait:</strong> The iconic waterway connecting Europe and Asia</li>
                  <li><strong>Beyoğlu District:</strong> Modern Istanbul with its vibrant streets and neighborhoods</li>
                  <li><strong>Galata Bridge:</strong> The famous bridge spanning the Golden Horn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Recommendations Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Tips & Recommendations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-sun" style={{ color: '#F0034E' }}></i>
                  Best Time to Visit
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Early morning (11:30 AM slot) for fewer crowds</li>
                  <li>Late afternoon (4:00-5:00 PM) for sunset views</li>
                  <li>Avoid weekends if possible for a more relaxed experience</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-camera" style={{ color: '#F0034E' }}></i>
                  Photography Tips
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Bring a wide-angle lens for panoramic shots</li>
                  <li>Golden hour (sunrise/sunset) provides best lighting</li>
                  <li>The observation deck can be crowded—be patient for the perfect shot</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-shopping-bag" style={{ color: '#F0034E' }}></i>
                  Nearby Attractions
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Galata Bridge (5-minute walk)</li>
                  <li>Istiklal Street (10-minute walk)</li>
                  <li>Spice Bazaar (15-minute walk)</li>
                  <li>Grand Bazaar (20-minute walk)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-heart" style={{ color: '#F0034E' }}></i>
                  Visitor Experience
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use the audio guide for historical context</li>
                  <li>Allow extra time to explore the surrounding Galata neighborhood</li>
                  <li>Combine with a visit to nearby cafes and restaurants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r" style={{ background: 'linear-gradient(135deg, #F0034E 0%, #d10342 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Visit Galata Tower with Istanbul Tourist Pass
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Save over €270 and get instant access to Galata Tower plus 100+ other Istanbul attractions. 
              Skip the lines, save time, and explore more of Istanbul for less.
            </p>
            <CTASection variant="bottom" />
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/80">
                <strong>Regular Price:</strong> €40 | <strong>With Pass:</strong> Included | <strong>You Save:</strong> €40
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is Galata Tower included in Istanbul Tourist Pass?</h3>
                <p className="text-gray-700">
                  Yes! Galata Tower hosted entry with audio guide is completely included with your Istanbul Tourist Pass. 
                  No additional fees required.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need to make a reservation?</h3>
                <p className="text-gray-700">
                  While walk-in access may be available, we highly recommend making a reservation to secure your preferred 
                  time slot, especially during peak tourist seasons.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How long does the visit take?</h3>
                <p className="text-gray-700">
                  The suggested visiting duration is approximately 1 hour. This includes time to ascend to the observation 
                  deck, enjoy the views, listen to the audio guide, and take photos.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is there an elevator to the top?</h3>
                <p className="text-gray-700">
                  Yes, the Galata Tower has an elevator that takes visitors to the observation deck. The elevator makes 
                  the tower accessible to visitors of all ages and mobility levels.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What languages is the audio guide available in?</h3>
                <p className="text-gray-700">
                  The audio guide is available in 25 different languages, ensuring that visitors from around the world 
                  can enjoy a comprehensive and informative experience.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why is it closed on Fridays?</h3>
                <p className="text-gray-700">
                  The Galata Tower is closed on Fridays for maintenance and cleaning to ensure the best possible experience 
                  for visitors throughout the rest of the week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

