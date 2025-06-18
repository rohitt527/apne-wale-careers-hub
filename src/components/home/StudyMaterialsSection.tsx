
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import StudyMaterialCard from "@/components/common/StudyMaterialCard";

const StudyMaterialsSection = () => {
  const featuredStudyMaterials = [
    {
      id: 1,
      title: "The Ultimate Guide to React",
      description: "A comprehensive guide for React developers, covering everything from the basics to advanced topics.",
      category: "Technology",
      level: "Intermediate",
      downloadCount: 12000,
      rating: 4.7,
      isPremium: false,
      price: 0,
      tags: ["React", "JavaScript", "Frontend"],
      author: "John Doe",
      publishDate: "2023-03-15",
      estimatedTime: "6-8 hours",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      title: "Advanced Interview Mastery Guide",
      description: "Comprehensive guide covering advanced interview techniques and salary negotiation strategies.",
      category: "Premium",
      level: "Advanced",
      downloadCount: 5000,
      rating: 4.9,
      isPremium: true,
      price: 49.99,
      originalPrice: 99.99,
      tags: ["Interview", "Career Growth"],
      author: "Career Experts",
      publishDate: "2024-01-15",
      estimatedTime: "8-10 hours",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Business Strategy Essentials",
      description: "Essential guide for business professionals covering key strategic decision-making frameworks.",
      category: "Business",
      level: "Intermediate",
      downloadCount: 9800,
      rating: 4.5,
      isPremium: false,
      price: 0,
      tags: ["Business", "Strategy", "Management"],
      author: "David Johnson",
      publishDate: "2023-07-01",
      estimatedTime: "5-7 hours",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            Study Materials
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium Learning Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive study materials to boost your skills and knowledge
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredStudyMaterials.map((material, index) => (
            <div key={material.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <StudyMaterialCard {...material} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3">
            <Link to="/study-material" className="flex items-center gap-2">
              Browse All Materials
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterialsSection;
