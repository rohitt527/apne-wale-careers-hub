
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

export const useAdminAuth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  
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

  return {
    isAdmin,
    adminLogin,
    adminLogout,
    setIsAdmin
  };
};
