
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-brand-dark text-white py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6">Our Services</h1>
          <p className="text-lg text-gray-300 mb-8">
            We offer comprehensive career support services designed to help you excel at every stage of your tech career journey.
          </p>
          <Button asChild size="lg" className="bg-brand-red hover:bg-red-700">
            <Link to="/book">Book a Service</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
