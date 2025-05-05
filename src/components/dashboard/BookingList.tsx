
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock } from "lucide-react";

// Types for our bookings
export type Booking = {
  id: string;
  serviceName: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
};

type BookingListProps = {
  bookings: Booking[];
};

export const BookingList = ({ bookings }: BookingListProps) => {
  const [activeTab, setActiveTab] = useState<string>("upcoming");
  
  // Filter bookings based on status
  const upcomingBookings = bookings.filter(booking => booking.status === 'upcoming');
  const pastBookings = bookings.filter(booking => booking.status === 'completed' || booking.status === 'cancelled');
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-4">
            {upcomingBookings.length > 0 ? (
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>You don't have any upcoming bookings</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past" className="mt-4">
            {pastBookings.length > 0 ? (
              <div className="space-y-4">
                {pastBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>You don't have any past bookings</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

// Component for individual booking card
const BookingCard = ({ booking }: { booking: Booking }) => {
  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };
  
  return (
    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{booking.serviceName}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${statusColors[booking.status]}`}>
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </span>
      </div>
      
      <div className="flex items-center text-gray-500 text-sm">
        <Calendar className="h-4 w-4 mr-1" />
        <span className="mr-4">{booking.date}</span>
        <Clock className="h-4 w-4 mr-1" />
        <span>{booking.time}</span>
      </div>
    </div>
  );
};
