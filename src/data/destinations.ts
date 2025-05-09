
export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  longDescription: string;
  image: string;
  category: 'beach' | 'mountain' | 'city' | 'cultural';
  priceRange: string;
  rating: number;
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Ksamil Islands",
    location: "Ksamil, Sarandë",
    description: "Crystal clear waters and pristine beaches in the Albanian Riviera.",
    longDescription: "Ksamil Islands are a group of small islands located in the southern part of Albania, near Sarandë. Known for their crystal clear turquoise waters and white sandy beaches, these islands are often referred to as the 'Ionian pearls'. With their stunning natural beauty, they offer a perfect escape for beach lovers and are considered among the most beautiful spots in the Mediterranean. Visitors can swim, snorkel, and even walk from one island to another when the tide is low.",
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "beach",
    priceRange: "$$",
    rating: 4.8
  },
  {
    id: "2",
    name: "Berat Old Town",
    location: "Berat",
    description: "UNESCO World Heritage site known as the 'City of a Thousand Windows'.",
    longDescription: "Berat is one of the oldest and most beautiful towns in Albania, with a rich history dating back more than 2,400 years. Its most striking feature is the white Ottoman houses climbing up the hill to the castle, which led to its nickname 'The City of a Thousand Windows'. The old town, Mangalem, is a UNESCO World Heritage site and features well-preserved Byzantine churches and Ottoman mosques. The castle of Berat offers stunning views over the town and houses the Onufri Museum, dedicated to the famous Albanian icon painter.",
    image: "https://images.unsplash.com/photo-1522855544023-5a2abe452e69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "cultural",
    priceRange: "$",
    rating: 4.6
  },
  {
    id: "3",
    name: "Theth National Park",
    location: "Albanian Alps",
    description: "Remote mountain village with traditional stone houses and breathtaking landscapes.",
    longDescription: "Theth National Park is a natural paradise tucked away in the Albanian Alps. This remote mountain village is known for its authentic stone houses with wooden roofs, its isolation, and spectacular natural surroundings. Theth offers numerous hiking opportunities, including the popular trail to the Blue Eye, a stunning natural spring with intense blue water. The region is also home to the Lock-in Tower, a historical building used for blood feud reconciliation, and the Grunas Waterfall. With its breathtaking landscapes and traditional lifestyle, Theth provides a glimpse into Albania's mountain heritage.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "mountain",
    priceRange: "$$",
    rating: 4.9
  },
  {
    id: "4",
    name: "Skanderbeg Square",
    location: "Tirana",
    description: "The main plaza in Albania's capital, surrounded by important government buildings.",
    longDescription: "Skanderbeg Square is the main plaza in the center of Tirana, named after the Albanian national hero Gjergj Kastrioti Skanderbeg. The square underwent a major transformation in recent years, turning it into a vast pedestrian space with colorful paving stones from all parts of Albania. Surrounding the square are some of the most important buildings in the country, including the National History Museum with its distinctive mosaic façade, the Et'hem Bey Mosque, the Clock Tower, and the Palace of Culture. At the center stands the Skanderbeg Monument, honoring the national hero who led the resistance against the Ottoman Empire in the 15th century.",
    image: "https://images.unsplash.com/photo-1576001165941-8275fc157b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "city",
    priceRange: "$",
    rating: 4.4
  },
  {
    id: "5",
    name: "Butrint National Park",
    location: "Sarandë",
    description: "Ancient Greek and Roman ruins in a beautiful natural setting.",
    longDescription: "Butrint National Park is both an archaeological site and a national park located in the south of Albania. The ancient city of Butrint was continuously occupied from the 7th century BC until it was abandoned in the Middle Ages. The ruins demonstrate the city's evolution through various civilizations, including Greek, Roman, Byzantine, and Venetian. Visitors can explore well-preserved ancient theaters, baptisteries with intricate mosaics, fortifications, and temples. The archaeological park is also surrounded by a lagoon and dense vegetation, making it a unique combination of historical monuments and natural beauty. In 1992, Butrint was recognized as a UNESCO World Heritage site.",
    image: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "cultural",
    priceRange: "$$",
    rating: 4.7
  },
  {
    id: "6",
    name: "Gjipe Beach",
    location: "Albanian Riviera",
    description: "Secluded beach accessible only by boat or a hiking trail.",
    longDescription: "Gjipe Beach is one of Albania's most spectacular and unspoiled beaches, hidden between high cliffs along the Albanian Riviera. This secluded paradise can only be reached by boat or through a 30-minute hike down a rocky path, which helps maintain its pristine condition. The beach features crystal clear turquoise waters, small white pebbles, and dramatic canyon surroundings. The Gjipe Canyon itself offers additional hiking opportunities for the adventurous traveler. With limited facilities and development, Gjipe Beach provides a perfect escape from crowded tourist spots and an authentic connection with Albania's natural beauty.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "beach",
    priceRange: "$",
    rating: 4.9
  }
];
