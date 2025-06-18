
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Crown, Eye, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface StudyMaterialCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  downloadCount: number;
  rating: number;
  isPremium: boolean;
  price?: number;
  tags: string[];
  author: string;
  estimatedTime: string;
  thumbnail: string;
}

const StudyMaterialCard = ({
  id,
  title,
  description,
  category,
  level,
  downloadCount,
  rating,
  isPremium,
  price,
  tags,
  author,
  estimatedTime,
  thumbnail
}: StudyMaterialCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technology":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Business":
        return "bg-green-100 text-green-700 border-green-200";
      case "Design":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Marketing":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Personal Development":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Premium":
        return "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-white overflow-hidden h-full">
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-3 left-3">
          {isPremium ? (
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          ) : (
            <Badge className="bg-green-600 text-white shadow-lg">Free</Badge>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <Badge className={`${getCategoryColor(category)} shadow-lg`}>
            {category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-brand-red transition-colors">
            <Link to={`/study-material/${id}`}>
              {title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {level}
            </span>
            <span>{estimatedTime}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {downloadCount.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {rating}
            </span>
            {isPremium && price && (
              <span className="font-bold text-purple-600 ml-auto">
                ${price}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs bg-gray-50 hover:bg-gray-100"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="text-xs bg-gray-50 text-gray-500">
                +{tags.length - 2}
              </Badge>
            )}
          </div>

          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-500">By {author}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyMaterialCard;
