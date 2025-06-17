
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import StudyMaterialHero from "@/components/study-material/StudyMaterialHero";
import StudyMaterialFilters from "@/components/study-material/StudyMaterialFilters";
import PremiumContentSection from "@/components/study-material/PremiumContentSection";
import FreeContentSection from "@/components/study-material/FreeContentSection";
import NoResultsDisplay from "@/components/study-material/NoResultsDisplay";

const StudyMaterial = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevelFilter(e.target.value);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technology":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Business":
        return "bg-green-100 text-green-700 border-green-200";
      case "Design":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Marketing":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Personal Development":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Premium":
        return "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  // Enhanced mock data with better premium content presentation
  const allMaterials = [
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
      id: 2,
      title: "Mastering JavaScript Algorithms",
      description: "Learn essential algorithms and data structures in JavaScript to improve your problem-solving skills.",
      category: "Technology",
      level: "Advanced",
      downloadCount: 8500,
      rating: 4.6,
      isPremium: false,
      price: 0,
      tags: ["JavaScript", "Algorithms", "Data Structures"],
      author: "Jane Smith",
      publishDate: "2023-05-20",
      estimatedTime: "10-12 hours",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Business Strategy Essentials",
      description: "An essential guide for business professionals, covering key concepts and frameworks for strategic decision-making.",
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
    },
    {
      id: 4,
      title: "The Art of UI/UX Design",
      description: "Explore the principles of UI/UX design and learn how to create intuitive and visually appealing user interfaces.",
      category: "Design",
      level: "Beginner",
      downloadCount: 11200,
      rating: 4.8,
      isPremium: false,
      price: 0,
      tags: ["UI", "UX", "Design"],
      author: "Emily White",
      publishDate: "2023-09-10",
      estimatedTime: "4-6 hours",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      title: "Advanced Interview Mastery Guide",
      description: "Comprehensive guide covering advanced interview techniques, salary negotiation, and career advancement strategies used by top professionals.",
      category: "Premium",
      level: "Advanced",
      downloadCount: 5000,
      rating: 4.9,
      isPremium: true,
      price: 49.99,
      originalPrice: 99.99,
      tags: ["Interview", "Salary Negotiation", "Career Growth"],
      author: "Career Experts",
      publishDate: "2024-01-15",
      estimatedTime: "8-10 hours",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
      featured: true
    },
    {
      id: 9,
      title: "Executive Leadership Development",
      description: "Premium content designed for senior professionals transitioning to executive roles. Master the art of leadership.",
      category: "Premium",
      level: "Expert",
      downloadCount: 2500,
      rating: 4.8,
      isPremium: true,
      price: 79.99,
      originalPrice: 149.99,
      tags: ["Leadership", "Executive", "Management"],
      author: "Industry Leaders",
      publishDate: "2024-02-01",
      estimatedTime: "12-15 hours",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      featured: true
    }
  ];

  const filteredMaterials = allMaterials.filter((material) => {
    const searchTermMatch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const categoryMatch = categoryFilter === "All" || material.category === categoryFilter;
    const levelMatch = levelFilter === "All" || material.level === levelFilter;

    return searchTermMatch && categoryMatch && levelMatch;
  });

  const freeMaterials = filteredMaterials.filter(material => !material.isPremium);
  const premiumMaterials = filteredMaterials.filter(material => material.isPremium);

  const clearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("All");
    setLevelFilter("All");
  };

  return (
    <Layout>
      <StudyMaterialHero />

      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <StudyMaterialFilters
            searchTerm={searchTerm}
            categoryFilter={categoryFilter}
            levelFilter={levelFilter}
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
            onLevelChange={handleLevelChange}
          />

          <PremiumContentSection materials={premiumMaterials} />

          <FreeContentSection 
            materials={freeMaterials} 
            getCategoryColor={getCategoryColor}
          />

          {filteredMaterials.length === 0 && (
            <NoResultsDisplay onClearFilters={clearFilters} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default StudyMaterial;
