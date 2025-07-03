
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, Award, Calendar, Zap, Shield, Sparkles, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 via-purple-400/15 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/10 via-pink-400/15 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Animated floating particles */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-float"></div>
        <div className="absolute top-64 right-1/3 w-3 h-3 bg-purple-400/40 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-48 left-1/3 w-2 h-2 bg-indigo-400/40 rounded-full animate-float delay-1000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div 
              ref={heroRef}
              className={`space-y-10 transition-all duration-1000 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Trust badge */}
              <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 border border-blue-100/80 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-semibold text-gray-800">Trusted by 5000+ Professionals Worldwide</span>
                <Sparkles className="h-4 w-4 text-blue-600 animate-pulse" />
              </div>
              
              {/* Main heading */}
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] text-gray-900 tracking-tight">
                  Accelerate Your
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-4">
                    Career Growth
                  </span>
                </h1>
                
                <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-2xl font-light">
                  Join thousands of professionals who transformed their careers with expert mentorship, premium resources, and personalized guidance.
                </p>
              </div>
              
              {/* Inline trust indicators without boxes */}
              <div className="flex flex-wrap items-center gap-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5000+</div>
                    <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="text-sm text-gray-600 font-medium">Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-8 text-xl font-bold shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 rounded-2xl group">
                  <Link to="/services" className="flex items-center gap-4">
                    <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    Start Your Journey
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-12 py-8 text-xl rounded-2xl transition-all duration-500 hover:scale-105 shadow-lg group">
                  <Link to="/book" className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    Book Free Consultation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative">
              <div className="relative">
                {/* Main visual element */}
                <div className="relative w-full h-[600px] rounded-4xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                    alt="Professional team collaboration" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
                  
                  {/* Floating achievement badges */}
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-emerald-600" />
                      <div>
                        <div className="text-xl font-bold text-gray-900">Career Growth</div>
                        <div className="text-sm text-gray-600">95% Success Rate</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float delay-1000">
                    <div className="flex items-center gap-3">
                      <Star className="w-8 h-8 text-yellow-500" />
                      <div>
                        <div className="text-xl font-bold text-gray-900">Top Rated</div>
                        <div className="text-sm text-gray-600">4.9/5 Reviews</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
