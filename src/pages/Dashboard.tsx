
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { BookingList, Booking } from "@/components/dashboard/BookingList";
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/auth/LoginModal";
import SectionHeading from "@/components/common/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CreditCard, User } from "lucide-react";

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  
  // Mock data for bookings - in a real app, you would fetch this from your backend
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: "1",
      serviceName: "Technical Assessment Support",
      date: "May 15, 2025",
      time: "10:00 AM",
      status: "upcoming",
    },
    {
      id: "2",
      serviceName: "Mock Interview",
      date: "May 20, 2025",
      time: "02:00 PM",
      status: "upcoming",
    },
    {
      id: "3",
      serviceName: "Resume Building",
      date: "April 10, 2025",
      time: "11:00 AM",
      status: "completed",
    },
  ]);

  // Redirect to login if not authenticated when trying to access dashboard
  useEffect(() => {
    if (!isAuthenticated && window.location.pathname === "/dashboard") {
      setLoginModalOpen(true);
    }
  }, [isAuthenticated]);

  // Stats for dashboard
  const stats = {
    totalBookings: bookings.length,
    upcomingBookings: bookings.filter(booking => booking.status === "upcoming").length,
    completedBookings: bookings.filter(booking => booking.status === "completed").length,
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <section className="bg-brand-dark text-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-6">Your Dashboard</h1>
              <p className="text-lg text-gray-300">
                Login to view your bookings and manage your account.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-6xl">
            <div className="text-center py-16">
              <SectionHeading
                title="Please Login"
                subtitle="Login to view your dashboard and manage your bookings"
              />
              <div className="mt-8">
                <Button 
                  onClick={() => setLoginModalOpen(true)}
                  className="bg-brand-red hover:bg-red-700 text-white"
                  size="lg"
                >
                  Login with Phone
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <LoginModal 
          isOpen={loginModalOpen} 
          onClose={() => setLoginModalOpen(false)} 
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Your Dashboard</h1>
            <p className="text-lg text-gray-300">
              Welcome back, {user?.name || "User"}! Manage your bookings and account.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="space-y-8">
            {/* User profile and action buttons */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 rounded-full p-4">
                  <User size={32} className="text-brand-red" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{user?.name || "User"}</h2>
                  <p className="text-gray-600">{user?.phoneNumber}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={() => navigate("/book")} className="bg-brand-red hover:bg-red-700 text-white">
                  Book New Session
                </Button>
                <Button variant="outline" onClick={logout}>
                  Logout
                </Button>
              </div>
            </div>
            
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Bookings
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalBookings}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Sessions
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.upcomingBookings}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Completed Sessions
                  </CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.completedBookings}</div>
                </CardContent>
              </Card>
            </div>
            
            {/* Bookings tabs */}
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
                <TabsTrigger value="completed">Completed Bookings</TabsTrigger>
                <TabsTrigger value="all">All Bookings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming">
                <BookingList bookings={bookings.filter(b => b.status === "upcoming")} />
              </TabsContent>
              
              <TabsContent value="completed">
                <BookingList bookings={bookings.filter(b => b.status === "completed")} />
              </TabsContent>
              
              <TabsContent value="all">
                <BookingList bookings={bookings} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
