
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Star, Download, Crown, Target, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StudyMaterialsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: materialsRef, isVisible: materialsVisible } = useScrollAnimation();

  const featuredStudyMaterials = [
    {
      id: 1,
      title: "Complete React Mastery Guide",
      description: "Comprehensive guide covering React fundamentals, advanced patterns, and best practices for modern web development.",
      category: "Technology",
      level: "Intermediate",
      downloadCount: 15000,
      rating: 4.8,
      isPremium: false,
      price: 0,
      tags: ["React", "JavaScript", "Frontend"],
      author: "Tech Experts",
      estimatedTime: "8-10 hours",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Advanced Interview Mastery",
      description: "Premium guide covering advanced interview techniques, system design, and salary negotiation strategies.",
      category: "Premium",
      level: "Advanced",
      downloadCount: 8000,
      rating: 4.9,
      isPremium: true,
      price: 49.99,
      originalPrice: 99.99,
      tags: ["Interview", "Career Growth"],
      author: "Career Mentors",
      estimatedTime: "12-15 hours",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Business Strategy Essentials",
      description: "Essential frameworks and strategies for business professionals looking to advance their strategic thinking skills.",
      category: "Business",
      level: "Intermediate",
      downloadCount: 12000,
      rating: 4.7,
      isPremium: false,
      price: 0,
      tags: ["Business", "Strategy", "Leadership"],
      author: "Business Leaders",
      estimatedTime: "6-8 hours",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-green-100/40 to-blue-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-green-100/80 shadow-lg">
            <BookOpen className="w-5 h-5" />
            <Sparkles className="w-4 h-4 animate-pulse" />
            Premium Learning Resources
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Expert-Curated
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Study Materials
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Access comprehensive study materials designed by industry experts to accelerate your learning journey
          </p>
          
          {/* Inline stats without boxes */}
          <div className="flex flex-wrap justify-center items-center gap-12 mt-16">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600 font-medium">Study Materials</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Download className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">50k+</div>
                <div className="text-gray-600 font-medium">Downloads</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          ref={materialsRef}
          className="grid lg:grid-cols-3 gap-10 mb-20"
        >
          {featuredStudyMaterials.map((material, index) => (
            <div 
              key={material.id} 
              className={`group bg-white rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 overflow-hidden transform hover:-translate-y-2 ${
                materialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: materialsVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={material.thumbnail} 
                  alt={material.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute top-6 left-6">
                  {material.isPremium ? (
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
                      <Crown className="w-4 h-4" />
                      Premium
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Free Access
                    </div>
                  )}
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-lg">
                  {material.level}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-500 line-clamp-2">
                  {material.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{material.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>{material.downloadCount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{material.rating}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {material.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {material.isPremium && material.price && (
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-green-600">${material.price}</span>
                    {material.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">${material.originalPrice}</span>
                    )}
                  </div>
                )}
                
                <Button asChild className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl py-6 text-lg font-semibold group-hover:scale-105">
                  <Link to={`/study-material/${material.id}`} className="flex items-center justify-center gap-3">
                    {material.isPremium ? 'View Details' : 'Download Free'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-16 py-8 text-xl font-semibold shadow-xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 rounded-2xl">
            <Link to="/study-material" className="flex items-center gap-4">
              Browse All Materials
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialsSection;
