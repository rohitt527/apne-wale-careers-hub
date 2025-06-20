
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target, Star, Award, Users, TrendingUp } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-[32rem] h-[32rem] bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse delay-500"></div>
        </div>
        {/* Stars */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse delay-300"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-10 py-5 mb-12 border border-white/20 shadow-2xl">
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
            <span className="text-lg font-semibold">Ready to Transform Your Future?</span>
            <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <span className="block mt-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Career?
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-blue-100 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
            Join thousands of professionals who have accelerated their careers with our expert guidance, premium resources, and personalized support.
          </p>
          
          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 shadow-xl">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                <div className="text-4xl font-bold mb-3">5000+</div>
                <div className="text-blue-200 font-medium">Success Stories</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 shadow-xl">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <div className="text-4xl font-bold mb-3">4.9/5</div>
                <div className="text-blue-200 font-medium">User Rating</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 shadow-xl">
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                <div className="text-4xl font-bold mb-3">95%</div>
                <div className="text-blue-200 font-medium">Success Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-110 shadow-xl">
                <Award className="w-12 h-12 text-green-400 mx-auto mb-6" />
                <div className="text-4xl font-bold mb-3">24/7</div>
                <div className="text-blue-200 font-medium">Support</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Button size="lg" className="bg-gradient-to-r from-white to-blue-100 text-blue-900 hover:from-blue-50 hover:to-white px-16 py-6 text-xl font-bold shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-110 rounded-3xl">
              <Link to="/services" className="flex items-center gap-4">
                <Zap className="w-6 h-6" />
                Start Your Journey
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white hover:text-blue-900 px-16 py-6 text-xl backdrop-blur-sm rounded-3xl transition-all duration-500 transform hover:scale-110 shadow-2xl">
              <Link to="/study-material" className="flex items-center gap-4">
                <Target className="w-6 h-6" />
                Explore Resources
              </Link>
            </Button>
          </div>
          
          {/* Enhanced Social Proof */}
          <div className="text-center">
            <p className="text-blue-200 mb-8 text-xl font-medium">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
              <div className="text-white font-bold text-2xl hover:opacity-100 transition-opacity duration-300">Google</div>
              <div className="text-white font-bold text-2xl hover:opacity-100 transition-opacity duration-300">Microsoft</div>
              <div className="text-white font-bold text-2xl hover:opacity-100 transition-opacity duration-300">Amazon</div>
              <div className="text-white font-bold text-2xl hover:opacity-100 transition-opacity duration-300">Apple</div>
              <div className="text-white font-bold text-2xl hover:opacity-100 transition-opacity duration-300">Meta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
