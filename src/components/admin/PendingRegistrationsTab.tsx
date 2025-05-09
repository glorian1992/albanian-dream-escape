
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';

// Mock data for pending restaurant registrations
const pendingRestaurants = [
  {
    id: "pending-1",
    name: "Bujtina e Gjelit",
    ownerName: "Artan Prifti",
    email: "artan@example.com",
    phone: "+355 69 123 4567",
    address: "Rr. Ismail Qemali 25, Korçë",
    city: "Korçë",
    cuisine: "Traditional Albanian",
    description: "Family-owned restaurant serving traditional dishes from the Korçë region.",
    submittedAt: "2023-04-15T10:30:00Z"
  },
  {
    id: "pending-2",
    name: "Taverna Deti",
    ownerName: "Marina Xhafa",
    email: "marina@example.com",
    phone: "+355 69 765 4321",
    address: "Rruga e Plazhit, Vlorë",
    city: "Vlorë",
    cuisine: "Seafood",
    description: "Seafood restaurant with spectacular views of the Adriatic sea.",
    submittedAt: "2023-04-17T14:45:00Z"
  }
];

const PendingRegistrationsTab = () => {
  const { toast } = useToast();

  const handleApproveRestaurant = (id: string) => {
    toast({
      title: "Restaurant approved",
      description: `Restaurant ID: ${id} has been approved and added to the listings.`,
    });
  };
  
  const handleRejectRestaurant = (id: string) => {
    toast({
      title: "Restaurant rejected",
      description: `Restaurant ID: ${id} has been rejected.`,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Pending Registrations</h2>
      <div className="grid gap-6">
        {pendingRestaurants.map((restaurant) => (
          <Card key={restaurant.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{restaurant.name}</CardTitle>
                  <CardDescription>Submitted on {new Date(restaurant.submittedAt).toLocaleDateString()}</CardDescription>
                </div>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold">Owner:</p>
                  <p>{restaurant.ownerName}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Contact:</p>
                  <p>{restaurant.email} | {restaurant.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Location:</p>
                  <p>{restaurant.address}, {restaurant.city}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Cuisine Type:</p>
                  <p>{restaurant.cuisine}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold">Description:</p>
                <p className="text-sm text-gray-600">{restaurant.description}</p>
              </div>
              
              <div className="flex justify-end gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                      Reject
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Reject Restaurant Registration?</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to reject {restaurant.name}'s registration? This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => handleRejectRestaurant(restaurant.id)}>
                        Yes, Reject
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-albania-red hover:bg-red-700">
                      Approve
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Approve Restaurant Registration?</DialogTitle>
                      <DialogDescription>
                        Approving will add {restaurant.name} to the restaurant listings.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button onClick={() => handleApproveRestaurant(restaurant.id)}>
                        Yes, Approve
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PendingRegistrationsTab;
