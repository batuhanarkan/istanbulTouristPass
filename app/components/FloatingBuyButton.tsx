'use client';

import { Button } from 'primereact/button';
import { useState, useEffect } from 'react';

export default function FloatingBuyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        label="Buy Now" 
        icon="pi pi-shopping-cart"
        className="text-white py-3 px-6 text-base font-bold shadow-2xl transition-all hover:scale-110"
        style={{ 
          backgroundColor: '#F0034E', 
          border: '2px solid white',
          boxShadow: '0 8px 25px rgba(240, 3, 78, 0.4)',
          borderRadius: '50px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#d10342';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#F0034E';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
}

