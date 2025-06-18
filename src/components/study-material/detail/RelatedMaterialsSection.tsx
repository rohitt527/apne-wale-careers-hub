
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Crown, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface RelatedMaterial {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  downloadCount: number;
  isPremium: boolean;
  price?: number;
  thumbnail: string;
  estimatedTime: string;
}

const RelatedMaterialsSection = () => {
  const relatedMaterials: RelatedMaterial[] = [
    {
      id: 2,
      title: "Mastering JavaScript Algorithms",
      description: "Learn essential algorithms and data structures in JavaScript to improve your problem-solving skills.",
      category: "Technology",
      level: "Advanced",
      rating: 4.6,
      downloadCount: 8500,
      isPremium: false,
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
      estimatedTime: "10-12 hours"
    },
    {
      id: 4,
      title: "The Art of UI/UX Design",
      description: "Explore the principles of UI/UX design and learn how to create intuitive interfaces.",
      category: "Design",
      level: "Beginner",
      rating: 4.8,
      downloadCount: 11200,
      isPremium: false,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",
      estimatedTime: "4-6 hours"
    },
    {
      id: 8,
      title: "Advanced Interview Mastery Guide",
      description: "Comprehensive guide covering advanced interview techniques and salary negotiation strategies.",
      category: "Premium",
      level: "Advanced",
      rating: 4.9,
      downloadCount: 5000,
      isPremium: true,
      price: 49.99,
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
      estimatedTime: "8-10 hours"
    },
    {
      id: 3,
      title: "Business Strategy Essentials",
      description: "Essential guide for business professionals covering key strategic frameworks.",
      category: "Business",
      level: "Intermediate",
      rating: 4.5,
      downloadCount: 9800,
      isPremium: false,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      estimatedTime: "5-7 hours"
    }
  ];

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
    <section className="mt-12 mb-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Related Study Materials</h2>
        <p className="text-gray-600">Discover more resources to enhance your learning journey</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedMaterials.map((material) => (
          <Card key={material.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:-translate-y-1 bg-white overflow-hidden h-full">
            <div className="relative">
              <div className="aspect-video overflow-hidden">
                <img
                  src={material.thumbnail}
                  alt={material.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute top-2 left-2">
                {material.isPremium ? (
                  <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs">
                    <Crown className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                ) : (
                  <Badge className="bg-green-600 text-white text-xs">Free</Badge>
                )}
              </div>
              <div className="absolute top-2 right-2">
                <Badge className={`${getCategoryColor(material.category)} text-xs`}>
                  {material.category}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-2">
              <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                <Link to={`/study-material/${material.id}`}>
                  {material.title}
                </Link>
              </h3>
              <p className="text-xs text-gray-600 line-clamp-2">{material.description}</p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    {material.level}
                  </span>
                  <span>{material.estimatedTime}</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {material.downloadCount.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {material.rating}
                  </span>
                  {material.isPremium && material.price && (
                    <span className="font-semibold text-purple-600 ml-auto">
                      ${material.price}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedMaterialsSection;
