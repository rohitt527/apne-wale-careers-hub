
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

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
  login: (phoneNumber: string, otp: string, name: string) => Promise<boolean>;
  logout: () => void;
  startOtpFlow: (phoneNumber: string) => Promise<boolean>;
  verifyingOtp: boolean;
  isAdmin: boolean;
  adminLogin: (username: string, password: string) => boolean;
  adminLogout: () => void;
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
  isAdmin: false,
  adminLogin: () => false,
  adminLogout: () => {},
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('user');
      }
    }
    
    // Check for admin session
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (adminLoggedIn === 'true') {
      setIsAdmin(true);
    }
    
    setIsLoading(false);
  }, []);

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
  
  // Admin login function
  const adminLogin = (username: string, password: string): boolean => {
    if (username === "apnewalecoders" && password === "apne1234") {
      setIsAdmin(true);
      localStorage.setItem('adminLoggedIn', 'true');
      toast({
        title: "Admin Login Successful",
        description: "Welcome to the admin dashboard",
      });
      return true;
    } else {
      toast({
        title: "Admin Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
      return false;
    }
  };
  
  // Admin logout function
  const adminLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('adminLoggedIn');
    toast({
      title: "Admin Logged Out",
      description: "You have been logged out of admin account.",
    });
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
        isAdmin,
        adminLogin,
        adminLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
