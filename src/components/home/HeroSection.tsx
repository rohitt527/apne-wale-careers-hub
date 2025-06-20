
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, BookOpen, TrendingUp, Sparkles, Zap, CheckCircle, Play, Award } from "lucide-react";
import Counter from "@/components/common/Counter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-purple-50/40 overflow-hidden flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-50/10 to-transparent"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-10 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 border border-blue-100/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <Sparkles className="h-5 w-5 text-blue-600 animate-pulse" />
                <span className="text-sm font-semibold text-blue-900">Transform Your Career Journey</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Accelerate Your
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Career Success
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
                  Expert guidance, premium resources, and opportunities that matter. Join thousands of professionals advancing their careers with our proven platform.
                </p>
              </div>
              
              {/* Enhanced Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Expert Mentors</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Proven Results</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 rounded-2xl">
                  <Link to="/services" className="flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    Start Your Journey
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-12 py-6 text-xl rounded-2xl transition-all duration-500 hover:scale-105 shadow-lg">
                  <Link to="/jobs" className="flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              {/* Enhanced Stats Section */}
              <div className="grid grid-cols-3 gap-8 pt-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <Counter end={5000} duration={2000} />+
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Happy Clients</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Star className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
                  <div className="text-gray-600 text-sm font-medium">Average Rating</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-gray-600 text-sm font-medium">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Feature Cards */}
            <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="grid grid-cols-2 gap-8">
                {/* Study Materials Card */}
                <div className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm rounded-4xl p-10 border border-white/60 shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-6 w-20 h-20 mb-8 flex items-center justify-center shadow-lg">
                    <BookOpen className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Study Materials</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Premium resources for skill development</p>
                  <div className="text-center pt-4">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Resources</div>
                  </div>
                </div>

                {/* Job Opportunities Card */}
                <div className="bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-sm rounded-4xl p-10 border border-white/60 shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 transform hover:-translate-y-3 hover:-rotate-1 mt-12">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl p-6 w-20 h-20 mb-8 flex items-center justify-center shadow-lg">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Job Opportunities</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Connect with top companies</p>
                  <div className="text-center pt-4">
                    <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Success Rate</div>
                  </div>
                </div>

                {/* Career Growth Card */}
                <div className="bg-gradient-to-br from-white to-green-50/50 backdrop-blur-sm rounded-4xl p-10 border border-white/60 shadow-2xl hover:shadow-green-500/10 transition-all duration-700 transform hover:-translate-y-3 hover:-rotate-1 -mt-8">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-6 w-20 h-20 mb-8 flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Growth</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Expert guidance and mentorship</p>
                  <div className="text-center pt-4">
                    <div className="text-3xl font-bold text-green-600 mb-2">4.9</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Rating</div>
                  </div>
                </div>

                {/* Success Stories Card */}
                <div className="bg-gradient-to-br from-white to-orange-50/50 backdrop-blur-sm rounded-4xl p-10 border border-white/60 shadow-2xl hover:shadow-orange-500/10 transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1 mt-8">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-6 w-20 h-20 mb-8 flex items-center justify-center shadow-lg">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Learn from industry leaders</p>
                  <div className="text-center pt-4">
                    <div className="text-3xl font-bold text-orange-600 mb-2">5000+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Stories</div>
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
