
import { services } from "@/data/services";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

/**
 * Hook to handle direct booking from services page
 */
export const useDirectBooking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user came from services page with service selection
    const serviceParam = searchParams.get('service');
    const directBook = searchParams.get('direct') === 'true';
    
    if (serviceParam && directBook) {
      const serviceId = parseInt(serviceParam);
      const selectedService = services.find(s => s.id === serviceId);
      
      if (selectedService) {
        // Skip booking flow and redirect straight to payment
        navigate(`/payment?serviceId=${selectedService.id}&serviceName=${encodeURIComponent(selectedService.name)}&servicePrice=${selectedService.price}`);
        
        toast({
          title: "Direct booking initiated",
          description: `Proceeding to payment for ${selectedService.name}`,
        });
      }
    }
  }, [searchParams, navigate, toast]);
};
