
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import BlogCard from "@/components/common/BlogCard";
import { Search, Filter, TrendingUp, Calendar, User, BookOpen, Star, ArrowRight } from "lucide-react";
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
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const featuredPost = blogData[0];
  const trendingPosts = blogData.slice(1, 4);

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-brand-dark to-gray-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-brand-red/5 to-transparent animate-gradient"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-red/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in">
              <BookOpen className="h-5 w-5 text-brand-red" />
              <span className="text-sm font-semibold text-gray-200">Career Insights & Tech Stories</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Discover insights, tips, and stories from industry experts to accelerate your career journey in tech
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto animate-slide-up delay-500">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 group-focus-within:text-brand-red transition-colors" />
                <Input
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-16 pr-6 py-6 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-300 rounded-2xl focus:bg-white/20 focus:border-brand-red/50 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-blue-500/20 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-700">
              <div className="text-center group">
                <div className="text-4xl font-bold text-brand-red mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-gray-300">Expert Articles</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">10k+</div>
                <div className="text-gray-300">Monthly Readers</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-gray-300">Industry Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Post Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <Star className="h-8 w-8 text-brand-red animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Featured Article
              </h2>
              <Star className="h-8 w-8 text-brand-red animate-pulse delay-300" />
            </div>
            <p className="text-xl text-gray-600">Hand-picked content from our top contributors</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 animate-scale-in group">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-brand-red/90 text-white backdrop-blur-sm px-4 py-2 text-sm font-semibold shadow-lg">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <Link to={`/blog/${featuredPost.id}`} className="group/link">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 group-hover/link:text-brand-red transition-colors duration-300 leading-tight">
                      {featuredPost.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-8 text-gray-500 mb-8">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5" />
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-fit bg-brand-red hover:bg-red-700 text-white px-8 py-6 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                    <Link to={`/blog/${featuredPost.id}`} className="flex items-center gap-3">
                      Read Full Article
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Filter */}
      <section className="py-16 bg-white border-b-2 border-gray-100 sticky top-0 z-40 backdrop-blur-lg bg-white/95">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <div className="flex items-center gap-2 mb-4 w-full justify-center">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-lg font-semibold text-gray-800">Filter by Category</span>
            </div>
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-500 transform hover:scale-105 rounded-full px-6 py-3 font-semibold ${
                  selectedCategory === category 
                    ? 'bg-brand-red text-white shadow-xl scale-105 hover:bg-red-700' 
                    : 'hover:bg-brand-red hover:text-white hover:shadow-lg border-2 border-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Main Blog Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600">{filteredBlogs.length} articles found</p>
            </div>
            
            {isAdmin && (
              <div className="animate-fade-in delay-300">
                <Link to="/blog/create">
                  <Button className="bg-brand-red hover:bg-red-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-4 rounded-2xl text-lg font-semibold">
                    Create New Post
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="bg-white rounded-3xl p-16 shadow-xl max-w-lg mx-auto">
                <Search className="h-20 w-20 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
                <p className="text-gray-600 text-lg">Try adjusting your search or filter criteria</p>
                <Button 
                  onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
                  className="mt-6 bg-brand-red hover:bg-red-700 text-white px-8 py-3 rounded-xl"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in hover:animate-scale-in"
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

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-brand-dark to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join thousands of professionals who get career tips and industry insights delivered to their inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 px-6 py-4 rounded-xl"
              />
              <Button className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold whitespace-nowrap">
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
