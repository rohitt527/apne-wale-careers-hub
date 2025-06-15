import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { LoginModal } from "@/components/auth/LoginModal";
import AdminLogin from "@/components/admin/AdminLogin";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [adminLoginModalOpen, setAdminLoginModalOpen] = useState(false);
  const { isAuthenticated, logout, isAdmin, adminLogin } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePostJobClick = () => {
    if (isAdmin) {
      navigate('/admin-post');
    } else {
      setAdminLoginModalOpen(true);
    }
  };

  const handleAdminLogin = (username: string, password: string) => {
    const success = adminLogin(username, password);
    if (success) {
      setAdminLoginModalOpen(false);
      navigate('/admin-post');
    }
    return success;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-brand-red">Apne Wale</span>
            <span className="sr-only sm:not-sr-only sm:text-xl font-medium text-foreground">Careers</span>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-brand-red transition-colors font-medium">Home</Link>
          <Link to="/about" className="text-foreground hover:text-brand-red transition-colors font-medium">About Us</Link>
          <Link to="/services" className="text-foreground hover:text-brand-red transition-colors font-medium">Services</Link>
          <Link to="/blog" className="text-foreground hover:text-brand-red transition-colors font-medium">Blog</Link>
          <Link to="/jobs" className="text-foreground hover:text-brand-red transition-colors font-medium">Jobs</Link>
          <Link to="/study-material" className="text-foreground hover:text-brand-red transition-colors font-medium">Study Material</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-foreground hover:text-brand-red transition-colors font-medium">Dashboard</Link>
              <Button size="sm" variant="ghost" onClick={logout}>Logout</Button>
            </>
          ) : (
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => setLoginModalOpen(true)}
              className="flex items-center gap-1"
            >
              <User className="h-4 w-4" />
              Login
            </Button>
          )}
          
          <ThemeToggle />
          
          <Button 
            size="sm" 
            className="bg-brand-red hover:bg-red-700 text-white"
            onClick={handlePostJobClick}
          >
            Post a Job
          </Button>
        </nav>

        {isOpen && (
          <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-background p-6 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-brand-red"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-brand-red"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-brand-red"
              >
                Services
              </Link>
              <Link 
                to="/blog" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-brand-red"
              >
                Blog
              </Link>
              <Link 
                to="/jobs" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-brand-red"
              >
                Jobs
              </Link>
              <Link 
                to="/study-material" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-brand-red"
              >
                Study Material
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-brand-red"
                  >
                    Dashboard
                  </Link>
                  <Button variant="outline" className="w-full" onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => {
                    setLoginModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  <User className="h-4 w-4" />
                  Login
                </Button>
              )}
              
              <Button 
                className="w-full bg-brand-red hover:bg-red-700 text-white"
                onClick={() => {
                  handlePostJobClick();
                  setIsOpen(false);
                }}
              >
                Post a Job
              </Button>
            </nav>
          </div>
        )}
      </div>
      
      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
      />
      
      {/* Admin Login Modal */}
      {adminLoginModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Admin Login Required</h2>
              <button 
                onClick={() => setAdminLoginModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <AdminLogin onLogin={handleAdminLogin} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
