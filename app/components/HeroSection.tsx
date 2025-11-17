'use client';

import { Button } from 'primereact/button';

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#F0034E' }}>
      {/* Urgency Banner */}
      <div className="bg-yellow-400 text-gray-900 py-2 text-center relative z-20">
        <p className="text-sm sm:text-base font-bold animate-pulse">
          ⚡️ LAST CALL ⏰ BEFORE PRICES INCREASE! ⚡️ HURRY! 🤗 FINAL DAYS for 40% OFF DISCOUNT
        </p>
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(240, 3, 78, 0.95)' }}></div>
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
          
          {/* Simplified Hero CTA - Direct Shopping Focus */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-white">
            <div className="text-center space-y-6">
              {/* Trust Badge */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm mb-4">
                <div className="flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 border border-green-200">
                  <i className="pi pi-check-circle text-green-600"></i>
                  <span className="font-semibold text-gray-900">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
                  <i className="pi pi-users text-blue-600"></i>
                  <span className="font-semibold text-gray-900">12,500+ Happy Travelers</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 border border-yellow-200">
                  <i className="pi pi-shield text-yellow-600"></i>
                  <span className="font-semibold text-gray-900">Money-Back Guarantee</span>
                </div>
              </div>

              {/* Main CTA Button - Large and Prominent */}
              <div className="space-y-4 pt-6 sm:pt-8 pb-6 sm:pb-8">
                <Button 
                  label="Buy Istanbul Tourist Pass Now" 
                  icon="pi pi-shopping-cart"
                  className="w-full sm:w-auto text-white py-4 px-8 sm:px-12 text-lg sm:text-xl font-bold transition-all hover:scale-105 hover:shadow-2xl animate-pulse-icon"
                  style={{ 
                    backgroundColor: '#F0034E', 
                    border: '2px solid #F0034E',
                    boxShadow: '0 10px 30px rgba(240, 3, 78, 0.4)',
                    minHeight: '60px'
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
                  size="large"
                />
                <p className="text-gray-700 text-sm sm:text-base">
                  Starting from <span className="font-bold text-xl" style={{ color: '#F0034E' }}>€139</span> - Save up to 50%
                </p>
              </div>

              {/* Quick Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <i className="pi pi-ticket text-2xl sm:text-3xl mb-2 block" style={{ color: '#F0034E' }}></i>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">100+ Attractions</p>
                </div>
                <div className="text-center">
                  <i className="pi pi-clock text-2xl sm:text-3xl mb-2 block" style={{ color: '#F0034E' }}></i>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">Skip Lines</p>
                </div>
                <div className="text-center">
                  <i className="pi pi-mobile text-2xl sm:text-3xl mb-2 block" style={{ color: '#F0034E' }}></i>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">Mobile App</p>
                </div>
                <div className="text-center">
                  <i className="pi pi-calendar text-2xl sm:text-3xl mb-2 block" style={{ color: '#F0034E' }}></i>
                  <p className="text-xs sm:text-sm font-semibold text-gray-900">Flexible Dates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
