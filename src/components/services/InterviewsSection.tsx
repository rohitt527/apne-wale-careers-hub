
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "./FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InterviewsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              subtitle="OUR SERVICES"
              title="Mock Interviews"
              description="Practice with industry experts and receive real-time feedback to improve your interview performance"
              className="text-left"
            />
            
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-red text-xl mr-2">✓</span>
                  <span>
                    <strong className="text-lg">Role-Specific Preparation</strong>
                    <p className="text-gray-600 mt-1">
                      Custom interviews tailored to front-end, back-end, full-stack, or specific tech roles
                    </p>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red text-xl mr-2">✓</span>
                  <span>
                    <strong className="text-lg">Company-Focused Interview</strong>
                    <p className="text-gray-600 mt-1">
                      Targeted practice based on specific company interview styles (FAANG, startups, etc.)
                    </p>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red text-xl mr-2">✓</span>
                  <span>
                    <strong className="text-lg">Comprehensive Feedback</strong>
                    <p className="text-gray-600 mt-1">
                      Detailed assessment and actionable feedback for continuous improvement
                    </p>
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
                <Link to="/book?service=3">Book Mock Interview</Link>
              </Button>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1521798552670-919e6bfcc09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Mock Interview" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewsSection;
