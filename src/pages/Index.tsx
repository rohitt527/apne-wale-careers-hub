
import { useState, useEffect } from 'react';
import Preloader from '@/components/common/Preloader';
import ModernNavbar from '@/components/layout/ModernNavbar';
import ModernHeroSection from '@/components/home/ModernHeroSection';
import ModernFeaturesSection from '@/components/home/ModernFeaturesSection';
import ModernTestimonialsSection from '@/components/home/ModernTestimonialsSection';
import ModernFooter from '@/components/layout/ModernFooter';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    features: false,
    testimonials: false,
    footer: false
  });

  const handlePreloaderComplete = () => {
    setLoading(false);
    
    // Step-by-step section reveal
    setTimeout(() => setVisibleSections(prev => ({ ...prev, hero: true })), 300);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, features: true })), 800);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, testimonials: true })), 1300);
    setTimeout(() => setVisibleSections(prev => ({ ...prev, footer: true })), 1800);
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
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

    // Observe sections
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
