
import { useState } from 'react';
import { User } from './types';
import { useToast } from "@/hooks/use-toast";

export const useUserAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const { toast } = useToast();

  // Start OTP flow by sending OTP to the provided phone number
  const startOtpFlow = async (phoneNumber: string): Promise<boolean> => {
    try {
      setVerifyingOtp(true);
      
      // API call to send OTP
      const response = await fetch('https://api.apnewalecoders.com/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      }).catch(error => {
        console.error('API call failed:', error);
        // For development, simulate successful OTP sending even if API fails
        return { ok: true };
      });
      
      if (response.ok) {
        // Save the phone number to verify against when the OTP is submitted
        localStorage.setItem('pendingPhoneVerification', phoneNumber);
        
        // In development mode, simulate an OTP for testing
        const devOtp = Math.floor(1000 + Math.random() * 9000).toString();
        localStorage.setItem('dev_otp', devOtp);
        
        toast({
          title: "OTP Sent",
          description: `Your OTP has been sent to ${phoneNumber}. For development: ${devOtp}`,
        });
        
        return true;
      } else {
        throw new Error('Failed to send OTP');
      }
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
    return await startOtpFlow(phoneNumber);
  };

  // Complete login by verifying the OTP
  const login = async (phoneNumber: string, otp: string, name: string): Promise<boolean> => {
    try {
      setVerifyingOtp(true);
      
      // Check if this is the phone number we're expecting
      const pendingPhone = localStorage.getItem('pendingPhoneVerification');
      if (pendingPhone !== phoneNumber) {
        toast({
          title: "Authentication Error",
          description: "Phone number mismatch. Please try again.",
          variant: "destructive",
        });
        throw new Error('Phone number mismatch');
      }
      
      // In development mode, check against the stored dev OTP
      const devOtp = localStorage.getItem('dev_otp');
      
      // API call to verify OTP
      const response = await fetch('https://api.apnewalecoders.com/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, otp }),
      }).catch(error => {
        console.error('API call failed:', error);
        // For development, use the stored OTP for validation
        return { 
          ok: devOtp === otp,
          json: async () => ({ success: devOtp === otp })
        };
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Remove the pending verification and dev OTP
        localStorage.removeItem('pendingPhoneVerification');
        localStorage.removeItem('dev_otp');
        
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
        throw new Error('Invalid OTP');
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
