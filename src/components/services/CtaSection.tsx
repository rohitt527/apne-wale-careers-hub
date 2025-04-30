
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays, DollarSign } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-dark to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red opacity-20 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-8 font-bold">Ready to Transform Your Tech Career?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join hundreds of successful tech professionals who've accelerated their careers with our expert guidance. 
            All services are just $9 per session to make professional support accessible to everyone.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
              <Link to="/booking?service=2" className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5" />
                Book a Session
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">
              <Link to="/pricing" className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                View All Pricing
              </Link>
            </Button>
          </div>
          
          <p className="mt-8 text-gray-400">
            Not sure which service is right for you? 
            <Link to="/book" className="text-brand-red hover:text-red-400 ml-1 underline">
              Schedule a free consultation.
            </Link>
          </p>
        </div>
      </div>
      
      {/* Enhanced background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
        }}></div>
      </div>
    </section>
  );
};

export default CtaSection;
