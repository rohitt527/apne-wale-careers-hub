import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import BlogCard from "@/components/common/BlogCard";
import { Search, Filter, TrendingUp, Calendar, User, BookOpen, Star, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Sample data - in a real app, you'd fetch this from an API
const blogData = [
  {
    id: 1,
    title: "How to Prepare for Technical Interviews",
    excerpt: "Learn effective strategies and tips to ace your next technical interview.",
    author: "Priya Sharma",
    date: "May 5, 2023",
    category: "Career Advice",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["interview", "career", "tech"],
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Building Your Personal Brand as a Developer",
    excerpt: "Discover how to create a strong personal brand that sets you apart in the tech industry.",
    author: "Rahul Verma",
    date: "April 22, 2023",
    category: "Professional Growth",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["branding", "career", "development"],
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "The Future of Remote Work in Tech",
    excerpt: "Exploring how remote work is shaping the future of the tech industry and what it means for professionals.",
    author: "Amit Patel",
    date: "April 10, 2023",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["remote work", "future", "tech industry"],
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Mastering System Design Interviews",
    excerpt: "A comprehensive guide to ace your system design interviews with practical examples.",
    author: "Neha Singh",
    date: "March 28, 2023",
    category: "Career Advice",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["system design", "interviews", "architecture"],
    readTime: "12 min read"
  },
  {
    id: 5,
    title: "AI Tools Every Developer Should Know",
    excerpt: "Discover the latest AI tools that can boost your productivity and enhance your development workflow.",
    author: "Vikram Kumar",
    date: "March 15, 2023",
    category: "Tech Tools",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["AI", "tools", "productivity"],
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Building Scalable React Applications",
    excerpt: "Best practices for building large-scale React applications that are maintainable and performant.",
    author: "Arjun Reddy",
    date: "March 8, 2023",
    category: "Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["react", "scalability", "development"],
    readTime: "9 min read"
  }
];

const categories = ["All", "Career Advice", "Professional Growth", "Industry Trends", "Tech Tools", "Development"];

const Blog = () => {
  const { isAdmin } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let filtered = blogData;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const featuredPost = blogData[0];

  return (
    <Layout>
      {/* Modern Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse delay-500"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                  <span className="text-sm font-semibold">Expert Insights & Career Growth</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    Tech Blog
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  Discover cutting-edge insights, career tips, and industry trends from top tech professionals
                </p>
                
                {/* Enhanced Search */}
                <div className="relative max-w-2xl group">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                  <Input
                    placeholder="Search articles, topics, or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-16 pr-6 py-6 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-300 rounded-2xl focus:bg-white/20 focus:border-blue-400/50 transition-all duration-300"
                  />
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-gray-300 text-sm">Articles</div>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                    <div className="text-gray-300 text-sm">Authors</div>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-green-400 mb-2">10k+</div>
                    <div className="text-gray-300 text-sm">Readers</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Featured Article Preview */}
              <div className="relative animate-slide-up delay-300">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="mb-6">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">Featured</Badge>
                    <h3 className="text-2xl font-bold mb-4 text-white">{featuredPost.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{featuredPost.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                    </div>
                    <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl">
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read More <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-600">Find exactly what you're looking for</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-300">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 transform hover:scale-105 rounded-full px-8 py-3 font-semibold shadow-lg ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl scale-105 hover:from-blue-600 hover:to-purple-600' 
                    : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:shadow-xl border-2 border-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-16 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-blue-500" />
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600">
                {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} found
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>
            
            {isAdmin && (
              <div className="animate-fade-in delay-300">
                <Link to="/blog/create">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-4 rounded-2xl text-lg font-semibold">
                    <Zap className="h-5 w-5 mr-2" />
                    Create New Post
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-3xl shadow-lg p-6 animate-pulse">
                  <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl mb-6"></div>
                  <div className="space-y-4">
                    <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="bg-white rounded-3xl p-16 shadow-2xl max-w-lg mx-auto border border-gray-100">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-full p-6 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                  <Search className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">No articles found</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We couldn't find any articles matching your criteria. Try adjusting your search or explore different categories.
                </p>
                <Button 
                  onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in transform transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <BlogCard 
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    date={post.date}
                    category={post.category}
                    image={post.image}
                    readTime={post.readTime}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join thousands of tech professionals who get the latest insights and career tips delivered weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 px-6 py-4 rounded-2xl backdrop-blur-sm"
              />
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
