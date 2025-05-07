
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { OtpInput } from "./OtpInput";
import { useOtpTimer } from "@/hooks/useOtpTimer";
import { AlertCircle } from "lucide-react";

type OtpEntryFormProps = {
  otp: string;
  setOtp: (value: string) => void;
  phoneNumber: string;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onResendOtp: () => Promise<boolean>;
  isLoading: boolean;
};

export const OtpEntryForm: React.FC<OtpEntryFormProps> = ({
  otp,
  setOtp,
  phoneNumber,
  onBack,
  onSubmit,
  onResendOtp,
  isLoading,
}) => {
  const { otpResendTimer, startTimer } = useOtpTimer(30); // 30 seconds timer
  
  // Start timer when component mounts
  useEffect(() => {
    startTimer();
  }, [startTimer]);
  
  const handleResendOtp = async () => {
    if (otpResendTimer > 0) return;
    
    const success = await onResendOtp();
    if (success) {
      setOtp(''); // Clear the OTP input
      startTimer();
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="otp" className="block text-sm font-medium mb-1">
          One-Time Password
        </label>
        <OtpInput
          value={otp}
          onChange={setOtp}
          length={4}
          autoFocus={true}
        />
        <p className="text-sm text-gray-500 mt-2 flex items-center">
          <span>OTP sent to {phoneNumber}</span>
          <button
            type="button"
            onClick={onBack}
            className="ml-2 text-brand-red hover:underline"
          >
            Change
          </button>
        </p>
        <div className="mt-2 text-xs text-amber-600 flex items-center">
          <AlertCircle size={12} className="mr-1" />
          <span>OTP will expire in 5 minutes</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={handleResendOtp}
          className={`text-sm ${otpResendTimer > 0 ? 'text-gray-400' : 'text-brand-red hover:underline'}`}
          disabled={otpResendTimer > 0}
        >
          {otpResendTimer > 0 
            ? `Resend OTP in ${otpResendTimer}s` 
            : "Resend OTP"}
        </button>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-brand-red hover:bg-red-700 text-white"
        disabled={isLoading || otp.length !== 4}
      >
        {isLoading ? "Verifying..." : "Verify & Login"}
      </Button>
    </form>
  );
};
