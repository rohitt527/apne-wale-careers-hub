
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Eye, Clock, User, Star, Sparkles, PenTool } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BlogSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: blogsRef, isVisible: blogsVisible } = useScrollAnimation();

  const featuredBlogs = [
    {
      id: 1,
      title: "10 Essential Tips for Technical Interviews",
      excerpt: "Master technical interviews with these proven strategies that help you stand out from the competition and land your dream position.",
      author: "Vikram Singh",
      date: "Dec 15, 2024",
      category: "Interview Tips",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "System Design Mastery: Complete Guide",
      excerpt: "Learn system design fundamentals and advanced concepts that will help you excel in senior engineering interviews and roles.",
      author: "Ananya Mehta",
      date: "Dec 10, 2024",
      category: "Tech Concepts",
      image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=800&q=80",
      readTime: "12 min read",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "From Rejection to Google: My Journey",
      excerpt: "A personal story of persistence, learning, and growth that led to landing a software engineer role at one of the world's top tech companies.",
      author: "Priya Sharma",
      date: "Dec 5, 2024",
      category: "Success Story",
      image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read",
      gradient: "from-green-500 to-green-600"
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-100/40 to-red-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-100/40 to-orange-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-orange-100/80 shadow-lg">
            <PenTool className="w-5 h-5" />
            <Sparkles className="w-4 h-4 animate-pulse" />
            Career Insights & Stories
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Latest Career
            <span className="block bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent mt-2">
              Insights
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Stay updated with industry trends, expert career advice, and inspiring success stories from professionals who made it big.
          </p>
          
          {/* Inline stats without boxes */}
          <div className="flex flex-wrap justify-center items-center gap-12 mt-16">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 font-medium">Articles Published</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">10k+</div>
                <div className="text-gray-600 font-medium">Monthly Readers</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">4.8</div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          ref={blogsRef}
          className="grid lg:grid-cols-3 gap-10 mb-20"
        >
          {featuredBlogs.map((post, index) => (
            <div 
              key={post.id} 
              className={`group bg-white rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 overflow-hidden transform hover:-translate-y-2 ${
                blogsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: blogsVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className={`absolute top-6 left-6 bg-gradient-to-r ${post.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                  {post.category}
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700 flex items-center gap-2 shadow-lg">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
              
              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-500 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed text-lg">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-gray-500 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{post.author}</div>
                      <div className="text-sm">{post.date}</div>
                    </div>
                  </div>
                </div>
                
                <Button asChild className={`w-full bg-gradient-to-r ${post.gradient} hover:shadow-xl transition-all duration-500 rounded-2xl py-6 text-lg font-semibold shadow-lg group-hover:scale-105`}>
                  <Link to={`/blog/${post.id}`} className="flex items-center justify-center gap-3">
                    Read Article
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-16 py-8 text-xl font-semibold shadow-xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 rounded-2xl">
            <Link to="/blog" className="flex items-center gap-4">
              Read More Articles
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
