export default function AboutSection() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
              About Istanbul Tourist Pass
            </h2>
            
            <div className="space-y-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>
                <strong>Istanbul Tourist Pass</strong> is Turkey's leading tourist pass provider, 
                established to offer visitors the most convenient and cost-effective way to explore 
                Istanbul's rich cultural heritage and iconic attractions. Since our launch, we have 
                been committed to providing travelers with seamless access to over 100 of Istanbul's 
                most popular museums, historical landmarks, and experiences.
              </p>
              
              <p>
                Our innovative pass system allows visitors to skip ticket lines and save both time 
                and money while discovering the best of Istanbul. From the magnificent Hagia Sophia 
                and the historic Topkapi Palace to the breathtaking Bosphorus cruises and authentic 
                Turkish cultural experiences, Istanbul Tourist Pass makes it easy to explore the 
                city's treasures with instant e-tickets and skip-the-line access.
              </p>
              
              <p>
                As part of the Cityberry Tourism family, a member of TURSAB (Turkish Travel Agencies 
                Association), we combine our expertise in tourism with cutting-edge technology to 
                deliver exceptional travel experiences. Our multilingual mobile app, available in 
                30+ languages, helps travelers plan and manage their Istanbul itinerary with ease, 
                while our eco-friendly Show&Go® instant ticketing technology eliminates the need 
                for printed tickets.
              </p>
              
              <p>
                With over 750,000 passes sold since 2015, serving travelers from 150+ countries, 
                and maintaining a 98.6% customer satisfaction rate, Istanbul Tourist Pass has 
                become the trusted choice for millions of visitors exploring Istanbul. Our 
                experienced travel consultants, comprehensive online platform, and dedicated 
                customer support ensure that every traveler enjoys a hassle-free and memorable 
                Istanbul experience.
              </p>
              
              <p>
                Whether you're interested in historical landmarks, cultural tours, Bosphorus 
                cruises, or authentic Turkish experiences, Istanbul Tourist Pass provides 
                everything you need to make the most of your visit to this magnificent city 
                that bridges Europe and Asia.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#F0034E' }}>750K+</div>
                <div className="text-xs text-gray-600">Passes Sold</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">100+</div>
                <div className="text-xs text-gray-600">Attractions</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">150+</div>
                <div className="text-xs text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">98.6%</div>
                <div className="text-xs text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

