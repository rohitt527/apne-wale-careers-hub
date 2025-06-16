
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Download, 
  Star, 
  Clock, 
  FileText, 
  Eye, 
  Heart,
  Share2,
  Bookmark,
  Users,
  ThumbsUp,
  MessageCircle,
  Play,
  CheckCircle,
  Award
} from "lucide-react";

// Mock data - would come from API in real app
const studyMaterial = {
  id: 1,
  title: "System Design Interview Guide",
  date: "May 1, 2024",
  format: "PDF",
  size: "6.1 MB",
  type: "Premium",
  category: "system-design",
  downloads: 2547,
  rating: 4.8,
  reviews: 234,
  views: 8543,
  author: "Tech Interview Pro",
  lastUpdated: "April 30, 2024",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  description: `Master system design interviews with this comprehensive guide that covers everything from basic concepts to advanced architectural patterns. This guide has been carefully crafted based on real interview experiences from top tech companies including Google, Amazon, Facebook, Microsoft, and Netflix.

The guide includes detailed explanations of scalability concepts, distributed system design patterns, database design principles, caching strategies, load balancing techniques, and microservices architecture. Each section includes practical examples and real-world case studies.`,
  contents: [
    "Introduction to System Design",
    "Scalability Fundamentals", 
    "Database Design & Selection",
    "Caching Strategies",
    "Load Balancing",
    "Microservices Architecture",
    "Real-world Case Studies",
    "Practice Problems",
    "Interview Tips & Strategies"
  ],
  features: [
    "100+ pages of comprehensive content",
    "20+ real system design examples", 
    "Step-by-step problem-solving approach",
    "Industry best practices",
    "Updated for 2024 interview trends"
  ],
  prerequisites: [
    "Basic understanding of web technologies",
    "Familiarity with databases",
    "Knowledge of basic networking concepts"
  ]
};

const relatedMaterials = [
  {
    id: 2,
    title: "Behavioral Interview Questions",
    type: "Free",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&q=80",
    rating: 4.6
  },
  {
    id: 3,
    title: "Technical Interview Preparation", 
    type: "Premium",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80",
    rating: 4.9
  },
  {
    id: 5,
    title: "Advanced System Architecture",
    type: "Premium", 
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80",
    rating: 4.7
  }
];

const StudyMaterialDetail: React.FC = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-custom py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 animate-fade-in">
            <Link to="/study-material" className="flex items-center gap-2 text-gray-600 hover:text-brand-red transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Study Materials
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <Card className="overflow-hidden shadow-xl animate-fade-in">
                <div className="relative h-64 md:h-80">
                  <img
                    src={studyMaterial.image}
                    alt={studyMaterial.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {studyMaterial.type === "Premium" ? (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
                          <Star className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      ) : (
                        <Badge className="bg-green-600">Free</Badge>
                      )}
                      <span className="text-sm opacity-90">{studyMaterial.category}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{studyMaterial.title}</h1>
                    <div className="flex items-center gap-4 text-sm opacity-90">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {studyMaterial.views.toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {studyMaterial.downloads.toLocaleString()} downloads
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {studyMaterial.rating} ({studyMaterial.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Actions */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsLiked(!isLiked)}
                      className={isLiked ? "text-red-500 border-red-500" : ""}
                    >
                      <Heart className={`w-4 h-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                      {isLiked ? "Liked" : "Like"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={isBookmarked ? "text-blue-500 border-blue-500" : ""}
                    >
                      <Bookmark className={`w-4 h-4 mr-1 ${isBookmarked ? "fill-current" : ""}`} />
                      {isBookmarked ? "Saved" : "Save"}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                  
                  <div className="flex gap-2">
                    {studyMaterial.type === "Free" ? (
                      <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                    ) : (
                      <>
                        <Button variant="outline">
                          <Play className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black">
                          <Star className="w-4 h-4 mr-2" />
                          Unlock Premium - $9.99
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>

              {/* Description */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-brand-red" />
                    About This Material
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                    {studyMaterial.description}
                  </p>
                </CardContent>
              </Card>

              {/* Contents */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {studyMaterial.contents.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: "800ms" }}>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-500" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3">
                    {studyMaterial.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Material Info */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Material Details</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Format:</span>
                    <span className="font-medium">{studyMaterial.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Size:</span>
                    <span className="font-medium">{studyMaterial.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Author:</span>
                    <span className="font-medium">{studyMaterial.author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Updated:</span>
                    <span className="font-medium">{studyMaterial.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Downloads:</span>
                    <span className="font-medium">{studyMaterial.downloads.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Prerequisites</CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-2">
                    {studyMaterial.prerequisites.map((prereq, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-red rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{prereq}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Related Materials */}
              <Card className="p-6 animate-fade-in" style={{ animationDelay: "700ms" }}>
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Related Materials</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  {relatedMaterials.map((material) => (
                    <Link
                      key={material.id}
                      to={`/study-material/${material.id}`}
                      className="block group"
                    >
                      <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-brand-red transition-colors">
                        <img
                          src={material.image}
                          alt={material.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm group-hover:text-brand-red transition-colors line-clamp-2">
                            {material.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge 
                              variant={material.type === "Premium" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {material.type}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              {material.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudyMaterialDetail;
