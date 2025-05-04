import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, QrCode, Smartphone, CreditCardIcon } from "lucide-react";
import { PaymentService } from "@/services/PaymentService";
import PaymentHeader from "@/components/payment/PaymentHeader";
import CardPayment from "@/components/payment/CardPayment";
import UpiPayment from "@/components/payment/UpiPayment";
import QrCodePayment from "@/components/payment/QrCodePayment";
import RazorpayPayment from "@/components/payment/RazorpayPayment";

const Payment = () => {
  const [searchParams] = useSearchParams();
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
  
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'phonepe' | 'paytm' | 'qrcode' | 'razorpay'>('razorpay');
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'failed'>('idle');
  const { toast } = useToast();
  const navigate = useNavigate();
  const [upiDetails, setUpiDetails] = useState({ upiId: "", qrCodePath: "" });

  useEffect(() => {
    // Get UPI details from backend
    const fetchUpiDetails = async () => {
      const details = await PaymentService.getUpiDetails();
      setUpiDetails(details);
    };
    
    fetchUpiDetails();
  }, []);

  // If direct payment and service info is available, automatically trigger Razorpay
  useEffect(() => {
    if (direct && serviceId && serviceName && servicePrice) {
      // Short delay to allow page to render before opening Razorpay popup
      const timer = setTimeout(() => {
        handleRazorpayPayment();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [direct, serviceId, serviceName, servicePrice]);

  // If essential params are missing, redirect to services
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

  const handleCardPayment = async () => {
    setLoading(true);
    try {
      await PaymentService.handleCardPayment(
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
        serviceId,
        serviceName,
        servicePrice,
        bookingDate || new Date().toISOString(),
        bookingTime || "Not specified",
        userName || "Guest User",
        userEmail || "guest@example.com",
        userPhone || "Not provided",
        companyName,
        examPattern,
        duration,
        notes,
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
    PaymentService.handleUpiApp(app, upiDetails.upiId, servicePrice, serviceName);
    
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

    setVerifying(true);
    try {
      const success = await PaymentService.verifyPayment(
        transactionId,
        serviceName,
        bookingDate,
        bookingTime,
        userName,
        userEmail,
        userPhone,
        companyName,
        examPattern,
        duration,
        notes,
        servicePrice,
        paymentMethod,
        () => {
          setPaymentStatus('success');
          toast({
            title: "Booking confirmed!",
            description: "Your payment has been verified and booking confirmed. An email has been sent with details.",
          });
          
          // Redirect to success page after short delay
          setTimeout(() => {
            navigate(`/payment-success?serviceName=${encodeURIComponent(serviceName || "")}&date=${encodeURIComponent(bookingDate || "")}&time=${encodeURIComponent(bookingTime || "")}`);
          }, 2000);
        },
        (errorMessage) => {
          setPaymentStatus('failed');
          toast({
            title: "Payment verification failed",
            description: errorMessage,
            variant: "destructive",
          });
        }
      );
      
      if (!success) {
        setPaymentStatus('failed');
      }
    } finally {
      setVerifying(false);
    }
  };

  return (
    <Layout>
      <PaymentHeader 
        serviceName={serviceName}
        servicePrice={servicePrice}
        bookingDate={bookingDate}
        bookingTime={bookingTime}
        userName={userName}
        userEmail={userEmail}
        userPhone={userPhone}
      />

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <Card className="mb-8">
            <CardContent className="p-6">
              <Tabs defaultValue="razorpay" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="razorpay" onClick={() => setPaymentMethod('razorpay')} className="flex items-center gap-2">
                    <CreditCardIcon className="h-4 w-4" /> Razorpay
                  </TabsTrigger>
                  <TabsTrigger value="card" onClick={() => setPaymentMethod('card')} className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" /> Card
                  </TabsTrigger>
                  <TabsTrigger value="upi-apps" onClick={() => setPaymentMethod('phonepe')} className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" /> UPI Apps
                  </TabsTrigger>
                  <TabsTrigger value="qrcode" onClick={() => setPaymentMethod('qrcode')} className="flex items-center gap-2">
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
                    setPaymentMethod={(method) => setPaymentMethod(method)}
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
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button 
              variant="outline"
              onClick={() => navigate("/services")}
              className="w-full md:w-auto"
            >
              {direct ? "Back to Services" : "Back to Booking"}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
