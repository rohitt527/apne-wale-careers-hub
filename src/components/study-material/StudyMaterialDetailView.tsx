
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, Star, Clock, User, Calendar, Tag, Crown, BookOpen, TrendingUp, Users, Award } from "lucide-react";
import StudyMaterialHeader from "./detail/StudyMaterialHeader";
import StudyMaterialActions from "./detail/StudyMaterialActions";
import StudyMaterialContent from "./detail/StudyMaterialContent";
import StudyMaterialSidebar from "./detail/StudyMaterialSidebar";
import RelatedMaterialsSection from "./detail/RelatedMaterialsSection";

const StudyMaterialDetailView = () => {
  const { id } = useParams();

  // Mock data - in real app, this would come from an API
  const material = {
    id: parseInt(id || "1"),
    title: "The Ultimate Guide to React",
    description: "A comprehensive guide for React developers, covering everything from the basics to advanced topics including hooks, context, performance optimization, and modern React patterns.",
    category: "Technology",
    level: "Intermediate",
    downloadCount: 12000,
    rating: 4.7,
    ratingCount: 324,
    isPremium: false,
    price: 0,
    tags: ["React", "JavaScript", "Frontend", "Hooks", "Performance"],
    author: "John Doe",
    publishDate: "2023-03-15",
    estimatedTime: "6-8 hours",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    content: "This comprehensive guide covers React from fundamentals to advanced concepts...",
    tableOfContents: [
      "Introduction to React",
      "Component Architecture",
      "State Management",
      "Hooks Deep Dive",
      "Performance Optimization",
      "Testing Strategies"
    ]
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
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
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {material.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-6 leading-relaxed max-w-3xl">
              {material.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {material.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(material.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{material.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{material.rating} ({material.ratingCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
                <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3">
                  Preview Content
                </Button>
              </div>

              {/* Statistics Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-blue-900 mb-1">
                      {material.downloadCount.toLocaleString()}
                    </div>
                    <div className="text-sm text-blue-700">Downloads</div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                  <CardContent className="p-6 text-center">
                    <Star className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-green-900 mb-1">
                      {material.rating}
                    </div>
                    <div className="text-sm text-green-700">Average Rating</div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-purple-900 mb-1">
                      {material.ratingCount}
                    </div>
                    <div className="text-sm text-purple-700">Reviews</div>
                  </CardContent>
                </Card>
              </div>

              {/* Related Materials Section */}
              <RelatedMaterialsSection />

              {/* Content Preview */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {material.tableOfContents.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {material.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Material Info Card */}
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video">
                    <img
                      src={material.thumbnail}
                      alt={material.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Material Details</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>Level:</span>
                            <span className="font-medium">{material.level}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">{material.estimatedTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Format:</span>
                            <span className="font-medium">PDF + Video</span>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Author</h4>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {material.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{material.author}</p>
                            <p className="text-sm text-gray-600">Expert Instructor</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Add to Reading List
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Star className="w-4 h-4 mr-2" />
                        Rate This Material
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyMaterialDetailView;
