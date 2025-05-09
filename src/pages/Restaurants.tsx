
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RestaurantCard from '@/components/restaurants/RestaurantCard';
import { restaurants } from '@/data/restaurants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-albania-black text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Albanian Restaurants</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Discover authentic Albanian cuisine and Mediterranean delights at these top restaurants
            </p>
          </div>
        </div>
        
        {/* Search and Register CTA */}
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="w-full md:w-1/2">
              <Input
                type="text"
                placeholder="Search restaurants by name, location or cuisine..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-auto">
              <Button className="bg-albania-red hover:bg-red-700 w-full" asChild>
                <Link to="/register-restaurant">
                  Register Your Restaurant
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Restaurant List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No restaurants found matching your search.</h3>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchQuery('')} 
                  className="mt-4"
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-albania-gray py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Own a Restaurant in Albania?</h2>
            <p className="text-lg mb-6">
              Join our platform to showcase your restaurant to tourists and travelers from around the world.
            </p>
            <Button className="bg-albania-red hover:bg-red-700" size="lg" asChild>
              <Link to="/register-restaurant">Register Your Restaurant</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Restaurants;
