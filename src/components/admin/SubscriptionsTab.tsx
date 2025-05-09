
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';

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

const subscriptionFormSchema = z.object({
  name: z.string().min(2),
  price: z.number().min(0.01),
  period: z.string(),
  description: z.string().optional()
});

const SubscriptionsTab = () => {
  const { toast } = useToast();
  const [selectedSubscription, setSelectedSubscription] = useState<any>(null);

  const subscriptionForm = useForm<z.infer<typeof subscriptionFormSchema>>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      name: "",
      price: 0,
      period: "",
      description: ""
    }
  });

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
  );
};

export default SubscriptionsTab;
