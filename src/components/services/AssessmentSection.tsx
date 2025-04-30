
import SectionHeading from "@/components/common/SectionHeading";
import ServiceItem from "./ServiceItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AssessmentSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          subtitle="OUR SERVICES"
          title="Technical Assessment Support"
          description="Get expert guidance for your technical assessments and screening rounds with personalized coaching sessions"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <ServiceItem
            title="Coding Challenges"
            description="Practice coding challenges with real-time feedback from experienced engineers"
            features={[
              "Data structures & algorithms",
              "Pattern recognition",
              "Time complexity analysis",
              "Code optimization techniques"
            ]}
            linkUrl="/book?service=1"
            linkText="Book Now"
          />
          <ServiceItem
            title="System Design"
            description="Learn how to design scalable and efficient systems for technical interviews"
            features={[
              "Architecture principles",
              "Scalability considerations",
              "Data storage solutions",
              "API design best practices"
            ]}
            linkUrl="/book?service=1"
            linkText="Book Now"
          />
          <ServiceItem
            title="Take-home Projects"
            description="Get feedback and guidance on take-home assignments for job applications"
            features={[
              "Code organization",
              "Best practices implementation",
              "Documentation guidance",
              "Testing strategies"
            ]}
            linkUrl="/book?service=1"
            linkText="Book Now"
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
            <Link to="/book?service=1">Book Assessment Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
