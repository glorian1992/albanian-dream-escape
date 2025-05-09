
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLoginForm from '@/components/admin/AdminLoginForm';
import PendingRegistrationsTab from '@/components/admin/PendingRegistrationsTab';
import ManageRestaurantsTab from '@/components/admin/ManageRestaurantsTab';
import SubscriptionsTab from '@/components/admin/SubscriptionsTab';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
          
          {!isAuthenticated ? (
            <AdminLoginForm onLogin={() => setIsAuthenticated(true)} />
          ) : (
            <Tabs defaultValue="registrations" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="registrations">Restaurant Registrations</TabsTrigger>
                <TabsTrigger value="restaurants">Manage Restaurants</TabsTrigger>
                <TabsTrigger value="subscriptions">Subscriptions & Revenue</TabsTrigger>
              </TabsList>
              
              <TabsContent value="registrations">
                <PendingRegistrationsTab />
              </TabsContent>
              
              <TabsContent value="restaurants">
                <ManageRestaurantsTab />
              </TabsContent>
              
              <TabsContent value="subscriptions">
                <SubscriptionsTab />
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
