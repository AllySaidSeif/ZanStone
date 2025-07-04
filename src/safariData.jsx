// src/data/safarisData.js

import safari1 from "../src/assets/image/safari1.jpg";
import safari2 from "../src/assets/image/safari2.jpg";
import safari3 from "../src/assets/image/safari3.jpg";
import safari4 from "../src/assets/image/safari4.jpg";
import safari5 from "../src/assets/image/safari5.jpg";
import safariBG from "../src/assets/image/safariBG.jpg";
import safariBack from "../src/assets/image/Folder1/desti.jpg"

export const safariCategories = [
  {
    id: 'northern',
    title: 'Northern Circuit',
    description: 'Explore Tanzania\'s famous northern safari destinations',
    image: safari1,
    featured: true
  },
  {
    id: 'southern',
    title: 'Southern Circuit',
    description: 'Less crowded parks with incredible wildlife viewing',
    image: safari2,
    featured: true
  }
];

export const allSafaris = {
  northern: [
    // Serengeti, Ngorongoro, etc.
  ],
  southern: [
    {
      id: 'mikumi',
      name: 'Mikumi National Park Day Safari',
      category: 'southern',
      duration: 'Full Day',
      type: 'Private | Luxury | Wildlife',
      price: '$450 per person',
      description: 'Explore Tanzania\'s fourth-largest national park, often called "Little Serengeti" for its similar landscape and wildlife.',
      image: safariBack,
      images: [
        safari2,
        safari3,
        safari4
      ],
      itinerary: [
        {

          title: '🌅 Early Morning Departure',
          description: `Your day starts with a hotel pickup in Zanzibar. Our driver will transfer you roundtrip between your hotel and Zanzibar Airport to ensure a smooth and comfortable journey.`,        },
        {
        
          title: '✈️ Flight to Mikumi ',
          description: 'Check in at Zanzibar Airport for your morning flight to Mikumi National Park.'
        },
        {
          
          title: '🐘 Arrival & Safari Game Drive ',
          description: 'Final morning game drive followed by breakfast. Return to Dar es Salaam with picnic lunch en route.'
        },
        {
          
          title: '🍴 Lunch amidst Nature',
          description: 'Enjoy a tasty lunch served in the heart of the park, surrounded by beautiful wildlife scenery'
        },
        {
          
          title: '🦓 Afternoon Safari & Photo Opportunities ',
          description: 'Explore more of Mikumi’s vast plains and acacia woodlands with breathtaking views of the Uluguru Mountains.'
        },
        {
          
          title: '✈️ Evening Return Flight to Zanzibar',
          description: 'Catch your flight back to Zanzibar and get dropped off at your hotel, concluding your incredible day trip.'
        },

        {
          
          title: 'Note: ',
          description: 'This is a group safari (shared jeep). Private safari options are available on request'
        },
      ],
      wildlife: [
        'Lions',
        'Elephants',
        'Giraffes',
        'Zebras',
        'Buffaloes',
        'Hippos',
        'Crocodiles',
        'Various antelope species'
      ],
      inclusions: [
       "🛫 Roundtrip flight Zanzibar – Mikumi – Zanzibar",
       "🚐 Roundtrip transfers hotel – Zanzibar Airport",
       "🐾 All Mikumi National Park entry fees",
       "🚙 Shared safari jeep with pop-up roof",
       "👨‍✈️ Professional guide/driver",
       "🥗 Lunch in the park",
       "🧾 All taxes and government fees"
      ],
      whatToBring: [
        'Neutral-colored clothing',
        'Comfortable walking shoes',
        'Binoculars',
        'Camera with zoom lens',
        'Sunscreen and hat',
        'Light jacket for early mornings',
        'Personal medications'
      ],
      bestTimeToVisit: 'Year-round, but best from June to October (dry season)'
    },

     {
      id: 'Selous',
      name: 'Selous Game Reserve Safari',
      category: 'southern',
      duration: '2 Days | 1 Night',
      type: 'Private | Luxury | Wildlife',
      price: '$620 per person',
      description: `Perfect for: Adventure lovers seeking a quick escape into one of Africa’s largest and most untouched wildlife sanctuaries from Zanzibar.
Includes: Flight, Safari Game Drive, Boat Safari, Maasai Village Visit, Accommodation, Meals.`,
       image: safariBG,
      images: [
        safari5,
        safari1,
        safariBack
      ],
      itinerary: [
        {
            day: 'Day 1: Zanzibar – Selous Game Reserve',
          title: '🕕 Departure at 6:00 AM',
          description: `Early morning pickup from your hotel in Zanzibar and transfer to the airport.
 Catch a short 50-minute flight to Selous Game Reserve (Nyerere National Park), Africa’s largest protected wildlife area.`,        },
        {
        
          title: '🛬 Arrival & Game Drive',
          description: `Meet your professional safari guide for a quick briefing.
 Begin your full-day game drive in a 4x4 open-roof safari vehicle, exploring the rich wildlife of Selous including:
 Lions, elephants, giraffes, zebras, antelopes,
 Hippos and crocodiles along the Rufiji River,
 Incredible birdlife and beautiful scenery`,
        },
        {
          
          title: '🍽️ Lunch in the heart of the park',
          description: 'Enjoy a picnic lunch surrounded by wild nature.'
        },
        {
          
          title: '🏨 Evening Return & Overnight',
          description: `Return to the lodge around 6:00 PM for dinner and relaxation.
 Overnight stay at Selous Safari Lodge – a cozy retreat with views of the wilderness.`,
        },
        {
          day: 'Day 2: Boat Safari & Cultural Experience',
          title: '☕ Morning Breakfast',
          description: 'Start your day with a hearty breakfast at the lodge.'
        },
         {
          
          title: '🚤 Boat Safari – 2 Hours',
          description: 'Enjoy a thrilling boat safari.'
        },
         {
          
          title: 'Visit Maasai Village',
          description: 'Discover the culture and traditions of the Maasai people with a guided visit to their village. Learn about their way of life, clothing, and customs.'
        },
        {
          
          title: '🍴 Lunch & Return',
          description: `Return to the lodge for lunch and freshen up.
 Transfer to the airstrip for your afternoon flight back to Zanzibar.
 Drop-off at your hotel in Zanzibar, ending your Selous adventure.`,
        },

    
      ],
      wildlife: [
        'Lions',
        'Elephants',
        'Giraffes',
        'Zebras',
        'Buffaloes',
        'Hippos',
        'Various antelope species'
      ],
      inclusions: [
      "🛫 Roundtrip flight Zanzibar ↔ Selous",
"🚐 Airport transfers in Zanzibar and Selous",
"🚙 Game drive in open-roof safari Jeep",
"🚤 2-hour Boat Safari",
"🛖 Maasai Village visit",
"🏨 One-night accommodation at Selous Safari Lodge",
"🍽️ All meals during safari (Lunch x2, Dinner x1, Breakfast x1)",
"👨‍✈️ Professional English-speaking guide",
"🧾 All park entry fees and government taxes"
      ],
      whatToBring: [
        'Neutral-colored clothing',
        'Comfortable walking shoes',
        'Binoculars',
        'Camera with zoom lens',
        'Sunscreen and hat',
        'Light jacket for early mornings',
        'Personal medications'
      ],
      bestTimeToVisit: 'Year-round, but best from June to October (dry season)'
    }
  ]
};

export const getSafariById = (id) => {
  for (const category in allSafaris) {
    const foundSafari = allSafaris[category].find(safari => safari.id === id);
    if (foundSafari) return foundSafari;
  }
  return null;
};