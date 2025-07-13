
import { useState, useEffect } from 'react';
import Preloader from '@/components/common/Preloader';
import ModernNavbar from '@/components/layout/ModernNavbar';
import ModernHeroSection from '@/components/home/ModernHeroSection';
import ModernFeaturesSection from '@/components/home/ModernFeaturesSection';
import ServicesSection from '@/components/home/ServicesSection';
import StudyMaterialsSection from '@/components/home/StudyMaterialsSection';
import JobsSection from '@/components/home/JobsSection';
import BlogSection from '@/components/home/BlogSection';
import ModernTestimonialsSection from '@/components/home/ModernTestimonialsSection';
import ModernFooter from '@/components/layout/ModernFooter';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    features: false,
    services: false,
    studyMaterials: false,
    jobs: false,
    blog: false,
    testimonials: false,
    footer: false
  });

  const handlePreloaderComplete = () => {
    setLoading(false);
    
    // Step-by-step section reveal with smooth timing
    setTimeout(() => setVisibleSections(prev => ({ ...prev, hero: true })), 300);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, features: true })), 800);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, services: true })), 1100);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, studyMaterials: true })), 1400);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, jobs: true })), 1700);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, blog: true })), 2000);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, testimonials: true })), 2300);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, footer: true })), 2600);
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Advanced scroll-triggered animations
  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setVisibleSections(prev => ({ ...prev, [sectionId]: true }));
          }
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="overflow-x-hidden">
      <ModernNavbar />
      
      <div data-section="hero">
        <ModernHeroSection isVisible={visibleSections.hero} />
      </div>
      
      <div data-section="features">
        <ModernFeaturesSection isVisible={visibleSections.features} />
      </div>
      
      <div data-section="services">
        <ServicesSection isVisible={visibleSections.services} />
      </div>
      
      <div data-section="studyMaterials">
        <StudyMaterialsSection />
      </div>
      
      <div data-section="jobs">
        <JobsSection isVisible={visibleSections.jobs} />
      </div>
      
      <div data-section="blog">
        <BlogSection isVisible={visibleSections.blog} />
      </div>
      
      <div data-section="testimonials">
        <ModernTestimonialsSection isVisible={visibleSections.testimonials} />
      </div>
      
      <div data-section="footer">
        <ModernFooter isVisible={visibleSections.footer} />
      </div>
    </div>
  );
};

export default Index;
