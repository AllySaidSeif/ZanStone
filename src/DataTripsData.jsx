// src/data/DayTripsData.js

// Placeholder imports for tour images
// You'll need to add actual images to your assets folder

import beach1 from "../src/assets/image/Folder1/beac.jpg";
import beach2 from "../src/assets/image/Folder1/beach.jpg";
import beach3 from "../src/assets/image/Folder1/beach2.jpg";
import beach4 from "../src/assets/image/Folder1/beach3.jpg";
import beach5 from "../src/assets/image/Folder1/beach4.jpg";
import beach6 from "../src/assets/image/Folder1/beach5.jpg";
import blue1 from "../src/assets/image/Folder1/blue1.jpg";
import blue2 from "../src/assets/image/Folder1/blue2.jpg";
import blue3 from "../src/assets/image/Folder1/blue3.jpg";
import blue4 from "../src/assets/image/Folder1/blue4.jpg";
import safariBg from "../src/assets/image/Folder1/desti.jpg";
import farasi from "../src/assets/image/Folder1/farasi1.jpg";
import farasi1 from "../src/assets/image/Folder1/farasi2.jpg";
import farasi2 from "../src/assets/image/Folder1/farasi3.jpg";
import farasi3 from "../src/assets/image/Folder1/farasi4.jpg";
import farasi4 from "../src/assets/image/Folder1/farasi5.jpg";
import farasi5 from "../src/assets/image/Folder1/farasi6.jpg";
import farasi6 from "../src/assets/image/Folder1/farasi7.jpg";
import kayaking from "../src/assets/image/Folder1/kayaking.jpg";
import maa1 from "../src/assets/image/Folder1/maa1.jpeg";
import maa2 from "../src/assets/image/Folder1/maa2.jpeg";
import maa3 from "../src/assets/image/Folder1/maa3.jpeg";
import maa4 from "../src/assets/image/Folder1/maa4.jpg";
import maa5 from "../src/assets/image/Folder1/maa5.jpg";
import pung1 from "../src/assets/image/Folder1/pung1.jpeg";
import rock4 from "../src/assets/image/Folder1/rock.jpg";
import rock5 from "../src/assets/image/Folder1/rock1.jpg";
import sal1 from "../src/assets/image/Folder1/sal1.jpg";
import sal2 from "../src/assets/image/Folder1/sal2.jpg";
import sal3 from "../src/assets/image/Folder1/salaam.jpg";
import jozani from "../src/assets/image/jozani/jozani.jpg";
import jozani2 from "../src/assets/image/jozani/jozani2.jpg";
import mnemba from "../src/assets/image/mnemba/mnemba.jpg";
import mnemba1 from "../src/assets/image/mnemba/mnemba1.jpg";
import mnemba10 from "../src/assets/image/mnemba/mnemba10.jpg";
import mnemba11 from "../src/assets/image/mnemba/mnemba11.jpg";
import mnemba12 from "../src/assets/image/mnemba/mnemba12.jpg";
import mnemba13 from "../src/assets/image/mnemba/mnemba13.jpg";
import mnemba14 from "../src/assets/image/mnemba/mnemba14.jpg";
import mnemba5 from "../src/assets/image/mnemba/mnemba5.jpg";
import mnemba6 from "../src/assets/image/mnemba/mnemba6.jpg";
import mnemba7 from "../src/assets/image/mnemba/mnemba7.jpg";
import mnemba8 from "../src/assets/image/mnemba/mnemba8.jpg";
import mnemba9 from "../src/assets/image/mnemba/mnemba9.jpg";
import nakupenda4 from "../src/assets/image/nakupenda/nakupenda2.jpg";
import nakupenda3 from "../src/assets/image/nakupenda/nakupenda5.jpg";
import nakupenda2 from "../src/assets/image/nakupenda/nakupenda6.jpg";
import nakupenda from "../src/assets/image/nakupenda/nakupendasandbank.jpg";
import nakupenda1 from "../src/assets/image/nakupenda/nalupenda1.jpg";
import prison from "../src/assets/image/prison/prisonisland.jpg";
import prison2 from "../src/assets/image/prison/prisonisland2.avif";
import prison3 from "../src/assets/image/prison/prisonisland3.jpg";
import prison4 from "../src/assets/image/prison/prisonisland4.jpg";
import prison5 from "../src/assets/image/prison/prisonisland5.jpg";
import prison6 from "../src/assets/image/prison/prisonisland6.jpg";
import prison7 from "../src/assets/image/prison/prisonisland7.jpg";
import rock from "../src/assets/image/rock/rock.jpg";
import rock2 from "../src/assets/image/rock/rock2.jpg";
import rock3 from "../src/assets/image/rock/rock3.jpg";
import spice from "../src/assets/image/spice/spice.jpg";
import spice1 from "../src/assets/image/spice/spice1.jpg";
import spice2 from "../src/assets/image/spice/spice2.jpg";
import spice3 from "../src/assets/image/spice/spice3.jpg";
import stone from "../src/assets/image/stonetown/stonetown.jpg";
import stone2 from "../src/assets/image/stonetown/stonetown2.jpg";
import stone3 from "../src/assets/image/stonetown/stonetown3.jpg";
import stone4 from "../src/assets/image/stonetown/stonetown4.jpg";
import stone5 from "../src/assets/image/stonetown/stonetown5.avif";
import stone6 from "../src/assets/image/stonetown/stonetown6.jpg";
import stone7 from "../src/assets/image/stonetown/stonetown7.jpg";
import stone8 from "../src/assets/image/stonetown/stonetown8.jpg";
import sunset from "../src/assets/image/sunset/sunset.jpg";
import sunset1 from "../src/assets/image/sunset/sunset1.jpg";
import sunset2 from "../src/assets/image/sunset/sunset2.jpg";
import sunset3 from "../src/assets/image/sunset/sunset3.jpg";
import sunset4 from "../src/assets/image/sunset/sunset4.jpg";
import sunset5 from "../src/assets/image/sunset/sunset5.jpg";
import sunset6 from "../src/assets/image/sunset/sunset6.jpg";
import kilimanjaro from '../src/assets/kilimanjaro.jpg.jpeg';
import selous from '../src/assets/Selous.jpg.jpeg';



// Use placeholder images instead of actual imports to avoid dependency issues
const placeholderImages = {
  mnemba,
  stoneTown: stone,
  spice,
  prison,
  jozani,
  nakupenda,
  sunset,
  safari: safariBg,
  cave: sal1,
  default: stone
};

const tourPhotosByName = {
  'zanzibar-mikumi-safari': [safariBg, mnemba, prison, stone, sunset, spice],
  'vip-special-package': [mnemba1, nakupenda1, prison2, stone2, spice1, sunset1],
  'kilimanjaro-machame': [kilimanjaro, farasi, farasi1, farasi2, farasi3, farasi4],
  'kendwa-sunset': [sunset, sunset1, sunset2, sunset3, sunset4, sunset5],
  'salaam-maalum-caves': [maa1, maa2, maa3, sal1, beach1, beach2],
  'prison-island-nakupenda': [prison, nakupenda, prison2, nakupenda2, prison3, nakupenda3],
  'nyange-private': [rock, rock2, rock3, rock4, rock5, beach3],
  'stone-town-prison': [stone, prison, stone2, prison4, stone3, prison5],
  'prison-stone-town-late': [prison6, stone4, prison7, stone5, stone6, stone7],
  'salaam-cave': [sal1, sal2, sal3, maa4, maa5, pung1],
  'stone-town-spice': [stone, spice, stone2, spice2, stone3, spice3],
  'safari-blue': [blue1, blue2, blue3, blue4, beach4, beach5],
  'grand-slam': [mnemba5, nakupenda4, prison7, stone8, rock3, sunset6],
  'stone-town-walking': [stone, stone2, stone3, stone4, stone5, stone6],
  'pungume-island': [farasi5, farasi6, beach6, beach1, beach2, beach3],
  'selous-zanzibar': [selous, mnemba6, mnemba7, mnemba8, mnemba9, mnemba10],
  'exclusive-5days': [safariBg, mnemba, stone, sunset, rock, spice],
  'signature-6days': [safariBg, mnemba1, stone2, sunset2, rock2, spice2],
  'grand-island': [mnemba11, mnemba12, mnemba13, mnemba14, stone7, stone8],
  'safari-fusion': [safariBg, selous, mnemba, nakupenda, prison, beach4],
  'salaam-maalum-dup': [sal1, sal2, sal3, maa1, maa2, maa3]
};

const generateTourPhotos = (baseName, count = 6) => {
  let chosenPhotos = tourPhotosByName[baseName] || Object.values(placeholderImages);
  if (!chosenPhotos || chosenPhotos.length === 0) {
    chosenPhotos = [stone, mnemba, spice, prison, sunset, safariBg];
  }

  const photos = [];
  for (let i = 0; i < count; i++) {
    const image = chosenPhotos[i % chosenPhotos.length];
    photos.push({
      id: `${baseName}-photo-${i + 1}`,
      url: image,
      alt: `${baseName.replace(/-/g, ' ')} - Photo ${i + 1}`,
      caption: `${baseName.replace(/-/g, ' ')} - View ${i + 1}`
    });
  }

  return photos;
};
export const dayTripsData = [
  // Tour 1: Zanzibar & Mikumi Safari Adventure (8 Days)
  {
    id: 'zanzibar-mikumi-safari-8days',
    name: 'Zanzibar & Mikumi Safari Adventure',
    shortDescription: '8-Day Journey Combining Paradise Beaches with Wild Safari Thrills',
    description: 'Embark on a once-in-a-lifetime journey combining the tropical paradise of Zanzibar with the thrilling wildlife of Mikumi National Park. This exclusive itinerary blends relaxation, adventure, culture, and natural beauty.',
    fullDescription: `Embark on a once-in-a-lifetime journey combining the tropical paradise of Zanzibar with the thrilling wildlife of Mikumi National Park. This exclusive itinerary blends relaxation, adventure, culture, and natural beauty.

From powder-white beaches and crystal-clear turquoise waters to vibrant coral reefs and breathtaking wildlife, every moment is designed to inspire wonder and create unforgettable memories. Sail on traditional dhows, explore hidden lagoons, dine on freshly prepared seafood on pristine sandbanks, and witness Africa's iconic wildlife in their natural habitat.

This is more than a vacation — it is a dream African adventure brought to life. 🌴🐘✨

ITINERARY – PREMIUM EXPERIENCE EDITION

Day 1: Arrival in Zanzibar – Luxury Welcome
Upon arrival at Zanzibar International Airport, you will be warmly greeted and escorted to a private, luxurious, clean, and air-conditioned vehicle for a comfortable transfer to your hotel. Relax as you take in Zanzibar's tropical scenery. Spend the evening at leisure — a perfect time for a beach walk, poolside relaxation, or your first stunning sunset.

Day 2: Safari Blue Adventure – Ocean Paradise with Kwa Le Island
Set sail on a traditional wooden dhow for the iconic Safari Blue experience. Cruise through turquoise waters, snorkel over vibrant coral reefs, and explore natural lagoons. Visit Kwa Le Island, a secluded tropical paradise ideal for swimming, photography, and pure relaxation. Enjoy a freshly prepared seafood BBQ lunch on a pristine sandbank while lounging with fresh tropical fruits.

Day 3: Nakupenda Sandbank & Prison Island – Tropical Dream Day
Begin with a boat ride to Nakupenda Sandbank, a postcard-perfect white sand paradise. Swim, snorkel, or simply relax on the beach. Enjoy fresh tropical fruits and soft drinks while lounging on the sandbank, along with a delicious seafood lunch. Afterward, visit Prison Island to meet giant tortoises and explore historic colonial-era ruins.

Day 4: Beach Relaxation & Sunset Cruise in Kendwa
Spend the day at leisure enjoying your hotel or beach. Optional activities: spa treatments, yoga, or snorkeling. In the late afternoon, private transfer to Kendwa Beach for a romantic sunset dhow cruise along Zanzibar's coastline with refreshing soft drinks and local snacks.

Day 5: Mikumi National Park – Full-Day Safari Adventure
Start early with a private pick-up from your hotel and transfer to the airport for a flight to Mikumi. Explore Mikumi National Park in a comfortable 4x4 vehicle with an expert guide. Spot lions, elephants, giraffes, zebras, and more. Enjoy a scenic picnic lunch in the savannah before returning to Zanzibar.

Day 6: Mnemba Atoll Snorkeling – Underwater Paradise
Early pick-up at 6:00 AM to avoid crowds. Transfer to Matemwe, then head to Mnemba Atoll, a protected marine reserve. Snorkel in crystal-clear waters, swim with tropical fish, and enjoy the tranquility. Fresh fruits and soft drinks provided, followed by a seafood lunch on the beach.

Day 7: Salaam Cave & Swimming with Turtles – Hidden Gem
Private transfer to Salaam Cave in Kizimkazi. Swim in calm, crystal-clear waters and interact with friendly turtles. Enjoy optional soft drinks and fresh fruits while relaxing in this serene lagoon.

Day 8: Departure – Farewell to Zanzibar
Enjoy a final morning at leisure — last stroll on the beach or hotel relaxation. Private transfer ensures a smooth journey to Zanzibar International Airport.`,
    price: {
      '2': '$1,227',
      '3-5': '$1,838',
      '6-9': '$1,526',
      '10+': '$1,403'
    },
    priceNote: 'Price based on:',
    image: safariBg,
    duration: '8 Days / 7 Nights',
    groupSize: 'Private tour',
    category: 'daytrip',
    isDayTrip: false,
    location: 'Zanzibar & Mikumi',
    tips: [
      {
        text: 'Book the Safari Blue and the Nakupenda day trip early in the morning for best water clarity and quieter beaches.',
        image: safariBg
      },
      {
        text: 'Carry sun protection, a swim vest, and waterproof shoes for beach and rockland walking.',
        image: mnemba
      },
      {
        text: 'Bring a small binoculurs to spot wildlife during the Mikumi safari segment.',
        image: prison
      }
    ],
    highlights: [
      'Safari Blue Adventure with Kwa Le Island',
      'Nakupenda Sandbank & Prison Island Tour',
      'Kendwa Sunset Dhow Cruise',
      'Full-Day Mikumi Safari with Game Drive',
      'Mnemba Atoll Snorkeling & Dolphin Spotting',
      'Salaam Cave Turtle Swimming Experience'
    ],
    includes: [
      'Private airport transfers (arrival & departure) in luxury vehicles',
      'Private air-conditioned vehicles for all transfers around Zanzibar',
      'Professional English-speaking guides for all excursions',
      'Private boats for Safari Blue, Nakupenda, Prison Island, and Mnemba Atoll',
      'Sharing sunset dhow cruise with soft drinks and local snacks',
      'All entrance fees and government taxes included — no hidden costs',
      'Fresh seafood lunches on sandbanks and beaches',
      'Soft drinks and fresh tropical fruits daily on all excursions',
      'Snorkeling equipment provided (mask, fins, life jackets)',
      'Full-day 4x4 safari in Mikumi National Park with picnic lunch',
      'Round-trip flights to Mikumi',
      'Swimming with turtles at Salaam Cave'
    ],
    excludes: [
      'International flights to/from Zanzibar',
      'Travel insurance and personal expenses',
      'Tips and gratuities for guides and drivers',
      'Alcoholic beverages'
    ],
    status: '2026 Premium Adventure',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/zanzibar-mikumi-safari-8days',
    featured: true,
    photos: generateTourPhotos('zanzibar-mikumi-safari')
  },

 

  // Tour 4: Kendwa Sunset Cruise
  {
    id: 'kendwa-sunset-cruise',
    name: 'Kendwa Sunset Cruise',
    shortDescription: 'The Most Iconic Sunset in East Africa',
    description: 'Experience the magic of the Indian Ocean as the sun dips below the horizon aboard a traditional wooden dhow.',
    fullDescription: `Tour Grade: 2026 Romantic & Leisure Excellence
Type: Private or Executive Sharing Charter

OVERVIEW: THE MOST ICONIC SUNSET IN EAST AFRICA
Experience the magic of the Indian Ocean as the sun dips below the horizon with ZanStone Tours & Safaris. The Kendwa Sunset Cruise is the ultimate way to conclude your day in Zanzibar.

Aboard a handcrafted traditional wooden dhow, you will sail along the stunning coastline of Kendwa and Nungwi, famous for their calm, turquoise waters and vibrant gold-and-orange skies. Whether you are seeking a romantic escape, a family celebration, or a relaxing evening with friends, this cruise offers the perfect blend of Swahili culture, music, and breathtaking natural beauty.

DETAILED PROFESSIONAL ITINERARY & TIMINGS

04:00 PM – VIP Hotel Pickup & Kendwa Transfer (pickup time depends on your hotel location)
Start your evening with a private collection from your resort in a clean, air-conditioned vehicle. We head to the world-famous Kendwa Beach, where your traditional dhow awaits.

Traditional Dhow Boarding & Departure
Step aboard our professionally crewed dhow. As the sails are hoisted, we glide away from the shore into the calm, deep blue waters of the North Coast.

Coastal Sailing & Swahili Rhythms
Relax on comfortable cushions as we sail along the coastline. Enjoy live Swahili music or soft island rhythms while the crew serves traditional Zanzibar snacks and refreshments.

The Golden Hour & Sunset Toast
As the "Golden Hour" begins, the sky transforms into a masterpiece of pink, orange, and purple hues. We anchor in a prime position to watch the Zanzibar Sunset over the horizon. Toast to the moment with chilled refreshments and tropical fruit platters.

Arrival Back at Shore & Return Transfer
After the sun has set, we sail back to Kendwa Beach under the emerging stars. Your private driver will be waiting to provide a comfortable transfer back to your hotel.`,
    price: {
      '2': '$130',
      '3-4': '$180',
      '5-6': '$220 Per Person',
      '7-12': '$40 Per Person',
      '13+': '$35 Per Person'
    },
    priceNote: 'Price based on',
    image: beach1,
    duration: '3-4 Hours (Sunset)',
    groupSize: 'sharing trip or private charter',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Kendwa/Nungwi',
    highlights: [
      'Traditional Dhow Sailing',
      'Live Swahili Music',
      'Sunset Toast',
      'Local Snacks & Refreshments',
      'Expert Crew',
      'Hotel Transfers Included'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'Handcrafted Dhow Charter with professional crew',
      'Professional Licensed Guide',
      'Soft drinks, bottled water, and local snacks',
      'Fresh tropical fruit platters',
      'Live Swahili entertainment',
      'All Government Fees and local taxes'
    ],
    excludes: [
      'Personal expenses',
      'Alcoholic beverages (can be pre-arranged)',
      'Tips and gratuities'
    ],
    status: '2026 Romantic Excellence',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/kendwa-sunset-cruise',
    featured: false,
    photos: generateTourPhotos('kendwa-sunset')
  },

  // Tour 5: Salaam Cave & Maalum Cave Experience
  {
    id: 'salaam-maalum-caves',
    name: 'Salaam Cave & Maalum Cave Experience',
    shortDescription: 'Swim with Turtles and Discover Hidden Oases',
    description: 'Explore two of Zanzibar\'s most iconic natural sinkholes - from ethical turtle encounters to premium eco-wellness swimming.',
    fullDescription: `Tour Grade: 2026 Nature & Wellness Excellence
Type: Private Tour

📍 Overview: The Ultimate Hidden Oasis Journey
Discover the mystical inland waters of Zanzibar with ZanStone Tours & Safaris. This exclusive combo tour takes you to two of the island's most iconic natural sinkholes. From the ethical sea turtle encounter at Salaam Cave in Kizimkazi to the premium, serene eco-wellness swimming at Maalum Cave in Paje, this itinerary is designed for travelers seeking tranquility, photography, and a deep connection with nature.

🌊 Detailed Professional Itinerary & Timings

09:00 AM – VIP Hotel Pickup & Private Transfer 🚐
Start your morning with a private collection from your resort in a clean, air-conditioned vehicle. We head to the southern coast for your first natural encounter.

Salaam Cave: Swimming with Turtles 🐢
Arrive at the natural turquoise lagoon of Salaam Cave. Spend your time swimming alongside friendly sea turtles in a protected environment. This is a rare, interactive experience perfect for nature lovers and underwater photography.

Scenic Coastal Transfer to Paje 🌴
Enjoy a relaxing drive across the island toward the East Coast. We will stop for a quick local refreshment or a fresh coconut (Dafu) along the way.

Maalum Cave: The Premium Eco-Lagoon 💎
Enter the sophisticated and peaceful Maalum Cave. Unlike other spots, Maalum is a curated "natural swimming pool" with crystal-clear fresh water. It is known for its stunning rock formations and quiet, high-end atmosphere.

Relaxation & Fresh Tropical Fruits 🥥
After your swim, lounge by the cave's edge. Enjoy a professional platter of Zanzibar seasonal fruits and chilled mineral water as you soak in the serene jungle vibes.

Professional Return Transfer 🚐
After a full day of exploring Zanzibar's hidden wonders, your private driver will facilitate a comfortable transfer back to your hotel.`,
    price: {
      '2': '$215',
      '3-4': '$284',
      '5-6': '$70 Per Person',
      '7-12': '$65 Per Person',
        '13+': '$60 Per Person'
    },
    priceNote: 'Price based on',
    image: maa1,
    duration: 'Full Day (9:00 AM - 4:00 PM)',
    groupSize: 'Private Tour',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Kizimkazi & Paje',
    highlights: [
      'Swim with Sea Turtles',
      'Explore Maalum Cave',
      'Natural Freshwater Lagoon',
      'Professional Guide',
      'Fresh Tropical Fruits',
      'Scenic Coastal Drive'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'Professional Licensed Guide',
      'Double Cave Access (Salaam & Maalum)',
      'Ethical Turtle Interaction',
      'Bottled mineral water and fresh tropical fruits',
      'All Government Fees included'
    ],
    excludes: [
      'Personal expenses',
      'Lunch (can be added)',
      'Tips and gratuities'
    ],
    status: '2026 Nature Excellence',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/salaam-maalum-caves',
    featured: false,
    photos: generateTourPhotos('salaam-maalum-caves')
  },

  // Tour 6: Prison Island & Nakupenda Sandbank
  {
    id: 'prison-island-nakupenda',
    name: 'Prison Island & Nakupenda Sandbank',
    shortDescription: 'Giant Tortoises and Tropical Sandbank Paradise',
    description: 'Experience two of the most iconic Zanzibar sea excursions in one spectacular journey.',
    fullDescription: `Tour Grade: 2026 Top-Rated Experience
Type: Private tour

📍 Overview: Paradise Meets History
Experience two of the most iconic Zanzibar sea excursions in one spectacular journey with ZanStone Tours & Safaris. This full-day itinerary seamlessly blends the historic intrigue of Prison Island (Changuu) with the breathtaking natural beauty of Nakupenda Sandbank. From encountering century-old Giant Aldabra Tortoises to indulging in a gourmet seafood BBQ on a disappearing island of white sand, this tour is crafted for travelers seeking the perfect mix of Zanzibar history, nature, and tropical luxury.

🐢 Detailed Professional Itinerary & Timings

08:30 AM – VIP Hotel Pickup & Stone Town Transfer 🚐
Start your morning with a private pickup in a clean, air-conditioned vehicle. We coordinate our departure from the Stone Town port to ensure you reach the sandbank before the midday crowds.

Prison Island Heritage Tour (Changuu Island) 🐢
A 20-minute boat ride across the turquoise Indian Ocean brings you to the historic Prison Island. Enjoy a guided tour of the colonial ruins and the Giant Tortoise Sanctuary. Feed and photograph these gentle giants, some over 150 years old.

Nakupenda Sandbank 
We take a boat to Nakupenda Sandbank, a breathtaking stretch of pure white sand. Snorkel in Zanzibar's shallow coral gardens, swim in crystal-clear waters, or simply relax under a sunshade.

Signature Seafood BBQ on the Sandbank 🍤
Savor an authentic Zanzibar seafood lunch freshly prepared on the beach. Indulge in grilled lobster, prawns, calamari, and fresh fish, accompanied by tropical fruits and chilled refreshments.

Scenic Return & Arrival Back at Hotel 🚤
Enjoy a final dip before a relaxing boat ride back to the shore. Your private driver will provide a comfortable transfer back to your resort.`,
    price: {
      '2': '$270',
      '3-4': '$116  Per person',
      '5-6': '$88 Per person',
      '7-12': '$80 Per person',
      '13+': '$75 Per person'
    },
    priceNote: 'Price based on',
    image: prison,
    duration: 'Full Day (7:30 AM - 4:30 PM)',
    groupSize: 'Private tour',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Stone Town',
    highlights: [
      'Giant Tortoise Sanctuary',
      'Nakupenda Sandbank',
      'Seafood BBQ Lunch',
      'Snorkeling',
      'Historical Prison Island Tour',
      'Professional Guide'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'Traditional Boat Transfers',
      'Licensed Professional Guide',
      'Prison Island entrance fees',
      'Gourmet Seafood Lunch',
      'Unlimited bottled water and soft drinks',
      'All Government Fees included'
    ],
    excludes: [
      'Personal expenses',
      'Tips and gratuities'
    ],
    status: '2026 Top-Rated',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/prison-island-nakupenda',
    featured: true,
    photos: generateTourPhotos('prison-island-nakupenda')
  },

  // Tour 7: Nyange (Nakupenda) Private Sandbank Escape
  {
    id: 'nyange-private-sandbank',
    name: 'Nyange (Nakupenda) Private Sandbank Escape',
    shortDescription: 'Exclusive Luxury in the Middle of the Indian Ocean',
    description: 'Discover the most breathtaking natural wonder of Zanzibar with this private VIP sandbank experience.',
    fullDescription: `Tour Grade: 2026 VIP Experience
Type: Private Tour

📍 Overview: Exclusive Luxury in the Middle of the Indian Ocean
Discover the most breathtaking natural wonder of Zanzibar with ZanStone Tours & Safaris. Nyange (widely known as small nakupenda or Nakupenda biss) is a pristine, ephemeral sandbank that emerges from the turquoise Indian Ocean, offering a surreal landscape of pure white sand and crystal-clear infinity.

This private version is designed for travelers who seek a secluded escape to swim, snorkel, and indulge in a world-class Seafood BBQ in one of the most beautiful settings on Earth.

🌊 Detailed Professional Itinerary & Timings

08:00 AM – VIP Hotel Pickup & Stone Town Transfer 🚐
Start your morning with a private pickup from your resort in a clean, air-conditioned vehicle. We coordinate our departure from Stone Town to ensure you reach the sandbank before the midday crowds.

Scenic Private Boat Voyage ⛵
Board your  private boat for a 20-minute cruise across the sparkling turquoise waters. Watch the horizon as the white sands of Nyange slowly appear.

Sandbank Bliss 
Swim in the shallow, warm waters or  Our crew will set up a private sunshade for you to lounge and enjoy the 360-degree ocean views.

Signature Seafood BBQ on the Sandbank 🍤
Savor an authentic Zanzibar Seafood Lunch freshly prepared on-site. Indulge in grilled lobster, jumbo prawns, calamari, and fresh fish, accompanied by spiced rice and local salads. Follow your meal with a colorful platter of seasonal tropical fruits.

Relaxation & Arrival Back at Hotel 🚤
Enjoy a final dip in the crystal waters before a relaxing boat ride back to the shore. Your private driver will be waiting to provide a comfortable transfer back to your resort.`,
    price: {
      '2': '$230',
      '3-4': '$280',
      '5-6': '$65 per person',
      '7-12': '$60 per person',
      '13+': '$55 per person'
    },
    priceNote: 'Price based on',
    image: nakupenda,
    duration: 'Full Day (07:30 AM - 4:00 PM)',
    groupSize: 'Private tour',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Stone Town',
    highlights: [
      'Private Sandbank Experience',
      'Premium Seafood BBQ',
      'Lobster & Prawns',
      'Snorkeling Gear Included',
      'Private Boat Charter',
      'Professional Photography'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'private boat',
      'Licensed Professional Guide',
      'Gourmet Seafood Lunch with lobster',
      'Unlimited bottled water and soft drinks',
      'High-quality snorkeling equipment',
      'All Government Fees included'
    ],
    excludes: [
      'Personal expenses',
      'Tips and gratuities'
    ],
    status: '2026 VIP Experience',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/nyange-private-sandbank',
    featured: true,
    photos: generateTourPhotos('nyange-private')
  },

  // Tour 8: Stone Town & Prison Island Heritage
  {
    id: 'stone-town-prison-island',
    name: 'Stone Town & Prison Island Heritage Tour',
    shortDescription: 'History, Culture & Gentle Giants',
    description: 'Experience the profound historical depth and natural charm of Zanzibar with this curated day trip.',
    fullDescription: `Tour Grade: 2026 Cultural & Wildlife Excellence
Type: Private Executive Tour

📍 Overview: History, Culture & Gentle Giants
Experience the profound historical depth and natural charm of Zanzibar with this curated day trip by ZanStone Tours & Safaris. This tour bridges the gap between the legendary, winding alleys of Stone Town (UNESCO World Heritage Site) and the tranquil shores of Prison Island (Changuu).

From the architectural marvels of the Sultan's palaces to the majestic, century-old Giant Aldabra Tortoises, this experience offers a complete immersion into the soul of the Spice Island.

🏺 Detailed Professional Itinerary & Timings

08:00 AM – VIP Hotel Pickup & Stone Town Transfer 🚐
Begin your day with a private collection from your resort in a clean, air-conditioned vehicle. We head to the waterfront of Stone Town.

Prison Island Heritage Tour (Changuu Island) 🐢
A 20-minute boat ride across the turquoise Indian Ocean brings you to the historic Prison Island. Enjoy a guided tour of the colonial-era quarantine ruins and the Giant Tortoise Sanctuary.

Stone Town UNESCO Walking Tour 🏛️
Return to the mainland for a deep dive into the ancient city. Explore the Old Slave Market & Anglican Cathedral, the House of Wonders, and the Sultan's Palace Museum. Marvel at the iconic Zanzibar Carved Doors and experience the vibrant energy of the Darajani Market.

Authentic Swahili Lunch (Optional/Flexible) 🍛
Enjoy a break for a traditional Swahili Lunch at a curated rooftop restaurant in Stone Town.

Leisurely Return Transfer 🚐
After a morning of discovery, your private driver will facilitate a comfortable transfer back to your hotel.`,
    price: {
      '2': '$251',
      '3-4': '$100  Per person',
      '5-6': '$82 Per person',
      '7-12': '$75 Per person',
      '13+': '$70 Per person'
    },
    priceNote: 'price based on',
    image: prison3,
    duration: 'Full Day (8:00 AM - 4:00 PM)',
    groupSize: 'Private Executive Tour',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Stone Town',
    highlights: [
      'UNESCO World Heritage Site',
      'Prison Island Tortoises',
      'Old Slave Market',
      'House of Wonders',
      'Sultan\'s Palace',
      'Darajani Market'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'Traditional Boat Transfers',
      'Professional Licensed Guide',
      'Prison Island entrance fees',
      'UNESCO Site Permits',
      'Bottled mineral water and tropical fruits',
      'All Government Fees included'
    ],
    excludes: [
      'Personal expenses',
      'Lunch costs (unless pre-arranged)',
      'Tips and gratuities'
    ],
    status: '2026 Cultural Excellence',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/stone-town-prison-island',
    featured: false,
    photos: generateTourPhotos('stone-town-prison')
  },


  // Tour 10: Salaam Cave Swimming with Turtles
  {
    id: 'salaam-cave-turtles',
    name: 'Salaam Cave: Swimming with Turtles',
    shortDescription: 'A Magical Encounter in a Hidden Oasis',
    description: 'Discover one of Zanzibar\'s most serene hidden gems - swim with sea turtles in a natural turquoise lagoon.',
    fullDescription: `Tour Grade: 2026 Nature Excellence
Type: Private Executive Transfer & Guided Tour

📍 Overview: A Magical Encounter in a Hidden Oasis
Discover one of Zanzibar's most serene hidden gems with ZanStone Tours & Safaris. Located in the quiet village of Kizimkazi, Salaam Cave is a breathtaking natural inland lagoon filled with crystal-clear turquoise seawater.

This tour offers a rare and ethical opportunity to swim and interact with friendly sea turtles in a protected environment. Surrounded by ancient rock formations and lush greenery, it is the perfect escape for nature lovers and photography enthusiasts seeking a unique, peaceful experience away from the traditional beach crowds.

🐢 Detailed Professional Itinerary & Timings

09:00 AM – Hotel Pickup & Private Transfer 🚐
Start your day with a private collection from your resort in a clean, air-conditioned vehicle. Enjoy a scenic drive through local villages as you head to the southern coast.

Arrival at Salaam Cave & Orientation 📍
Upon arrival, your professional guide will provide a brief orientation on the cave's history and sea turtle conservation.

Swimming with Turtles & Photography 🐢
Step into the calm, turquoise waters of the natural cave. Spend your time swimming alongside the turtles, feeding them seaweed, and capturing incredible underwater photos.

Scenic Return Transfer 🚐
After a morning of natural wonder, your private driver will facilitate a comfortable transfer back to your hotel.`,
    price: {
      '2': '$175',
      '3-4': '$220 ',
      '5-6': '$55 Per Person',
      '7-12': '$50 Per Person',
      '13+': '$45 Per Person'
    },
    priceNote: 'Price based on',
    image: sal1,
    duration: 'Half Day (9:00 AM - 1:00 PM)',
    groupSize: 'Private Executive Tour',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Kizimkazi',
    highlights: [
      'Swim with Sea Turtles',
      'Natural Turquoise Lagoon',
      'Underwater Photography',
      'Conservation Education',
      'Professional Guide',
      'Scenic Drive'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'Professional Licensed Guide',
      'Salaam Cave Entry fees',
      'Ethical Turtle Interaction',
      'Bottled mineral water',
      'All Government Fees included'
    ],
    excludes: [
      'Personal expenses',
      'Lunch',
      'Tips and gratuities'
    ],
    status: '2026 Nature Excellence',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/salaam-cave-turtles',
    featured: false,
    photos: generateTourPhotos('salaam-cave')
  },

  // Tour 11: Stone Town & Spice Farm
  {
    id: 'stone-town-spice-farm',
    name: 'Stone Town & Spice Farm Discovery',
    shortDescription: 'The Heart & Soul of Zanzibar',
    description: 'Discover why Zanzibar is celebrated as the "Spice Island" and a historical gateway to East Africa.',
    fullDescription: `Tour Grade: 2026 Cultural Excellence
Type: Private Executive Tour

📍 Overview: The Heart & Soul of Zanzibar
Discover why Zanzibar is celebrated as the "Spice Island" and a historical gateway to East Africa. This professionally curated day trip by ZanStone Tours & Safaris combines the architectural grandeur of Stone Town (UNESCO World Heritage Site) with the aromatic wonders of our organic spice plantations.

Navigate the legendary limestone alleys and sultan's palaces before heading to the lush countryside to touch, smell, and taste the world's finest spices. It is the definitive experience for those seeking history, culture, and gastronomy in one day.

🏺 Detailed Professional Itinerary & Timings

09:00 AM – VIP Hotel Pickup & Private Transfer 🚐
Your journey begins with a private collection from your resort in a clean, air-conditioned vehicle.

Stone Town UNESCO Walking Tour 🏛️
Wander through the narrow, winding streets of the ancient city. Visit the Old Slave Market & Anglican Cathedral, the House of Wonders, and the Sultan's Palace Museum. Marvel at the iconic Zanzibar Carved Doors.

Authentic Swahili Farm Lunch 🍛
Transition to the lush countryside for a traditional Swahili Lunch prepared at the farm. Savor organic dishes like spiced pilau rice and seasonal vegetables.

Organic Spice Plantation Journey 🌿
An immersive sensory tour of a working Zanzibar Spice Farm. See, touch, smell, and taste fresh cloves, nutmeg, cinnamon, vanilla, and cardamom directly from the trees.

Relaxation & Arrival Back at Hotel 🚐
After a day of cultural and sensory discovery, your private driver will facilitate a comfortable transfer back to your hotel.`,
    price: {'2': '$175',
      '3-4': '$220  Per person',
      '5-6': '$50 Per person',
      '7-12': '$45 Per person',
      '13+': '$40 Per person'},
    priceNote: 'Price based on',
    image: spice,
    duration: 'Full Day (9:00 AM - 4:30 PM)',
    groupSize: 'Private Executive Tour',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Stone Town & Countryside',
    highlights: [
      'UNESCO Stone Town Tour',
      'Spice Farm Experience',
      'Traditional Swahili Lunch',
      'Old Slave Market',
      'House of Wonders',
      'Spice Tasting'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'Professional Licensed Guide',
      'UNESCO Site Access',
      'Authentic Swahili Lunch',
      'Unlimited bottled water',
      'Spice samples and fresh coconut water',
      'All Government Fees included'
    ],
    excludes: [
      'Personal expenses',
      'Tips and gratuities'
    ],
    status: '2026 Cultural Excellence',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/stone-town-spice-farm',
    featured: true,
    photos: generateTourPhotos('stone-town-spice')
  },

  // Tour 12: Safari Blue Adventure
  {
    id: 'safari-blue-adventure',
    name: 'The Legendary Safari Blue Adventure',
    shortDescription: 'Premium Private Dhow Adventure',
    description: 'Zanzibar\'s most iconic sea excursion across the protected Menai Bay Marine Conservation Area.',
    fullDescription: `Tour Grade: 2026 Top-Rated Experience
Type: Private Executive Charter (Sharing Options Available)

📍 Overview: The Ultimate Celebration of Ocean & Island Life
Embark on Zanzibar's most iconic sea excursion with ZanStone Tours & Safaris. The Safari Blue adventure is a full-day journey across the protected Menai Bay Marine Conservation Area.

Aboard a handcrafted traditional wooden dhow, you will discover hidden sandbanks, explore prehistoric mangrove lagoons, and snorkel in vibrant coral gardens. The highlight of the day is our Signature Seafood BBQ Buffet served on Kwale Island under the shade of ancient baobab trees.

🌊 Detailed Professional Itinerary & Timings

08:00 AM – VIP Hotel Pickup & Fumba Transfer 🚐
Start your morning with a private collection from your resort in a clean, air-conditioned vehicle.

Traditional Dhow Sailing & Sandbank Bliss ⛵
Board our professionally crewed dhow and set sail across the turquoise waters. First stop is a secluded sandbank where you can swim and sunbathe.

Premium Snorkeling in Menai Bay 🤿
Dive into the crystal-clear waters of the conservation area. Explore diverse coral reefs teeming with tropical fish.

Gourmet Seafood BBQ on Kwale Island 🦞
Head to Kwale Island for a world-class seafood feast. Indulge in freshly grilled lobster, jumbo prawns, calamari, octopus, and fish.

Natural Lagoon & Mangrove Exploration 🌿
Visit a hidden Blue Lagoon—a natural swimming pool surrounded by mangrove forests.

Arrival Back at Hotel 🚐
After a full day of ocean exploration, enjoy a scenic sail back to the shore.`,
    price: {
      '2': '$250',
      '3-4': '$90  Per person',
      '5-6': '$75 Per person',
      '7-12': '$65 Per person',
      '13+': '$60 Per person'
    },
    priceNote: 'Price based on',
    image: blue1,
    duration: 'Full Day (7:30 AM - 5:00 PM)',
    groupSize: 'Private tour',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Menai Bay',
    highlights: [
      'Traditional Dhow Sailing',
      'Kwale Island Visit',
      'Seafood BBQ Buffet',
      'Snorkeling in Coral Gardens',
      'Mangrove Lagoon',
      '500-Year-Old Baobab Tree'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'private boat',
      'Licensed Professional Guide',
      'Gourmet Seafood Buffet with lobster',
      'Unlimited bottled water and soft drinks',
      'High-quality snorkeling equipment',
      'All Marine Park Fees included'
    ],
    excludes: [
      'Personal expenses',
      'Alcoholic beverages',
      'Tips and gratuities'
    ],
    status: '2026 Top-Rated',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/safari-blue',
    featured: true,
    photos: generateTourPhotos('safari-blue')
  },

  // Tour 13: ZanStone Grand Slam (10 Days)
  {
    id: 'zanstone-grand-slam',
    name: 'ZanStone Grand Slam VIP Experience',
    shortDescription: '10-Day Exclusive Multi-Activity Luxury Journey',
    description: 'The most prestigious and comprehensive itinerary bridging island serenity with mainland safari adventure.',
    fullDescription: `Tour Category: Exclusive VIP Multi-Activity | Duration: 10 Days / 9 Nights | Year: 2026 Edition

Executive Summary
The ZanStone Grand Slam is our most prestigious and comprehensive itinerary. This 10-day journey bridges the turquoise serenity of private island sandbanks with the raw, high-octane adventure of a mainland Tanzania Safari. From viral Drone Photoshoots in clear kayaks to the historical depths of Stone Town, every detail is managed with 100% private logistics.

Detailed Professional Itinerary & Timings

Day 1: Arrival & VIP Executive Transfer 🛬
Pickup: Anytime (24/7 Service). Meet our professional concierge at Zanzibar International Airport for a private transfer to your resort.

Day 2: Mnemba Atoll: Private Dolphin & Snorkeling Safari 🐬
Start: 07:00 AM | Finish: 02:00 PM. Early departure to beat the crowds at Mnemba Atoll. Observe wild dolphins and snorkel in the "natural aquarium" of the reef.

Day 3: Stone Town Heritage & The Spice Plantation Journey 🏺🌿
Start: 09:00 AM | Finish: 04:30 PM. Explore the winding alleys of Stone Town. Discover the botanical secrets of the Spice Island with farm-to-table lunch.

Day 4: Salaam Cave & The Iconic Rock Restaurant 🐢🍽️
Start: 09:00 AM | Finish: 05:00 PM. Swim with sea turtles in Salaam Cave. Enjoy VIP reservation at The Rock Restaurant.

Day 5: Total Island Relaxation & Spa Day 🧘‍♂️
Full Day Leisure. Enjoy resort amenities and Balinese spa treatment.

Day 6: Pungume Island: The Hidden Turquoise Escape 🏝️
Start: 08:30 AM | Finish: 04:00 PM. Discover secluded Pungume Sandbank with private beach BBQ.

Day 7: Nakupenda Sandbank & Prison Island Discovery 🐢
Start: 08:30 AM | Finish: 04:30 PM. Sail to Nakupenda Sandbank and visit Giant Tortoise Sanctuary.

Day 8: Full-Day Safari: Mikumi or Selous (Flight Trip) 🦁
Start: 04:30 AM | Finish: 06:30 PM. Fly for Full-Day 4x4 Safari tracking lions and elephants.

Day 9: Clear Kayak Photoshoot & Sunset Dhow Cruise 🛶📸🌅
Start: 09:00 AM | Finish: 07:00 PM. Enjoy Clear Kayak & Drone Photoshoot. Evening Sunset Cruise with live music.

Day 10: Final Reflection & Coordinated Departure ✈️
Morning leisure followed by private airport transfer.`,
    price: 'Contact for pricing',
    priceNote: 'Price based on:',
    image: kayaking,
    duration: '10 Days / 9 Nights',
    groupSize: 'Private tour',
    category: 'daytrip',
    isDayTrip: false,
    location: 'Zanzibar & Mainland',
    highlights: [
      'Mnemba Atoll Private Safari',
      'Stone Town & Spice Farm',
      'Salaam Cave Turtles',
      'The Rock Restaurant',
      'Pungume Island Escape',
      'Mikumi/Selous Safari',
      'Clear Kayak Photoshoot',
      'Sunset Dhow Cruise'
    ],
    includes: [
      'Private Executive Transfers in luxury vehicles',
      'Bespoke Marine Charters (100% private boats)',
      'Round-trip domestic flights',
      'Private 4x4 open-roof safari jeep',
      'Elite Multi-Lingual Guiding',
      'Daily Signature Seafood BBQ Buffets',
      'Professional Clear Kayak & Drone Photoshoot',
      'Guaranteed table at The Rock Restaurant',
      'All National Park fees and permits',
      'High-quality snorkeling equipment'
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities'
    ],
    status: '2026 VIP Exclusive',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/zanstone-grand-slam',
    featured: true,
    photos: generateTourPhotos('grand-slam')
  },



  // Tour 15: Pungume Island Hidden Sandbank
  {
    id: 'pungume-island',
    name: 'Pungume Island Hidden Sandbank',
    shortDescription: 'The Hidden Turquoise Sandbank & Marine Safari',
    description: 'Discover the secluded beauty of Southern Zanzibar away from the crowds.',
    fullDescription: `Tour Grade: 2026 Exclusive Adventure
Type: Private Executive Charter

📍 Overview: An Untouched Paradise Away from the Crowds
Discover the secluded beauty of Southern Zanzibar with ZanStone Tours & Safaris. Pungume Sandbank is a hidden gem located near Kizimkazi, offering a quieter and more exclusive alternative to the mainstream sandbank tours.

This private marine safari takes you across the deep blue waters to a shimmering white sandbank surrounded by a vast, shallow turquoise lagoon. Known for its vibrant coral gardens and high probability of dolphin sightings, Pungume is the definitive choice for travelers seeking privacy, pristine nature, and a true "off-the-beaten-path" island experience.

🌊 Detailed Professional Itinerary & Timings

08:00 AM – VIP Hotel Pickup & Kizimkazi Transfer 🚐
Start with a private collection from your resort.

Private Boat Departure & Dolphin Spotting 🐬
Board your private boat and set sail toward the Pungume Marine Area, famous for resident pods of wild dolphins.

Premium Snorkeling at Pungume Reef 🤿
Dive into crystal-clear waters surrounding the untouched Pungume coral reef.

Pungume Sandbank Bliss 🏖️
Arrive at the breathtaking Pungume Sandbank. Relax on soft, white sand.

Signature Seafood BBQ on the Sandbank 🍤
Indulge in grilled lobster, jumbo prawns, calamari, and fish.

Relaxation & Arrival Back at Hotel 🚤
Enjoy a final swim before returning to your resort.`,
    price: 'Contact for pricing',
    priceNote: 'Price based on:',
    image: pung1,
    duration: 'Full Day (8:00 AM - 4:00 PM)',
    groupSize: 'Private Executive Charter',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Kizimkazi',
    highlights: [
      'Private Sandbank Experience',
      'Dolphin Spotting',
      'Pristine Coral Reefs',
      'Seafood BBQ Lunch',
      'Snorkeling Gear',
      'Exclusive Privacy'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'Bespoke Marine Charter',
      'Licensed Professional Guide',
      'Gourmet Seafood Lunch',
      'Unlimited bottled water and soft drinks',
      'High-quality snorkeling equipment',
      'All Government Fees and marine park permits'
    ],
    excludes: [
      'Personal expenses',
      'Tips and gratuities'
    ],
    status: '2026 Exclusive Adventure',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/pungume-island',
    featured: false,
    photos: generateTourPhotos('pungume-island')
  },

  // Tour 16: Selous Safari & Zanzibar (8 Days)
  {
    id: 'selous-zanzibar-safari',
    name: 'Selous Safari & Zanzibar Beach Escape',
    shortDescription: '8-Day Journey Where Ocean Meets the Wild',
    description: 'Experience the ultimate African contrast with Selous boat safaris and Zanzibar beach paradise.',
    fullDescription: `Category: Luxury Wilderness Edition 2026
Duration: 8 Days / 7 Nights (Includes Overnight Safari)
Highlights: Selous Boat Safari, Rufiji River, Mnemba Atoll, Nakupenda Sandbank & Giant Tortoises.

OVERVIEW: Where the Ocean Meets the Wild
Experience the ultimate African contrast with ZanStone Tours & Safaris. This 8-day premium itinerary balances the turquoise paradise of Zanzibar with the untouched wilderness of Selous Game Reserve (Nyerere National Park). From the iconic Rufiji River boat safaris to the white sands of Nakupenda, this journey is designed for travelers seeking relaxation, culture, and thrilling wildlife encounters.

THE PREMIUM ITINERARY & TIMINGS

Day 1: Arrival in Zanzibar – VIP Welcome 🛬
Private transfer from airport to your hotel.

Day 2: Safari Blue Adventure – Menai Bay ⛵
Start: 08:00 AM | Finish: 04:00 PM. Sail on a traditional dhow through Menai Bay with Seafood BBQ.

Day 3: Nakupenda Sandbank & Prison Island 🐢
Start: 08:30 AM | Finish: 04:30 PM. Visit Nakupenda Sandbank and Prison Island with giant tortoises.

Day 4: Fly to Selous & Full-Day Game Drive 🦁
Start: 06:00 AM | Finish: 06:00 PM. Flight to Selous. Game drive spotting elephants, lions, and buffaloes. Overnight at luxury lodge.

Day 5: Selous Boat Safari – Rufiji River 🚤
Start: 08:00 AM | Finish: 05:00 PM. Cruise the Rufiji River to see hippos and crocodiles. Second night in reserve.

Day 6: Mnemba Atoll Snorkeling Trip 🐬
Start: 07:00 AM | Finish: 02:00 PM. Return to Zanzibar and snorkel at Mnemba Atoll.

Day 7: Salaam Cave & Swimming with Turtles 🐢
Start: 09:00 AM | Finish: 04:00 PM. Visit Salaam Cave to swim with turtles.

Day 8: Departure – Farewell East Africa ✈️
Private airport transfer.`,
    price: 'Contact for pricing',
    priceNote: 'Price based on:',
    image: selous,
    duration: '8 Days / 7 Nights',
    groupSize: 'Private Luxury Safari',
    category: 'daytrip',
    isDayTrip: false,
    location: 'Zanzibar & Selous',
    highlights: [
      'Selous Game Reserve Safari',
      'Rufiji River Boat Safari',
      'Nakupenda Sandbank',
      'Prison Island Tortoises',
      'Mnemba Atoll Snorkeling',
      'Salaam Cave Turtles'
    ],
    includes: [
      'Private VIP Transfers in luxury vehicles',
      'Multi-Language Professional Guides',
      'Overnight Safari with full-board accommodation',
      'Round-trip domestic flights',
      'Private boat charters',
      'High-quality snorkeling gear',
      'All park fees and government taxes'
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities'
    ],
    status: '2026 Luxury Wilderness',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/selous-zanzibar-safari',
    featured: true,
    photos: generateTourPhotos('selous-zanzibar')
  },

  // Tour 17: 5-Day Exclusive Zanzibar
  {
    id: 'zanzibar-exclusive-5days',
    name: 'Exclusive Zanzibar 5-Day Escape',
    shortDescription: '5-Day Sophisticated Blend of Adventure and Serenity',
    description: 'The definitive choice for travelers seeking to maximize their island getaway without compromising on quality.',
    fullDescription: `Tour Type: Private & Exclusive | Duration: 5 Days / 4 Nights | Year: 2026 Edition

Executive Overview
Discover the soul of the Spice Island with ZanStone Tours & Safaris. This meticulously crafted 5-day itinerary offers a sophisticated blend of adventure and serenity. We have curated the most iconic Zanzibar experiences—from the marine biodiversity of Mnemba Atoll to the historical depth of Stone Town—ensuring every moment is defined by luxury, comfort, and authentic Swahili hospitality.

Detailed Professional Itinerary

Day 1: Arrival & Seamless VIP Integration 🛬
Pickup: On-Demand (24/7). VIP transfer to your resort.

Day 2: The Sandbank & Heritage Expedition (Nakupenda & Prison Island) 🐢
Start: 08:00 AM | Finish: 04:30 PM. Educational visit to Prison Island with giant tortoises. Sail to Nakupenda Sandbank for Signature Seafood BBQ.

Day 3: Mnemba Atoll Marine Exploration & Dolphin Encounter 🐬
Start: 07:00 AM | Finish: 03:30 PM. Early departure for dolphin encounter at Mnemba Atoll. Snorkel in vibrant coral gardens.

Day 4: Natural Wonders & Iconic Gastronomy (The Rock Restaurant) 🍽️
Start: 09:00 AM | Finish: 05:00 PM. Visit Salaam Cave for turtle swimming. Secure reservation at The Rock Restaurant.

Day 5: Final Leisure & Professional Departure ✈️
Morning leisure followed by coordinated airport transfer.`,
    price: 'Contact for pricing',
    priceNote: 'Price based on:',
    image: nakupenda1,
    duration: '5 Days / 4 Nights',
    groupSize: 'Private & Exclusive',
    category: 'daytrip',
    isDayTrip: false,
    location: 'Zanzibar',
    highlights: [
      'Nakupenda Sandbank',
      'Prison Island Tortoises',
      'Mnemba Atoll Snorkeling',
      'Dolphin Encounter',
      'Salaam Cave Turtles',
      'The Rock Restaurant'
    ],
    includes: [
      'Elite Transportation in premium vehicles',
      'Bespoke Marine Charters (private boats)',
      'Expert Multi-Lingual Guides',
      'Daily high-end seafood BBQ lunches',
      'All conservation fees and permits',
      'Professional-grade snorkeling equipment'
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities'
    ],
    status: '2026 VIP Exclusive',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/zanzibar-exclusive-5days',
    featured: false,
    photos: generateTourPhotos('exclusive-5days')
  },

  // Tour 18: ZanStone Signature Package (6 Days)
  {
    id: 'zanstone-signature-6days',
    name: 'ZanStone Signature Package',
    shortDescription: '6-Day Premium Private Journey',
    description: 'A meticulously curated 6-day journey designed for travelers who demand the perfect equilibrium between adventure and luxury.',
    fullDescription: `Tour Status: Premium Private Package 2026 | Duration: 6 Days / 5 Nights | Exclusivity: 100% Private Transfers & Charters

Executive Summary
The ZanStone Signature Package is a meticulously curated 6-day journey designed for travelers who demand the perfect equilibrium between adventure and luxury. This itinerary traverses the island's most iconic landscapes—from the historical corridors of Stone Town to the vibrant marine ecosystems of Mnemba Atoll. Every detail, from private executive transfers to gourmet seafood dining, is professionally managed to ensure a seamless immersion into the "Spice Island's" natural and cultural heritage.

The Professional Itinerary

Day 1: VIP Arrival & Luxury Integration 🛬
Pickup: Anytime (24/7 Service). Private transfer to your resort.

Day 2: Nakupenda Sandbank & The Giant Tortoise Sanctuary 🐢
Start: 08:30 AM | Finish: 04:30 PM. Private boat to Prison Island and Nakupenda Sandbank with Signature Seafood BBQ.

Day 3: The Safari Blue® Marine Conservation Tour ⛵
Start: 08:00 AM | Finish: 05:00 PM. Traditional dhow exploration of Menai Bay with gourmet seafood buffet on Kwale Island.

Day 4: Stone Town Heritage & The Spice Plantation Journey 🌿
Start: 09:00 AM | Finish: 04:30 PM. Guided historical tour of Stone Town followed by Spice Plantation visit with traditional Swahili Farm Lunch.

Day 5: Mnemba Atoll: Dolphin Encounter & Marine Reserve 🐬
Start: 06:30 AM | Finish: 02:00 PM. Early morning dolphin encounter and snorkeling at Mnemba Atoll.

Day 6: Final Leisure & Coordinated Departure ✈️
Morning leisure followed by private airport transfer.`,
    price: 'Contact for pricing',
    priceNote: 'Pricebased on:',
    image: blue2,
    duration: '6 Days / 5 Nights',
    groupSize: '100% Private',
    category: 'daytrip',
    isDayTrip: false,
    location: 'Zanzibar',
    highlights: [
      'Nakupenda Sandbank',
      'Prison Island Tortoises',
      'Safari Blue Adventure',
      'Stone Town Tour',
      'Spice Farm Experience',
      'Mnemba Atoll Snorkeling'
    ],
    includes: [
      'Private Logistics in modern AC vehicles',
      'Elite Multi-Lingual Guides',
      'Bespoke Private Charters',
      'Signature Seafood BBQ',
      'Authentic Swahili lunches',
      'All marine park fees and permits',
      'Professional snorkeling equipment'
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities'
    ],
    status: '2026 Premium Private',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/zanstone-signature-6days',
    featured: false,
    photos: generateTourPhotos('signature-6days')
  },

  // Tour 19: Grand Island Odyssey (7 Days)
  {
    id: '7-Days-Zanzibar-Package',
    name: '7-Days Zanzibar Package',
    shortDescription: '7-Day VIP Executive Edition - Nature, Adventure & Social Impact',
    description: 'A comprehensive 360-degree immersion into Zanzibar\'s soul with private marine expeditions, equestrian adventures, and village visits.',
    fullDescription: `Tour Grade: VIP Executive Edition 2026 | Duration: 7 Days / 6 Nights | Focus: Nature, Adventure & Social Impact

Executive Summary
The Grand Island Odyssey by ZanStone Tours & Safaris is our most comprehensive 2026 itinerary. It is meticulously designed for the discerning traveler who seeks a deep, 360-degree immersion into Zanzibar's soul. This journey transcends the ordinary, blending private marine expeditions, equestrian beach adventures, and impactful village visits. From the turquoise sanctuary of Mnemba Atoll to the historical heartbeat of Stone Town, we handle every logistical detail with precision.

The Professional Itinerary

Day 1: Arrival & VIP Island Transition 🛬
Pickup: Anytime (24/7 Concierge). Professional chauffeur transfer.

Day 2: Nakupenda Sandbank & The Tortoise Sanctuary 🐢
Start: 08:30 AM | Finish: 04:30 PM. Private boat to Nakupenda Sandbank and Prison Island with Gourmet Seafood BBQ.

Day 3: Salaam Cave, Beach Horse Riding & The Rock Restaurant 🏇
Start: 09:00 AM | Finish: 05:00 PM. Turtle swimming at Salaam Cave, equestrian beach ride, and visit to The Rock Restaurant.

Day 4: The Safari Blue® Professional Charter ⛵
Start: 08:00 AM | Finish: 05:00 PM. Traditional dhow exploration with premium snorkeling and seafood buffet.

Day 5: Mnemba Atoll: Dolphin Encounter & Reef Exploration 🐬
Start: 06:30 AM | Finish: 02:00 PM. Early morning dolphin watching and snorkeling at Mnemba Atoll.

Day 6: Stone Town Heritage, Spice Science & Community Impact 🌿
Start: 09:00 AM | Finish: 05:00 PM. UNESCO Stone Town tour, organic Spice Farm visit, and meaningful village visit supporting local children's projects.

Day 7: Final Reflection & Coordinated Departure ✈️
Morning leisure followed by airport transfer.`,
    price: 'Contact for pricing',
    priceNote: 'price based on:',
    image: rock2,
    duration: '7 Days / 6 Nights',
    groupSize: 'VIP Executive',
    category: 'daytrip',
    isDayTrip: false,
    location: 'Zanzibar',
    highlights: [
      'Nakupenda Sandbank',
      'Prison Island Tortoises',
      'Salaam Cave Turtles',
      'Beach Horse Riding',
      'The Rock Restaurant',
      'Safari Blue Adventure',
      'Mnemba Atoll Snorkeling',
      'Community Impact Visit'
    ],
    includes: [
      'Private Logistics in modern AC vehicles',
      'Elite Marine Charters (private boats)',
      'Professional Multi-Lingual Guides',
      'Horse riding adventure',
      'Swimming with turtles at Salaam Cave',
      'Fresh seafood BBQ lunches',
      'All marine park fees and permits',
      'Contribution to local village projects'
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities'
    ],
    status: '2026 VIP Executive',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/grand-island-odyssey',
    featured: true,
    photos: generateTourPhotos('grand-island')
  },

  // Tour 20: Safari Fusion (7 Days)
  {
    id: 'safari-fusion-7days',
    name: 'Safari Fusion',
    shortDescription: '7-Day Big Five Safari & Private Marine Charters',
    description: 'Designed for those who refuse to choose between a tropical paradise and a wild African safari.',
    fullDescription: `Tour Grade: VIP Adventure Edition 2026 | Duration: 7 Days / 6 Nights | Focus: Big Five Safari & Private Marine Charters

Executive Summary
The ZanStone Safari Fusion is a premier 2026 itinerary designed for those who refuse to choose between a tropical paradise and a wild African safari. This 7-day journey seamlessly integrates the turquoise tranquility of Mnemba Atoll and Nakupenda Sandbank with a high-octane wildlife expedition to Mikumi National Park. Every logistical detail is professionally managed to provide an effortless, high-end experience of East Africa's natural wonders.

The Professional Itinerary

Day 1: VIP Arrival & Luxury Island Transition 🛬
Pickup: Anytime (24/7 Service). Private transfer to hotel.

Day 2: Nakupenda Sandbank & The Historical Tortoise Sanctuary 🐢
Start: 08:30 AM | Finish: 04:30 PM. Private boat to Nakupenda Sandbank and Prison Island with Signature Seafood BBQ.

Day 3: Salaam Cave, Beach Horse Riding & Iconic Dining 🏇
Start: 09:00 AM | Finish: 05:00 PM. Turtle swimming, equestrian beach ride, and The Rock Restaurant.

Day 4: The Safari Blue® Professional Marine Charter ⛵
Start: 08:00 AM | Finish: 05:00 PM. Traditional dhow exploration with seafood buffet on secluded island.

Day 5: Mnemba Atoll: Dolphin Encounter & Reef Exploration 🐬
Start: 06:30 AM | Finish: 02:00 PM. Early morning dolphin watching and snorkeling.

Day 6: Full-Day Mikumi National Park Safari (Mainland Adventure) 🦁
Start: 04:30 AM | Finish: 06:30 PM. Flight to Mikumi for full-day game drive spotting lions, elephants, and giraffes.

Day 7: Final Reflection & Coordinated Departure ✈️
Morning leisure followed by airport transfer.`,
    price: 'Contact for pricing',
    priceNote: 'Price based on:',
    image: mnemba12,
    duration: '7 Days / 6 Nights',
    groupSize: 'VIP Adventure',
    category: 'daytrip',
    isDayTrip: false,
    location: 'Zanzibar & Mikumi',
    highlights: [
      'Nakupenda Sandbank',
      'Prison Island Tortoises',
      'Salaam Cave Turtles',
      'Beach Horse Riding',
      'Safari Blue Adventure',
      'Mnemba Atoll Snorkeling',
      'Mikumi Safari (Big Five)'
    ],
    includes: [
      'Elite Logistics in modern AC vehicles',
      'Full-day 4x4 safari in Mikumi',
      'Private Marine Charters',
      'Beach horse riding',
      'Swimming with turtles',
      'Fresh seafood BBQ lunches',
      'Round-trip flights to Mikumi',
      'All park fees and permits'
    ],
    excludes: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Tips and gratuities'
    ],
    status: '2026 VIP Adventure',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/safari-fusion-7days',
    featured: true,
    photos: generateTourPhotos('safari-fusion')
  },

  // Tour 21: Salaam Cave & Maalum Cave (Duplicate of Tour 5 - Keeping for completeness)
  {
    id: 'salaam-maalum-caves-dup',
    name: 'Zanzibar Cave Wonders: Salaam & Maalum',
    shortDescription: 'Swim with Turtles and Discover Hidden Oases',
    description: 'Discover the mystical inland waters of Zanzibar with this exclusive combo tour.',
    fullDescription: `Tour Grade: 2026 Nature & Wellness Excellence
Type: Private Executive Transfer & Guided Tour

📍 Overview: The Ultimate Hidden Oasis Journey
Discover the mystical inland waters of Zanzibar with ZanStone Tours & Safaris. This exclusive combo tour takes you to two of the island's most iconic natural sinkholes. From the ethical sea turtle encounter at Salaam Cave in Kizimkazi to the premium, serene eco-wellness swimming at Maalum Cave in Paje, this itinerary is designed for travelers seeking tranquility, photography, and a deep connection with nature.

🌊 Detailed Professional Itinerary & Timings

09:00 AM – VIP Hotel Pickup & Private Transfer 🚐
Start your morning with a private collection from your resort.

Salaam Cave: Swimming with Turtles 🐢
Swim alongside friendly sea turtles in a protected environment.

Scenic Coastal Transfer to Paje 🌴
Relaxing drive to the East Coast with fresh coconut stop.

Maalum Cave: The Premium Eco-Lagoon 💎
Enter the sophisticated Maalum Cave with crystal-clear fresh water.

Relaxation & Fresh Tropical Fruits 🥥
Enjoy fruit platter and mineral water by the cave.

Professional Return Transfer 🚐
Comfortable transfer back to your hotel.`,
    price: {
      '2': '$213',
      '3-4': '$100 Per Person / $284',
      '5-6': '$70',
      '7-12': '$65'
    },
    priceNote: 'Price based on group size',
    image: sal2,
    duration: 'Full Day (9:00 AM - 4:00 PM)',
    groupSize: 'Private Executive Tour',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Kizimkazi & Paje',
    highlights: [
      'Swim with Sea Turtles',
      'Explore Maalum Cave',
      'Natural Freshwater Lagoon',
      'Professional Guide',
      'Fresh Tropical Fruits',
      'Scenic Coastal Drive'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'Professional Licensed Guide',
      'Double Cave Access',
      'Ethical Turtle Interaction',
      'Bottled mineral water and fresh fruits',
      'All Government Fees included'
    ],
    excludes: [
      'Personal expenses',
      'Lunch',
      'Tips and gratuities'
    ],
    status: '2026 Nature Excellence',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/salaam-maalum-caves-dup',
    featured: false,
    photos: generateTourPhotos('salaam-maalum-dup')
  },

  // Tour 22: Elite Media Experience
  {
    id: 'elite-media-experience',
    name: 'Elite Media Experience',
    shortDescription: 'Clear Kayak, Jet Car & Drone Photoshoot',
    description: 'Combine high-speed thrill with world-class content creation in the most trending watersports experience.',
    fullDescription: `Tour Grade: 2026 Social Media & VIP Excellence
Type: Private Executive Experience

OVERVIEW: CAPTURE THE MOMENT IN LUXURY
Elevate your holiday memories with the most trending and exclusive watersports experience in Zanzibar, brought to you by ZanStone Tours & Safaris. This professionally curated session is designed for travelers who want to combine high-speed thrill with world-class content creation.

Whether you are navigating the crystal-clear waters in our Transparent Clear Kayaks or racing across the waves in a Luxury Jet Car, our professional drone pilots will be overhead to capture every moment in stunning 4K resolution. It is the definitive choice for honeymooners, influencers, and travelers seeking the ultimate VIP souvenir.

DETAILED PROFESSIONAL ITINERARY & TIMINGS

09:00 AM – Hotel Pickup & Beach Club Transfer
Start your morning with a private collection from your resort.

Clear Kayak Session & Drone Cinematography
Step into fully transparent kayaks. Professional Drone Pilot captures cinematic shots in 4K.

Jet Car or Jet Ski Adrenaline Experience
Transition to Luxury Jet Car or high-performance Jet Ski for high-speed action footage.

Media Review & Refreshments
Return to beach lounge for tropical fruits while media team backs up your footage.

Professional Return Transfer
Comfortable transfer back to your hotel.`,
    price: 'Contact for pricing',
    priceNote: 'Price based on:',
    image: kayaking,
    duration: 'Half Day (9:00 AM - 1:00 PM)',
    groupSize: 'Private Executive',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Nungwi/Kendwa',
    highlights: [
      'Clear Kayak Session',
      'Professional Drone Photography',
      '4K Video Recording',
      'Jet Car or Jet Ski Ride',
      'High-Resolution Photos',
      'Beach Club Refreshments'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'Professional Drone Pilot',
      'Clear Kayak Equipment',
      'Jet Car or Jet Ski Rental',
      'Digital transfer of all footage',
      'Bottled mineral water and fresh fruits',
      'Safety gear and professional briefing',
      'All Government permits'
    ],
    excludes: [
      'Personal expenses',
      'Lunch',
      'Tips and gratuities'
    ],
    status: '2026 VIP Excellence',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/elite-media-experience',
    featured: true,
    photos: generateTourPhotos('elite-media')
  },

  // Tour 23: Salaam Cave & Jozani Forest
  {
    id: 'salaam-cave-jozani',
    name: 'Salaam Cave & Jozani Forest Expedition',
    shortDescription: 'From Ancient Caves to the Tropical Canopy',
    description: 'Experience the wild side of Zanzibar with this professionally curated eco-adventure combo tour.',
    fullDescription: `Tour Grade: 2026 Eco-Adventure Excellence
Type: Private Executive Transfer & Guided Tour

📍 Overview: From Ancient Caves to the Tropical Canopy
Experience the wild side of Zanzibar with ZanStone Tours & Safaris. This professionally curated combo tour takes you from the tranquil, turquoise lagoon of Salaam Cave to the lush, prehistoric canopy of Jozani Chwaka Bay National Park.

Encounter the world-famous Red Colobus Monkeys, wander through mystical mangrove boardwalks, and enjoy the rare experience of swimming with sea turtles. It is the definitive choice for nature lovers, families, and photographers seeking Zanzibar's unique biodiversity in a single day.

🌳 Detailed Professional Itinerary & Timings

08:30 AM – VIP Hotel Pickup & Private Transfer 🚐
Start your morning with a private collection from your resort.

Jozani Forest: The Red Colobus Sanctuary 🐒
Explore Zanzibar's only national park with a licensed park ranger. Spot endemic Red Colobus Monkeys and walk through mystical Mangrove swamp boardwalks.

Scenic Transfer to Kizimkazi Village 🌴
Relaxing drive south toward the coast.

Salaam Cave: Swimming with Turtles 🐢
Arrive at the natural turquoise lagoon of Salaam Cave. Swim with friendly sea turtles in their protected habitat.

Relaxation & Fresh Tropical Fruits 🥥
Enjoy fresh Zanzibar fruit platter and chilled mineral water by the lagoon.

Professional Return Transfer 🚐
Comfortable transfer back to your hotel.`,
    price: {
      '2': '$191',
      '3-4': '$85 Per Person',
      '5-6': '$65 Per Person',
      '7-12': '$60 Per Person'
    },
    priceNote: 'Price based on:',
    image: jozani2,
    duration: 'Full Day (8:30 AM - 4:00 PM)',
    groupSize: 'Private Executive Tour',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Jozani & Kizimkazi',
    highlights: [
      'Jozani Forest National Park',
      'Red Colobus Monkeys',
      'Mangrove Boardwalks',
      'Salaam Cave Turtles',
      'Swimming with Turtles',
      'Nature Photography'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off',
      'Licensed Professional Guide',
      'National Park Access (Jozani Forest)',
      'Salaam Cave Entry',
      'Bottled mineral water',
      'Fresh tropical fruit platters',
      'All Government Fees included'
    ],
    excludes: [
      'Personal expenses',
      'Lunch',
      'Tips and gratuities'
    ],
    status: '2026 Eco-Adventure',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/salaam-cave-jozani',
    featured: true,
    photos: generateTourPhotos('salaam-jozani')
  },
  // Tour 24: 3 Days Safari to Mikumi with Maasai Village
  {
    id: 'mikumi-maasai-village-safari',
    name: '3 Days Safari to Mikumi National Park with Maasai Village Experience From Zanzibar',
    shortDescription: 'Premium Safari Adventure Combining Wildlife Exploration with Authentic Cultural Immersion',
    description: 'This 3-day, 2-night safari to Mikumi National Park is a carefully designed journey that combines wildlife adventure, cultural immersion, and scenic travel across Tanzania. Departing from Zanzibar, this experience blends ferry, modern SGR train, and private road transfers to ensure a smooth, comfortable, and well-organized safari.',
    fullDescription: `Tour Grade: 2026 Premium Safari & Cultural Excellence
Type: Private or Sharing Charter | Duration: 3 Days / 2 Nights

🐘 Overview
This 3-day, 2-night safari to Mikumi National Park is a carefully designed journey that combines wildlife adventure, cultural immersion, and scenic travel across Tanzania. Departing from Zanzibar, this experience blends ferry, modern SGR train, and private road transfers to ensure a smooth, comfortable, and well-organized safari.

Mikumi is one of Tanzania's most accessible national parks and offers an incredible opportunity to witness Africa's iconic wildlife in vast open savannahs, often compared to the famous Serengeti ecosystem. This safari is ideal for travelers seeking both adventure and cultural discovery in a short but meaningful itinerary.

🗓️ Detailed Itinerary

✨ Day 1: Zanzibar – Dar es Salaam – Mikumi National Park – Maasai Village

🌅 Early Morning Departure
Your journey begins before sunrise with a hotel pick-up at 05:00 AM in Zanzibar. You will be assisted by our driver and transferred to the ferry terminal. A short 5-minute walk leads you to the boarding point.

⛴️ Ferry to Dar es Salaam
At 07:00 AM, board the ferry to Dar es Salaam. Enjoy a relaxing 2-hour ocean crossing with beautiful views of the Indian Ocean and the coastline.

🚆 SGR Train to Morogoro
Upon arrival in Dar es Salaam, you will walk to the nearby SGR station and board the modern electric train to Morogoro at 09:30 AM, arriving around 11:15 AM. This journey offers a comfortable and scenic experience through Tanzania's countryside.

🚙 Transfer to Mikumi National Park
From Morogoro, meet your professional driver-guide and begin a scenic road transfer to Mikumi National Park. Along the way, you will pass through rural villages, farmland, and natural landscapes that give a true glimpse of local life.

🏨 Arrival & Lunch
Upon arrival at your camp or lodge inside/near the park:
• Check-in and refresh
• Enjoy a freshly prepared lunch
• Take time to relax before afternoon activities

🛖 Maasai Village Experience (Around 5:00 PM)
In the late afternoon, visit a traditional Maasai village for a cultural experience where you will:
• Be warmly welcomed by Maasai warriors and elders
• Witness traditional cattle herding lifestyle
• Observe women milking cows and preparing traditional practices
• Enjoy traditional dances, songs, and storytelling
• Learn about Maasai customs, history, and social structure

After sunset, return to your camp for dinner and overnight stay.

🐾 Day 2: Full-Day Game Drive in Mikumi National Park

🌅 Early Morning Start (06:15 AM)
After breakfast, depart for a full-day safari adventure inside Mikumi National Park. Explore its vast plains, open grasslands, and acacia woodlands while searching for incredible wildlife.

🐘 Wildlife You May Encounter:
• Lions resting or hunting in the savannah
• Large elephant herds moving across the plains
• Graceful giraffes feeding on acacia trees
• Zebras and buffaloes in large groups
• Hippos in water pools
• Crocodiles near river areas
• Antelopes and colorful bird species

🍴 Lunch in the Park
Enjoy lunch at a designated picnic area or park restaurant, surrounded by nature and wildlife sounds. Continue your afternoon game drive, capturing unforgettable photography moments as the golden light enhances the landscape.

Return to camp in the evening for dinner and overnight stay.

🚆 Day 3: Mikumi – Morogoro – Dar es Salaam – Zanzibar

🌅 Morning Departure
After breakfast, check out and depart for Morogoro SGR station.

🚆 Train to Dar es Salaam
Board the electric train back to Dar es Salaam, enjoying a comfortable return journey.

⛴️ Ferry Back to Zanzibar
Upon arrival in Dar es Salaam, walk to the ferry terminal and board your return ferry to Zanzibar. On arrival in Zanzibar, our driver will meet you and transfer you back to your hotel, marking the end of your unforgettable safari experience.`,
    price: {
      'per_person': '$700'
    },
    priceNote: 'Price per person for group bookings',
    image: safariBg,
    duration: '3 Days / 2 Nights',
    groupSize: 'Private or Sharing tour',
    category: 'daytrip',
    isDayTrip: false,
    location: 'Zanzibar & Mikumi',
    highlights: [
      'Ferry crossing to Dar es Salaam',
      'Modern SGR train experience',
      'Full-day game drive in Mikumi National Park',
      'Maasai village cultural experience',
      'Big Five wildlife sightings',
      'Professional English-speaking safari guide',
      'Comfortable accommodation in Mikumi'
    ],
    includes: [
      'Hotel pick-up and drop-off in Zanzibar',
      'Roundtrip ferry tickets (Zanzibar – Dar es Salaam)',
      'Roundtrip SGR train tickets (Dar es Salaam – Morogoro)',
      'All road transfers in mainland Tanzania',
      '2 nights full-board accommodation in Mikumi',
      'Full-day game drive in Mikumi National Park',
      'Maasai village cultural experience',
      'All park entry fees and conservation charges',
      'Professional English-speaking safari guide'
    ],
    excludes: [
      'International flights to/from Zanzibar',
      'Travel insurance and personal expenses',
      'Tips and gratuities for guides and drivers',
      'Alcoholic beverages'
    ],
    status: '2026 private Safari',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/mikumi-maasai-village-safari',
    featured: true,
    photos: generateTourPhotos('zanzibar-mikumi-safari')
  },

  // Tour 25: Selous Day Trip Safari
  {
    id: 'selous-day-trip-safari',
    name: 'Selous Day Trip Safari from Zanzibar – Full Experience Package',
    shortDescription: 'Fly-In Day Safari to Africa\'s Largest Wilderness Area',
    description: 'Discover one of Africa\'s largest and most untouched wilderness areas with this unforgettable day safari to Nyerere National Park. Departing from the tropical paradise of Zanzibar, this fly-in experience offers an exceptional opportunity to explore vast, raw, and authentic African landscapes within a single day.',
    fullDescription: `Tour Grade: 2026 Premium Fly-In Safari Experience
Type: Day Safari (All-Inclusive Fly-In)

🌍 Overview
Discover one of Africa's largest and most untouched wilderness areas with this unforgettable day safari to Nyerere National Park. Departing from the tropical paradise of Zanzibar, this fly-in experience offers an exceptional opportunity to explore vast, raw, and authentic African landscapes within a single day.

Famous for its remote beauty, rich biodiversity, and untouched ecosystems, Selous provides a more exclusive and adventurous safari experience compared to other parks in Tanzania—perfect for travelers seeking something truly wild and unique.

🗓️ Detailed Itinerary

✨ Day Trip Experience

🌅 Early Morning Departure (04:30 AM)
Your adventure begins with a comfortable hotel pickup in Zanzibar. You will be transferred to the airport with full assistance for a smooth check-in process.

✈️ Flight to Selous / Nyerere National Park (06:00 AM)
Enjoy a scenic flight over Tanzania's coastline, rivers, and vast wilderness landscapes as you head toward one of Africa's most iconic protected areas.

🐘 Arrival & Morning Game Drive (07:20 AM)
Upon arrival, meet your professional safari guide and begin your game drive immediately in a shared 4x4 safari vehicle with a pop-up roof, offering excellent visibility for wildlife viewing and photography.

Expect to see:
• Elephants roaming freely in large herds
• Lions and other predators
• Giraffes and zebras
• Hippos and crocodiles along the Rufiji River
• Rich birdlife and antelope species

🍴 Lunch in the Wilderness
Enjoy a freshly prepared lunch served within the park, surrounded by the untouched beauty of Selous' vast landscapes.

🦓 Afternoon Game Drive
Continue exploring the park's diverse ecosystems, including open plains, woodlands, and river systems—especially the famous Rufiji River region, known for its dramatic wildlife concentration.

✈️ Return to Zanzibar (Evening)
After an unforgettable safari experience, transfer to the airstrip for your return flight to Zanzibar. Upon arrival, our driver will transfer you back to your hotel.

🐾 Wildlife You May See
• Elephants
• Lions
• Giraffes
• Zebras
• Hippos
• Crocodiles
• Buffaloes
• Antelopes & diverse bird species`,
    price: {
      'per_person': '$850'
    },
    priceNote: 'Price per person',
    image: selous,
    duration: 'Full Day (04:30 AM - Evening Return)',
    groupSize: 'Shared safari vehicle',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Nyerere National Park',
    highlights: [
      'Roundtrip domestic flights from Zanzibar',
      'Morning and afternoon game drives',
      'Rufiji River wildlife viewing',
      'Shared 4x4 safari vehicle with pop-up roof',
      'Professional safari guide',
      'Lunch in the park',
      'Big Five wildlife sightings'
    ],
    includes: [
      'Roundtrip domestic flights (Zanzibar – Selous/Nyerere – Zanzibar)',
      'Hotel pick-up and drop-off in Zanzibar',
      'All park entry and conservation fees',
      'Shared 4x4 safari vehicle with pop-up roof',
      'Professional English-speaking safari guide',
      'Lunch served inside the park',
      'All taxes and government charges'
    ],
    excludes: [
      'Personal expenses',
      'Tips and gratuities',
      'Beverages not included in park lunch',
      'Photography fees'
    ],
    status: '2026 private Safari',
    rating: 5.0,
    reviewCount: 0,
    bookingLink: '/book/selous-day-trip-safari',
    featured: true,
    photos: generateTourPhotos('selous-zanzibar')
  },

  {
    id: 'mnemba-island',
    name: 'Mnemba Island Snorkeling Trip',
    shortDescription: 'The Ultimate Zanzibar Marine Experience',
    description: 'Immerse yourself in the turquoise heart of the Indian Ocean with ZanStone Tours & Safaris. The Mnemba Island Snorkeling Trip is widely considered the crown jewel of Zanzibar\'s sea excursions. Our package offers a comprehensive marine adventure—from ethical dolphin spotting in their natural habitat to exploring the vibrant coral gardens of the Mnemba Atoll Marine Reserve.',
    fullDescription: `Tour Status: 2026 Best-Seller | Type: Private or Executive Sharing Charter | Pricing: All-Inclusive (No Hidden Fees)

📍 Overview: The Ultimate Zanzibar Marine Experience

Immerse yourself in the turquoise heart of the Indian Ocean with ZanStone Tours & Safaris. The Mnemba Island Snorkeling Trip is widely considered the crown jewel of Zanzibar's sea excursions. Our package offers a comprehensive marine adventure—from ethical dolphin spotting in their natural habitat to exploring the vibrant coral gardens of the Mnemba Atoll Marine Reserve. Designed for those who value privacy and quality, this tour ensures a seamless day of sun, sea, and high-end island hospitality with zero hidden costs.

🐬 Detailed Professional Itinerary & Timings

• 07:00 AM – VIP Hotel Pickup & Private Transfer 🚐
Start your day with a stress-free, private pickup from your hotel in a clean, air-conditioned vehicle. We depart early to ensure you arrive at the Matemwe/Muyuni departure point before the midday crowds, providing you with a more serene and exclusive ocean experience.

• Ethical Dolphin Watching (Respectful Encounter) 🐬
Board your professional boat and cruise into the protected waters of the Mnemba Marine Conservation Area. Our expert captains track the resident pods of wild bottlenose dolphins. We prioritize sustainable tourism, allowing you to observe and photograph these majestic creatures at a respectful distance as they play in the waves.

• Premium Snorkeling at Mnemba Reef 🤿
Drop anchor at the world-class coral gardens surrounding Mnemba Island. Explore a "natural aquarium" teeming with hundreds of species of tropical fish, sea stars, and colorful anemones. Our professional guides provide on-water assistance and high-quality, sterilized snorkeling equipment for your total safety and comfort.

• Signature Seafood Lunch on the Beach 🍤
After your underwater exploration, relax as we serve a Fresh Zanzibar Seafood Meal on the shore. Indulge in grilled fish, prawns, and calamari, accompanied by chilled soft drinks and a colorful platter of seasonal tropical fruits like clove-scented pineapple, sweet mangoes, and spiced watermelon.

• 01:30 PM – Relaxation & Arrival Back at Hotel 🚤
Enjoy a final swim or sunbathe before a scenic boat ride back to the shore. Your private driver will be waiting to provide a comfortable, punctual transfer back to your hotel, ensuring your afternoon is free for further relaxation.

✅ Package Includes (Inclusions)

• ✔️ Private Hotel Pickup & Drop-off: (Modern air-conditioned vehicles).
• ✔️ Elite Boat Excursion: (High-quality private or sharing charters with experienced crew).
• ✔️ Licensed Professional Guide: (Expert in marine biology and Zanzibar's history).
• ✔️ Technical Snorkeling Gear: (Clean, high-quality masks, fins, and snorkels).
• ✔️ Professional Life Jackets: (Available in all sizes for swimmers and non-swimmers).
• ✔️ Gourmet Seafood Lunch: (Freshly fish, prawns, calamari, and local sides).
• ✔️ Refreshments: (Unlimited bottled mineral water, soft drinks, and fresh tropical fruits).
• ✔️ All Government Fees: (Mnemba Marine Park permits and conservation fees included).
• ✔️ All Local Entrance Fees: (Strictly Zero Hidden Costs).

❌ Not Included (Exclusions)

• Personal expenses and souvenirs.
• Gratuities/Tips for your dedicated ZanStone team (Optional).`,
    price: {
      '2': '$225',
      '3-4': '$280',
      '5-6': '$70 Per Person',
      '7-12': '$65 Per Person'
    },
    priceNote: 'Price based on:',
    image: mnemba,
    duration: 'Full Day (7:00 AM - 1:30 PM)',
    groupSize: 'Private (1-10) or Executive Sharing',
    category: 'daytrip',
    isDayTrip: true,
    location: 'Zanzibar',
    highlights: [
      'VIP Hotel Pickup & Drop-off',
      'Ethical Dolphin Watching',
      'Premium Snorkeling at Mnemba Reef',
      'Gourmet Seafood Lunch on Beach',
      'Mnemba Marine Park Permits Included',
      'Professional Licensed Marine Guide'
    ],
    includes: [
      'Private Hotel Pickup & Drop-off (Modern air-conditioned vehicles)',
      'Elite Boat Excursion (High-quality private or sharing charters with experienced crew)',
      'Licensed Professional Guide (Expert in marine biology and Zanzibar\'s history)',
      'Technical Snorkeling Gear (Clean, high-quality masks, fins, and snorkels)',
      'Professional Life Jackets (Available in all sizes for swimmers and non-swimmers)',
      'Gourmet Seafood Lunch (Fresh fish, prawns, calamari, and local sides)',
      'Refreshments (Unlimited bottled mineral water, soft drinks, and fresh tropical fruits)',
      'All Government Fees (Mnemba Marine Park permits and conservation fees included)',
      'All Local Entrance Fees (Strictly Zero Hidden Costs)'
    ],
    excludes: [
      'Personal expenses and souvenirs',
      'Gratuities/Tips for your dedicated ZanStone team (Optional)'
    ],
    status: '2026 Best-Seller',
    rating: 5.0,
    reviewCount: 128,
    bookingLink: '/book/mnemba-island',
    featured: true
  }


];

// Export helper functions
export const getDayTripById = (id) => {
  return dayTripsData.find(trip => trip.id === id);
};

export const getFeaturedDayTrips = (limit = 6) => {
  return dayTripsData.filter(trip => trip.featured).slice(0, limit);
};

export const getAllDayTrips = () => {
  return dayTripsData;
};

export const getDayTripsByLocation = (location) => {
  return dayTripsData.filter(trip => 
    trip.location.toLowerCase().includes(location.toLowerCase())
  );
};

export const getDayTripsByDuration = (isDayTrip) => {
  return dayTripsData.filter(trip => trip.isDayTrip === isDayTrip);
};