
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RestaurantRegistrationForm from '@/components/restaurants/RestaurantRegistrationForm';

const RegisterRestaurant = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <div className="bg-albania-black text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Register Your Restaurant</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Join our platform and showcase your restaurant to tourists from around the world
            </p>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="bg-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Register Your Restaurant with Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-albania-gray p-6 rounded-lg text-center">
                <div className="bg-albania-red h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Increased Visibility</h3>
                <p className="text-sm text-gray-600">
                  Get discovered by international tourists and domestic travelers looking for authentic dining experiences.
                </p>
              </div>
              
              <div className="bg-albania-gray p-6 rounded-lg text-center">
                <div className="bg-albania-red h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Free Marketing</h3>
                <p className="text-sm text-gray-600">
                  Enjoy free promotion across our platform including social media, email newsletters, and partner websites.
                </p>
              </div>
              
              <div className="bg-albania-gray p-6 rounded-lg text-center">
                <div className="bg-albania-red h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Easy Management</h3>
                <p className="text-sm text-gray-600">
                  Update your menu, photos, and special offers through our simple restaurant dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Registration Form */}
        <div className="bg-white py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Fill in Your Restaurant Details</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <RestaurantRegistrationForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegisterRestaurant;
