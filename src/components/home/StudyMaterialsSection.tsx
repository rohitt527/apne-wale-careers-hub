
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Star, Download, Crown, Target, TrendingUp } from "lucide-react";
import StudyMaterialCard from "@/components/common/StudyMaterialCard";

const StudyMaterialsSection = () => {
  const featuredStudyMaterials = [
    {
      id: 1,
      title: "The Ultimate Guide to React",
      description: "A comprehensive guide for React developers, covering everything from the basics to advanced topics.",
      category: "Technology",
      level: "Intermediate",
      downloadCount: 12000,
      rating: 4.7,
      isPremium: false,
      price: 0,
      tags: ["React", "JavaScript", "Frontend"],
      author: "John Doe",
      publishDate: "2023-03-15",
      estimatedTime: "6-8 hours",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      title: "Advanced Interview Mastery Guide",
      description: "Comprehensive guide covering advanced interview techniques and salary negotiation strategies.",
      category: "Premium",
      level: "Advanced",
      downloadCount: 5000,
      rating: 4.9,
      isPremium: true,
      price: 49.99,
      originalPrice: 99.99,
      tags: ["Interview", "Career Growth"],
      author: "Career Experts",
      publishDate: "2024-01-15",
      estimatedTime: "8-10 hours",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Business Strategy Essentials",
      description: "Essential guide for business professionals covering key strategic decision-making frameworks.",
      category: "Business",
      level: "Intermediate",
      downloadCount: 9800,
      rating: 4.5,
      isPremium: false,
      price: 0,
      tags: ["Business", "Strategy", "Management"],
      author: "David Johnson",
      publishDate: "2023-07-01",
      estimatedTime: "5-7 hours",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-green-100/50 to-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 text-green-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-green-200">
            <BookOpen className="w-5 h-5" />
            <Target className="w-4 h-4 animate-pulse" />
            Study Materials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium Learning
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access comprehensive study materials to boost your skills and knowledge. From free resources to premium guides.
          </p>
          
          {/* Study Material Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-green-600" />
                <div className="text-3xl font-bold text-green-600">500+</div>
              </div>
              <div className="text-gray-600 text-sm">Study Materials</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Download className="w-6 h-6 text-blue-600" />
                <div className="text-3xl font-bold text-blue-600">50k+</div>
              </div>
              <div className="text-gray-600 text-sm">Downloads</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-yellow-600" />
                <div className="text-3xl font-bold text-yellow-600">4.9</div>
              </div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredStudyMaterials.map((material, index) => (
            <div 
              key={material.id} 
              className="animate-fade-in transform transition-all duration-500 hover:scale-105" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={material.thumbnail} 
                    alt={material.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    {material.isPremium ? (
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Crown className="w-3 h-3" />
                        Premium
                      </div>
                    ) : (
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Free
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                    {material.level}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{material.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {material.isPremium && material.price && (
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-green-600">${material.price}</span>
                      {material.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">${material.originalPrice}</span>
                      )}
                    </div>
                  )}
                  
                  <Button asChild className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                    <Link to={`/study-material/${material.id}`} className="flex items-center justify-center gap-2">
                      {material.isPremium ? 'View Details' : 'Download Free'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{ animationDelay: "450ms" }}>
          <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl">
            <Link to="/study-material" className="flex items-center gap-3">
              Browse All Materials
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialsSection;
