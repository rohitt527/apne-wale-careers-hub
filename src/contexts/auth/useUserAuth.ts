
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
      
      // In a real app, you would call an API to send an OTP
      // For this implementation, we're now handling the OTP generation in the PhoneLoginForm
      
      // Save the phone number to verify against when the OTP is submitted
      localStorage.setItem('pendingPhoneVerification', phoneNumber);
      
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
      
      // Remove the pending verification
      localStorage.removeItem('pendingPhoneVerification');
      
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
    setUser
  };
};
