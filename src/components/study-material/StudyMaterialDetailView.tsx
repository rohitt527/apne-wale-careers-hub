
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, Star, Clock, User, Calendar, Tag, Crown, BookOpen, TrendingUp, Users, Award, Play, Share, Bookmark, Heart } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
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
              
              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                {material.title}
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {material.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">By {material.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{new Date(material.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{material.estimatedTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{material.rating} ({material.ratingCount})</span>
                </div>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={material.thumbnail}
                  alt={material.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button size="lg" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30">
                        <Play className="w-5 h-5 mr-2" />
                        Preview
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read Online
                </Button>
              </div>

              {/* Enhanced Statistics Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-black text-blue-900 mb-2">
                      {material.downloadCount.toLocaleString()}
                    </div>
                    <div className="text-sm font-medium text-blue-700">Total Downloads</div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-black text-green-900 mb-2">
                      {material.rating}
                    </div>
                    <div className="text-sm font-medium text-green-700">Average Rating</div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-black text-purple-900 mb-2">
                      {material.ratingCount}
                    </div>
                    <div className="text-sm font-medium text-purple-700">Student Reviews</div>
                  </CardContent>
                </Card>
              </div>

              {/* Related Materials Section */}
              <RelatedMaterialsSection />

              {/* Content Preview */}
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <Award className="w-8 h-8 text-blue-600" />
                    What You'll Master
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {material.tableOfContents.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-300">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Tag className="w-6 h-6 text-blue-600" />
                  Topics Covered
                </h3>
                <div className="flex flex-wrap gap-3">
                  {material.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="px-4 py-2 bg-white hover:bg-blue-50 text-gray-700 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Material Info Card */}
                <Card className="border-0 shadow-xl overflow-hidden bg-white">
                  <div className="aspect-video relative">
                    <img
                      src={material.thumbnail}
                      alt={material.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Material Details</h3>
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex justify-between items-center">
                            <span>Level:</span>
                            <Badge className="bg-blue-100 text-blue-700">{material.level}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-semibold">{material.estimatedTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Format:</span>
                            <span className="font-semibold">PDF + Interactive</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Downloads:</span>
                            <span className="font-semibold">{material.downloadCount.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4">Author</h4>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {material.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{material.author}</p>
                            <p className="text-sm text-gray-600">Expert Instructor</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-0 shadow-xl bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start h-12 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
                        <BookOpen className="w-5 h-5 mr-3" />
                        Add to Reading List
                      </Button>
                      <Button variant="outline" className="w-full justify-start h-12 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
                        <Star className="w-5 h-5 mr-3" />
                        Rate This Material
                      </Button>
                      <Button variant="outline" className="w-full justify-start h-12 bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
                        <Download className="w-5 h-5 mr-3" />
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
