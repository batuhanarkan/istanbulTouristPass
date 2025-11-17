'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'pi-ticket',
      title: 'Instant Access to 100+ Attractions',
      description: 'Visit top museums, attractions, tours, cruises, and more with your pass.',
      animation: 'animate-bounce-icon'
    },
    {
      icon: 'pi-clock',
      title: 'Skip Ticket Lines & Save Time',
      description: 'Skip lines at select attractions and save time with e-tickets.',
      animation: 'animate-pulse-icon'
    },
    {
      icon: 'pi-heart',
      title: 'Turkish Hospitality at Its Best',
      description: 'Feel secure and guided with an Istanbul Expert&apos;s help and support.',
      animation: 'animate-pulse-icon'
    },
    {
      icon: 'pi-money-bill',
      title: 'Save Money... Guaranteed!',
      description: 'Save over 50% with expertly optimized credit points and enjoy more of Istanbul for less.',
      animation: 'animate-bounce-icon'
    },
    {
      icon: 'pi-mobile',
      title: 'Manage Your Trip via App',
      description: 'Plan and manage your trip with our easy-to-use multilingual app.',
      animation: 'animate-pulse-icon'
    },
    {
      icon: 'pi-leaf',
      title: 'Help Save our Planet',
      description: 'No print! Eco-friendly Show&Go® instant ticketing technology.',
      animation: 'animate-pulse-icon'
    },
    {
      icon: 'pi-calendar',
      title: 'Flexible & Reliable Travel',
      description: 'Valid for one year from the purchase date. Cancel anytime!',
      animation: 'animate-bounce-icon'
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why choose Istanbul Tourist Pass?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              One pass for a hassle-free ultimate Istanbul sightseeing!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-[#F0034E]/20 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#F0034E20' }}>
                    <i className={`pi ${benefit.icon} text-2xl ${benefit.animation}`} style={{ color: '#F0034E' }}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#F0034E] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

