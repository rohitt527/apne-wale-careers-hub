
import { useState } from 'react';
import { User } from './types';
import { useToast } from "@/hooks/use-toast";

// OTP configuration
const OTP_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds
const MAX_OTP_ATTEMPTS = 3;

type OtpSession = {
  phoneNumber: string;
  attempts: number;
  expiresAt: number;
  otp?: string; // Only used in development mode
}

export const useUserAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const { toast } = useToast();

  // Start OTP flow by sending OTP to the provided phone number
  const startOtpFlow = async (phoneNumber: string): Promise<boolean> => {
    try {
      // Simple validation
      if (!phoneNumber || phoneNumber.length < 10) {
        toast({
          title: "Invalid phone number",
          description: "Please enter a valid phone number",
          variant: "destructive",
        });
        return false;
      }

      setVerifyingOtp(true);
      
      // Rate limiting check - prevent multiple requests for the same number
      const lastAttempt = localStorage.getItem('lastOtpRequest');
      if (lastAttempt) {
        const lastTime = JSON.parse(lastAttempt);
        const timeDiff = Date.now() - lastTime.timestamp;
        
        if (lastTime.phoneNumber === phoneNumber && timeDiff < 30000) { // 30 seconds
          toast({
            title: "Too many attempts",
            description: "Please wait 30 seconds before requesting another OTP",
            variant: "destructive",
          });
          return false;
        }
      }
      
      // Generate an OTP for development/fallback use
      const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
      
      // Send OTP via API
      let apiSuccess = false;
      try {
        const response = await fetch('https://api.apnewalecoders.com/send-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phoneNumber }),
        });
        
        if (response.ok) {
          const data = await response.json();
          apiSuccess = true;
          
          toast({
            title: "OTP Sent",
            description: `Your OTP has been sent to ${phoneNumber}`,
          });
        } else {
          throw new Error(`API error: ${response.status}`);
        }
      } catch (error) {
        console.error('API call failed:', error);
        
        // In development or if API fails, we use the locally generated OTP
        apiSuccess = false;
        
        toast({
          title: "API Error",
          description: "Using fallback OTP for development. In production, this would send an actual SMS.",
        });
      }
      
      // Save rate limiting info
      localStorage.setItem('lastOtpRequest', JSON.stringify({
        phoneNumber,
        timestamp: Date.now()
      }));
      
      // Generate OTP session
      const session: OtpSession = {
        phoneNumber,
        attempts: 0,
        expiresAt: Date.now() + OTP_EXPIRY_TIME,
      };
      
      // Only in development mode or when API fails, we store the OTP
      if (!apiSuccess) {
        session.otp = generatedOtp;
        toast({
          title: "Development OTP",
          description: `For development: ${generatedOtp}`,
        });
      }
      
      localStorage.setItem('otpSession', JSON.stringify(session));
      
      return true;
    } catch (error) {
      console.error('Failed to send OTP:', error);
      toast({
        title: "Error",
        description: "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setVerifyingOtp(false);
    }
  };

  // Resend OTP functionality
  const resendOtp = async (phoneNumber: string): Promise<boolean> => {
    // Clear previous session before resending
    localStorage.removeItem('otpSession');
    return await startOtpFlow(phoneNumber);
  };

  // Complete login by verifying the OTP
  const login = async (phoneNumber: string, otp: string, name: string): Promise<boolean> => {
    try {
      setVerifyingOtp(true);
      
      // Get the OTP session
      const sessionData = localStorage.getItem('otpSession');
      if (!sessionData) {
        toast({
          title: "Session Expired",
          description: "Your OTP session has expired. Please request a new OTP.",
          variant: "destructive",
        });
        return false;
      }
      
      const session: OtpSession = JSON.parse(sessionData);
      
      // Validate session
      if (session.phoneNumber !== phoneNumber) {
        toast({
          title: "Authentication Error",
          description: "Phone number mismatch. Please try again.",
          variant: "destructive",
        });
        return false;
      }
      
      // Check if expired
      if (Date.now() > session.expiresAt) {
        localStorage.removeItem('otpSession');
        toast({
          title: "OTP Expired",
          description: "Your OTP has expired. Please request a new one.",
          variant: "destructive",
        });
        return false;
      }
      
      // Check attempt count
      if (session.attempts >= MAX_OTP_ATTEMPTS) {
        localStorage.removeItem('otpSession');
        toast({
          title: "Too Many Attempts",
          description: "You've exceeded the maximum number of attempts. Please request a new OTP.",
          variant: "destructive",
        });
        return false;
      }
      
      // Update attempt count
      session.attempts += 1;
      localStorage.setItem('otpSession', JSON.stringify(session));
      
      // Verify OTP
      let isValid = false;
      
      // First try to validate with the API
      try {
        const response = await fetch('https://api.apnewalecoders.com/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phoneNumber, otp }),
        });
        
        if (response.ok) {
          const data = await response.json();
          isValid = data.success === true;
        } else {
          throw new Error(`API error: ${response.status}`);
        }
      } catch (error) {
        console.error('API validation failed, falling back to dev mode:', error);
        // Fall back to dev mode validation if API call fails
        isValid = session.otp === otp;
      }
      
      if (isValid) {
        // Remove the session
        localStorage.removeItem('otpSession');
        localStorage.removeItem('lastOtpRequest');
        
        // Create a user object
        const newUser: User = {
          phoneNumber,
          name,
          // In a real app, you might get additional user details from your backend
        };
        
        // Update state and localStorage
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        
        toast({
          title: "Login Successful",
          description: "You have successfully logged in.",
        });
        
        return true;
      } else {
        toast({
          title: "Invalid OTP",
          description: "The OTP you entered is incorrect. Please try again.",
          variant: "destructive",
        });
        return false;
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast({
        title: "Login Failed",
        description: "Invalid OTP or phone number. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setVerifyingOtp(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return {
    user,
    isAuthenticated: !!user,
    verifyingOtp,
    login,
    logout,
    startOtpFlow,
    resendOtp,
    setUser
  };
};
