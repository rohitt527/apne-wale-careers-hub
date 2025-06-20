
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, BookOpen, TrendingUp, Sparkles, Zap, CheckCircle } from "lucide-react";
import Counter from "@/components/common/Counter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden flex items-center">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-100 shadow-sm">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-900">Transform Your Career Journey</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Accelerate Your
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Career Success
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Expert guidance, premium resources, and opportunities that matter. Join thousands of professionals advancing their careers with our proven platform.
                </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Expert Mentors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl">
                  <Link to="/services" className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105">
                  <Link to="/jobs">Explore Opportunities</Link>
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    <div className="text-3xl font-bold text-gray-900">
                      <Counter end={5000} duration={2000} />+
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Happy Clients</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <div className="text-3xl font-bold text-gray-900">4.9</div>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="grid grid-cols-2 gap-6">
                {/* Study Materials Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Study Materials</h3>
                  <p className="text-gray-600 text-sm mb-4">Premium resources for skill development</p>
                  <div className="text-center pt-2">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Resources</div>
                  </div>
                </div>

                {/* Job Opportunities Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 mt-8">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Job Opportunities</h3>
                  <p className="text-gray-600 text-sm mb-4">Connect with top companies</p>
                  <div className="text-center pt-2">
                    <div className="text-2xl font-bold text-purple-600">95%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Success Rate</div>
                  </div>
                </div>

                {/* Career Growth Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 -mt-4">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Career Growth</h3>
                  <p className="text-gray-600 text-sm mb-4">Expert guidance and mentorship</p>
                  <div className="text-center pt-2">
                    <div className="text-2xl font-bold text-green-600">4.9</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Rating</div>
                  </div>
                </div>

                {/* Success Stories Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 mt-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Success Stories</h3>
                  <p className="text-gray-600 text-sm mb-4">Learn from industry leaders</p>
                  <div className="text-center pt-2">
                    <div className="text-2xl font-bold text-orange-600">5000+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Stories</div>
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
