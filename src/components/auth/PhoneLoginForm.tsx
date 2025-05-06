
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OtpInput } from "./OtpInput";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export const PhoneLoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const { login, startOtpFlow, verifyingOtp, resendOtp } = useAuth();
  const { toast } = useToast();
  const [otpResendTimer, setOtpResendTimer] = useState(0);

  // Load any pending verification
  useEffect(() => {
    const pendingPhone = localStorage.getItem('pendingPhoneVerification');
    if (pendingPhone) {
      setPhoneNumber(pendingPhone);
      setShowOtpField(true);
    }
  }, []);

  // Handle OTP resend timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (otpResendTimer > 0) {
      interval = setInterval(() => {
        setOtpResendTimer((prev) => prev - 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [otpResendTimer]);

  const handlePhoneNumberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }
    
    if (!fullName || fullName.trim() === "") {
      toast({
        title: "Missing full name",
        description: "Please enter your full name",
        variant: "destructive",
      });
      return;
    }
    
    // Start the OTP flow
    const success = await startOtpFlow(phoneNumber);
    
    if (success) {
      // Show OTP field and start the resend timer
      setShowOtpField(true);
      setOtpResendTimer(30); // 30 second cooldown before resend
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!otp || otp.length !== 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 4-digit OTP",
        variant: "destructive",
      });
      return;
    }
    
    // Verify the OTP and complete login
    const success = await login(phoneNumber, otp, fullName);
    
    if (!success) {
      toast({
        title: "Invalid OTP",
        description: "The OTP you entered is incorrect or has expired",
        variant: "destructive",
      });
    }
  };

  const handleResendOtp = async () => {
    if (otpResendTimer > 0) return;
    
    const success = await resendOtp(phoneNumber);
    if (success) {
      setOtpResendTimer(30); // Reset the timer
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!showOtpField ? (
        <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <Input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-brand-red hover:bg-red-700 text-white"
            disabled={verifyingOtp}
          >
            {verifyingOtp ? "Sending OTP..." : "Get OTP"}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit} className="space-y-4">
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
                onClick={() => setShowOtpField(false)}
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
            disabled={verifyingOtp}
          >
            {verifyingOtp ? "Verifying..." : "Verify & Login"}
          </Button>
        </form>
      )}
    </div>
  );
};
