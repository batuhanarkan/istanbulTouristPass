'use client';

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { MenuItem } from 'primereact/menuitem';

export default function Header() {
  const items: MenuItem[] = [
    {
      label: 'Hotels',
      url: '/hotels'
    },
    {
      label: 'Tours',
      items: [
        { label: 'Domestic Tours', url: '/tours/domestic' },
        { label: 'International Tours', url: '/tours/international' },
        { label: 'Day Tours', url: '/tours/day-tours' },
        { label: 'Adventure Tours', url: '/tours/adventure' }
      ]
    },
    {
      label: 'Flights',
      url: '/flights'
    },
    {
      label: 'Packages',
      items: [
        { label: 'All-Inclusive', url: '/packages/all-inclusive' },
        { label: 'City Breaks', url: '/packages/city-breaks' },
        { label: 'Honeymoon', url: '/packages/honeymoon' },
        { label: 'Family Packages', url: '/packages/family' }
      ]
    },
    {
      label: 'Campaigns',
      url: '/campaigns'
    }
  ];

  const start = (
    <div className="flex items-center gap-2">
      <span className="text-xl sm:text-2xl font-bold" style={{ color: '#F0034E' }}>Istanbul Tourist Pass</span>
    </div>
  );

  const end = (
    <div className="flex items-center gap-2">
      <Button 
        label="Sign In" 
        link 
        className="text-gray-700 text-sm sm:text-base" 
        size="small"
      />
      <Button 
        label="Register" 
        className="text-white text-sm sm:text-base px-3 sm:px-4 transition-colors"
        style={{ backgroundColor: '#F0034E' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d10342'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F0034E'} 
        size="small"
      />
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-2 sm:px-4">
        <Menubar 
          model={items} 
          start={start} 
          end={end}
          className="border-0 bg-transparent"
        />
      </div>
    </header>
  );
}

