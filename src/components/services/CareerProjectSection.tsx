
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CareerProjectSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Career Guidance" 
                  className="rounded-lg mb-4 w-full h-40 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Team Discussion" 
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <div className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Project Planning" 
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Coding" 
                  className="rounded-lg w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionHeading
              subtitle="OUR SERVICES"
              title="Career Strategy & Projects"
              description="Get guidance on career decisions and work on practical projects to enhance your portfolio"
              className="text-left"
            />
            
            <div className="mt-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Career Guidance</h3>
                <p className="text-gray-600">
                  Strategic advice on career paths, skill development, and job hunting tailored to your goals
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="border-brand-red text-brand-red">
                    <Link to="/book?service=2">Book Career Guidance</Link>
                  </Button>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Project Help</h3>
                <p className="text-gray-600">
                  Assistance with personal coding projects, from architecture planning to implementation details
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="border-brand-red text-brand-red">
                    <Link to="/book?service=6">Book Project Help</Link>
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Resume Building</h3>
                <p className="text-gray-600">
                  Expert help with crafting an ATS-friendly resume that highlights your strengths
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="border-brand-red text-brand-red">
                    <Link to="/book?service=4">Book Resume Help</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProjectSection;
