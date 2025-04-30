
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "./FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, FileText, Users } from "lucide-react";

const PreparationSection = () => {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-100 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50 rounded-full opacity-80 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="PREPARATION SERVICES"
          title="Interview Preparation"
          description="Comprehensive preparation services designed to help you excel in technical interviews and stand out from other candidates"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Technical Concepts"
            description="Master fundamental algorithms, data structures, and system design patterns with expert guidance tailored to your skill level"
            icon={<Code />}
            features={["Algorithm strategies", "Data structure mastery", "System design principles", "Technical communication"]}
            linkUrl="/booking?service=5"
            linkText="Book Now"
          />
          <FeatureCard
            title="Resume & Portfolio Review"
            description="Transform your resume and portfolio with expert feedback to catch recruiter attention and highlight your most impressive achievements"
            icon={<FileText />}
            features={["ATS optimization", "Project highlighting", "Skills assessment", "Portfolio enhancement"]}
            linkUrl="/booking?service=4"
            linkText="Book Now"
          />
          <FeatureCard
            title="Behavioral Interview Prep"
            description="Learn powerful storytelling techniques and the STAR method to communicate your experience effectively in any interview scenario"
            icon={<Users />}
            features={["STAR technique", "Scenario preparation", "Strengths showcase", "Cultural fit strategies"]}
            linkUrl="/booking?service=3"
            linkText="Book Now"
          />
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
              <Link to="/booking?service=5">Book Interview Preparation</Link>
            </Button>
            <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-red-50">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreparationSection;
