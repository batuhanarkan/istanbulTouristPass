import { Destination, TravelPackage } from '../types';

const IMAGE_BASE = 'https://images.istanbultouristpass.com/unsafe/0x370/static.istanbultouristpass.com/app/img/inclusions/thumbnails';
const IMAGE_VERSION = '?v5.4.7';

const GALATA_TOWER_IMAGE = `${IMAGE_BASE}/galata-tower-skip-the-ticket-line-entry-with-audio-guide919224.jpeg${IMAGE_VERSION}`;
const ISTANBUL_PASS_IMAGE = 'https://cdn.istanbultouristpass.com/banner/doc/0d4e489d14e6cb2828e70c39f69a15b0-663e35a2162b9.jpg';

export async function getDestinations(): Promise<Destination[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    {
      id: '1',
      title: 'Hagia Sophia',
      description: 'Guided tour with skip-the-ticket-line entry to this iconic Byzantine masterpiece',
      image: 'https://static.istanbultouristpass.com/videos/2.mp4?v5.4.7',
      link: '/attractions/hagia-sophia',
      location: 'Istanbul',
      price: '€35',
      rating: 4.9,
      category: ['Most Popular', 'Historical Landmarks', 'Museums', 'Mosques & Places of Worship']
    },
    {
      id: '2',
      title: 'Galata Tower',
      description: 'Hosted entry with audio guide to Istanbul\'s iconic tower with panoramic views',
      image: GALATA_TOWER_IMAGE,
      link: '/attractions/galata-tower',
      location: 'Istanbul',
      price: '€40',
      rating: 4.8,
      category: ['Most Popular', 'Historical Landmarks', 'Towers & Observation Decks']
    },
    {
      id: '3',
      title: 'Topkapi Palace Museum',
      description: 'Guided tour with Harem including entry tickets to the Ottoman sultans\' palace',
      image: 'https://static.istanbultouristpass.com/videos/4.mp4?v5.4.7',
      link: '/attractions/topkapi-palace',
      location: 'Istanbul',
      price: '€65',
      rating: 4.9,
      category: ['Most Popular', 'Historical Landmarks', 'Museums']
    },
    {
      id: '4',
      title: 'Basilica Cistern',
      description: 'Guided tour with skip-the-ticket-line entry to the ancient underground water reservoir',
      image: 'https://static.istanbultouristpass.com/videos/5.mp4?v5.4.7',
      link: '/attractions/basilica-cistern',
      location: 'Istanbul',
      price: '€39',
      rating: 4.7,
      category: ['Historical Landmarks', 'Museums']
    },
    {
      id: '5',
      title: 'Dolmabahce Palace',
      description: 'Skip-the-ticket-line entry with audio guide to the magnificent Ottoman palace',
      image: 'https://static.istanbultouristpass.com/videos/6.mp4?v5.4.7',
      link: '/attractions/dolmabahce-palace',
      location: 'Istanbul',
      price: '€46',
      rating: 4.8,
      category: ['Historical Landmarks', 'Museums']
    },
    {
      id: '6',
      title: 'Blue Mosque',
      description: 'Entry with guided tour to the stunning Sultan Ahmed Mosque',
      image: GALATA_TOWER_IMAGE,
      link: '/attractions/blue-mosque',
      location: 'Istanbul',
      price: '€25',
      rating: 4.8,
      category: ['Historical Landmarks', 'Mosques & Places of Worship']
    },
    {
      id: '7',
      title: 'Camlica Tower',
      description: 'Observation deck entry ticket with audio guide to Istanbul\'s tallest tower',
      image: GALATA_TOWER_IMAGE,
      link: '/attractions/camlica-tower',
      location: 'Istanbul',
      price: 'Included',
      rating: 4.7,
      category: ['Towers & Observation Decks']
    },
    {
      id: '8',
      title: 'Bosphorus Cruise',
      description: 'Golden Horn & Bosphorus sightseeing cruise with audio guide',
      image: 'https://static.istanbultouristpass.com/videos/231.mp4?v5.4.7',
      link: '/attractions/bosphorus-cruise',
      location: 'Istanbul',
      price: '€30',
      rating: 4.9,
      category: ['Sightseeing & Bosphorus Cruise', 'Most Popular']
    },
    {
      id: '9',
      title: 'Grand Bazaar',
      description: 'Walking tour with audio guide through one of the world\'s oldest covered markets',
      image: GALATA_TOWER_IMAGE,
      link: '/attractions/grand-bazaar',
      location: 'Istanbul',
      price: 'Free',
      rating: 4.6,
      category: ['Experiences', 'Historical Landmarks']
    },
    {
      id: '10',
      title: 'Spice Bazaar',
      description: 'Walking tour through the colorful Egyptian Bazaar filled with spices and sweets',
      image: GALATA_TOWER_IMAGE,
      link: '/attractions/spice-bazaar',
      location: 'Istanbul',
      price: 'Free',
      rating: 4.7,
      category: ['Experiences', 'Historical Landmarks']
    },
    {
      id: '11',
      title: 'Maiden\'s Tower',
      description: 'Skip-the-ticket-line entry to the legendary tower in the Bosphorus',
      image: GALATA_TOWER_IMAGE,
      link: '/attractions/maidens-tower',
      location: 'Istanbul',
      price: '€25',
      rating: 4.6,
      category: ['Towers & Observation Decks', 'Historical Landmarks']
    },
    {
      id: '12',
      title: 'Yildiz Palace',
      description: 'Skip-the-ticket-line entry with audio guide to the Ottoman imperial palace',
      image: 'https://static.istanbultouristpass.com/videos/265.mp4?v5.4.7',
      link: '/attractions/yildiz-palace',
      location: 'Istanbul',
      price: '€28',
      rating: 4.7,
      category: ['Historical Landmarks', 'Museums']
    }
  ];
}

export async function getTravelPackages(): Promise<TravelPackage[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    {
      id: '1',
      title: 'Istanbul Tourist Pass - 3 Days',
      description: 'Access to 100+ attractions including Hagia Sophia, Galata Tower, Topkapi Palace and more',
      image: ISTANBUL_PASS_IMAGE,
      link: '/passes/3-days',
      destination: 'Istanbul',
      price: '€139',
      duration: '3 Days',
      discount: '40% OFF'
    },
    {
      id: '2',
      title: 'Istanbul Tourist Pass - 5 Days',
      description: 'Comprehensive pass with skip-the-line access to all major Istanbul attractions',
      image: ISTANBUL_PASS_IMAGE,
      link: '/passes/5-days',
      destination: 'Istanbul',
      price: '€189',
      duration: '5 Days',
      discount: '50% OFF'
    },
    {
      id: '3',
      title: 'Istanbul Tourist Pass - 7 Days',
      description: 'Ultimate pass for extended stays with unlimited access to attractions and tours',
      image: ISTANBUL_PASS_IMAGE,
      link: '/passes/7-days',
      destination: 'Istanbul',
      price: '€229',
      duration: '7 Days',
      discount: '50% OFF'
    },
    {
      id: '4',
      title: 'Bosphorus Dinner Cruise',
      description: 'Evening cruise with Turkish shows and traditional dinner on the Bosphorus',
      image: 'https://static.istanbultouristpass.com/videos/231.mp4?v5.4.7',
      link: '/packages/bosphorus-dinner',
      destination: 'Istanbul',
      price: '€60',
      duration: '3 Hours',
      discount: 'Included with Pass'
    },
    {
      id: '5',
      title: 'Princes\' Islands Tour',
      description: 'Full-day tour to Buyukada Island with lunch and roundtrip boat ticket',
      image: 'https://images.istanbultouristpass.com/unsafe/410x540/cdn.istanbultouristpass.com/banner/attraction/heybeliada_istanbul_tourist_pass%20(28).jpeg',
      link: '/packages/princes-islands',
      destination: 'Istanbul',
      price: '€45',
      duration: 'Full Day',
      discount: 'Included with Pass'
    },
    {
      id: '6',
      title: 'Whirling Dervishes Show',
      description: 'Authentic Turkish cultural experience at Abud Efendi Mansion',
      image: GALATA_TOWER_IMAGE,
      link: '/packages/whirling-dervishes',
      destination: 'Istanbul',
      price: '€35',
      duration: '1 Hour',
      discount: 'Included with Pass'
    },
    {
      id: '7',
      title: 'Turkish Hammam Experience',
      description: 'Traditional Turkish bath and massage at Cemberlitas Hammam',
      image: GALATA_TOWER_IMAGE,
      link: '/packages/hammam',
      destination: 'Istanbul',
      price: '€50',
      duration: '2 Hours',
      discount: 'Included with Pass'
    },
    {
      id: '8',
      title: 'Istanbul Public Transport Card',
      description: 'Unlimited access to Istanbul\'s public transportation system',
      image: GALATA_TOWER_IMAGE,
      link: '/packages/transport-card',
      destination: 'Istanbul',
      price: '€20',
      duration: 'Valid for Pass Duration',
      discount: 'Included with Pass'
    }
  ];
}

export async function fetchDestinations(): Promise<Destination[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/destinations`, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch destinations');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return getDestinations();
  }
}

