
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import StudyMaterialHeader from "./detail/StudyMaterialHeader";
import StudyMaterialActions from "./detail/StudyMaterialActions";
import StudyMaterialContent from "./detail/StudyMaterialContent";
import StudyMaterialSidebar from "./detail/StudyMaterialSidebar";

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
              <StudyMaterialHeader studyMaterial={studyMaterial} />
            </Card>

            {/* Actions */}
            <Card className="p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <StudyMaterialActions
                studyMaterial={studyMaterial}
                isSaved={isSaved}
                isBookmarked={isBookmarked}
                isPurchased={isPurchased}
                isProcessing={isProcessing}
                onSave={handleSave}
                onBookmark={handleBookmark}
                onShare={handleShare}
                onDownload={handleDownload}
                onPurchase={handlePurchase}
              />
            </Card>

            {/* Content */}
            <StudyMaterialContent
              studyMaterial={studyMaterial}
              isPurchased={isPurchased}
            />
          </div>

          {/* Sidebar */}
          <StudyMaterialSidebar studyMaterial={studyMaterial} />
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialDetailView;
