
import { createContext, useState, useContext, ReactNode } from 'react';

interface PaymentContextType {
  paymentMethod: 'card' | 'phonepe' | 'paytm' | 'qrcode' | 'razorpay';
  setPaymentMethod: (method: 'card' | 'phonepe' | 'paytm' | 'qrcode' | 'razorpay') => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  verifying: boolean;
  setVerifying: (verifying: boolean) => void;
  transactionId: string;
  setTransactionId: (id: string) => void;
  paymentStatus: 'idle' | 'success' | 'failed';
  setPaymentStatus: (status: 'idle' | 'success' | 'failed') => void;
  serviceDetails: {
    serviceId: string | null;
    serviceName: string | null;
    servicePrice: string | null;
    bookingDate: string | null;
    bookingTime: string | null;
    userName: string | null;
    userEmail: string | null;
    userPhone: string | null;
    companyName: string;
    examPattern: string;
    duration: string;
    notes: string;
    direct: boolean;
  };
  upiDetails: {
    upiId: string;
    qrCodePath: string;
  };
  setUpiDetails: (details: { upiId: string; qrCodePath: string }) => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider = ({ children, initialServiceDetails }: { 
  children: ReactNode;
  initialServiceDetails: {
    serviceId: string | null;
    serviceName: string | null;
    servicePrice: string | null;
    bookingDate: string | null;
    bookingTime: string | null;
    userName: string | null;
    userEmail: string | null;
    userPhone: string | null;
    companyName: string;
    examPattern: string;
    duration: string;
    notes: string;
    direct: boolean;
  }
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'phonepe' | 'paytm' | 'qrcode' | 'razorpay'>('razorpay');
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'failed'>('idle');
  const [upiDetails, setUpiDetails] = useState({ upiId: "", qrCodePath: "" });
  
  return (
    <PaymentContext.Provider value={{
      paymentMethod,
      setPaymentMethod,
      loading,
      setLoading,
      verifying,
      setVerifying,
      transactionId,
      setTransactionId,
      paymentStatus,
      setPaymentStatus,
      serviceDetails: initialServiceDetails,
      upiDetails,
      setUpiDetails,
    }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePaymentContext must be used within a PaymentProvider');
  }
  return context;
};
