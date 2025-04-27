import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

        <div className="md:hidden">
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
          <Link to="/pricing" className="text-foreground hover:text-brand-red transition-colors font-medium">Pricing</Link>
          <Link to="/book">
            <Button size="sm" className="bg-brand-red hover:bg-red-700 text-white">Book a Slot</Button>
          </Link>
        </nav>

        {isOpen && (
          <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-white p-6 md:hidden animate-fade-in">
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
                to="/pricing" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-brand-red"
              >
                Pricing
              </Link>
              <Link 
                to="/book"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-brand-red hover:bg-red-700 text-white">Book a Slot</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
