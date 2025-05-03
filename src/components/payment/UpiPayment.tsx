
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Wallet, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface UpiPaymentProps {
  paymentMethod: 'phonepe' | 'paytm';
  setPaymentMethod: (method: 'phonepe' | 'paytm') => void;
  handleUpiApp: (app: 'phonepe' | 'paytm') => void;
  transactionId: string;
  setTransactionId: (id: string) => void;
  verifying: boolean;
  paymentStatus: 'idle' | 'success' | 'failed';
  verifyPayment: () => Promise<void>;
}

const UpiPayment = ({
  paymentMethod,
  setPaymentMethod,
  handleUpiApp,
  transactionId,
  setTransactionId,
  verifying,
  paymentStatus,
  verifyPayment
}: UpiPaymentProps) => {
  return (
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
      )}
    </div>
  );
};

export default UpiPayment;
