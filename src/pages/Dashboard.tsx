
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { BookingList, Booking } from "@/components/dashboard/BookingList";
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/auth/LoginModal";
import SectionHeading from "@/components/common/SectionHeading";

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

  return (
    <Layout>
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Your Dashboard</h1>
            <p className="text-lg text-gray-300">
              {isAuthenticated 
                ? `Welcome back! Manage your bookings and account.` 
                : `Login to view your bookings and manage your account.`
              }
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          {isAuthenticated ? (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Hello, {user?.name || "User"}</h2>
                  <p className="text-gray-600">{user?.phoneNumber}</p>
                </div>
                <div className="flex space-x-4">
                  <Button onClick={() => navigate("/book")} className="bg-brand-red hover:bg-red-700 text-white">
                    Book New Session
                  </Button>
                  <Button variant="outline" onClick={logout}>
                    Logout
                  </Button>
                </div>
              </div>
              
              <BookingList bookings={bookings} />
            </div>
          ) : (
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
          )}
        </div>
      </section>
      
      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
      />
    </Layout>
  );
};

export default Dashboard;
