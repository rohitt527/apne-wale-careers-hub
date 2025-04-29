
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/services/HeroSection";
import AssessmentSection from "@/components/services/AssessmentSection";
import InterviewsSection from "@/components/services/InterviewsSection";
import PreparationSection from "@/components/services/PreparationSection";
import CareerProjectSection from "@/components/services/CareerProjectSection";
import CtaSection from "@/components/services/CtaSection";

const Services = () => {
  return (
    <Layout>
      <HeroSection />
      <AssessmentSection />
      <InterviewsSection />
      <PreparationSection />
      <CareerProjectSection />
      <CtaSection />
    </Layout>
  );
};

export default Services;
