
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, BookOpen, TrendingUp } from "lucide-react";
import Counter from "@/components/common/Counter";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 animate-fade-in">
            Accelerate Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block mt-2">
              Career Journey
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
            Transform your professional future with expert guidance, premium resources, and opportunities that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl">
              <Link to="/services" className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
              <Link to="/jobs">Explore Opportunities</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="container-custom mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in" style={{ animationDelay: "800ms" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">
                <Counter end={5000} duration={2000} />+
              </div>
              <div className="text-gray-300 text-sm">Happy Clients</div>
            </div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "900ms" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">4.9</div>
              <div className="text-gray-300 text-sm">Average Rating</div>
            </div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "1000ms" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">
                <Counter end={500} duration={2000} />+
              </div>
              <div className="text-gray-300 text-sm">Study Materials</div>
            </div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "1100ms" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-2">
                <Counter end={95} duration={2000} />%
              </div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
