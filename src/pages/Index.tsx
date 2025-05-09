
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DestinationCard from '@/components/destinations/DestinationCard';
import RestaurantCard from '@/components/restaurants/RestaurantCard';
import { destinations } from '@/data/destinations';
import { restaurants } from '@/data/restaurants';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-image h-[60vh] relative flex items-center justify-center text-center">
        <div className="p-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Albania</h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Experience the natural beauty, rich history, and warm hospitality of one of Europe's hidden gems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-albania-red hover:bg-red-700 text-white" size="lg" asChild>
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
            <Button className="bg-white text-albania-red hover:bg-gray-100" size="lg" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Featured Destinations Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Destinations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore Albania's most breathtaking locations, from pristine beaches to historic cities and majestic mountains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-albania-red text-albania-red hover:bg-albania-red hover:text-white">
            <Link to="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </section>
      
      {/* About Albania Section */}
      <section className="py-16 px-4 bg-albania-gray">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Albanian landscape" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Why Visit Albania?</h2>
            <p className="text-lg mb-4">
              Albania remains one of Europe's last undiscovered treasures, offering pristine beaches, breathtaking mountain landscapes, and rich cultural heritage without the crowds.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-albania-red mr-2">✓</span>
                <span>Unspoiled beaches along the Albanian Riviera</span>
              </li>
              <li className="flex items-start">
                <span className="text-albania-red mr-2">✓</span>
                <span>UNESCO World Heritage sites like Berat and Gjirokastra</span>
              </li>
              <li className="flex items-start">
                <span className="text-albania-red mr-2">✓</span>
                <span>Delicious Mediterranean and Balkan cuisine</span>
              </li>
              <li className="flex items-start">
                <span className="text-albania-red mr-2">✓</span>
                <span>Authentic cultural experiences and warm hospitality</span>
              </li>
              <li className="flex items-start">
                <span className="text-albania-red mr-2">✓</span>
                <span>Affordable travel compared to other European destinations</span>
              </li>
            </ul>
            <Button className="bg-albania-red hover:bg-red-700 text-white" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Restaurants Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Restaurants</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover authentic Albanian cuisine and Mediterranean delights at these top-rated establishments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.slice(0, 3).map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        
        <div className="text-center mt-10 space-x-4">
          <Button asChild variant="outline" className="border-albania-red text-albania-red hover:bg-albania-red hover:text-white">
            <Link to="/restaurants">View All Restaurants</Link>
          </Button>
          <Button className="bg-albania-red hover:bg-red-700 text-white" asChild>
            <Link to="/register-restaurant">Register Your Restaurant</Link>
          </Button>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 bg-albania-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Albania?</h2>
          <p className="text-lg mb-8">
            Plan your perfect Albanian adventure today. From pristine beaches to mountain hiking, ancient ruins to modern cities - Albania has it all.
          </p>
          <Button className="bg-white text-albania-black hover:bg-gray-200" size="lg" asChild>
            <Link to="/booking">Book Your Trip Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
