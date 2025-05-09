
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingForm from '@/components/booking/BookingForm';

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <div className="bg-albania-black text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Book Your Albanian Adventure</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Secure your spot at Albania's most breathtaking destinations with our easy booking process
            </p>
          </div>
        </div>
        
        {/* Booking Form */}
        <div className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Reservation Details</h2>
                <BookingForm />
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-albania-gray p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Why Book With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-albania-red mr-2 font-bold">✓</span>
                      <span className="text-sm">Instant confirmation of your booking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-albania-red mr-2 font-bold">✓</span>
                      <span className="text-sm">Free cancellation up to 24 hours before</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-albania-red mr-2 font-bold">✓</span>
                      <span className="text-sm">Expert local guides for your experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-albania-red mr-2 font-bold">✓</span>
                      <span className="text-sm">Secure payment options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-albania-red mr-2 font-bold">✓</span>
                      <span className="text-sm">24/7 customer support during your stay</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-albania-gray p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <p className="text-sm mb-4">
                    Need help with your booking? Our team is ready to assist you with any questions.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-albania-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>info@albaniandreamescape.com</span>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-albania-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+355 69 123 4567</span>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-albania-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Skanderbeg Square, Tirana, Albania</span>
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

export default Booking;
