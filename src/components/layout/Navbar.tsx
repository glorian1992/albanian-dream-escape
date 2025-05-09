
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg"
                alt="Albania"
              />
              <span className="ml-3 text-xl font-bold text-albania-black">Albanian Dream Escape</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-albania-red">
                Home
              </Link>
              <Link to="/destinations" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-albania-red">
                Destinations
              </Link>
              <Link to="/restaurants" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-albania-red">
                Restaurants
              </Link>
              <Link to="/register-restaurant" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-albania-red">
                Register Restaurant
              </Link>
              <Button className="bg-albania-red hover:bg-red-700">
                <Link to="/booking" className="text-white">
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-albania-red"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-albania-red">
              Home
            </Link>
            <Link to="/destinations" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-albania-red">
              Destinations
            </Link>
            <Link to="/restaurants" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-albania-red">
              Restaurants
            </Link>
            <Link to="/register-restaurant" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-albania-red">
              Register Restaurant
            </Link>
            <Link to="/booking" className="block px-3 py-2 rounded-md text-base font-medium bg-albania-red text-white hover:bg-red-700">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
