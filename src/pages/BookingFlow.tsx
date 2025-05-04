
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { BookingProvider } from "@/contexts/BookingContext";
import { useDirectBooking } from "@/utils/routing";
import BookingFlowContent from "@/components/booking-flow/BookingFlowContent";

const BookingFlow = () => {
  // Add direct booking hook
  useDirectBooking();
  
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <Layout>
      <BookingProvider>
        <BookingFlowContent />
      </BookingProvider>
    </Layout>
  );
};

export default BookingFlow;
