'use client';

import { Card } from 'primereact/card';
import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '../types';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

interface CardGridProps {
  items: Destination[];
}

export default function CardGrid({ items }: CardGridProps) {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const priceOptions = [
    { label: 'All Prices', value: null },
    { label: 'Free', value: 'free' },
    { label: 'Under €30', value: 'under30' },
    { label: '€30 - €50', value: '30-50' },
    { label: '€50 - €70', value: '50-70' },
    { label: 'Over €70', value: 'over70' }
  ];

  const filteredItems = items.filter(item => {
    if (selectedPrice) {
      const priceStr = item.price?.toLowerCase() || '';
      
      if (selectedPrice === 'free') {
        if (!priceStr.includes('free') && !priceStr.includes('included')) return false;
      } else {
        const priceNum = parseInt(item.price?.replace(/[^0-9]/g, '') || '0');
        
        if (priceStr.includes('free') || priceStr.includes('included')) return false;
        
        switch (selectedPrice) {
          case 'under30':
            if (priceNum >= 30) return false;
            break;
          case '30-50':
            if (priceNum < 30 || priceNum > 50) return false;
            break;
          case '50-70':
            if (priceNum < 50 || priceNum > 70) return false;
            break;
          case 'over70':
            if (priceNum <= 70) return false;
            break;
        }
      }
    }
    return true;
  });

  return (
    <section className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
          Popular Istanbul Attractions
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 mb-6">
          Discover Istanbul&apos;s iconic landmarks, museums, and attractions with skip-the-line access.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-8">
          <div className="w-full sm:w-auto sm:flex-1 max-w-xs">
            <Dropdown
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.value)}
              options={priceOptions}
              placeholder="Filter by Price"
              className="w-full"
            />
          </div>
          {selectedPrice && (
            <Button
              label="Clear Filter"
              outlined
              onClick={() => setSelectedPrice(null)}
              className="w-full sm:w-auto"
            />
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Card key={item.id} className="shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-40 sm:h-48 mb-4 rounded-t-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized={true}
                />
                {item.rating && (
                  <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1">
                    <span className="text-xs font-bold" style={{ color: '#F0034E' }}>{item.rating}</span>
                    <i className="pi pi-star-fill text-xs" style={{ color: '#F0034E' }}></i>
                  </div>
                )}
              </div>
              <div className="p-3 sm:p-4">
                {item.location && (
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#F0034E' }}>
                    {item.location}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  {item.price && (
                    <span className="text-lg font-bold" style={{ color: '#F0034E' }}>{item.price}</span>
                  )}
                  {item.link && (
                    <Link href={item.link}>
                      <Button 
                        label="View Details" 
                        icon="pi pi-arrow-right"
                        className="text-white text-sm px-4 py-2 transition-all hover:scale-105 hover:shadow-md"
                        style={{ backgroundColor: '#F0034E', border: '1px solid #F0034E' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#d10342';
                          e.currentTarget.style.borderColor = '#d10342';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#F0034E';
                          e.currentTarget.style.borderColor = '#F0034E';
                        }}
                        size="small"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No attractions found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
