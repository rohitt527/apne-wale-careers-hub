
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Download, Crown, BookOpen, Eye, ArrowRight, Clock } from "lucide-react";
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
    <section className="my-16">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              Related Study Materials
            </h2>
            <p className="text-lg text-gray-600">Discover more resources to enhance your learning journey</p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center gap-2 border-2 border-blue-200 text-blue-700 hover:bg-blue-50">
            View All Materials
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {relatedMaterials.map((material) => (
          <Card key={material.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white overflow-hidden h-full">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={material.thumbnail}
                  alt={material.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute top-3 left-3">
                {material.isPremium ? (
                  <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs shadow-lg">
                    <Crown className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                ) : (
                  <Badge className="bg-green-600 text-white text-xs shadow-lg">Free</Badge>
                )}
              </div>
              <div className="absolute top-3 right-3">
                <Badge className={`${getCategoryColor(material.category)} text-xs shadow-lg`}>
                  {material.category}
                </Badge>
              </div>
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Button asChild size="sm" className="w-full bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white">
                  <Link to={`/study-material/${material.id}`}>
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Link>
                </Button>
              </div>
            </div>

            <CardHeader className="pb-3">
              <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                <Link to={`/study-material/${material.id}`}>
                  {material.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{material.description}</p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{material.level}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{material.estimatedTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4 text-green-500" />
                      <span className="font-medium text-gray-700">{material.downloadCount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-gray-700">{material.rating}</span>
                    </div>
                  </div>
                  {material.isPremium && material.price && (
                    <div className="text-right">
                      <span className="font-bold text-purple-600 text-lg">
                        ${material.price}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium"
                  >
                    <Link to={`/study-material/${material.id}`} className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-10 md:hidden">
        <Button variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50">
          View All Materials
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default RelatedMaterialsSection;
