
import React from "react";
import { Button } from "@/components/ui/button";
import { OtpInput } from "./OtpInput";
import { useOtpTimer } from "@/hooks/useOtpTimer";

type OtpEntryFormProps = {
  otp: string;
  setOtp: (value: string) => void;
  phoneNumber: string;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onResendOtp: () => Promise<void>;
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
  const { otpResendTimer, startTimer } = useOtpTimer();
  
  const handleResendOtp = async () => {
    if (otpResendTimer > 0) return;
    
    const success = await onResendOtp();
    if (success) {
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
        />
        <p className="text-sm text-gray-500 mt-2">
          OTP sent to {phoneNumber}
          <button
            type="button"
            onClick={onBack}
            className="ml-2 text-brand-red hover:underline"
          >
            Change
          </button>
        </p>
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
        disabled={isLoading}
      >
        {isLoading ? "Verifying..." : "Verify & Login"}
      </Button>
    </form>
  );
};
