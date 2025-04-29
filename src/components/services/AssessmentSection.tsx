
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AssessmentSection = () => {
  return (
    <section id="assessment" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Assessment Support"
              subtitle="Get expert help with your technical assessments and coding challenges"
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
                  <h3 className="font-medium">Technical Assessment Reviews</h3>
                  <p className="text-gray-600">Get detailed feedback on your take-home coding challenges and technical assessments.</p>
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
                  <h3 className="font-medium">Problem-Solving Sessions</h3>
                  <p className="text-gray-600">Interactive sessions to improve your approach to complex coding problems.</p>
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
                  <h3 className="font-medium">Code Quality Analysis</h3>
                  <p className="text-gray-600">Expert review of your code for best practices, patterns, and optimization.</p>
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
                  <h3 className="font-medium">System Design Feedback</h3>
                  <p className="text-gray-600">Comprehensive review of your system design solutions and architecture decisions.</p>
                </div>
              </div>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                <Link to="/book">Book Assessment Support</Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -bottom-6 bg-brand-red/20 w-64 h-64 rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Assessment Support"
              className="rounded-lg shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
