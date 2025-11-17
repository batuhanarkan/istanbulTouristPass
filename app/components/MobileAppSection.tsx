import Image from 'next/image';
import Link from 'next/link';

export default function MobileAppSection() {
  return (
    <section className="text-white py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#F0034E' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Get Istanbul Tourist Pass App
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90">
              Manage your pass, discover attractions, and explore Istanbul with our easy-to-use mobile app.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-8">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <i className="pi pi-check-circle text-2xl text-white/80"></i>
                <span className="text-base sm:text-lg">Instant e-tickets and skip-the-line access</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <i className="pi pi-check-circle text-2xl text-white/80"></i>
                <span className="text-base sm:text-lg">Plan your trip with interactive maps</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <i className="pi pi-check-circle text-2xl text-white/80"></i>
                <span className="text-base sm:text-lg">Multilingual support in 30+ languages</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <i className="pi pi-check-circle text-2xl text-white/80"></i>
                <span className="text-base sm:text-lg">Manage your pass and view attractions</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="https://apps.apple.com/app/istanbul-tourist-pass"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1289433600"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-12 sm:h-14 w-auto hover:opacity-80 transition-opacity"
                  unoptimized={true}
                />
              </Link>
              <Link 
                href="https://play.google.com/store/apps/details?id=com.istanbultouristpass"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={78}
                  className="h-12 sm:h-14 w-auto hover:opacity-80 transition-opacity"
                  unoptimized={true}
                />
              </Link>
            </div>
          </div>
          
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-64 sm:w-80 md:w-96">
              <div className="relative aspect-[9/16] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#F0034E' }}>
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📱</div>
                      <h3 className="text-white text-xl font-bold mb-2">Istanbul Tourist Pass</h3>
                      <p className="text-white/90 text-sm">Your Istanbul guide in your pocket</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

