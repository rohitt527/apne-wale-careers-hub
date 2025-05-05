
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
  const [generatedOtp, setGeneratedOtp] = useState("");
  const { login, startOtpFlow, verifyingOtp } = useAuth();
  const { toast } = useToast();

  // Load any pending verification
  useEffect(() => {
    const pendingPhone = localStorage.getItem('pendingPhoneVerification');
    if (pendingPhone) {
      setPhoneNumber(pendingPhone);
      setShowOtpField(true);
    }
  }, []);

  const generateRandomOtp = () => {
    // Generate a random 4-digit OTP
    const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(randomOtp);
    return randomOtp;
  };

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
    if (!success) {
      toast({
        title: "Error",
        description: "Failed to start OTP verification",
        variant: "destructive",
      });
      return;
    }
    
    // Generate OTP
    const randomOtp = generateRandomOtp();
    
    // Simulate sending OTP to the phone number
    toast({
      title: "OTP Sent",
      description: `Your OTP is: ${randomOtp}`,
    });
    
    // Show OTP field
    setShowOtpField(true);
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
    
    // Check if OTP matches
    if (otp === generatedOtp) {
      const success = await login(phoneNumber, otp, fullName);
      
      if (success) {
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
      } else {
        toast({
          title: "Login Failed",
          description: "There was an issue with your login. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Invalid OTP",
        description: "The OTP you entered is incorrect",
        variant: "destructive",
      });
    }
  };

  const handleResendOtp = () => {
    const newOtp = generateRandomOtp();
    toast({
      title: "OTP Resent",
      description: `Your new OTP is: ${newOtp}`,
    });
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
              className="text-sm text-brand-red hover:underline"
            >
              Resend OTP
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
