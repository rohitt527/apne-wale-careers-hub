
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
          {/* Smooth gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent pointer-events-none z-10"></div>
          <div className="relative z-20 space-y-0">
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
