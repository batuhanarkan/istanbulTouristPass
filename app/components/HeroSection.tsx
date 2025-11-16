'use client';

import Image from 'next/image';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [passDuration, setPassDuration] = useState<string | null>(null);
  const [numberOfPersons, setNumberOfPersons] = useState<number>(1);

  const passDurationOptions = [
    { label: 'Select Pass Duration', value: null },
    { label: '3 Days Pass', value: '3' },
    { label: '5 Days Pass', value: '5' },
    { label: '7 Days Pass', value: '7' }
  ];

  return (
    <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#F0034E' }}>
      <div className="absolute inset-0">
        <Image
          src="https://images.istanbultouristpass.com/unsafe/1200x600/static.istanbultouristpass.com/app/img/hero-istanbul.jpg?v5.4.7"
          alt="Istanbul Skyline"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(240, 3, 78, 0.9)' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Istanbul Simplified
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90">
              Skip Lines & Save Money - Access 100+ attractions with instant e-tickets
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl">
            <div className="space-y-4">
              <div className="relative">
                <i className="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <InputText 
                  placeholder="Search attractions, museums, or landmarks..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 py-3 text-base border-gray-300"
                  style={{ '--tw-ring-color': '#F0034E' } as React.CSSProperties}
                  onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#F0034E'}
                  onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = ''}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <i className="pi pi-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"></i>
                  <Dropdown 
                    value={passDuration} 
                    onChange={(e) => setPassDuration(e.value)}
                    options={passDurationOptions} 
                    placeholder="Select Pass Duration"
                    className="w-full pl-10"
                    panelClassName="border-gray-300"
                  />
                </div>
                
                <div className="relative">
                  <i className="pi pi-users absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"></i>
                  <InputText 
                    type="number"
                    value={numberOfPersons.toString()}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 1;
                      setNumberOfPersons(Math.max(1, value));
                    }}
                    placeholder="Number of Persons"
                    min={1}
                    className="w-full pl-10 py-3 text-base border-gray-300"
                  style={{ '--tw-ring-color': '#F0034E' } as React.CSSProperties}
                  onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#F0034E'}
                  onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = ''}
                  />
                </div>
              </div>
              
              <Button 
                label="Find Attractions & Buy Pass" 
                icon="pi pi-search"
                className="w-full text-white py-3 text-base font-semibold transition-colors"
                style={{ backgroundColor: '#F0034E' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d10342'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F0034E'}
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
