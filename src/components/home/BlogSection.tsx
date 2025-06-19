
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, TrendingUp, Eye, Clock, User, Star } from "lucide-react";
import BlogCard from "@/components/common/BlogCard";

const BlogSection = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "10 Essential Tips for Technical Interviews",
      excerpt: "Master technical interviews with these proven strategies that help you stand out from the competition and land your dream job.",
      author: "Vikram Singh",
      date: "Dec 15, 2024",
      category: "Interview Tips",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "System Design Mastery: Complete Guide",
      excerpt: "Learn system design fundamentals and advanced concepts that will help you excel in senior engineering interviews.",
      author: "Ananya Mehta",
      date: "Dec 10, 2024",
      category: "Tech Concepts",
      image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "From Rejection to Google: My Journey",
      excerpt: "A personal story of persistence, learning, and growth that led to landing a software engineer role at Google.",
      author: "Priya Sharma",
      date: "Dec 5, 2024",
      category: "Success Story",
      image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      readTime: "6 min read"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-orange-100/50 to-red-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-100/50 to-orange-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-orange-200">
            <BookOpen className="w-5 h-5" />
            <TrendingUp className="w-4 h-4 animate-pulse" />
            Career Insights
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Latest Career
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with industry trends, expert career advice, and success stories from professionals who made it big.
          </p>
          
          {/* Blog Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-orange-600" />
                <div className="text-3xl font-bold text-orange-600">50+</div>
              </div>
              <div className="text-gray-600 text-sm">Articles Published</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Eye className="w-6 h-6 text-red-600" />
                <div className="text-3xl font-bold text-red-600">10k+</div>
              </div>
              <div className="text-gray-600 text-sm">Monthly Readers</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-yellow-600" />
                <div className="text-3xl font-bold text-yellow-600">4.8</div>
              </div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredBlogs.map((post, index) => (
            <div 
              key={post.id} 
              className="animate-fade-in transform transition-all duration-500 hover:scale-105" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>
                  
                  <Button asChild className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                    <Link to={`/blog/${post.id}`} className="flex items-center justify-center gap-2">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{ animationDelay: "450ms" }}>
          <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl">
            <Link to="/blog" className="flex items-center gap-3">
              Read More Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
