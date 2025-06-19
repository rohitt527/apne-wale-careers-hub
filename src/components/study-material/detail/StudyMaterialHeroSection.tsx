
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, BookOpen, User, Calendar, Clock, Star, Download, Play, Heart, Bookmark, Share } from "lucide-react";

interface StudyMaterialHeroSectionProps {
  material: {
    id: number;
    title: string;
    description: string;
    category: string;
    level: string;
    isPremium: boolean;
    author: string;
    publishDate: string;
    estimatedTime: string;
    rating: number;
    ratingCount: number;
  };
  onDownload: () => void;
  onLike: () => void;
  onBookmark: () => void;
  onShare: () => void;
}

const StudyMaterialHeroSection = ({ material, onDownload, onLike, onBookmark, onShare }: StudyMaterialHeroSectionProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technology":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Business":
        return "bg-green-100 text-green-700 border-green-200";
      case "Design":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Premium":
        return "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Badge className={`${getCategoryColor(material.category)} shadow-lg`}>
              {material.category}
            </Badge>
            {material.isPremium && (
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg">
                <Crown className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            )}
            <Badge className="bg-white/20 text-white border-white/30">
              <BookOpen className="w-3 h-3 mr-1" />
              {material.level}
            </Badge>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
            {material.title}
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            {material.description}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100 mb-8">
            <div className="flex items-center justify-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">By {material.author}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{new Date(material.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{material.estimatedTime}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">{material.rating} ({material.ratingCount})</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={onDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Read Online
            </Button>
            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={onLike}
              >
                <Heart className="w-4 h-4" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={onBookmark}
              >
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={onShare}
              >
                <Share className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialHeroSection;
