'use client';

export default function TrustBanner() {
  const stats = [
    { value: '30 Years', label: 'Istanbul experts', icon: 'pi-calendar', animation: 'animate-pulse-icon' },
    { value: '750K+', label: 'Passes Sold since 2015', icon: 'pi-ticket', animation: 'animate-bounce-icon' },
    { value: '150+', label: 'Countries Nationalities served', icon: 'pi-globe', animation: 'animate-rotate-icon' },
    { value: '98.6%', label: 'Happy Customers recommend', icon: 'pi-star', animation: 'animate-pulse-icon' },
    { value: '€75M+', label: 'Savings Millions saved', icon: 'pi-money-bill', animation: 'animate-bounce-icon' },
  ];

  return (
    <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-default group"
            >
              <i className={`pi ${stat.icon} text-3xl sm:text-4xl mb-2 ${stat.animation} group-hover:scale-125 transition-transform`} style={{ color: '#F0034E' }}></i>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 group-hover:text-[#d10342] transition-colors" style={{ color: '#F0034E' }}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

