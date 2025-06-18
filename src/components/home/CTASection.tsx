
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers with our expert guidance and premium resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Link to="/services" className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Link to="/study-material">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
