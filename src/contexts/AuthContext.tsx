
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define types for our context
type User = {
  phoneNumber: string;
  name?: string;
  email?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (phoneNumber: string, otp: string) => Promise<boolean>;
  logout: () => void;
  startOtpFlow: (phoneNumber: string) => Promise<boolean>;
  verifyingOtp: boolean;
};

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  logout: () => {},
  startOtpFlow: async () => false,
  verifyingOtp: false,
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Start OTP flow by sending OTP to the provided phone number
  const startOtpFlow = async (phoneNumber: string): Promise<boolean> => {
    try {
      setVerifyingOtp(true);
      
      // In a real app, you would call an API to send an OTP
      // For demo purposes, we'll simulate an API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Save the phone number to verify against when the OTP is submitted
      localStorage.setItem('pendingPhoneVerification', phoneNumber);
      
      return true;
    } catch (error) {
      console.error('Failed to send OTP:', error);
      return false;
    } finally {
      setVerifyingOtp(false);
    }
  };

  // Complete login by verifying the OTP
  const login = async (phoneNumber: string, otp: string): Promise<boolean> => {
    try {
      setVerifyingOtp(true);
      
      // In a real app, you would verify the OTP with your backend
      // For demo purposes, any 4-digit OTP will work
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Check if this is the phone number we're expecting
      const pendingPhone = localStorage.getItem('pendingPhoneVerification');
      if (pendingPhone !== phoneNumber) {
        throw new Error('Phone number mismatch');
      }
      
      // Remove the pending verification
      localStorage.removeItem('pendingPhoneVerification');
      
      // Create a user object
      const newUser: User = {
        phoneNumber,
        // In a real app, you might get additional user details from your backend
      };
      
      // Update state and localStorage
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    } finally {
      setVerifyingOtp(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        isLoading,
        login,
        logout,
        startOtpFlow,
        verifyingOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
