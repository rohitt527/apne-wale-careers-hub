
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, Eye, Gift, CheckCircle, Save, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [savedItems, setSavedItems] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  if (materials.length === 0) return null;

  const handleSave = (materialId: number, materialTitle: string) => {
    const newSavedItems = new Set(savedItems);
    if (savedItems.has(materialId)) {
      newSavedItems.delete(materialId);
      toast({
        title: "Removed from saved",
        description: `"${materialTitle}" has been removed from your saved items.`,
      });
    } else {
      newSavedItems.add(materialId);
      toast({
        title: "Saved successfully",
        description: `"${materialTitle}" has been added to your saved items.`,
      });
    }
    setSavedItems(newSavedItems);
  };

  const handleShare = (material: Material) => {
    const shareUrl = `${window.location.origin}/study-material/${material.id}`;
    
    if (navigator.share) {
      navigator.share({
        title: material.title,
        text: material.description,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied",
        description: "Study material link has been copied to your clipboard.",
      });
    }
  };

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
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Link to={`/study-material/${material.id}`}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-green-200 hover:bg-green-50"
                      onClick={() => handleSave(material.id, material.title)}
                    >
                      <Save className={`w-4 h-4 mr-1 ${savedItems.has(material.id) ? 'fill-current text-green-600' : ''}`} />
                      {savedItems.has(material.id) ? 'Saved' : 'Save'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-green-200 hover:bg-green-50"
                      onClick={() => handleShare(material)}
                    >
                      <Share className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
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
