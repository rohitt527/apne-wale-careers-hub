
import { useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import StudyMaterialHeroSection from "./detail/StudyMaterialHeroSection";
import StudyMaterialStats from "./detail/StudyMaterialStats";
import StudyMaterialMainContent from "./detail/StudyMaterialMainContent";
import StudyMaterialInfoSidebar from "./detail/StudyMaterialInfoSidebar";
import StudyMaterialTagsSection from "./detail/StudyMaterialTagsSection";
import RelatedMaterialsSection from "./detail/RelatedMaterialsSection";

const StudyMaterialDetailView = () => {
  const { id } = useParams();
  const { toast } = useToast();

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

  const handleDownload = () => {
    console.log("Downloading material:", material.title);
    toast({
      title: "Download Started",
      description: `${material.title} is being downloaded to your device.`,
      duration: 3000,
    });
    
    // Simulate download process
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Your study material is ready to use!",
        duration: 3000,
      });
    }, 2000);
  };

  const handleBookmark = () => {
    console.log("Bookmarking material:", material.title);
    toast({
      title: "Added to Reading List",
      description: `${material.title} has been saved to your reading list.`,
      duration: 3000,
    });
  };

  const handleShare = () => {
    console.log("Sharing material:", material.title);
    
    if (navigator.share) {
      navigator.share({
        title: material.title,
        text: material.description,
        url: window.location.href,
      }).then(() => {
        toast({
          title: "Shared Successfully",
          description: "Study material shared with others!",
          duration: 3000,
        });
      }).catch((error) => {
        console.log("Error sharing:", error);
        fallbackShare();
      });
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({
        title: "Link Copied",
        description: "Study material link copied to clipboard!",
        duration: 3000,
      });
    }).catch(() => {
      toast({
        title: "Share Failed",
        description: "Unable to share at this time. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    });
  };

  const handleLike = () => {
    console.log("Liking material:", material.title);
    toast({
      title: "Thanks for the feedback!",
      description: "Your like helps us recommend better content.",
      duration: 3000,
    });
  };

  const handleRating = () => {
    console.log("Rating material:", material.title);
    toast({
      title: "Rate This Material",
      description: "Your rating helps other learners find quality content.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <StudyMaterialHeroSection 
        material={material}
        onDownload={handleDownload}
        onLike={handleLike}
        onBookmark={handleBookmark}
        onShare={handleShare}
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Statistics Cards */}
              <StudyMaterialStats material={material} />

              {/* Main Content Area */}
              <StudyMaterialMainContent material={material} />

              {/* Tags */}
              <StudyMaterialTagsSection tags={material.tags} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <StudyMaterialInfoSidebar 
                material={material}
                onBookmark={handleBookmark}
                onRating={handleRating}
                onDownload={handleDownload}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Materials Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <RelatedMaterialsSection />
        </div>
      </section>
    </div>
  );
};

export default StudyMaterialDetailView;
