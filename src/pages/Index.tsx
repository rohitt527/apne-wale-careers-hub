
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
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white pointer-events-none"></div>
          <div className="relative z-10">
            <ServicesSection />
            <StudyMaterialsSection />
            <JobsSection />
            <BlogSection />
          </div>
        </div>
        <CTASection />
      </div>
    </Layout>
  );
};

export default Index;
