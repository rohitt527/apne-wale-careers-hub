
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { createCheckoutSession, verifyUpiPayment, getUpiDetails } from "@/functions/create-payment";
import { CreditCard, QrCode, Smartphone, CheckCircle, AlertCircle, Phone, Wallet } from "lucide-react";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("serviceId");
  const serviceName = searchParams.get("serviceName");
  const servicePrice = searchParams.get("servicePrice");
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'phonepe' | 'paytm' | 'qrcode'>('card');
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'failed'>('idle');
  const { toast } = useToast();
  const navigate = useNavigate();
  const [upiDetails, setUpiDetails] = useState({ upiId: "", qrCodePath: "" });

  useEffect(() => {
    // Get UPI details from backend
    const details = getUpiDetails();
    setUpiDetails(details);
  }, []);

  // If essential params are missing, redirect to services
  useEffect(() => {
    if (!serviceId || !serviceName || !servicePrice) {
      toast({
        title: "Missing information",
        description: "Please select a service first.",
        variant: "destructive",
      });
      navigate("/services");
    }
  }, [serviceId, serviceName, servicePrice, toast, navigate]);

  const handleCardPayment = async () => {
    setLoading(true);
    try {
      const { sessionId, url } = await createCheckoutSession(
        "price_1Ow0VdLJZfxVtt9CluDBpZEU", // Replace with actual price ID
        `${window.location.origin}/payment-success?serviceName=${serviceName}`, 
        `${window.location.origin}/payment?serviceId=${serviceId}&serviceName=${serviceName}&servicePrice=${servicePrice}`
      );
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error("Failed to create checkout session");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast({
        title: "Payment error",
        description: "There was an error processing your card payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpiApp = (app: 'phonepe' | 'paytm') => {
    setPaymentMethod(app);
    
    // Deep linking to respective UPI apps
    const upiLink = app === 'phonepe' 
      ? `phonepe://pay?pa=${upiDetails.upiId}&pn=Service&am=${servicePrice}&cu=INR&tn=Payment for ${serviceName}`
      : `paytmmp://pay?pa=${upiDetails.upiId}&pn=Service&am=${servicePrice}&cu=INR&tn=Payment for ${serviceName}`;
    
    // Try to open the app, if it fails (desktop or app not installed), show fallback
    window.location.href = upiLink;
    
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
      const result = await verifyUpiPayment(transactionId);
      
      if (result.success) {
        setPaymentStatus('success');
        toast({
          title: "Payment successful!",
          description: "Your payment has been verified successfully.",
        });
        // Redirect to success page after short delay
        setTimeout(() => {
          navigate(`/payment-success?serviceName=${serviceName}`);
        }, 2000);
      } else {
        setPaymentStatus('failed');
        toast({
          title: "Payment verification failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Verification error:", error);
      setPaymentStatus('failed');
      toast({
        title: "Verification error",
        description: "There was an error verifying your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setVerifying(false);
    }
  };

  return (
    <Layout>
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-xl mb-3">Complete Your Payment</h1>
            <p className="text-lg text-gray-300 mb-6">
              Choose your preferred payment method to complete your booking.
            </p>
            <div className="bg-brand-red/20 p-4 rounded-md inline-block">
              <span className="text-lg font-semibold">${servicePrice}</span>
              <span className="ml-2">• {serviceName}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <Card className="mb-8">
            <CardContent className="p-6">
              <Tabs defaultValue="card" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8">
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

                <TabsContent value="card">
                  <div className="text-center space-y-6 py-4">
                    <div className="bg-blue-50 p-4 rounded-md text-blue-800 text-left">
                      <h3 className="font-medium mb-2 flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Secure Card Payment
                      </h3>
                      <p className="text-sm">
                        Your payment will be processed securely through Stripe. We never store your card details.
                      </p>
                    </div>
                    <Button
                      onClick={handleCardPayment}
                      disabled={loading}
                      className="w-full md:w-auto bg-brand-red hover:bg-red-700 py-6"
                    >
                      {loading ? "Processing..." : "Pay with Card"}
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="upi-apps">
                  <div className="text-center space-y-8 py-4">
                    <div className="bg-blue-50 p-4 rounded-md text-blue-800 text-left">
                      <h3 className="font-medium mb-2 flex items-center">
                        <Wallet className="h-5 w-5 mr-2" />
                        UPI Payment
                      </h3>
                      <p className="text-sm">
                        Select an app to make a UPI payment. After completing the payment, 
                        you'll need to enter the transaction ID for verification.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        onClick={() => handleUpiApp('phonepe')}
                        variant="outline"
                        className="h-24 flex flex-col items-center justify-center border-2"
                      >
                        <Phone className="h-8 w-8 text-purple-600 mb-2" />
                        <span>PhonePe</span>
                      </Button>
                      
                      <Button
                        onClick={() => handleUpiApp('paytm')}
                        variant="outline" 
                        className="h-24 flex flex-col items-center justify-center border-2"
                      >
                        <Wallet className="h-8 w-8 text-blue-600 mb-2" />
                        <span>Paytm</span>
                      </Button>
                    </div>
                    
                    {(paymentMethod === 'phonepe' || paymentMethod === 'paytm') && (
                      <div className="space-y-4 pt-4 border-t">
                        <h3 className="text-lg font-medium">Verify Your Payment</h3>
                        <p className="text-sm text-gray-600">
                          After completing your payment in {paymentMethod === 'phonepe' ? 'PhonePe' : 'Paytm'}, 
                          enter the transaction ID below to verify your payment.
                        </p>
                        
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                            placeholder="Enter Transaction ID"
                            className="flex-1 px-3 py-2 border rounded"
                          />
                          <Button 
                            onClick={verifyPayment}
                            disabled={verifying || !transactionId.trim()}
                            className="bg-brand-red hover:bg-red-700"
                          >
                            {verifying ? "Verifying..." : "Verify"}
                          </Button>
                        </div>
                        
                        {paymentStatus === 'success' && (
                          <div className="bg-green-50 p-3 rounded flex items-center text-green-700">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Payment successful! Redirecting...
                          </div>
                        )}
                        
                        {paymentStatus === 'failed' && (
                          <div className="bg-red-50 p-3 rounded flex items-center text-red-700">
                            <AlertCircle className="h-5 w-5 mr-2" />
                            Payment verification failed. Please try again or choose another payment method.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="qrcode">
                  <div className="text-center space-y-6 py-4">
                    <div className="bg-blue-50 p-4 rounded-md text-blue-800 text-left">
                      <h3 className="font-medium mb-2 flex items-center">
                        <QrCode className="h-5 w-5 mr-2" />
                        QR Code Payment
                      </h3>
                      <p className="text-sm">
                        Scan this QR code using any UPI app to make your payment. After payment, 
                        enter the transaction ID below for verification.
                      </p>
                    </div>
                    
                    <div className="flex justify-center p-4">
                      <img 
                        src={upiDetails.qrCodePath} 
                        alt="UPI QR Code" 
                        className="max-w-xs w-full border p-2 rounded"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Verify Your Payment</h3>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={transactionId}
                          onChange={(e) => setTransactionId(e.target.value)}
                          placeholder="Enter Transaction ID"
                          className="flex-1 px-3 py-2 border rounded"
                        />
                        <Button 
                          onClick={verifyPayment}
                          disabled={verifying || !transactionId.trim()}
                          className="bg-brand-red hover:bg-red-700"
                        >
                          {verifying ? "Verifying..." : "Verify"}
                        </Button>
                      </div>
                      
                      {paymentStatus === 'success' && (
                        <div className="bg-green-50 p-3 rounded flex items-center text-green-700">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Payment successful! Redirecting...
                        </div>
                      )}
                      
                      {paymentStatus === 'failed' && (
                        <div className="bg-red-50 p-3 rounded flex items-center text-red-700">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Payment verification failed. Please try again or choose another payment method.
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <Button 
              variant="outline"
              onClick={() => navigate(-1)}
              className="w-full md:w-auto"
            >
              Back to Booking
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
