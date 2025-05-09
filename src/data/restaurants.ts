
export interface Restaurant {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  contact: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Mrizi i Zanave",
    location: "Lezhë",
    description: "Farm-to-table restaurant serving traditional Albanian cuisine with a modern twist.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cuisine: "Albanian Traditional",
    priceRange: "$$$",
    rating: 4.9,
    contact: "+355 69 123 4567"
  },
  {
    id: "2",
    name: "Oda",
    location: "Tirana",
    description: "Cozy restaurant serving homemade traditional Albanian dishes in a rustic setting.",
    image: "https://images.unsplash.com/photo-1586999768265-24af89630739?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cuisine: "Albanian",
    priceRange: "$$",
    rating: 4.7,
    contact: "+355 69 765 4321"
  },
  {
    id: "3",
    name: "Sofra e Ariut",
    location: "Theth",
    description: "Mountain guesthouse serving organic home-cooked meals with ingredients from their garden.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cuisine: "Northern Albanian",
    priceRange: "$$",
    rating: 4.8,
    contact: "+355 69 234 5678"
  },
  {
    id: "4",
    name: "Panorama",
    location: "Sarandë",
    description: "Seafood restaurant with spectacular views over the Ionian sea and Corfu island.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    cuisine: "Mediterranean",
    priceRange: "$$$",
    rating: 4.6,
    contact: "+355 69 876 5432"
  }
];
