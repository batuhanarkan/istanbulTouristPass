export default function AboutSection() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              About Istanbul Tourist Pass
            </h2>
            
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Istanbul Tourist Pass</strong> is Turkey&apos;s leading tourist pass provider, 
                established to offer visitors the most convenient and cost-effective way to explore 
                Istanbul&apos;s rich cultural heritage and iconic attractions. Since our launch, we have 
                been committed to providing travelers with seamless access to over 100 of Istanbul&apos;s 
                most popular museums, historical landmarks, and experiences.
              </p>
              
              <p>
                Our innovative pass system allows visitors to skip ticket lines and save both time 
                and money while discovering the best of Istanbul. From the magnificent Hagia Sophia 
                and the historic Topkapi Palace to the breathtaking Bosphorus cruises and authentic 
                Turkish cultural experiences, Istanbul Tourist Pass makes it easy to explore the 
                city&apos;s treasures with instant e-tickets and skip-the-line access.
              </p>
              
              <p>
                As part of the Cityberry Tourism family, a member of TURSAB (Turkish Travel Agencies 
                Association), we combine our expertise in tourism with cutting-edge technology to 
                deliver exceptional travel experiences. Our multilingual mobile app, available in 
                30+ languages, helps travelers plan and manage their Istanbul itinerary with ease.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#F0034E' }}>750K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Passes Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#F0034E' }}>100+</div>
                <div className="text-xs sm:text-sm text-gray-600">Attractions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#F0034E' }}>150+</div>
                <div className="text-xs sm:text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#F0034E' }}>98.6%</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

