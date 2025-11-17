'use client';

import { Card } from 'primereact/card';
import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '../types';
import { Button } from 'primereact/button';
import { useState } from 'react';

interface CardGridProps {
  items: Destination[];
}

export default function CardGrid({ items }: CardGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Most Popular');

  const categories = [
    'Most Popular',
    'Museums',
    'Historical Landmarks',
    'Mosques & Places of Worship',
    'Towers & Observation Decks',
    'Sightseeing & Bosphorus Cruise',
    'Shows & Entertainment',
    'Aquariums & Zoos',
    'Experiences',
    'Special Offers'
  ];

  const filteredItems = items.filter(item => {
    // Category filter
    if (selectedCategory) {
      const itemCategories = item.category || [];
      if (!itemCategories.includes(selectedCategory)) return false;
    }
    return true;
  });

  return (
    <section className="container mx-auto px-4 py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
          Enjoy Istanbul&apos;s most popular attractions & activities:
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 mb-6">
          Discover Istanbul&apos;s iconic landmarks, museums, and attractions with skip-the-line access.
        </p>
        
        {/* Category Filter Tabs */}
        <div className="mb-8 sm:mb-12 mt-6 sm:mt-8">
          <div className="category-filter-tabs flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 justify-center sm:justify-start items-center max-w-5xl mx-auto px-2 sm:px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg scale-105'
                    : 'text-gray-700 bg-white border border-gray-300 hover:border-[#F0034E] hover:scale-105'
                }`}
                style={
                  selectedCategory === category
                    ? {
                        backgroundColor: '#F0034E',
                        border: '1px solid #F0034E',
                        boxShadow: '0 4px 12px rgba(240, 3, 78, 0.3)'
                      }
                    : {}
                }
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = 'white';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const isVideo = item.image && item.image.includes('.mp4');
            
            return (
              <Card key={item.id} className="shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-40 sm:h-48 mb-4 rounded-t-lg overflow-hidden">
                  {isVideo ? (
                    <video
                      src={item.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized={true}
                    />
                  )}
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
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  {item.price && (
                    <div>
                      <span className="text-2xl font-bold" style={{ color: '#F0034E' }}>{item.price}</span>
                      <span className="text-xs text-gray-500 block">Included with Pass</span>
                    </div>
                  )}
                  {item.link && (
                    <Link href={item.link} className="w-full sm:w-auto">
                      <Button 
                        label="View Details & Buy" 
                        icon="pi pi-shopping-cart"
                        className="w-full sm:w-auto text-white text-sm px-6 py-2.5 transition-all hover:scale-105 hover:shadow-lg font-semibold"
                        style={{ 
                          backgroundColor: '#F0034E', 
                          border: '1px solid #F0034E',
                          boxShadow: '0 4px 12px rgba(240, 3, 78, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#d10342';
                          e.currentTarget.style.borderColor = '#d10342';
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#F0034E';
                          e.currentTarget.style.borderColor = '#F0034E';
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                        size="small"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </Card>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No attractions found matching your filters.</p>
          </div>
        )}
      </div>
      
      {/* View All Button - Under the cards */}
      <div className="text-center mt-8 sm:mt-12">
        <Link href="/attractions">
          <Button 
            label="View All 100+ Attractions"
            icon="pi pi-arrow-right"
            className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto"
            style={{ 
              backgroundColor: '#F0034E', 
              border: '1px solid #F0034E',
              boxShadow: '0 4px 12px rgba(240, 3, 78, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d10342';
              e.currentTarget.style.borderColor = '#d10342';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F0034E';
              e.currentTarget.style.borderColor = '#F0034E';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </Link>
      </div>
    </section>
  );
}
