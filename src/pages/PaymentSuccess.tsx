
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Calendar, Clock } from "lucide-react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceName = searchParams.get("serviceName");
  const bookingDate = searchParams.get("date");
  const bookingTime = searchParams.get("time");

  useEffect(() => {
    // If no service name is provided, redirect to home
    if (!serviceName) {
      navigate("/");
    }
  }, [serviceName, navigate]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="bg-green-50 p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold mb-4 text-green-700">Payment Successful!</h1>
            <p className="text-lg mb-6">
              Thank you for your payment for {serviceName}.
              {bookingDate && bookingTime && (
                <div className="flex flex-col items-center mt-4 space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="font-medium">{bookingDate}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-medium">{bookingTime}</span>
                  </div>
                </div>
              )}
            </p>
            
            <div className="bg-white p-4 rounded-md mb-6 text-left max-w-md mx-auto">
              <div className="flex items-center mb-3 text-gray-700">
                <Mail className="h-5 w-5 mr-2" />
                <span>A confirmation email has been sent to your email address and to apnewalecoders@gmail.com</span>
              </div>
              <p className="text-sm text-gray-600">
                Please check your inbox for all the details about your booking. If you don't see it, please check your spam folder.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                <a href="/">Return to Home</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/book">Book Another Session</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentSuccess;
