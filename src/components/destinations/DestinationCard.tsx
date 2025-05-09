
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{destination.name}</CardTitle>
          <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
            <span className="mr-1">★</span>
            {destination.rating}
          </div>
        </div>
        <CardDescription>{destination.location}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">{destination.description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs bg-albania-gray text-gray-800 px-2 py-1 rounded-full">
            {destination.category}
          </span>
          <span className="text-xs text-gray-600">
            {destination.priceRange}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-albania-red hover:bg-red-700 text-white" 
          onClick={() => navigate(`/destinations/${destination.id}`)}
        >
          Explore
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
