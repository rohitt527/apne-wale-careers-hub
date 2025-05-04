
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePaymentContext } from "@/contexts/PaymentContext";
import PaymentMethods from "./PaymentMethods";
import { useToast } from "@/hooks/use-toast";
import { PaymentService } from "@/services/PaymentService";

const PaymentContainer = () => {
  const { serviceDetails, paymentStatus, setPaymentStatus } = usePaymentContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  // If direct payment and service info is available, automatically trigger Razorpay
  useEffect(() => {
    if (serviceDetails.direct && serviceDetails.serviceId && serviceDetails.serviceName && serviceDetails.servicePrice) {
      // Short delay to allow page to render before opening Razorpay popup
      const timer = setTimeout(() => {
        handleDirectPayment();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [serviceDetails.direct, serviceDetails.serviceId, serviceDetails.serviceName, serviceDetails.servicePrice]);

  const handleDirectPayment = async () => {
    try {
      await PaymentService.handleRazorpayPayment(
        serviceDetails.serviceId,
        serviceDetails.serviceName,
        serviceDetails.servicePrice,
        serviceDetails.bookingDate || new Date().toISOString(),
        serviceDetails.bookingTime || "Not specified",
        serviceDetails.userName || "Guest User",
        serviceDetails.userEmail || "guest@example.com",
        serviceDetails.userPhone || "Not provided",
        serviceDetails.companyName,
        serviceDetails.examPattern,
        serviceDetails.duration,
        serviceDetails.notes,
        (message) => {
          toast({
            title: "Processing payment",
            description: message,
          });
        },
        (errorMessage) => {
          toast({
            title: "Payment error",
            description: errorMessage,
            variant: "destructive",
          });
        }
      );
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  // Watch paymentStatus and redirect when successful
  useEffect(() => {
    if (paymentStatus === 'success') {
      // Redirect to success page after short delay
      setTimeout(() => {
        navigate(`/payment-success?serviceName=${encodeURIComponent(serviceDetails.serviceName || "")}&date=${encodeURIComponent(serviceDetails.bookingDate || "")}&time=${encodeURIComponent(serviceDetails.bookingTime || "")}`);
      }, 2000);
    }
  }, [paymentStatus, navigate, serviceDetails]);

  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <Card className="mb-8">
          <CardContent className="p-6">
            <PaymentMethods />
          </CardContent>
        </Card>
        
        <div className="text-center">
          <Button 
            variant="outline"
            onClick={() => navigate("/services")}
            className="w-full md:w-auto"
          >
            {serviceDetails.direct ? "Back to Services" : "Back to Booking"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentContainer;
