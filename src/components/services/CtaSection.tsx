
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Tech Career?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Book a session with our expert coaches and take the first step toward your next career milestone
          </p>
          <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
            <Link to="/book">Book a Session Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
