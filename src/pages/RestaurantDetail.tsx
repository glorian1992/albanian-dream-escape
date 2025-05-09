
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { restaurants } from '@/data/restaurants';
import { ArrowLeft, MapPin, Phone, Utensils } from 'lucide-react';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const restaurant = restaurants.find(r => r.id === id);
  
  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Restaurant not found</h2>
            <Button onClick={() => navigate('/restaurants')}>
              Back to Restaurants
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Image */}
        <div 
          className="h-[50vh] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${restaurant.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => navigate('/restaurants')}
                className="mb-4 bg-white text-albania-black hover:bg-gray-100"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Restaurants
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{restaurant.name}</h1>
              <div className="flex items-center text-white mb-2">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{restaurant.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-yellow-400 text-yellow-900 text-sm px-3 py-1 rounded-full font-medium">
                  ★ {restaurant.rating}
                </span>
                <span className="bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full">
                  {restaurant.cuisine}
                </span>
                <span className="bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full">
                  {restaurant.priceRange}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">
                  {restaurant.description}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Specialties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-albania-gray p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Popular Dishes</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <Utensils className="h-4 w-4 mr-2 text-albania-red" />
                        <span>{restaurant.cuisine.includes('Albanian') ? 'Tavë Kosi (Baked Lamb with Yogurt)' : 'Grilled Sea Bass'}</span>
                      </li>
                      <li className="flex items-center">
                        <Utensils className="h-4 w-4 mr-2 text-albania-red" />
                        <span>{restaurant.cuisine.includes('Albanian') ? 'Fërgesë (Peppers with Cheese)' : 'Seafood Risotto'}</span>
                      </li>
                      <li className="flex items-center">
                        <Utensils className="h-4 w-4 mr-2 text-albania-red" />
                        <span>{restaurant.cuisine.includes('Albanian') ? 'Byrek (Savory Pie)' : 'Fresh Mussels'}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-albania-gray p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Contact Information</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-albania-red" />
                        <span>{restaurant.contact}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-albania-red" />
                        <span>{restaurant.location}, Albania</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-albania-gray p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>11:00 - 23:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday</span>
                        <span>10:00 - 23:30</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-albania-gray p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Amenities</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <span className="text-albania-red mr-2">✓</span>
                        <span>Outdoor Seating</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-albania-red mr-2">✓</span>
                        <span>Wi-Fi</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-albania-red mr-2">✓</span>
                        <span>Parking</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-albania-red mr-2">✓</span>
                        <span>Card Payment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="sticky top-8">
                <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6 bg-albania-red text-white">
                    <h3 className="text-xl font-bold">Make a Reservation</h3>
                    <p className="text-sm mt-1">Book your table at {restaurant.name}</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 mb-6">
                      <p className="text-sm text-gray-600">
                        Reservations are recommended, especially during peak tourist season.
                        Call directly or use our online booking system to secure your table.
                      </p>
                      
                      <div className="flex items-center text-sm font-semibold">
                        <Phone className="h-4 w-4 mr-2 text-albania-red" />
                        <span>{restaurant.contact}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-albania-red hover:bg-red-700 text-white"
                      onClick={() => window.open(`tel:${restaurant.contact.replace(/\s/g, '')}`)}
                    >
                      Call for Reservation
                    </Button>
                    
                    <div className="text-center mt-4">
                      <p className="text-xs text-gray-500">
                        Mention "Albanian Dream Escape" when booking for a special welcome drink!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
