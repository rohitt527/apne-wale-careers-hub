
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "./FeatureCard";

const PreparationSection = () => {
  return (
    <section id="preparation" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Interview Preparation"
          subtitle="Comprehensive resources and guidance to excel in technical interviews"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 3 4 9-4 9 15-9-15-9Z"></path>
              </svg>
            }
            title="Weekly Prep Series"
            description="Group sessions focusing on specific interview topics each week, with live problem-solving and discussions."
            features={[
              "Data Structures & Algorithms",
              "System Design Principles",
              "Frontend Concepts",
              "Database Optimization"
            ]}
            linkUrl="/book"
            linkText="Join Next Session"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="m9 14 2 2 4-4"></path>
              </svg>
            }
            title="Question Bank Access"
            description="Comprehensive collection of company-specific questions with detailed explanations and optimal solutions."
            features={[
              "1000+ Coding Questions",
              "200+ System Design Problems",
              "150+ Behavioral Question Templates",
              "Company-Specific Collections"
            ]}
            linkUrl="/resources"
            linkText="Access Question Bank"
          />
          
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M16 13a2 2 0 0 1-2 2H9.5a2.5 2.5 0 0 1 0-5H12a2 2 0 0 0 0-4H9"></path>
              </svg>
            }
            title="1:1 Mentorship"
            description="Personalized guidance from industry experts with customized preparation plans and regular progress tracking."
            features={[
              "Tailored Study Plans",
              "Weekly Check-ins",
              "Personalized Feedback",
              "Interview Strategy Development"
            ]}
            linkUrl="/book"
            linkText="Request Mentor"
          />
        </div>
      </div>
    </section>
  );
};

export default PreparationSection;
