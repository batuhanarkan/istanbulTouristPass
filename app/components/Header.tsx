'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { MenuItem } from 'primereact/menuitem';

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'TR', name: 'Türkçe' });

  const languages = [
    { code: 'TR', name: 'Türkçe' },
    { code: 'EN', name: 'English' }
  ];

  const languageTemplate = (option: { code: string; name: string }) => {
    if (!option) {
      return (
        <div className="flex items-center">
          <i className="pi pi-globe text-xs mr-1" style={{ color: '#000000' }}></i>
          <span className="font-semibold text-xs" style={{ color: '#000000' }}>{selectedLanguage.code}</span>
        </div>
      );
    }
    return (
      <div className="flex items-center">
        <i className="pi pi-globe text-xs mr-1" style={{ color: '#000000' }}></i>
        <span className="font-semibold text-xs" style={{ color: '#000000' }}>{option.code}</span>
      </div>
    );
  };

  const languageDropdown = (
    <Dropdown
      value={selectedLanguage}
      onChange={(e) => setSelectedLanguage(e.value)}
      options={languages}
      optionLabel="name"
      itemTemplate={(option) => (
        <div className="flex items-center py-1">
          <i className="pi pi-globe text-xs mr-1" style={{ color: '#000000' }}></i>
          <span className="font-semibold text-xs" style={{ color: '#000000' }}>{option.code}</span>
          <span className="ml-2 text-xs text-gray-600">{option.name}</span>
        </div>
      )}
      valueTemplate={languageTemplate}
      className="text-black text-xs border border-gray-300 hover:border-[#F0034E] transition-all hover:scale-105 w-full"
      style={{ 
        backgroundColor: 'white', 
        color: '#000000',
        minWidth: '95px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px'
      }}
      panelClassName="shadow-lg border border-gray-200"
      dropdownIcon="pi pi-chevron-down"
      showOnFocus={false}
    />
  );

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
    <Link href="/" className="flex items-center">
      <Image
        src="https://static.istanbultouristpass.com/images/itp-logo.svg?v5.4.7"
        alt="Istanbul Tourist Pass"
        width={240}
        height={60}
        className="w-32 sm:w-40 md:w-48 h-auto"
        priority
        unoptimized={true}
      />
    </Link>
  );

  const end = (
    <div className="flex items-center gap-2 sm:gap-3 ml-auto">
      <div className="hidden md:block">
        {languageDropdown}
      </div>
      <Button 
        label="Buy Now" 
        icon="pi pi-shopping-cart"
        className="text-white text-sm sm:text-base px-3 sm:px-4 transition-all hover:scale-105"
        style={{ 
          backgroundColor: '#F0034E', 
          border: '1px solid #F0034E', 
          color: '#ffffff',
          height: '40px',
          display: 'flex',
          alignItems: 'center'
        }}
        size="small"
      />
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200 backdrop-blur-sm bg-white/95 relative">
      <div className="container mx-auto px-2 sm:px-4 relative">
        <Menubar 
          model={items} 
          start={start} 
          end={end}
          className="border-0 bg-transparent py-2"
        />
        {/* Language dropdown for mobile menu - positioned at top */}
        <div className="mobile-language-dropdown-wrapper md:hidden">
          <div className="mobile-language-dropdown py-4 px-4 border-b border-gray-200 bg-gray-50">
            <div className="mb-3 text-xs font-semibold text-gray-600 uppercase tracking-wide">Select Language</div>
            {languageDropdown}
          </div>
        </div>
      </div>
    </header>
  );
}

