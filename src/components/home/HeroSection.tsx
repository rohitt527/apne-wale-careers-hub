
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, BookOpen, TrendingUp, Sparkles, Zap } from "lucide-react";
import Counter from "@/components/common/Counter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse delay-500"></div>
        </div>
      </div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                <span className="text-sm font-semibold">Transform Your Career Journey</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Accelerate Your
                </span>
                <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Career Success
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                Expert guidance, premium resources, and opportunities that matter. Join thousands of professionals advancing their careers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl">
                  <Link to="/services" className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-105">
                  <Link to="/jobs">Explore Opportunities</Link>
                </Button>
              </div>

              {/* Stats Section moved here */}
              <div className="grid grid-cols-2 gap-4 pt-8 animate-fade-in" style={{ animationDelay: "800ms" }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-blue-400" />
                    <div className="text-2xl font-bold">
                      <Counter end={5000} duration={2000} />+
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <div className="text-2xl font-bold">4.9</div>
                  </div>
                  <div className="text-gray-300 text-sm">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Floating Cards */}
            <div className="lg:col-span-6 relative animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0">
                {/* Study Materials Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 w-16 h-16 mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Study Materials</h3>
                  <p className="text-gray-300 text-sm mb-4">Premium resources for skill development</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">500+</div>
                    <div className="text-xs text-gray-400">Resources</div>
                  </div>
                </div>

                {/* Job Opportunities Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 mt-8">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 w-16 h-16 mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Job Opportunities</h3>
                  <p className="text-gray-300 text-sm mb-4">Connect with top companies</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">95%</div>
                    <div className="text-xs text-gray-400">Success Rate</div>
                  </div>
                </div>

                {/* Career Growth Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 -mt-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl p-4 w-16 h-16 mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Career Growth</h3>
                  <p className="text-gray-300 text-sm mb-4">Expert guidance and mentorship</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">4.9</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                </div>

                {/* Success Stories Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 mt-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-4 w-16 h-16 mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Success Stories</h3>
                  <p className="text-gray-300 text-sm mb-4">Learn from industry leaders</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">5000+</div>
                    <div className="text-xs text-gray-400">Stories</div>
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
