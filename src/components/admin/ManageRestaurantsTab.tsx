
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { restaurants } from '@/data/restaurants';

const restaurantFormSchema = z.object({
  name: z.string().min(2),
  location: z.string().min(2),
  cuisine: z.string().min(2),
  description: z.string().min(10),
  priceRange: z.string(),
  contact: z.string()
});

const ManageRestaurantsTab = () => {
  const { toast } = useToast();
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);
  
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

  return (
    <div>
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
    </div>
  );
};

export default ManageRestaurantsTab;
