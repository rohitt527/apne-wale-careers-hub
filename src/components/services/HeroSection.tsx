
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays, DollarSign } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-red to-purple-900"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6 font-bold">Career Acceleration Services</h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            We offer comprehensive support at every stage of your tech career journey, 
            from resume building to interview preparation and career strategy.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 transition-all">
              <Link to="/book" className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5" />
                Book a Service
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-dark transition-all">
              <Link to="/pricing" className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                View All Pricing
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/30 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800/20 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default HeroSection;
