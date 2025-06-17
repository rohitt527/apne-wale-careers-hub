
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Download, 
  Star, 
  Clock, 
  FileText, 
  Eye, 
  Save,
  Share,
  Bookmark,
  Users,
  Play,
  CheckCircle,
  Award,
  Crown,
  Lock,
  CreditCard
} from "lucide-react";

const StudyMaterialDetailView: React.FC = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isSaved, setIsSaved] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock data - in real app this would come from API based on id
  const studyMaterial = {
    id: parseInt(id || "1"),
    title: id === "1" ? "The Ultimate Guide to React" : id === "8" ? "Advanced Interview Mastery Guide" : "System Design Interview Guide",
    description: id === "1" 
      ? "A comprehensive guide for React developers, covering everything from the basics to advanced topics. This guide includes practical examples, best practices, and real-world applications that will help you master React development."
      : id === "8"
      ? "Comprehensive guide covering advanced interview techniques, salary negotiation, and career advancement strategies used by top professionals. Master the art of interviewing and land your dream job with confidence."
      : "Master system design interviews with this comprehensive guide that covers everything from basic concepts to advanced architectural patterns.",
    category: id === "1" ? "Technology" : "Premium",
    level: id === "1" ? "Intermediate" : "Advanced",
    downloadCount: id === "1" ? 12000 : 5000,
    rating: id === "1" ? 4.7 : 4.9,
    isPremium: id !== "1",
    price: id === "1" ? 0 : 49.99,
    originalPrice: id === "1" ? 0 : 99.99,
    author: id === "1" ? "John Doe" : "Career Experts",
    publishDate: id === "1" ? "2023-03-15" : "2024-01-15",
    estimatedTime: id === "1" ? "6-8 hours" : "8-10 hours",
    thumbnail: id === "1" 
      ? "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
      : "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    content: {
      overview: id === "1" 
        ? "This comprehensive React guide covers everything from basic concepts to advanced patterns. You'll learn about components, hooks, state management, performance optimization, and modern React development practices."
        : "This premium guide contains proven strategies that have helped thousands of professionals land their dream jobs and negotiate better salaries. Learn from industry experts and master the interview process.",
      chapters: id === "1" 
        ? [
          "Introduction to React",
          "Components and JSX",
          "Hooks and State Management",
          "Advanced Patterns",
          "Performance Optimization",
          "Testing Best Practices",
          "Real-world Projects"
        ]
        : [
          "Interview Preparation Strategy",
          "Technical Interview Mastery",
          "Behavioral Interview Excellence",
          "Salary Negotiation Tactics",
          "Career Advancement Planning",
          "Industry-Specific Guidance",
          "Follow-up and Networking"
        ],
      features: id === "1"
        ? [
          "150+ pages of comprehensive content",
          "50+ code examples and exercises",
          "Real-world project tutorials",
          "Best practices and patterns",
          "Performance optimization techniques"
        ]
        : [
          "100+ Advanced Interview Questions & Answers",
          "Salary Negotiation Scripts & Strategies", 
          "Industry-Specific Interview Preparation",
          "Mock Interview Video Examples",
          "Career Advancement Roadmap",
          "Lifetime Access & Updates"
        ]
    }
  };

  // Check if content is purchased (mock check)
  useEffect(() => {
    if (!studyMaterial.isPremium) {
      setIsPurchased(true);
    } else {
      const purchased = localStorage.getItem(`purchased_${id}`);
      setIsPurchased(purchased === "true");
    }
  }, [id, studyMaterial.isPremium]);

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Removed from saved" : "Saved successfully",
      description: isSaved 
        ? `"${studyMaterial.title}" has been removed from your saved items.`
        : `"${studyMaterial.title}" has been added to your saved items.`,
    });
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Bookmark removed" : "Bookmarked",
      description: isBookmarked 
        ? "Removed from your bookmarks."
        : "Added to your bookmarks for quick access.",
    });
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: studyMaterial.title,
        text: studyMaterial.description,
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

  const handlePurchase = async () => {
    setIsProcessing(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      localStorage.setItem(`purchased_${id}`, "true");
      setIsPurchased(true);
      
      toast({
        title: "Purchase Successful!",
        description: "You now have lifetime access to this premium content.",
      });
    } catch (error) {
      toast({
        title: "Purchase Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#'; // In real app, this would be the actual PDF URL
    link.download = `${studyMaterial.title}.pdf`;
    link.click();
    
    toast({
      title: "Download Started",
      description: "Your study material is being downloaded.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50">
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 animate-fade-in">
          <Link to="/study-material" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
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
                  src={studyMaterial.thumbnail}
                  alt={studyMaterial.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    {studyMaterial.isPremium ? (
                      <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                        <Crown className="w-3 h-3 mr-1" />
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
                      {(studyMaterial.downloadCount * 3).toLocaleString()} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {studyMaterial.downloadCount.toLocaleString()} downloads
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {studyMaterial.rating} rating
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
                    onClick={handleSave}
                    className={isSaved ? "text-purple-600 border-purple-500" : ""}
                  >
                    <Save className={`w-4 h-4 mr-1 ${isSaved ? "fill-current" : ""}`} />
                    {isSaved ? "Saved" : "Save"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleBookmark}
                    className={isBookmarked ? "text-blue-500 border-blue-500" : ""}
                  >
                    <Bookmark className={`w-4 h-4 mr-1 ${isBookmarked ? "fill-current" : ""}`} />
                    {isBookmarked ? "Bookmarked" : "Bookmark"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
                
                <div className="flex gap-2">
                  {!studyMaterial.isPremium || isPurchased ? (
                    <Button 
                      onClick={handleDownload}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline">
                        <Play className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button 
                        onClick={handlePurchase}
                        disabled={isProcessing}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        {isProcessing ? (
                          "Processing..."
                        ) : (
                          <>
                            <CreditCard className="w-4 h-4 mr-2" />
                            Purchase - ${studyMaterial.price}
                          </>
                        )}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>

            {/* Content Overview */}
            <Card className="p-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  About This Material
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {studyMaterial.content.overview}
                </p>
                
                {(!studyMaterial.isPremium || isPurchased) && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                      <CheckCircle className="w-5 h-5" />
                      Full Content Available
                    </div>
                    <p className="text-green-600 text-sm">
                      You have full access to this content. Download the PDF to get started!
                    </p>
                  </div>
                )}
                
                {studyMaterial.isPremium && !isPurchased && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-purple-700 font-medium mb-2">
                      <Lock className="w-5 h-5" />
                      Premium Content
                    </div>
                    <p className="text-purple-600 text-sm">
                      Purchase this premium content to unlock the full material and download the PDF.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Content Chapters */}
            <Card className="p-6 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {studyMaterial.content.chapters.map((chapter, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{chapter}</span>
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
                  {studyMaterial.content.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
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
                  <span className="text-gray-600">Format:</span>
                  <span className="font-medium">PDF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-medium">{studyMaterial.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Author:</span>
                  <span className="font-medium">{studyMaterial.author}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Updated:</span>
                  <span className="font-medium">{studyMaterial.publishDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Est. Time:</span>
                  <span className="font-medium">{studyMaterial.estimatedTime}</span>
                </div>
                {studyMaterial.isPremium && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <div className="text-right">
                      <span className="font-bold text-purple-600">${studyMaterial.price}</span>
                      {studyMaterial.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          ${studyMaterial.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="p-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <CardHeader className="px-0 pt-0">
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Students
                  </span>
                  <span className="font-medium">{studyMaterial.downloadCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Rating
                  </span>
                  <span className="font-medium">{studyMaterial.rating}/5.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Duration
                  </span>
                  <span className="font-medium">{studyMaterial.estimatedTime}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialDetailView;
