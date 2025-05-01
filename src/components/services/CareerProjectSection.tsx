
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const CareerProjectSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image for mobile view - will show at the top on small screens */}
          <div className="block lg:hidden relative mb-8">
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-red-200 rounded-full opacity-50 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Career Development" 
              className="rounded-lg shadow-xl w-full h-auto relative z-10 object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-300 rounded-full opacity-40 blur-xl"></div>
          </div>
          
          <div>
            <SectionHeading
              subtitle="CAREER DEVELOPMENT"
              title="Career Strategy & Projects"
              description="Strategic guidance for your career growth and practical projects to enhance your portfolio and marketability"
              className="text-left"
            />
            
            <div className="mt-10">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-brand-red mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
                    <p className="text-gray-600">
                      Receive personalized career path recommendations, skill development plans, and job hunting strategies aligned with your goals and aspirations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-brand-red mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Project Help</h3>
                    <p className="text-gray-600">
                      Get expert assistance with personal coding projects, from initial architecture planning to implementation details and optimization.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-brand-red mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Resume Building</h3>
                    <p className="text-gray-600">
                      Transform your resume into an ATS-friendly document that highlights your strengths and captures recruiter attention.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                <Link to="/booking?service=2">Book Career Guidance</Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-red-50">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          
          {/* Image for desktop view - will only show on large screens */}
          <div className="hidden lg:block relative">
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-red-200 rounded-full opacity-50 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Career Development" 
              className="rounded-lg shadow-xl w-full h-auto relative z-10 object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-300 rounded-full opacity-40 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProjectSection;
