
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { services } from "@/data/services";
import { useToast } from "@/hooks/use-toast";

/**
 * Hook to handle direct booking from services page with additional booking flow logic
 */
export const useDirectBookingFlow = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if we should proceed directly to payment
    const directPay = searchParams.get('direct-pay') === 'true';
    const serviceParam = searchParams.get('service');
    
    if (directPay && serviceParam) {
      const serviceId = parseInt(serviceParam);
      const selectedService = services.find(s => s.id === serviceId);
      
      if (selectedService) {
        // Set some default values for direct payment
        navigate(`/payment?serviceId=${selectedService.id}&serviceName=${encodeURIComponent(selectedService.name)}&servicePrice=${selectedService.price}&direct=true`);
        
        toast({
          title: "Direct payment started",
          description: `Proceeding to payment for ${selectedService.name}`,
        });
      }
    }
  }, [searchParams, navigate, toast]);
};
