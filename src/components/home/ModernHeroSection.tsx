
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';

interface ModernHeroSectionProps {
  isVisible: boolean;
}

const ModernHeroSection = ({ isVisible }: ModernHeroSectionProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Transform Your Career Journey";

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setCurrentText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, isVisible, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Trusted by 10,000+ Professionals</span>
          </div>

          {/* Hero Heading with Typewriter Effect */}
          <h1 className={`text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {currentText}
            <span className="animate-pulse">|</span>
          </h1>

          {/* Subheading */}
          <p className={`text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Join thousands of professionals who have accelerated their careers with our expert guidance, premium resources, and personalized mentorship programs.
          </p>

          {/* Trust Indicators */}
          <div className={`flex flex-wrap justify-center items-center gap-8 mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-blue-200 text-sm">Success Stories</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-blue-200 text-sm">Rating</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Link
              to="/services"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <button className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
