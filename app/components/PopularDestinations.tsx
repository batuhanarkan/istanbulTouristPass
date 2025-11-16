'use client';

import Link from 'next/link';

export default function PopularDestinations() {
  const destinations = [
    'Hagia Sophia',
    'Galata Tower',
    'Topkapi Palace',
    'Basilica Cistern',
    'Blue Mosque',
    'Dolmabahce Palace',
    'Grand Bazaar',
    'Spice Bazaar',
    'Bosphorus Cruise',
    'Maiden\'s Tower',
    'Camlica Tower',
    'Yildiz Palace',
    'Suleymaniye Mosque',
    'Istanbul Archaeology Museum',
    'Chora Church',
    'Rumeli Fortress',
    'Ortakoy Mosque',
    'Taksim Square',
    'Istiklal Street',
    'Pierre Loti Hill',
    'Eyup Sultan Mosque',
    'Princes\' Islands',
    'Balat District',
    'Fener District',
    'Beylerbeyi Palace',
    'Ihlamur Pavilion',
    'Kucuksu Pavilion',
    'Sakirin Mosque'
  ];

  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 bg-gray-50">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Popular Destinations
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore Istanbul's most popular attractions and landmarks
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto">
        {destinations.map((destination, index) => (
          <Link
            key={index}
            href={`/attractions/${destination.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
            className="text-sm sm:text-base text-gray-700 transition-colors py-2 px-3 rounded-lg text-center"
            style={{ 
              '--hover-color': '#F0034E',
              '--hover-bg': 'rgba(240, 3, 78, 0.1)'
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F0034E';
              e.currentTarget.style.backgroundColor = 'rgba(240, 3, 78, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '';
              e.currentTarget.style.backgroundColor = '';
            }}
          >
            {destination}
          </Link>
        ))}
      </div>
    </section>
  );
}

