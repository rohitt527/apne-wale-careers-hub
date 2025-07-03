
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target, Star, Users, TrendingUp, Shield, Rocket, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-[700px] h-[700px] bg-gradient-to-r from-indigo-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-blue-300/50 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-300/50 rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-cyan-300/30 rounded-full animate-float delay-1000"></div>
        
        {/* Enhanced grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div 
          ref={ctaRef}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-10 py-5 mb-12 border border-white/20 shadow-2xl">
            <Rocket className="h-6 w-6 text-cyan-400 animate-pulse" />
            <span className="text-lg font-semibold">Ready to Transform Your Future?</span>
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <span className="block mt-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Your Career?
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-blue-100 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
            Join thousands of professionals who have accelerated their careers with our expert guidance, premium resources, and personalized support.
          </p>
          
          {/* Enhanced Trust Indicators without boxes */}
          <div className="flex flex-wrap justify-center items-center gap-16 mb-16">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-xl">
                <Users className="w-10 h-10 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold">5000+</div>
                <div className="text-blue-200 font-medium">Success Stories</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-xl">
                <Star className="w-10 h-10 text-yellow-400" />
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold">4.9/5</div>
                <div className="text-blue-200 font-medium">User Rating</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-xl">
                <TrendingUp className="w-10 h-10 text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold">95%</div>
                <div className="text-blue-200 font-medium">Success Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-xl">
                <Shield className="w-10 h-10 text-purple-400" />
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-blue-200 font-medium">Support</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Button size="lg" className="bg-gradient-to-r from-white to-blue-50 text-blue-900 hover:from-blue-50 hover:to-white px-16 py-8 text-xl font-bold shadow-2xl hover:shadow-white/30 transition-all duration-500 transform hover:scale-110 rounded-2xl group">
              <Link to="/services" className="flex items-center gap-4">
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white hover:text-blue-900 px-16 py-8 text-xl backdrop-blur-sm rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl group">
              <Link to="/book" className="flex items-center gap-4">
                <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Book Free Consultation
              </Link>
            </Button>
          </div>
          
          {/* Enhanced Social Proof */}
          <div className="text-center">
            <p className="text-blue-200 mb-8 text-xl font-medium">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
              <div className="text-white font-bold text-2xl hover:opacity-100 transition-opacity duration-300 cursor-pointer">Google</div>
              <div className="text-white font-bold text-2xl hover:opacity-100 transition-opacity duration-300 cursor-pointer">Microsoft</div>
              <div className="text-white font-bold text-2xl hover:opacity-100 transition-opacity duration-300 cursor-pointer">Amazon</div>
              <div className="text-white font-bold text-2xl hover:opacity-100 transition-opacity duration-300 cursor-pointer">Apple</div>
              <div className="text-white font-bold text-2xl hover:opacity-100 transition-opacity duration-300 cursor-pointer">Meta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
