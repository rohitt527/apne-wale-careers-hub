
import React from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2 } from "lucide-react";

interface RazorpayPaymentProps {
  loading: boolean;
  handleRazorpayPayment: () => Promise<void>;
}

const RazorpayPayment = ({ loading, handleRazorpayPayment }: RazorpayPaymentProps) => {
  return (
    <div className="text-center space-y-6 py-4">
      <div className="bg-blue-50 p-4 rounded-md text-blue-800 text-left">
        <h3 className="font-medium mb-2 flex items-center">
          <CreditCard className="h-5 w-5 mr-2" />
          Razorpay Payment
        </h3>
        <p className="text-sm">
          Pay securely through Razorpay using various methods including cards, UPI, wallets, and net banking.
        </p>
      </div>
      <Button
        onClick={handleRazorpayPayment}
        disabled={loading}
        className="w-full md:w-auto bg-brand-red hover:bg-red-700 py-6"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : "Pay with Razorpay"}
      </Button>
    </div>
  );
};

export default RazorpayPayment;
