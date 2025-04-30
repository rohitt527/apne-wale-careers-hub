
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to take your career to the next level?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Our experts are ready to help you succeed in your tech career journey. 
            Book a session today and get personalized guidance tailored to your needs.
          </p>
          <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
            <Link to="/booking?service=2">Book Career Guidance Session</Link>
          </Button>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>
    </section>
  );
};

export default CtaSection;
