import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-orange-500">Istanbul Tourist Pass</h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Your trusted travel partner for amazing holidays and unforgettable experiences in Istanbul and beyond.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><Link href="/hotels" className="hover:text-orange-400 transition-colors">Hotels</Link></li>
              <li><Link href="/flights" className="hover:text-orange-400 transition-colors">Flights</Link></li>
              <li><Link href="/tours" className="hover:text-orange-400 transition-colors">Tours</Link></li>
              <li><Link href="/packages" className="hover:text-orange-400 transition-colors">Packages</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><Link href="/help" className="hover:text-orange-400 transition-colors">Help Center</Link></li>
              <li><Link href="/faq" className="hover:text-orange-400 transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/cancel" className="hover:text-orange-400 transition-colors">Cancellation</Link></li>
            </ul>
          </div>
          
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-orange-400 transition-colors">Careers</Link></li>
              <li><Link href="/campaigns" className="hover:text-orange-400 transition-colors">Campaigns</Link></li>
              <li><Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Istanbul Tourist Pass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

