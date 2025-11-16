'use client';

import Link from 'next/link';
import { Button } from 'primereact/button';

interface CTASectionProps {
  variant?: 'hero' | 'bottom';
}

export default function CTASection({ variant = 'bottom' }: CTASectionProps) {
  if (variant === 'hero') {
    return (
      <div className="mt-8">
        <Link href="/">
          <Button 
            label="Buy Istanbul Tourist Pass Now" 
            icon="pi pi-shopping-cart"
            className="text-white text-base sm:text-lg px-8 py-4 font-semibold transition-colors"
            style={{ backgroundColor: '#F0034E' }}
            size="large"
          />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link href="/">
        <Button 
          label="Buy Istanbul Tourist Pass Now" 
          icon="pi pi-shopping-cart"
          className="text-white text-base sm:text-lg px-8 py-4 font-semibold transition-colors bg-white/20 hover:bg-white/30 border-2 border-white"
          size="large"
        />
      </Link>
      <Link href="/attractions">
        <Button 
          label="View All Attractions" 
          icon="pi pi-arrow-right"
          outlined
          className="text-white text-base sm:text-lg px-8 py-4 font-semibold border-2 border-white hover:bg-white/10"
          size="large"
        />
      </Link>
    </div>
  );
}

