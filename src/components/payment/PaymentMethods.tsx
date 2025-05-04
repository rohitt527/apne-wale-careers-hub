
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, QrCode, Smartphone, CreditCardIcon } from "lucide-react";
import CardPayment from "./CardPayment";
import UpiPayment from "./UpiPayment";
import QrCodePayment from "./QrCodePayment";
import RazorpayPayment from "./RazorpayPayment";
import { usePaymentContext } from "@/contexts/PaymentContext";
import { PaymentService } from "@/services/PaymentService";
import { useToast } from "@/hooks/use-toast";

const PaymentMethods = () => {
  const { 
    paymentMethod, 
    setPaymentMethod, 
    loading, 
    setLoading, 
    serviceDetails, 
    transactionId,
    setTransactionId,
    verifying,
    paymentStatus,
    upiDetails
  } = usePaymentContext();
  const { toast } = useToast();

  const handleCardPayment = async () => {
    setLoading(true);
    try {
      await PaymentService.handleCardPayment(
        serviceDetails.serviceId,
        serviceDetails.serviceName,
        serviceDetails.servicePrice,
        serviceDetails.bookingDate,
        serviceDetails.bookingTime,
        serviceDetails.userName,
        serviceDetails.userEmail,
        serviceDetails.userPhone,
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
    } finally {
      setLoading(false);
    }
  };

  const handleRazorpayPayment = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleUpiApp = (app: 'phonepe' | 'paytm') => {
    setPaymentMethod(app);
    PaymentService.handleUpiApp(app, upiDetails.upiId, serviceDetails.servicePrice, serviceDetails.serviceName);
    
    // After some delay, check if the app was opened, if not, show QR code option
    setTimeout(() => {
      // If we're still on the same page, assume app wasn't opened
      toast({
        title: "App not opened?",
        description: "If the app didn't open, please use the QR code instead.",
        variant: "default",
      });
    }, 1500);
  };

  const verifyPayment = async () => {
    if (!transactionId.trim()) {
      toast({
        title: "Transaction ID required",
        description: "Please enter the transaction ID to verify your payment.",
        variant: "destructive",
      });
      return;
    }

    try {
      const success = await PaymentService.verifyPayment(
        transactionId,
        serviceDetails.serviceName,
        serviceDetails.bookingDate,
        serviceDetails.bookingTime,
        serviceDetails.userName,
        serviceDetails.userEmail,
        serviceDetails.userPhone,
        serviceDetails.companyName,
        serviceDetails.examPattern,
        serviceDetails.duration,
        serviceDetails.notes,
        serviceDetails.servicePrice,
        paymentMethod,
        () => {
          toast({
            title: "Booking confirmed!",
            description: "Your payment has been verified and booking confirmed. An email has been sent with details.",
          });
        },
        (errorMessage) => {
          toast({
            title: "Payment verification failed",
            description: errorMessage,
            variant: "destructive",
          });
        }
      );
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  return (
    <Tabs defaultValue="razorpay" className="w-full">
      <TabsList className="grid grid-cols-4 mb-8">
        <TabsTrigger 
          value="razorpay" 
          onClick={() => setPaymentMethod('razorpay')} 
          className="flex items-center gap-2"
        >
          <CreditCardIcon className="h-4 w-4" /> Razorpay
        </TabsTrigger>
        <TabsTrigger 
          value="card" 
          onClick={() => setPaymentMethod('card')} 
          className="flex items-center gap-2"
        >
          <CreditCard className="h-4 w-4" /> Card
        </TabsTrigger>
        <TabsTrigger 
          value="upi-apps" 
          onClick={() => setPaymentMethod('phonepe')} 
          className="flex items-center gap-2"
        >
          <Smartphone className="h-4 w-4" /> UPI Apps
        </TabsTrigger>
        <TabsTrigger 
          value="qrcode" 
          onClick={() => setPaymentMethod('qrcode')} 
          className="flex items-center gap-2"
        >
          <QrCode className="h-4 w-4" /> Scan QR
        </TabsTrigger>
      </TabsList>

      <TabsContent value="razorpay">
        <RazorpayPayment loading={loading} handleRazorpayPayment={handleRazorpayPayment} />
      </TabsContent>

      <TabsContent value="card">
        <CardPayment loading={loading} handleCardPayment={handleCardPayment} />
      </TabsContent>

      <TabsContent value="upi-apps">
        <UpiPayment
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          handleUpiApp={handleUpiApp}
          transactionId={transactionId}
          setTransactionId={setTransactionId}
          verifying={verifying}
          paymentStatus={paymentStatus}
          verifyPayment={verifyPayment}
        />
      </TabsContent>

      <TabsContent value="qrcode">
        <QrCodePayment
          qrCodePath={upiDetails.qrCodePath}
          transactionId={transactionId}
          setTransactionId={setTransactionId}
          verifying={verifying}
          paymentStatus={paymentStatus}
          verifyPayment={verifyPayment}
        />
      </TabsContent>
    </Tabs>
  );
};

export default PaymentMethods;
