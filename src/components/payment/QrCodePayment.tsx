
import React from "react";
import { Button } from "@/components/ui/button";
import { QrCode, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface QrCodePaymentProps {
  qrCodePath: string;
  transactionId: string;
  setTransactionId: (id: string) => void;
  verifying: boolean;
  paymentStatus: 'idle' | 'success' | 'failed';
  verifyPayment: () => Promise<void>;
}

const QrCodePayment = ({
  qrCodePath,
  transactionId,
  setTransactionId,
  verifying,
  paymentStatus,
  verifyPayment
}: QrCodePaymentProps) => {
  return (
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
          src={qrCodePath} 
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
            {verifying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : "Verify"}
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
  );
};

export default QrCodePayment;
