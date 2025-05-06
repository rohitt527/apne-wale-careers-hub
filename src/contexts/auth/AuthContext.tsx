
import { createContext, useContext, useEffect, ReactNode, useState } from 'react';
import { AuthContextType } from './types';
import { useUserAuth } from './useUserAuth';
import { useAdminAuth } from './useAdminAuth';

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
  resendOtp: async () => false,
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { 
    user, 
    isAuthenticated, 
    verifyingOtp, 
    login, 
    logout, 
    startOtpFlow,
    resendOtp, 
    setUser 
  } = useUserAuth();
  
  const { 
    isAdmin, 
    adminLogin, 
    adminLogout, 
    setIsAdmin 
  } = useAdminAuth();
  
  const [isLoading, setIsLoading] = useState(true);

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
  }, [setUser, setIsAdmin]);

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        isLoading,
        login,
        logout,
        startOtpFlow,
        verifyingOtp,
        isAdmin,
        adminLogin,
        adminLogout,
        resendOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
