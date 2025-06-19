
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse delay-500"></div>
        </div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-semibold">Ready to Transform Your Future?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Career?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of professionals who have accelerated their careers with our expert guidance, premium resources, and personalized support.
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">5000+</div>
                <div className="text-blue-200 text-sm">Success Stories</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">4.9/5</div>
                <div className="text-blue-200 text-sm">User Rating</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">95%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <Sparkles className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-blue-200 text-sm">Support</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-white to-blue-100 text-blue-900 hover:from-blue-50 hover:to-white px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-2xl">
              <Link to="/services" className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-12 py-4 text-lg backdrop-blur-sm rounded-2xl transition-all duration-300 transform hover:scale-105">
              <Link to="/study-material">Explore Resources</Link>
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-blue-200 mb-6">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold text-lg">Google</div>
              <div className="text-white font-semibold text-lg">Microsoft</div>
              <div className="text-white font-semibold text-lg">Amazon</div>
              <div className="text-white font-semibold text-lg">Apple</div>
              <div className="text-white font-semibold text-lg">Meta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
