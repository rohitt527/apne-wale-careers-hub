
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CareerProjectSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-red-100 rounded-full opacity-60 blur-3xl"></div>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Career Guidance" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Coding Project Support" 
                  className="rounded-lg shadow-lg w-full h-56 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="pt-10 space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Technical Project Guidance" 
                  className="rounded-lg shadow-lg w-full h-56 object-cover transition-transform hover:scale-105 duration-300"
                />
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Portfolio Development" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-red-200 rounded-full opacity-50 blur-2xl"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionHeading
              subtitle="CAREER DEVELOPMENT"
              title="Career Strategy & Projects"
              description="Strategic guidance for your career growth and practical projects to enhance your portfolio and marketability"
              className="text-left"
            />
            
            <div className="mt-10 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">Career Guidance</h3>
                <p className="text-gray-600 mb-5">
                  Receive personalized career path recommendations, skill development plans, and job hunting strategies aligned with your goals and aspirations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                    <Link to="/booking?service=2">Book Career Guidance</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-red-50">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">Project Help</h3>
                <p className="text-gray-600 mb-5">
                  Get expert assistance with personal coding projects, from initial architecture planning to implementation details and optimization.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                    <Link to="/booking?service=6">Book Project Help</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-red-50">
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">Resume Building</h3>
                <p className="text-gray-600 mb-5">
                  Transform your resume into an ATS-friendly document that highlights your strengths and captures recruiter attention.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                    <Link to="/booking?service=4">Book Resume Help</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-red-50">
                    <Link to="/pricing">View Pricing</Link>
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
