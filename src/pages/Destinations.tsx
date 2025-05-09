
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DestinationCard from '@/components/destinations/DestinationCard';
import { destinations } from '@/data/destinations';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-albania-black text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Explore Albania's Destinations</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Discover the hidden gems and must-visit locations across Albania's diverse landscape
            </p>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="w-full md:w-1/2">
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-auto">
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="beach">Beaches</TabsTrigger>
                  <TabsTrigger value="mountain">Mountains</TabsTrigger>
                  <TabsTrigger value="city">Cities</TabsTrigger>
                  <TabsTrigger value="cultural">Cultural</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          {/* Destination List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No destinations found matching your search.</h3>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;
