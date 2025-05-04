
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { PaymentService } from "@/services/PaymentService";

export function usePaymentService() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [upiDetails, setUpiDetails] = useState({ upiId: "", qrCodePath: "" });
  
  // Extract service details from URL params
  const serviceId = searchParams.get("serviceId");
  const serviceName = searchParams.get("serviceName");
  const servicePrice = searchParams.get("servicePrice");
  const bookingDate = searchParams.get("date");
  const bookingTime = searchParams.get("time");
  const userName = searchParams.get("name");
  const userEmail = searchParams.get("email");
  const userPhone = searchParams.get("phone");
  const companyName = searchParams.get("companyName") || "";
  const examPattern = searchParams.get("examPattern") || "";
  const duration = searchParams.get("duration") || "";
  const notes = searchParams.get("notes") || "";
  const direct = searchParams.get("direct") === "true";

  // Fetch UPI details on component mount
  useEffect(() => {
    const fetchUpiDetails = async () => {
      const details = await PaymentService.getUpiDetails();
      setUpiDetails(details);
    };
    
    fetchUpiDetails();
  }, []);

  // Check if essential params are missing, redirect to services
  useEffect(() => {
    if (!serviceId || !serviceName || !servicePrice) {
      toast({
        title: "Missing service information",
        description: "Please select a service first.",
        variant: "destructive",
      });
      navigate("/services");
    }
  }, [serviceId, serviceName, servicePrice, toast, navigate]);

  return {
    serviceDetails: {
      serviceId,
      serviceName,
      servicePrice,
      bookingDate,
      bookingTime,
      userName,
      userEmail,
      userPhone,
      companyName,
      examPattern,
      duration,
      notes,
      direct
    },
    upiDetails,
    setUpiDetails,
  };
}
