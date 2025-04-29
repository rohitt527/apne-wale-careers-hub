
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InterviewsSection = () => {
  return (
    <section id="interviews" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -left-6 -top-6 bg-brand-red/20 w-64 h-64 rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Mock Interviews"
              className="rounded-lg shadow-lg relative z-10"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              title="Mock Interviews"
              subtitle="Practice with industry experts and receive real-time feedback"
              align="left"
            />
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-brand-red text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Role-Specific Interviews</h3>
                  <p className="text-gray-600">Tailored mock interviews for frontend, backend, full stack, data science positions and more.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-brand-red text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Company-Specific Preparation</h3>
                  <p className="text-gray-600">Specialized mock interviews based on the format and requirements of your target company.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-brand-red text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Behavioral Interview Practice</h3>
                  <p className="text-gray-600">Practice answering common behavioral questions with structured feedback on your responses.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-brand-red text-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Detailed Performance Analysis</h3>
                  <p className="text-gray-600">Comprehensive feedback report with specific areas of improvement and strengths.</p>
                </div>
              </div>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                <Link to="/book">Schedule Mock Interview</Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewsSection;
