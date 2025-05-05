
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export const PhoneLoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const { startOtpFlow, login, verifyingOtp } = useAuth();
  const { toast } = useToast();

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
    
    const success = await startOtpFlow(phoneNumber);
    
    if (success) {
      setShowOtpField(true);
      toast({
        title: "OTP Sent",
        description: "Please check your phone for the OTP",
      });
    } else {
      toast({
        title: "Failed to send OTP",
        description: "Please try again later",
        variant: "destructive",
      });
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
    
    const success = await login(phoneNumber, otp);
    
    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
    } else {
      toast({
        title: "Invalid OTP",
        description: "The OTP you entered is incorrect",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!showOtpField ? (
        <form onSubmit={handlePhoneNumberSubmit} className="space-y-4">
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
            <Input
              id="otp"
              type="text"
              inputMode="numeric"
              maxLength={4}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              placeholder="Enter 4-digit OTP"
              className="w-full text-center text-xl tracking-widest"
              required
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
