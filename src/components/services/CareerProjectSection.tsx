
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CareerProjectSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      
      <div className="container-custom">
        <SectionHeading
          subtitle="CAREER DEVELOPMENT"
          title="Career Strategy & Projects"
          description="Strategic guidance for your career growth and practical projects to enhance your portfolio and marketability"
        />
        
        <div className="mt-12 space-y-16">
          {/* First service with image on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-red-100 rounded-full opacity-30 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Career Guidance" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-200 rounded-full opacity-20 blur-lg"></div>
            </div>
          </div>
          
          {/* Second service with image on left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-red-100 rounded-full opacity-30 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Project Help" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-200 rounded-full opacity-20 blur-lg"></div>
            </div>
            
            <div className="order-1 lg:order-2">
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
            </div>
          </div>
          
          {/* Third service with image on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-red-100 rounded-full opacity-30 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Resume Building" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-200 rounded-full opacity-20 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProjectSection;
