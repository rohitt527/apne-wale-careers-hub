
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InterviewsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              subtitle="INTERVIEW PREPARATION"
              title="Mock Interview Sessions"
              description="Practice with industry experts in realistic interview scenarios and receive detailed feedback to improve your performance"
              className="text-left"
            />
            
            <div className="mt-10">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-brand-red mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Role-Specific Preparation</h3>
                    <p className="text-gray-600">
                      Tailored interview preparation for front-end, back-end, full-stack, or specialized tech roles to match your career path.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-brand-red mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Company-Focused Interview</h3>
                    <p className="text-gray-600">
                      Strategically prepare for specific company interview styles including FAANG, startups, and enterprise organizations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-brand-red mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Feedback</h3>
                    <p className="text-gray-600">
                      Receive detailed assessments of your performance with actionable insights for continuous improvement.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                <Link to="/booking?service=3">Book Mock Interview</Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-red-50">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-red-200 rounded-full opacity-50 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1521798552670-919e6bfcc09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Mock Interview" 
              className="rounded-lg shadow-xl w-full h-auto relative z-10"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-300 rounded-full opacity-40 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewsSection;
