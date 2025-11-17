'use client';

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { MenuItem } from 'primereact/menuitem';

export default function Header() {
  const items: MenuItem[] = [
    {
      label: 'What You Get',
      url: '/what-you-get',
      icon: 'pi pi-check-circle'
    },
    {
      label: 'How It Works',
      url: '/how-it-works',
      icon: 'pi pi-info-circle'
    },
    {
      label: 'Attractions',
      url: '/attractions',
      icon: 'pi pi-map-marker'
    },
    {
      label: 'Passes & Prices',
      url: '/passes',
      icon: 'pi pi-ticket'
    },
    {
      label: 'Become a Partner',
      url: '/partners',
      icon: 'pi pi-users'
    },
    {
      label: 'FAQs',
      url: '/faqs',
      icon: 'pi pi-question-circle'
    }
  ];

  const start = (
    <div className="flex items-center gap-2">
      <i className="pi pi-map-marker text-2xl animate-pulse-icon" style={{ color: '#F0034E' }}></i>
      <span className="text-xl sm:text-2xl font-bold" style={{ color: '#F0034E' }}>Istanbul Tourist Pass</span>
    </div>
  );

  const end = (
    <div className="flex items-center gap-2 sm:gap-3">
      <Button 
        label="Sign In" 
        link 
        icon="pi pi-sign-in"
        className="text-gray-700 text-sm sm:text-base hover:text-[#F0034E] transition-colors" 
        size="small"
      />
      <Button 
        label="Buy Now" 
        icon="pi pi-shopping-cart"
        className="text-white text-sm sm:text-base px-3 sm:px-4 transition-all hover:scale-105"
        style={{ backgroundColor: '#F0034E', border: '1px solid #F0034E' }}
        size="small"
      />
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-2 sm:px-4">
        <Menubar 
          model={items} 
          start={start} 
          end={end}
          className="border-0 bg-transparent py-2"
        />
      </div>
    </header>
  );
}

