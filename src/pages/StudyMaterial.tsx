
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  Filter, 
  Download, 
  Star, 
  Clock, 
  User, 
  Eye,
  BookOpen,
  TrendingUp,
  Award,
  Lock,
  Crown,
  Sparkles,
  Zap,
  Gift,
  CheckCircle
} from "lucide-react";

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5" />
        <div className="container-custom text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <Sparkles className="w-4 h-4 mr-1" />
              Premium Study Materials
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Unlock Your <span className="text-gradient">Potential</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Access a wide range of free and premium study materials to enhance your skills and advance your career.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Materials
              </Button>
              <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                View Premium
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          {/* Search and Filter Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search study materials..."
                    className="pl-12 h-12 border-gray-200 focus:border-purple-400 focus:ring-purple-400"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  value={categoryFilter}
                  onChange={handleCategoryChange}
                >
                  <option value="All">All Categories</option>
                  <option value="Technology">Technology</option>
                  <option value="Business">Business</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Personal Development">Personal Development</option>
                  <option value="Premium">Premium</option>
                </select>
                <select
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  value={levelFilter}
                  onChange={handleLevelChange}
                >
                  <option value="All">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
            </div>
          </div>

          {/* Premium Content Section */}
          {premiumMaterials.length > 0 && (
            <div className="mb-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    <Crown className="inline w-8 h-8 mr-2 text-yellow-500" />
                    Premium Content
                  </h2>
                  <p className="text-gray-600">Unlock advanced materials for accelerated learning</p>
                </div>
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2">
                  <Zap className="w-4 h-4 mr-1" />
                  Limited Time Offer
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {premiumMaterials.map((material, index) => (
                  <Card
                    key={material.id}
                    className="group relative overflow-hidden bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Premium Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        <Crown className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    </div>

                    {/* Featured Badge */}
                    {material.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black animate-pulse">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={material.thumbnail}
                        alt={material.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{material.rating}</span>
                          <span>•</span>
                          <span>{material.downloadCount.toLocaleString()} students</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                            {material.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                            {material.description}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {material.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-purple-200 text-purple-600">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Pricing */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-purple-600">
                              ${material.price}
                            </span>
                            {material.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">
                                ${material.originalPrice}
                              </span>
                            )}
                          </div>
                          <Badge className="bg-red-100 text-red-700 border-red-200">
                            {Math.round((1 - material.price / material.originalPrice!) * 100)}% OFF
                          </Badge>
                        </div>

                        {/* Action Button */}
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 group-hover:shadow-lg transition-all duration-300"
                        >
                          <Link to={`/premium-content?id=${material.id}`}>
                            <Lock className="w-4 h-4 mr-2" />
                            Unlock Premium Content
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Free Content Section */}
          {freeMaterials.length > 0 && (
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    <Gift className="inline w-8 h-8 mr-2 text-green-500" />
                    Free Content
                  </h2>
                  <p className="text-gray-600">High-quality materials available at no cost</p>
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Always Free
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {freeMaterials.map((material, index) => (
                  <Card
                    key={material.id}
                    className="group bg-white hover:bg-gray-50 border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={material.thumbnail}
                        alt={material.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-green-600 text-white">
                          Free
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant="secondary" 
                            className={`${getCategoryColor(material.category)} text-xs`}
                          >
                            {material.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {material.level}
                          </Badge>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                          {material.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {material.description}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            <span>{material.downloadCount.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span>{material.rating}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {material.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2">
                          <Button
                            asChild
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                          >
                            <Link to={`/study-material/${material.id}`}>
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            asChild
                            className="border-green-200 hover:bg-green-50"
                          >
                            <Link to={`/study-material/${material.id}`}>
                              <Eye className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredMaterials.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No materials found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all categories.</p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("All");
                  setLevelFilter("All");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default StudyMaterial;
