
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StudyMaterialsSection from "@/components/home/StudyMaterialsSection";
import JobsSection from "@/components/home/JobsSection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <div className="overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <StudyMaterialsSection />
        <JobsSection />
        <BlogSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default Index;
