
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, BookOpen, TrendingUp, Sparkles, Zap, CheckCircle, Calendar, Award, Play, Shield, Clock } from "lucide-react";
import Counter from "@/components/common/Counter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40 overflow-hidden flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-to-r from-indigo-400/20 via-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-blue-400/60 rounded-full animate-float"></div>
        <div className="absolute top-64 right-1/3 w-2 h-2 bg-purple-400/60 rounded-full animate-float delay-500"></div>
        <div className="absolute bottom-48 left-1/3 w-4 h-4 bg-indigo-400/60 rounded-full animate-float delay-1000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-100/80 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-gray-800">Trusted by 5000+ Professionals</span>
                </div>
                <Sparkles className="h-4 w-4 text-blue-600 animate-pulse" />
              </div>
              
              {/* Main heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] text-gray-900">
                  Transform Your
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2">
                    Career Journey
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
                  Join thousands of professionals who accelerated their careers with expert mentorship, premium resources, and personalized guidance.
                </p>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 py-4">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-gray-100/50">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-semibold text-gray-700">Expert Mentors</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-gray-100/50">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-semibold text-gray-700">Proven Results</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-gray-100/50">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-semibold text-gray-700">24/7 Support</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 rounded-2xl group">
                  <Link to="/services" className="flex items-center gap-3">
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-10 py-6 text-lg rounded-2xl transition-all duration-500 hover:scale-105 shadow-lg group">
                  <Link to="/book" className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Book Free Consultation
                  </Link>
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center group">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Users className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    <Counter end={5000} duration={2000} />+
                  </div>
                  <div className="text-gray-600 text-sm font-medium">Happy Clients</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center group">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Star className="w-6 h-6 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">4.9</div>
                  <div className="text-gray-600 text-sm font-medium">Average Rating</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center group">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Award className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
                  <div className="text-gray-600 text-sm font-medium">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Feature Cards */}
            <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="grid grid-cols-2 gap-6">
                {/* Study Materials Card */}
                <div className="bg-gradient-to-br from-white via-blue-50/30 to-white backdrop-blur-sm rounded-3xl p-8 border border-white/80 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1 group">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Study Materials</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">Premium resources crafted by industry experts</p>
                  <div className="text-center pt-3">
                    <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Resources</div>
                  </div>
                </div>

                {/* Job Opportunities Card */}
                <div className="bg-gradient-to-br from-white via-purple-50/30 to-white backdrop-blur-sm rounded-3xl p-8 border border-white/80 shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 transform hover:-translate-y-2 hover:-rotate-1 mt-8 group">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Job Opportunities</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">Connect with top-tier companies worldwide</p>
                  <div className="text-center pt-3">
                    <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Success Rate</div>
                  </div>
                </div>

                {/* Career Growth Card */}
                <div className="bg-gradient-to-br from-white via-green-50/30 to-white backdrop-blur-sm rounded-3xl p-8 border border-white/80 shadow-2xl hover:shadow-green-500/20 transition-all duration-700 transform hover:-translate-y-2 hover:-rotate-1 -mt-4 group">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Career Growth</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">Personalized mentorship and guidance</p>
                  <div className="text-center pt-3">
                    <div className="text-2xl font-bold text-green-600 mb-1">4.9</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Rating</div>
                  </div>
                </div>

                {/* Success Stories Card */}
                <div className="bg-gradient-to-br from-white via-orange-50/30 to-white backdrop-blur-sm rounded-3xl p-8 border border-white/80 shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1 mt-4 group">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 w-16 h-16 mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">Success Stories</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">Real achievements from our community</p>
                  <div className="text-center pt-3">
                    <div className="text-2xl font-bold text-orange-600 mb-1">5000+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Stories</div>
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
