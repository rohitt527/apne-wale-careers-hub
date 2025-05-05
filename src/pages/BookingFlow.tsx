
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { BookingProvider } from "@/contexts/BookingContext";
import { useDirectBooking } from "@/utils/routing";
import BookingFlowContent from "@/components/booking-flow/BookingFlowContent";
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/auth/LoginModal";

const BookingFlow = () => {
  // Add direct booking hook
  useDirectBooking();
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // Check if user is authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      setLoginModalOpen(true);
    }
  }, [isAuthenticated]);

  // Handle login modal close
  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
    if (!isAuthenticated) {
      // Redirect to home if they close the modal without logging in
      navigate('/');
      toast({
        title: "Login Required",
        description: "You need to be logged in to access the booking flow.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <BookingProvider>
        <BookingFlowContent />
      </BookingProvider>

      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={handleLoginModalClose}
        title="Login to Continue"
        description="Please login with your phone number to proceed with your booking."
      />
    </Layout>
  );
};

export default BookingFlow;
