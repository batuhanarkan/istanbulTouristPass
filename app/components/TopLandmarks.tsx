'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'primereact/card';

const landmarks = [
  {
    id: '1',
    title: 'Hagia Sophia',
    description: 'Guided tour with skip-the-ticket-line entry',
    image: 'https://images.istanbultouristpass.com/unsafe/400x300/static.istanbultouristpass.com/app/img/inclusions/thumbnails/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg?v5.4.7',
    link: '/attractions/hagia-sophia',
    price: '€35',
    free: true
  },
  {
    id: '2',
    title: 'Galata Tower',
    description: 'Hosted entry with audio guide',
    image: 'https://images.istanbultouristpass.com/unsafe/400x300/static.istanbultouristpass.com/app/img/inclusions/thumbnails/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg?v5.4.7',
    link: '/attractions/galata-tower',
    price: '€40',
    free: true
  },
  {
    id: '3',
    title: 'Topkapi Palace',
    description: 'Guided tour with Harem including entry',
    image: 'https://images.istanbultouristpass.com/unsafe/400x300/static.istanbultouristpass.com/app/img/inclusions/thumbnails/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg?v5.4.7',
    link: '/attractions/topkapi-palace',
    price: '€65',
    free: true
  },
  {
    id: '4',
    title: 'Basilica Cistern',
    description: 'Guided tour with skip-the-ticket-line entry',
    image: 'https://images.istanbultouristpass.com/unsafe/400x300/static.istanbultouristpass.com/app/img/inclusions/thumbnails/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg?v5.4.7',
    link: '/attractions/basilica-cistern',
    price: '€39',
    free: true
  },
  {
    id: '5',
    title: 'Dolmabahce Palace',
    description: 'Skip-the-ticket-line entry with audio guide',
    image: 'https://images.istanbultouristpass.com/unsafe/400x300/static.istanbultouristpass.com/app/img/inclusions/thumbnails/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg?v5.4.7',
    link: '/attractions/dolmabahce-palace',
    price: '€46',
    free: true
  },
  {
    id: '6',
    title: 'Blue Mosque',
    description: 'Entry with guided tour',
    image: 'https://images.istanbultouristpass.com/unsafe/400x300/static.istanbultouristpass.com/app/img/inclusions/thumbnails/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg?v5.4.7',
    link: '/attractions/blue-mosque',
    price: '€25',
    free: true
  },
  {
    id: '7',
    title: 'Camlica Tower',
    description: 'Observation deck entry with audio guide',
    image: 'https://images.istanbultouristpass.com/unsafe/400x300/static.istanbultouristpass.com/app/img/inclusions/thumbnails/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg?v5.4.7',
    link: '/attractions/camlica-tower',
    price: 'Included',
    free: true
  },
];

export default function TopLandmarks() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-red-100 rounded-full px-4 py-2 mb-4">
            <span className="text-sm sm:text-base font-bold text-red-600">
              ⚡️ NOW! FREE entry to Hagia Sophia & Galata Tower! ⚡️
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            7 Iconic Landmarks
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Visit Istanbul&apos;s most famous attractions with skip-the-line access included in your pass
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {landmarks.map((landmark) => (
            <Card key={landmark.id} className="shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full">
              <Link href={landmark.link}>
                <div className="relative h-48 sm:h-56 mb-4 rounded-t-lg overflow-hidden">
                  <Image
                    src={landmark.image}
                    alt={landmark.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized={true}
                  />
                  {landmark.free && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      FREE
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {landmark.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 line-clamp-2">
                    {landmark.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500 line-through">{landmark.price}</span>
                      <span className="ml-2 text-lg font-bold" style={{ color: '#F0034E' }}>Included</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: '#F0034E' }}>
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/attractions">
            <button 
              className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto"
              style={{ backgroundColor: '#F0034E', border: '1px solid #F0034E' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d10342';
                e.currentTarget.style.borderColor = '#d10342';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F0034E';
                e.currentTarget.style.borderColor = '#F0034E';
              }}
            >
              <i className="pi pi-arrow-right animate-pulse-icon"></i>
              View All 100+ Attractions
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

