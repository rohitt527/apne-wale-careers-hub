
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Star, Lock, Zap } from "lucide-react";

interface Material {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  downloadCount: number;
  rating: number;
  isPremium: boolean;
  price: number;
  originalPrice?: number;
  tags: string[];
  author: string;
  publishDate: string;
  estimatedTime: string;
  thumbnail: string;
  featured?: boolean;
}

interface PremiumContentSectionProps {
  materials: Material[];
}

const PremiumContentSection = ({ materials }: PremiumContentSectionProps) => {
  if (materials.length === 0) return null;

  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            <Crown className="inline w-8 h-8 mr-2 text-yellow-500" />
            Premium Content
          </h2>
          <p className="text-gray-600">Unlock advanced materials for accelerated learning</p>
        </div>
        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2">
          <Zap className="w-4 h-4 mr-1" />
          Limited Time Offer
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {materials.map((material, index) => (
          <Card
            key={material.id}
            className="group relative overflow-hidden bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Premium Badge */}
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <Crown className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            </div>

            {/* Featured Badge */}
            {material.featured && (
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black animate-pulse">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}

            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={material.thumbnail}
                alt={material.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{material.rating}</span>
                  <span>•</span>
                  <span>{material.downloadCount.toLocaleString()} students</span>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {material.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {material.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-purple-200 text-purple-600">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-purple-600">
                      ${material.price}
                    </span>
                    {material.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${material.originalPrice}
                      </span>
                    )}
                  </div>
                  <Badge className="bg-red-100 text-red-700 border-red-200">
                    {Math.round((1 - material.price / material.originalPrice!) * 100)}% OFF
                  </Badge>
                </div>

                {/* Action Button */}
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 group-hover:shadow-lg transition-all duration-300"
                >
                  <Link to={`/premium-content?id=${material.id}`}>
                    <Lock className="w-4 h-4 mr-2" />
                    Unlock Premium Content
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PremiumContentSection;
