// Image URLs from istanbultouristpass.com
// Update these with actual image URLs from the website

export const imageUrls = {
  // Hero Section
  hero: 'https://istanbultouristpass.com/images/hero-istanbul.jpg',
  
  // Istanbul Attractions
  hagiaSophia: 'https://istanbultouristpass.com/images/attractions/hagia-sophia.jpg',
  galataTower: 'https://istanbultouristpass.com/images/attractions/galata-tower.jpg',
  topkapiPalace: 'https://istanbultouristpass.com/images/attractions/topkapi-palace.jpg',
  basilicaCistern: 'https://istanbultouristpass.com/images/attractions/basilica-cistern.jpg',
  dolmabahcePalace: 'https://istanbultouristpass.com/images/attractions/dolmabahce-palace.jpg',
  blueMosque: 'https://istanbultouristpass.com/images/attractions/blue-mosque.jpg',
  camlicaTower: 'https://istanbultouristpass.com/images/attractions/camlica-tower.jpg',
  bosphorusCruise: 'https://istanbultouristpass.com/images/attractions/bosphorus-cruise.jpg',
  grandBazaar: 'https://istanbultouristpass.com/images/attractions/grand-bazaar.jpg',
  spiceBazaar: 'https://istanbultouristpass.com/images/attractions/spice-bazaar.jpg',
  maidensTower: 'https://istanbultouristpass.com/images/attractions/maidens-tower.jpg',
  yildizPalace: 'https://istanbultouristpass.com/images/attractions/yildiz-palace.jpg',
  
  // Passes & Packages
  pass3Days: 'https://istanbultouristpass.com/images/passes/3-days-pass.jpg',
  pass5Days: 'https://istanbultouristpass.com/images/passes/5-days-pass.jpg',
  pass7Days: 'https://istanbultouristpass.com/images/passes/7-days-pass.jpg',
  bosphorusDinner: 'https://istanbultouristpass.com/images/packages/bosphorus-dinner.jpg',
  princesIslands: 'https://istanbultouristpass.com/images/packages/princes-islands.jpg',
  whirlingDervishes: 'https://istanbultouristpass.com/images/packages/whirling-dervishes.jpg',
  hammam: 'https://istanbultouristpass.com/images/packages/hammam.jpg',
  transportCard: 'https://istanbultouristpass.com/images/packages/transport-card.jpg',
};

// Fallback to local images if external URLs are not available
export const getImageUrl = (key: keyof typeof imageUrls, localPath: string): string => {
  // For now, use local paths. Update to use imageUrls[key] when you have the actual URLs
  return localPath;
  // Uncomment below when you have actual image URLs:
  // return imageUrls[key] || localPath;
};

