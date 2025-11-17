'use client';

import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';
import Image from 'next/image';
import Link from 'next/link';
import { TravelPackage } from '../types';

interface CampaignCarouselProps {
  items: TravelPackage[];
  title: string;
}

export default function CampaignCarousel({ items, title }: CampaignCarouselProps) {
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const itemTemplate = (item: TravelPackage) => {
    return (
      <div className="px-2 sm:px-3">
        <Card className="shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full">
          <div className="relative h-48 sm:h-56 overflow-hidden" style={{ backgroundColor: '#F0034E' }}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized={true}
            />
            {item.discount && (
              <div className="absolute top-3 right-3 text-white px-3 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: '#d10342' }}>
                {item.discount}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-lg sm:text-xl font-bold mb-1">{item.title}</h3>
              {item.destination && (
                <p className="text-white/90 text-sm">{item.destination}</p>
              )}
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
            <div className="flex items-center justify-between">
              <div>
                {item.price && (
                  <span className="text-2xl font-bold" style={{ color: '#F0034E' }}>{item.price}</span>
                )}
                {item.duration && (
                  <p className="text-gray-500 text-xs">{item.duration}</p>
                )}
              </div>
              {item.link && (
                <Link href={item.link} className="w-full sm:w-auto">
                  <button 
                    className="w-full sm:w-auto text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                    style={{ 
                      backgroundColor: '#F0034E',
                      boxShadow: '0 4px 12px rgba(240, 3, 78, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#d10342';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F0034E';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <i className="pi pi-shopping-cart"></i>
                    Buy Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section className="container mx-auto px-4 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
        {title}
      </h2>
      <Carousel
        value={items}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={itemTemplate}
        circular
        autoplayInterval={4000}
        className="custom-carousel"
      />
    </section>
  );
}


