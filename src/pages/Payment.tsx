
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import PaymentHeader from "@/components/payment/PaymentHeader";
import PaymentContainer from "@/components/payment/PaymentContainer";
import { PaymentProvider } from "@/contexts/PaymentContext";
import { usePaymentService } from "@/hooks/usePaymentService";

const Payment = () => {
  const { serviceDetails, upiDetails, setUpiDetails } = usePaymentService();

  return (
    <Layout>
      <PaymentHeader 
        serviceName={serviceDetails.serviceName}
        servicePrice={serviceDetails.servicePrice}
        bookingDate={serviceDetails.bookingDate}
        bookingTime={serviceDetails.bookingTime}
        userName={serviceDetails.userName}
        userEmail={serviceDetails.userEmail}
        userPhone={serviceDetails.userPhone}
      />

      <PaymentProvider initialServiceDetails={serviceDetails}>
        <PaymentContainer />
      </PaymentProvider>
    </Layout>
  );
};

export default Payment;
