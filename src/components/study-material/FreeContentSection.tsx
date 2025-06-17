
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Eye, Gift, CheckCircle } from "lucide-react";

interface Material {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  downloadCount: number;
  rating: number;
  isPremium: boolean;
  tags: string[];
  thumbnail: string;
}

interface FreeContentSectionProps {
  materials: Material[];
  getCategoryColor: (category: string) => string;
}

const FreeContentSection = ({ materials, getCategoryColor }: FreeContentSectionProps) => {
  if (materials.length === 0) return null;

  return (
    <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            <Gift className="inline w-8 h-8 mr-2 text-green-500" />
            Free Content
          </h2>
          <p className="text-gray-600">High-quality materials available at no cost</p>
        </div>
        <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2">
          <CheckCircle className="w-4 h-4 mr-1" />
          Always Free
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {materials.map((material, index) => (
          <Card
            key={material.id}
            className="group bg-white hover:bg-gray-50 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Thumbnail */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={material.thumbnail}
                alt={material.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <Badge className="bg-green-600 text-white">
                  Free
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge 
                    variant="secondary" 
                    className={`${getCategoryColor(material.category)} text-xs`}
                  >
                    {material.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {material.level}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                  {material.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {material.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>{material.downloadCount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{material.rating}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {material.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    asChild
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Link to={`/study-material/${material.id}`}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-green-200 hover:bg-green-50"
                  >
                    <Link to={`/study-material/${material.id}`}>
                      <Eye className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FreeContentSection;
