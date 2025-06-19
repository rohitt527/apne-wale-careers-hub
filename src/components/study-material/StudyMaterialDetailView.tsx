
import { useParams } from "react-router-dom";
import StudyMaterialHeroSection from "./detail/StudyMaterialHeroSection";
import StudyMaterialStats from "./detail/StudyMaterialStats";
import StudyMaterialMainContent from "./detail/StudyMaterialMainContent";
import StudyMaterialInfoSidebar from "./detail/StudyMaterialInfoSidebar";
import StudyMaterialTagsSection from "./detail/StudyMaterialTagsSection";
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

  const handleDownload = () => {
    console.log("Downloading material:", material.title);
    // Add download functionality here
  };

  const handleBookmark = () => {
    console.log("Bookmarking material:", material.title);
    // Add bookmark functionality here
  };

  const handleShare = () => {
    console.log("Sharing material:", material.title);
    // Add share functionality here
  };

  const handleLike = () => {
    console.log("Liking material:", material.title);
    // Add like functionality here
  };

  const handleRating = () => {
    console.log("Rating material:", material.title);
    // Add rating functionality here
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
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
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

      {/* Related Materials Section - Now appears after main content */}
      <div className="container mx-auto px-4">
        <RelatedMaterialsSection />
      </div>
    </div>
  );
};

export default StudyMaterialDetailView;
