
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, BookOpen, User, Calendar, Clock, Star, Download, Heart, Bookmark, Share, Play } from "lucide-react";

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
    thumbnail: string;
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
    <section className="relative bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <Badge className={`${getCategoryColor(material.category)} text-sm px-4 py-2 font-medium`}>
                {material.category}
              </Badge>
              {material.isPremium && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm px-4 py-2 font-medium">
                  <Crown className="w-4 h-4 mr-2" />
                  Premium
                </Badge>
              )}
              <Badge className="bg-gray-100 text-gray-700 text-sm px-4 py-2 font-medium">
                <BookOpen className="w-4 h-4 mr-2" />
                {material.level}
              </Badge>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {material.title}
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {material.description}
            </p>
            
            {/* Meta Information */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-gray-100">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
                  <User className="w-5 h-5" />
                </div>
                <p className="text-sm font-medium text-gray-900">{material.author}</p>
                <p className="text-xs text-gray-500">Author</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-sm font-medium text-gray-900">{new Date(material.publishDate).toLocaleDateString()}</p>
                <p className="text-xs text-gray-500">Published</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-sm font-medium text-gray-900">{material.estimatedTime}</p>
                <p className="text-xs text-gray-500">Duration</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600 mb-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-sm font-medium text-gray-900">{material.rating}</p>
                <p className="text-xs text-gray-500">({material.ratingCount} reviews)</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  onClick={onDownload}
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Play className="w-5 h-5 mr-3" />
                  Preview
                </Button>
              </div>
              
              {/* Social Actions */}
              <div className="flex items-center gap-3">
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-gray-600 hover:text-red-500 hover:bg-red-50 p-3 rounded-full transition-all duration-300"
                  onClick={onLike}
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-gray-600 hover:text-blue-500 hover:bg-blue-50 p-3 rounded-full transition-all duration-300"
                  onClick={onBookmark}
                >
                  <Bookmark className="w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost" 
                  className="text-gray-600 hover:text-green-500 hover:bg-green-50 p-3 rounded-full transition-all duration-300"
                  onClick={onShare}
                >
                  <Share className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={material.thumbnail}
                alt={material.title}
                className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 shadow-lg">
                  <Play className="w-6 h-6 mr-3" />
                  Preview Content
                </Button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialHeroSection;
