
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceName = searchParams.get("serviceName");

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
              Thank you for your payment for {serviceName}. Your booking has been confirmed.
            </p>
            
            <p className="mb-8 text-gray-600">
              We've sent a confirmation email with all the details. You will receive further information about your session shortly.
            </p>
            
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
