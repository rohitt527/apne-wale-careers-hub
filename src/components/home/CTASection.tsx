
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target, Star, Award, Users, TrendingUp, Shield, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-blue-300/60 rounded-full animate-float delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-300/60 rounded-full animate-float delay-300"></div>
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-cyan-300/40 rounded-full animate-float delay-1000"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-white/15 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-white/20 shadow-2xl">
            <Rocket className="h-5 w-5 text-cyan-400 animate-pulse" />
            <span className="text-base font-semibold">Ready to Transform Your Future?</span>
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <span className="block mt-3 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Your Career?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Join thousands of professionals who have accelerated their careers with our expert guidance, premium resources, and personalized support.
          </p>
          
          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 shadow-xl group">
                <Users className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-blue-200 font-medium text-sm">Success Stories</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 shadow-xl group">
                <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-200 font-medium text-sm">User Rating</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 shadow-xl group">
                <TrendingUp className="w-10 h-10 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-blue-200 font-medium text-sm">Success Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 shadow-xl group">
                <Shield className="w-10 h-10 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200 font-medium text-sm">Support</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-white to-blue-50 text-blue-900 hover:from-blue-50 hover:to-white px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-white/30 transition-all duration-500 transform hover:scale-110 rounded-2xl group">
              <Link to="/services" className="flex items-center gap-3">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white hover:text-blue-900 px-12 py-6 text-lg backdrop-blur-sm rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl group">
              <Link to="/study-material" className="flex items-center gap-3">
                <Target className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Explore Resources
              </Link>
            </Button>
          </div>
          
          {/* Enhanced Social Proof */}
          <div className="text-center">
            <p className="text-blue-200 mb-6 text-lg font-medium">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-white font-bold text-xl hover:opacity-100 transition-opacity duration-300 cursor-pointer">Google</div>
              <div className="text-white font-bold text-xl hover:opacity-100 transition-opacity duration-300 cursor-pointer">Microsoft</div>
              <div className="text-white font-bold text-xl hover:opacity-100 transition-opacity duration-300 cursor-pointer">Amazon</div>
              <div className="text-white font-bold text-xl hover:opacity-100 transition-opacity duration-300 cursor-pointer">Apple</div>
              <div className="text-white font-bold text-xl hover:opacity-100 transition-opacity duration-300 cursor-pointer">Meta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
