
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { destinations } from '@/data/destinations';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === id);
  
  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
            <Button onClick={() => navigate('/destinations')}>
              Back to Destinations
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
          style={{ backgroundImage: `url(${destination.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => navigate('/destinations')}
                className="mb-4 bg-white text-albania-black hover:bg-gray-100"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Destinations
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{destination.name}</h1>
              <div className="flex items-center text-white mb-2">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{destination.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-yellow-400 text-yellow-900 text-sm px-3 py-1 rounded-full font-medium">
                  ★ {destination.rating}
                </span>
                <span className="bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full">
                  {destination.category}
                </span>
                <span className="bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full">
                  {destination.priceRange}
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
                  {destination.longDescription}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-albania-gray p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Best Time to Visit</h3>
                    <p className="text-sm text-gray-600">
                      {destination.category === 'beach' 
                        ? 'June to September for warm weather and swimming.' 
                        : destination.category === 'mountain'
                        ? 'May to October for hiking, winter for skiing.'
                        : 'April to June or September to October for mild weather and fewer tourists.'}
                    </p>
                  </div>
                  <div className="bg-albania-gray p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Getting There</h3>
                    <p className="text-sm text-gray-600">
                      {destination.location.includes('Tirana')
                        ? 'Easily accessible from Tirana International Airport.'
                        : destination.category === 'mountain'
                        ? 'Accessible by vehicle or sometimes requiring hiking.'
                        : 'Accessible by car, public transportation or organized tours from Tirana.'}
                    </p>
                  </div>
                  <div className="bg-albania-gray p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Local Tips</h3>
                    <p className="text-sm text-gray-600">
                      {destination.category === 'beach' 
                        ? 'Visit early in the morning for the best spots and to avoid crowds.'
                        : destination.category === 'cultural'
                        ? 'Consider hiring a local guide to learn about the rich history.'
                        : 'Bring comfortable shoes for walking and exploring.'}
                    </p>
                  </div>
                  <div className="bg-albania-gray p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">What to Bring</h3>
                    <p className="text-sm text-gray-600">
                      {destination.category === 'beach' 
                        ? 'Sunscreen, beach towels, and snorkeling gear if possible.'
                        : destination.category === 'mountain'
                        ? 'Weather-appropriate clothing, hiking boots, and water.'
                        : 'Camera, comfortable shoes, and a small day bag.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="sticky top-8">
                <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6 bg-albania-red text-white">
                    <h3 className="text-xl font-bold">Book This Experience</h3>
                    <p className="text-sm mt-1">Secure your adventure at {destination.name}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-600">Starting from</span>
                      <span className="font-semibold text-lg">{destination.priceRange === '$' ? '€30' : destination.priceRange === '$$' ? '€50' : '€80'}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Availability: Year-round</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Duration: Full day</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-albania-red hover:bg-red-700 text-white"
                      onClick={() => navigate('/booking')}
                    >
                      Book Now
                    </Button>
                    
                    <p className="text-xs text-gray-500 mt-4 text-center">
                      Free cancellation up to 24 hours before the experience
                    </p>
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

export default DestinationDetail;
