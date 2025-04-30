
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "./FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, FileText, Users } from "lucide-react";

const PreparationSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="OUR SERVICES"
          title="Interview Preparation"
          description="Comprehensive preparation services to help you excel in technical interviews"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Technical Concepts"
            description="From fundamental algorithms to advanced system design patterns, we'll help you master core technical concepts"
            icon={<Code />}
            features={["Algorithm mastery", "Data structures", "System design", "Technical communication"]}
            linkUrl="/booking?service=5"
            linkText="Learn More"
          />
          <FeatureCard
            title="Resume & Portfolio Review"
            description="Get expert feedback on your resume, portfolio, and GitHub projects to stand out from other candidates"
            icon={<FileText />}
            features={["ATS optimization", "Project highlighting", "Skills assessment", "Portfolio enhancement"]}
            linkUrl="/booking?service=4"
            linkText="Learn More"
          />
          <FeatureCard
            title="Behavioral Interview Prep"
            description="Learn how to effectively communicate your experience and skills using the STAR method and other techniques"
            icon={<Users />}
            features={["STAR technique", "Scenario preparation", "Strengths showcase", "Cultural fit assessment"]}
            linkUrl="/booking?service=3"
            linkText="Learn More"
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
            <Link to="/booking?service=5">Book Interview Preparation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PreparationSection;
