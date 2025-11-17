'use client';

import { Button } from 'primereact/button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#F0034E] to-[#d10342] py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⚡ Limited Time Offer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Explore Istanbul?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 12,500+ travelers who saved time and money with Istanbul Tourist Pass. 
              Start your adventure today!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              label="Buy Pass Now - Starting €139" 
              icon="pi pi-shopping-cart"
              className="text-white py-4 px-8 sm:px-12 text-lg sm:text-xl font-bold transition-all hover:scale-105 hover:shadow-2xl"
              style={{ 
                backgroundColor: 'white', 
                color: '#F0034E',
                border: '2px solid white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                minHeight: '60px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              size="large"
            />
            <Button 
              label="View All Packages" 
              icon="pi pi-arrow-right"
              outlined
              className="text-white py-4 px-8 text-lg font-semibold transition-all hover:scale-105 border-2 border-white"
              style={{ 
                backgroundColor: 'transparent',
                borderColor: 'white',
                minHeight: '60px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              size="large"
            />
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <i className="pi pi-shield text-xl"></i>
              <span className="font-semibold">Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="pi pi-lock text-xl"></i>
              <span className="font-semibold">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="pi pi-clock text-xl"></i>
              <span className="font-semibold">Instant E-Tickets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

