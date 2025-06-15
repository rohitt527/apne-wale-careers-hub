
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import BlogCard from "@/components/common/BlogCard";
import { Search, Filter, TrendingUp, Calendar, User } from "lucide-react";
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

  const featuredPost = blogData[0];
  const trendingPosts = blogData.slice(1, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand-red/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up delay-300">
              Insights, tips, and stories to accelerate your career journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-80 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-6 w-6 text-brand-red" />
              <h2 className="text-3xl font-bold">Featured Article</h2>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-brand-red text-white">{featuredPost.category}</Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Link to={`/blog/${featuredPost.id}`} className="group">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-brand-red transition-colors line-clamp-2">
                    {featuredPost.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-6 text-lg line-clamp-3">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button asChild className="w-fit bg-brand-red hover:bg-red-700 text-white">
                  <Link to={`/blog/${featuredPost.id}`}>Read Full Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-brand-red text-white shadow-lg scale-105' 
                    : 'hover:bg-brand-red hover:text-white hover:scale-105'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <SectionHeading 
              title="Latest Articles" 
              subtitle={`${filteredBlogs.length} articles found`}
            />
            
            {isAdmin && (
              <Link to="/blog/create">
                <Button className="bg-brand-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Create New Post
                </Button>
              </Link>
            )}
          </div>
          
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 animate-fade-in">
              <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post, index) => (
                <div
                  key={post.id}
                  className="animate-fade-in hover:animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
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
    </Layout>
  );
};

export default Blog;
