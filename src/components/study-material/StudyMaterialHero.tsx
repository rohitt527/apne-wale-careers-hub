
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, Code, Brain, Users } from "lucide-react";

const StudyMaterialHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-5" />
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container-custom text-center relative z-10">
        <div className="animate-fade-in max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium Study Materials
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Master Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Access comprehensive study materials covering coding fundamentals, computer science concepts, 
            interview preparation, and career development. Everything you need to excel in your tech journey.
          </p>
          
          {/* Material Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Coding & Programming</h3>
              <p className="text-sm text-gray-600">React, JavaScript, Python, algorithms & data structures</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <Brain className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">CS Fundamentals</h3>
              <p className="text-sm text-gray-600">System design, databases, networking & computer architecture</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Interview Prep</h3>
              <p className="text-sm text-gray-600">Technical interviews, behavioral questions & salary negotiation</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore All Materials
            </Button>
            <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg">
              Browse Premium Content
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-12 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Study Materials</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialHero;
