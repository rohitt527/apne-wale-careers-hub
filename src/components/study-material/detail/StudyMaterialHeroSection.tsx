
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, BookOpen, User, Calendar, Clock, Star, Download, Heart, Bookmark, Share } from "lucide-react";

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
    <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center">
          {/* Category & Premium Badges */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Badge className={`${getCategoryColor(material.category)} shadow-lg text-sm px-4 py-2`}>
              {material.category}
            </Badge>
            {material.isPremium && (
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg text-sm px-4 py-2">
                <Crown className="w-4 h-4 mr-2" />
                Premium
              </Badge>
            )}
            <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              {material.level}
            </Badge>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
            {material.title}
          </h1>
          
          {/* Description */}
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto">
            {material.description}
          </p>
          
          {/* Meta Information */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-100 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">By {material.author}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">{new Date(material.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">{material.estimatedTime}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{material.rating} ({material.ratingCount})</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={onDownload}
              >
                <Download className="w-5 h-5 mr-3" />
                Download Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <BookOpen className="w-5 h-5 mr-3" />
                Read Online
              </Button>
            </div>
            
            {/* Social Actions */}
            <div className="flex items-center gap-3">
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/20 p-3 rounded-full"
                onClick={onLike}
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/20 p-3 rounded-full"
                onClick={onBookmark}
              >
                <Bookmark className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/20 p-3 rounded-full"
                onClick={onShare}
              >
                <Share className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialHeroSection;
