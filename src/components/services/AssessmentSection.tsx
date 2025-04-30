
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Database, FileCode } from "lucide-react";

const AssessmentSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="TECHNICAL SUPPORT"
          title="Technical Assessment Services"
          description="Navigate coding challenges and technical assessments with confidence through our expert guidance and personalized coaching sessions"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            title="Coding Challenges"
            description="Master algorithmic problems and data structures with hands-on practice and personalized feedback from experienced engineers."
            icon={<Code />}
            features={[
              "Algorithm optimization strategies",
              "Data structure implementation",
              "Pattern recognition techniques",
              "Real-time code reviews"
            ]}
            link="/booking?service=1"
          />
          <ServiceCard
            title="System Design"
            description="Learn to architect scalable, efficient systems that impress interviewers and demonstrate your engineering expertise."
            icon={<Database />}
            features={[
              "Scalability principles",
              "Database design patterns",
              "Microservice architecture",
              "Performance optimization"
            ]}
            link="/booking?service=1"
          />
          <ServiceCard
            title="Take-home Projects"
            description="Receive comprehensive guidance on completing impressive take-home assignments that showcase your coding abilities."
            icon={<FileCode />}
            features={[
              "Project structure best practices",
              "Code quality standards",
              "Documentation excellence",
              "Testing strategy implementation"
            ]}
            link="/booking?service=1"
          />
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
              <Link to="/booking?service=1">Book Assessment Support</Link>
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

export default AssessmentSection;
