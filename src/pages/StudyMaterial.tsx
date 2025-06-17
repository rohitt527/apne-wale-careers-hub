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
  Crown
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
        return "bg-blue-100 text-blue-700";
      case "Business":
        return "bg-green-100 text-green-700";
      case "Design":
        return "bg-purple-100 text-purple-700";
      case "Marketing":
        return "bg-orange-100 text-orange-700";
      case "Personal Development":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Add premium content to mock data
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
      estimatedTime: "6-8 hours"
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
      estimatedTime: "10-12 hours"
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
      estimatedTime: "5-7 hours"
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
      estimatedTime: "4-6 hours"
    },
    {
      id: 5,
      title: "Digital Marketing Strategies",
      description: "Discover effective digital marketing strategies to grow your online presence and reach your target audience.",
      category: "Marketing",
      level: "Intermediate",
      downloadCount: 7600,
      rating: 4.4,
      isPremium: false,
      price: 0,
      tags: ["Digital Marketing", "SEO", "Social Media"],
      author: "Michael Brown",
      publishDate: "2023-11-05",
      estimatedTime: "7-9 hours"
    },
    {
      id: 6,
      title: "Personal Development for Success",
      description: "Learn essential personal development skills to enhance your career and achieve your goals.",
      category: "Personal Development",
      level: "Beginner",
      downloadCount: 10500,
      rating: 4.6,
      isPremium: false,
      price: 0,
      tags: ["Personal Development", "Career", "Success"],
      author: "Sarah Green",
      publishDate: "2024-01-01",
      estimatedTime: "3-5 hours"
    },
    {
      id: 7,
      title: "Advanced Guide to Data Science",
      description: "A comprehensive guide for data scientists, covering advanced techniques and tools for data analysis and machine learning.",
      category: "Technology",
      level: "Advanced",
      downloadCount: 6800,
      rating: 4.7,
      isPremium: false,
      price: 0,
      tags: ["Data Science", "Machine Learning", "Python"],
      author: "Alex Johnson",
      publishDate: "2024-02-15",
      estimatedTime: "12-15 hours"
    },
    {
      id: 8,
      title: "Advanced Interview Mastery Guide",
      description: "Comprehensive guide covering advanced interview techniques, salary negotiation, and career advancement strategies.",
      category: "Premium",
      level: "Advanced",
      downloadCount: 5000,
      rating: 4.9,
      isPremium: true,
      price: 49.99,
      tags: ["Interview", "Salary Negotiation", "Career Growth"],
      author: "Career Experts",
      publishDate: "2024-01-15",
      estimatedTime: "8-10 hours"
    },
    {
      id: 9,
      title: "Executive Leadership Development",
      description: "Premium content designed for senior professionals transitioning to executive roles.",
      category: "Premium",
      level: "Expert",
      downloadCount: 2500,
      rating: 4.8,
      isPremium: true,
      price: 79.99,
      tags: ["Leadership", "Executive", "Management"],
      author: "Industry Leaders",
      publishDate: "2024-02-01",
      estimatedTime: "12-15 hours"
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Unlock Your Potential with Expert Study Materials
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 animate-fade-in">
            Access a wide range of study materials to enhance your skills and advance your career.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in">
            <Link to="/about">
              <Button className="bg-brand-red hover:bg-red-700 text-white">
                Learn More
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">Explore Services</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filter Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-2">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search study materials..."
                  className="pl-12"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Search className="absolute left-4 top-3 h-5 w-5 text-gray-500" />
              </div>
            </div>
            <div className="md:col-span-1 flex gap-4">
              <select
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={categoryFilter}
                onChange={handleCategoryChange}
              >
                <option value="All">All Categories</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Personal Development">Personal Development</option>
              </select>
              <select
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((material, index) => (
              <div
                key={material.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Premium Badge */}
                {material.isPremium && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold">
                    <Crown className="inline w-4 h-4 mr-1" />
                    Premium Content
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          variant="secondary" 
                          className={`${getCategoryColor(material.category)} text-white text-xs`}
                        >
                          {material.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {material.level}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {material.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {material.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Download className="w-4 h-4" />
                      <span>{material.downloadCount} Downloads</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{material.rating} Rating</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {material.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <User className="w-4 h-4" />
                    <span>By {material.author}</span>
                    <Clock className="w-4 h-4 ml-4" />
                    <span>Estimated Time: {material.estimatedTime}</span>
                  </div>

                  {/* Publish Date */}
                  <div className="text-gray-500 text-sm mb-4">
                    Published: {material.publishDate}
                  </div>

                  {/* Action Button */}
                  <div className="flex gap-2">
                    {material.isPremium ? (
                      <>
                        <Button
                          asChild
                          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                        >
                          <Link to={`/premium-content?id=${material.id}`}>
                            <Lock className="w-4 h-4 mr-2" />
                            Unlock ${material.price}
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                        >
                          <Link to={`/premium-content?id=${material.id}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button asChild className="flex-1 bg-brand-red hover:bg-red-700 text-white">
                          <Link to={`/study-material/${material.id}`}>
                            <Download className="w-4 h-4 mr-2" />
                            Download Free
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                        >
                          <Link to={`/study-material/${material.id}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button variant="outline" disabled>
              Next
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudyMaterial;
