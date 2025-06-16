
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Folder, Download, Star, Clock, FileText, Filter, BookOpen, Users, Trophy } from "lucide-react";

const categories = [
  { id: "all", name: "All Materials", icon: BookOpen },
  { id: "system-design", name: "System Design", icon: FileText },
  { id: "behavioral", name: "Behavioral", icon: Users },
  { id: "technical", name: "Technical", icon: Trophy },
  { id: "assessment", name: "Assessment", icon: Clock },
];

const studyMaterials = [
  {
    id: 1,
    title: "System Design Interview Guide",
    date: "May 1, 2024",
    format: "PDF",
    size: "6.1 MB",
    type: "Premium",
    category: "system-design",
    downloads: 2547,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
    desc: "Master system design with comprehensive examples, scalability patterns, and real-world case studies from top tech companies.",
  },
  {
    id: 2,
    title: "Behavioral Interview Questions",
    date: "April 28, 2024",
    format: "PDF",
    size: "2.5 MB",
    type: "Free",
    category: "behavioral",
    downloads: 5432,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=80",
    desc: "Complete collection of behavioral questions with STAR method examples and proven strategies for success.",
  },
  {
    id: 3,
    title: "Technical Interview Preparation",
    date: "May 5, 2024",
    format: "PDF",
    size: "4.8 MB",
    type: "Premium",
    category: "technical",
    downloads: 3210,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
    desc: "Essential algorithms, data structures, and coding patterns with detailed explanations and practice problems.",
  },
  {
    id: 4,
    title: "Assessment Test Strategies",
    date: "April 20, 2024",
    format: "PDF",
    size: "3.2 MB",
    type: "Free",
    category: "assessment",
    downloads: 1876,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80",
    desc: "Proven techniques for online assessments, aptitude tests, and coding challenges with time management tips.",
  },
  {
    id: 5,
    title: "Advanced System Architecture",
    date: "May 10, 2024",
    format: "PDF",
    size: "8.3 MB",
    type: "Premium",
    category: "system-design",
    downloads: 987,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
    desc: "Deep dive into microservices, distributed systems, and cloud architecture patterns for senior roles.",
  },
  {
    id: 6,
    title: "Communication Skills for Interviews",
    date: "April 15, 2024",
    format: "PDF",
    size: "1.9 MB",
    type: "Free",
    category: "behavioral",
    downloads: 3456,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=500&q=80",
    desc: "Master verbal and non-verbal communication techniques to excel in any interview scenario.",
  },
];

const stats = [
  { number: "10K+", label: "Downloads", icon: Download },
  { number: "500+", label: "Study Materials", icon: FileText },
  { number: "4.8", label: "Average Rating", icon: Star },
  { number: "50+", label: "Categories", icon: Folder },
];

function MaterialCard({ material, index }: { material: typeof studyMaterials[0]; index: number }) {
  return (
    <Card className="group overflow-hidden shadow-lg border-0 bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in" 
          style={{ animationDelay: `${index * 150}ms` }}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={material.image}
          alt={material.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {material.type === "Premium" && (
          <Badge className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 text-xs font-semibold shadow-lg">
            <Star className="w-3 h-3 mr-1" />
            Premium
          </Badge>
        )}
        {material.type === "Free" && (
          <Badge className="absolute top-3 right-3 z-10 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 text-xs font-semibold shadow-lg">
            Free
          </Badge>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1 text-xs bg-black/30 rounded-full px-2 py-1">
            <Download className="w-3 h-3" />
            {material.downloads.toLocaleString()}
          </div>
          <div className="flex items-center gap-1 text-xs bg-black/30 rounded-full px-2 py-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            {material.rating}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <CardTitle className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
          {material.title}
        </CardTitle>
        
        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 mb-3">
          <Clock className="w-3 h-3" />
          {material.date}
          <span>•</span>
          {material.format}
          <span>•</span>
          {material.size}
        </div>
        
        <CardDescription className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
          {material.desc}
        </CardDescription>
        
        <div className="flex gap-2">
          {material.type === "Free" ? (
            <Button variant="default" size="sm" className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0">
              <Download className="w-4 h-4 mr-1" />
              Download
            </Button>
          ) : (
            <Button variant="default" size="sm" className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black border-0">
              <Star className="w-4 h-4 mr-1" />
              Unlock Premium
            </Button>
          )}
          <Button variant="outline" size="sm" asChild>
            <Link to={`/study-material/${material.id}`}>
              <FileText className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

const StudyMaterial: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = studyMaterials.filter((mat) => {
    const matchesSearch = mat.title.toLowerCase().includes(search.toLowerCase()) ||
                         mat.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "all" || mat.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
          <div className="container-custom relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 animate-fade-in">
                Study Materials
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Access our curated collection of premium resources to ace your interviews and advance your career
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-2">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container-custom pb-16">
          {/* Search and Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for study materials..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                />
              </div>
              
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3"
              >
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
            
            {/* Categories */}
            <div className={`mt-6 transition-all duration-300 ${showFilters ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 ${
                      selectedCategory === category.id 
                        ? "bg-brand-red text-white" 
                        : "hover:bg-brand-red hover:text-white"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results header */}
          <div className="flex items-center justify-between mb-6 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <div className="text-gray-700 dark:text-gray-300">
              Showing <span className="font-semibold text-brand-red">{filtered.length}</span> study materials
              {selectedCategory !== "all" && (
                <span className="ml-2 text-sm text-gray-500">
                  in {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
            </div>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((material, index) => (
              <MaterialCard key={material.id} material={material} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <BookOpen className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                No materials found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Try adjusting your search terms or filters
              </p>
              <Button onClick={() => { setSearch(""); setSelectedCategory("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default StudyMaterial;
