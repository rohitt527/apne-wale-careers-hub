import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { PhoneEntryForm } from "./PhoneEntryForm";
import { OtpEntryForm } from "./OtpEntryForm";

export const PhoneLoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const { login, startOtpFlow, verifyingOtp, resendOtp } = useAuth();
  const { toast } = useToast();

  // Load any pending verification
  useEffect(() => {
    const sessionData = localStorage.getItem('otpSession');
    if (sessionData) {
      try {
        const session = JSON.parse(sessionData);
        if (session.phoneNumber && Date.now() < session.expiresAt) {
          setPhoneNumber(session.phoneNumber);
          setShowOtpField(true);
        } else {
          // Clear expired session
          localStorage.removeItem('otpSession');
        }
      } catch (error) {
        console.error('Failed to parse OTP session:', error);
        localStorage.removeItem('otpSession');
      }
    }
  }, []);

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
      // Show OTP field
      setShowOtpField(true);
      setOtp(''); // Clear any previous OTP
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
      // If failed, clear the OTP field but keep the OTP entry form open
      setOtp('');
    }
  };

  const handleResendOtp = async (): Promise<boolean> => {
    return await resendOtp(phoneNumber);
  };

  const handleBackToPhone = () => {
    setShowOtpField(false);
    setOtp('');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!showOtpField ? (
        <PhoneEntryForm
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          fullName={fullName}
          setFullName={setFullName}
          onSubmit={handlePhoneNumberSubmit}
          isLoading={verifyingOtp}
        />
      ) : (
        <OtpEntryForm
          otp={otp}
          setOtp={setOtp}
          phoneNumber={phoneNumber}
          onBack={handleBackToPhone}
          onSubmit={handleOtpSubmit}
          onResendOtp={handleResendOtp}
          isLoading={verifyingOtp}
        />
      )}
    </div>
  );
};
