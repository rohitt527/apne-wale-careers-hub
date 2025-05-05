
export type User = {
  phoneNumber: string;
  name?: string;
  email?: string;
};

export type AuthContextType = {
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
