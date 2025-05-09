import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { restaurants } from '@/data/restaurants';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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

// Mock data for subscriptions
const subscriptions = [
  {
    id: "sub-1",
    name: "Featured Restaurant - Basic",
    price: 29.99,
    period: "monthly",
    active: 8,
    revenue: 239.92
  },
  {
    id: "sub-2",
    name: "Featured Restaurant - Premium",
    price: 49.99,
    period: "monthly",
    active: 5,
    revenue: 249.95
  },
  {
    id: "sub-3",
    name: "Tourist Booking Fee",
    price: 2.50,
    period: "per booking",
    active: 125,
    revenue: 312.50
  }
];

const restaurantFormSchema = z.object({
  name: z.string().min(2),
  location: z.string().min(2),
  cuisine: z.string().min(2),
  description: z.string().min(10),
  priceRange: z.string(),
  contact: z.string()
});

const subscriptionFormSchema = z.object({
  name: z.string().min(2),
  price: z.number().min(0.01),
  period: z.string(),
  description: z.string().optional()
});

const AdminLoginForm = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication - in a real app, this would validate against a database
    if (username === "admin" && password === "password") {
      toast({
        title: "Logged in successfully",
        description: "Welcome to the admin dashboard",
      });
      onLogin();
    } else {
      toast({
        title: "Authentication failed",
        description: "Invalid username or password",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <Button type="submit" className="w-full bg-albania-red hover:bg-red-700">
            Login
          </Button>
        </div>
      </form>
      <div className="mt-4 text-sm text-center text-gray-500">
        <p>For demo purposes, use:</p>
        <p>Username: admin</p>
        <p>Password: password</p>
      </div>
    </div>
  );
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);
  const [selectedSubscription, setSelectedSubscription] = useState<any>(null);
  
  const restaurantForm = useForm<z.infer<typeof restaurantFormSchema>>({
    resolver: zodResolver(restaurantFormSchema),
    defaultValues: {
      name: "",
      location: "",
      cuisine: "",
      description: "",
      priceRange: "",
      contact: ""
    }
  });

  const subscriptionForm = useForm<z.infer<typeof subscriptionFormSchema>>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      name: "",
      price: 0,
      period: "",
      description: ""
    }
  });
  
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
  
  const handleEditRestaurant = (restaurant: any) => {
    setSelectedRestaurant(restaurant);
    restaurantForm.reset({
      name: restaurant.name,
      location: restaurant.location,
      cuisine: restaurant.cuisine,
      description: restaurant.description,
      priceRange: restaurant.priceRange,
      contact: restaurant.contact
    });
  };

  const handleSaveRestaurant = (data: z.infer<typeof restaurantFormSchema>) => {
    console.log("Saving restaurant changes:", data);
    toast({
      title: "Restaurant updated",
      description: `Restaurant ${data.name} has been updated successfully.`,
    });
    setSelectedRestaurant(null);
  };

  const handleManagePlan = (subscription: any) => {
    setSelectedSubscription(subscription);
    subscriptionForm.reset({
      name: subscription.name,
      price: subscription.price,
      period: subscription.period,
      description: ""
    });
  };

  const handleSaveSubscription = (data: z.infer<typeof subscriptionFormSchema>) => {
    console.log("Saving subscription changes:", data);
    toast({
      title: "Subscription plan updated",
      description: `Subscription plan ${data.name} has been updated successfully.`,
    });
    setSelectedSubscription(null);
  };
  
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
              </TabsContent>
              
              <TabsContent value="restaurants">
                <h2 className="text-2xl font-semibold mb-4">Approved Restaurants</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {restaurants.map((restaurant) => (
                    <Card key={restaurant.id} className="overflow-hidden">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle>{restaurant.name}</CardTitle>
                          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                            Active
                          </Badge>
                        </div>
                        <CardDescription>{restaurant.location}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm">Cuisine: {restaurant.cuisine}</p>
                            <p className="text-sm">Rating: {restaurant.rating}/5</p>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" onClick={() => handleEditRestaurant(restaurant)}>
                                Edit Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>Edit Restaurant Details</DialogTitle>
                                <DialogDescription>
                                  Make changes to the restaurant information below.
                                </DialogDescription>
                              </DialogHeader>
                              <Form {...restaurantForm}>
                                <form onSubmit={restaurantForm.handleSubmit(handleSaveRestaurant)} className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                      control={restaurantForm.control}
                                      name="name"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Name</FormLabel>
                                          <FormControl>
                                            <Input {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={restaurantForm.control}
                                      name="location"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Location</FormLabel>
                                          <FormControl>
                                            <Input {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={restaurantForm.control}
                                      name="cuisine"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Cuisine</FormLabel>
                                          <FormControl>
                                            <Input {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={restaurantForm.control}
                                      name="priceRange"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel>Price Range</FormLabel>
                                          <FormControl>
                                            <Input {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                      control={restaurantForm.control}
                                      name="contact"
                                      render={({ field }) => (
                                        <FormItem className="col-span-2">
                                          <FormLabel>Contact</FormLabel>
                                          <FormControl>
                                            <Input {...field} />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                  </div>
                                  <FormField
                                    control={restaurantForm.control}
                                    name="description"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                          <Textarea {...field} rows={4} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <DialogFooter>
                                    <Button type="submit">Save Changes</Button>
                                  </DialogFooter>
                                </form>
                              </Form>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="subscriptions">
                <div className="grid gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue Overview</CardTitle>
                      <CardDescription>Monthly recurring revenue: $802.37</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500">Total Customers</p>
                          <p className="text-3xl font-bold">138</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500">Active Subscriptions</p>
                          <p className="text-3xl font-bold">13</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-500">Total Revenue (MTD)</p>
                          <p className="text-3xl font-bold">$802.37</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <h2 className="text-2xl font-semibold mb-2">Subscription Plans</h2>
                  <div className="grid gap-6">
                    {subscriptions.map((subscription) => (
                      <Card key={subscription.id}>
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle>{subscription.name}</CardTitle>
                            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                              ${subscription.price} {subscription.period}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm font-semibold">Active Subscribers:</p>
                              <p>{subscription.active}</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold">Revenue:</p>
                              <p>${subscription.revenue.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-end items-center">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" onClick={() => handleManagePlan(subscription)}>
                                    Manage Plan
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Manage Subscription Plan</DialogTitle>
                                    <DialogDescription>
                                      Make changes to the subscription plan details below.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <Form {...subscriptionForm}>
                                    <form onSubmit={subscriptionForm.handleSubmit(handleSaveSubscription)} className="space-y-4">
                                      <FormField
                                        control={subscriptionForm.control}
                                        name="name"
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>Plan Name</FormLabel>
                                            <FormControl>
                                              <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                          </FormItem>
                                        )}
                                      />
                                      <div className="grid grid-cols-2 gap-4">
                                        <FormField
                                          control={subscriptionForm.control}
                                          name="price"
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormLabel>Price</FormLabel>
                                              <FormControl>
                                                <Input 
                                                  type="number" 
                                                  step="0.01" 
                                                  onChange={e => field.onChange(parseFloat(e.target.value))}
                                                  value={field.value}
                                                />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                        <FormField
                                          control={subscriptionForm.control}
                                          name="period"
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormLabel>Billing Period</FormLabel>
                                              <FormControl>
                                                <Input {...field} placeholder="monthly, yearly, per booking..." />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                      </div>
                                      <FormField
                                        control={subscriptionForm.control}
                                        name="description"
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                              <Textarea {...field} rows={4} />
                                            </FormControl>
                                            <FormMessage />
                                          </FormItem>
                                        )}
                                      />
                                      <Table>
                                        <TableHeader>
                                          <TableRow>
                                            <TableHead>Statistic</TableHead>
                                            <TableHead>Value</TableHead>
                                          </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                          <TableRow>
                                            <TableCell>Active Subscribers</TableCell>
                                            <TableCell>{selectedSubscription?.active || 0}</TableCell>
                                          </TableRow>
                                          <TableRow>
                                            <TableCell>Monthly Revenue</TableCell>
                                            <TableCell>${selectedSubscription?.revenue.toFixed(2) || 0}</TableCell>
                                          </TableRow>
                                        </TableBody>
                                      </Table>
                                      <DialogFooter>
                                        <Button type="submit">Save Changes</Button>
                                      </DialogFooter>
                                    </form>
                                  </Form>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
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
