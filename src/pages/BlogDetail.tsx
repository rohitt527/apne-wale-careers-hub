
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, TrendingUp, Eye, Heart, ChevronRight, MessageCircle, ThumbsUp, Bookmark, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import BlogCard from "@/components/common/BlogCard";

// Mock blog data - this would come from an API in a real app
const blogData = [
  {
    id: 1,
    title: "10 Essential Tips for Technical Interviews",
    content: `<div class="prose prose-lg max-w-none">
              <p class="lead mb-8 text-xl leading-relaxed">Technical interviews can be intimidating, but with the right preparation, you can approach them with confidence. This comprehensive guide provides proven strategies to help you stand out from the competition and succeed in your next technical interview.</p>
              
              <h2 class="text-4xl font-bold mt-16 mb-8 text-gray-900">1. Master the Fundamentals</h2>
              <p class="mb-8 text-lg leading-relaxed">Before diving into complex problems, ensure you have a rock-solid understanding of fundamental concepts. For software engineering roles, this includes data structures (arrays, linked lists, trees, graphs), algorithms (sorting, searching, dynamic programming), and system design principles.</p>
              
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-blue-500 p-8 my-12 rounded-r-2xl shadow-lg">
                <p class="text-blue-900 font-semibold text-lg">💡 Pro Tip: Create a checklist of fundamental topics and review them regularly. Consistency is key to retaining information.</p>
              </div>
              
              <h2 class="text-4xl font-bold mt-16 mb-8 text-gray-900">2. Practice Deliberately and Consistently</h2>
              <p class="mb-8 text-lg leading-relaxed">Random practice won't cut it. Use platforms like LeetCode, HackerRank, or CodeSignal to solve problems systematically. Focus on different categories of problems and gradually increase difficulty.</p>
              
              <ul class="list-disc pl-8 mb-8 space-y-4 text-lg">
                <li>Solve 2-3 problems daily leading up to your interview</li>
                <li>Time yourself to simulate interview pressure</li>
                <li>Review and understand solutions even for problems you solve correctly</li>
                <li>Keep a log of patterns you encounter frequently</li>
              </ul>
              
              <h2 class="text-4xl font-bold mt-16 mb-8 text-gray-900">3. Communicate Your Thought Process</h2>
              <p class="mb-8 text-lg leading-relaxed">During the interview, think out loud. Interviewers are as interested in your problem-solving approach as they are in the final solution. This also helps them guide you if you're going off track.</p>
              
              <h2 class="text-4xl font-bold mt-16 mb-8 text-gray-900">4. Ask the Right Questions</h2>
              <p class="mb-8 text-lg leading-relaxed">Don't rush into coding. Take time to understand the problem completely by asking clarifying questions:</p>
              
              <ul class="list-disc pl-8 mb-8 space-y-4 text-lg">
                <li>What are the input constraints?</li>
                <li>Should I handle edge cases like empty inputs?</li>
                <li>Are there any performance requirements?</li>
                <li>Can I use additional data structures?</li>
              </ul>
              
              <h2 class="text-4xl font-bold mt-16 mb-8 text-gray-900">5. Master Time and Space Complexity</h2>
              <p class="mb-8 text-lg leading-relaxed">Being able to analyze and optimize your solutions is crucial. Practice identifying the time and space complexity of your algorithms and discussing potential optimizations. This shows technical depth and understanding.</p>
              
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-8 border-green-500 p-8 my-12 rounded-r-2xl shadow-lg">
                <p class="text-green-900 font-semibold text-lg">🎯 Remember: It's often better to start with a brute force solution and then optimize, rather than jumping straight to the optimal solution.</p>
              </div>
              
              <h2 class="text-4xl font-bold mt-16 mb-8 text-gray-900">Conclusion</h2>
              <p class="mb-8 text-lg leading-relaxed">Technical interviews are challenging, but they're also an opportunity to showcase your skills and passion for technology. With consistent preparation, clear communication, and the right mindset, you'll be well-equipped to succeed and land your dream job.</p>
              </div>`,
    excerpt: "Prepare for your next technical interview with these proven strategies and approaches that will help you stand out from the competition.",
    author: "Vikram Singh",
    date: "Apr 15, 2023",
    category: "Interview Tips",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["interviews", "career", "technical"],
    readTime: "8 min read",
    views: "12.4k",
    likes: "342"
  },
  {
    id: 2,
    title: "Understanding System Design: A Beginner's Guide",
    content: `<p class="mb-4">System design is a critical skill for senior engineering roles. This article covers the fundamental concepts and frameworks to approach any system design problem confidently.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">Introduction to System Design</h2>
              <p class="mb-4">System design interviews evaluate your ability to design large-scale distributed systems. They test your technical knowledge, communication skills, and ability to make trade-offs between different solutions.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">Key Components of System Design</h2>
              <p class="mb-4">Understanding the building blocks of system design is essential. This includes load balancers, caching, database sharding, and microservices architecture.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">The System Design Process</h2>
              <p class="mb-4">Learn a structured approach to system design, from requirement clarification to scaling strategies.</p>`,
    excerpt: "System design is a critical skill for senior engineering roles. Learn the fundamental concepts and frameworks to approach any system design problem.",
    author: "Ananya Mehta",
    date: "Mar 22, 2023",
    category: "Tech Concepts",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["system design", "architecture", "interviews"]
  },
  {
    id: 3,
    title: "How I Landed My Dream Job at Google",
    content: `<p class="mb-4">A personal journey through the preparation, application, and interview process that led to a successful role at Google.</p>`,
    excerpt: "A personal journey through the preparation, application, and interview process that led to a successful role at one of tech's biggest companies.",
    author: "Priya Sharma",
    date: "Mar 5, 2023",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["google", "interviews", "career"]
  },
  {
    id: 4,
    title: "5 Algorithm Patterns You Must Know",
    content: `<p class="mb-4">Master these core algorithmic patterns to solve a wide variety of coding problems efficiently during technical interviews.</p>`,
    excerpt: "Master these core algorithmic patterns to solve a wide variety of coding problems efficiently during your technical interviews.",
    author: "Rahul Kapoor",
    date: "Feb 18, 2023",
    category: "Coding",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["algorithms", "coding", "interviews"]
  },
  {
    id: 5,
    title: "The Future of AI in Software Development",
    content: `<p class="mb-4">Explore how artificial intelligence is transforming the software development landscape and what skills engineers need to stay relevant.</p>`,
    excerpt: "Explore how artificial intelligence is transforming the software development landscape and what skills engineers need to stay relevant.",
    author: "Neha Patel",
    date: "Feb 8, 2023",
    category: "Tech Trends",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["ai", "future tech", "career"]
  },
  {
    id: 6,
    title: "Building a Strong Tech Portfolio",
    content: `<p class="mb-4">Learn how to create an impressive portfolio that showcases your skills and helps you stand out in the competitive tech job market.</p>`,
    excerpt: "Learn how to create an impressive portfolio that showcases your skills and helps you stand out in the competitive tech job market.",
    author: "Aditya Verma",
    date: "Jan 25, 2023",
    category: "Career Advice",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["portfolio", "career", "advice"]
  }
];

// Related blogs for sidebar
const relatedBlogs = [
  {
    id: 2,
    title: "System Design Interview Guide",
    author: "Ananya Mehta",
    date: "Mar 22, 2023",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "Building Your Tech Portfolio",
    author: "Priya Sharma",
    date: "Mar 5, 2023",
    image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "5 Algorithm Patterns to Master",
    author: "Rahul Kapoor",
    date: "Feb 18, 2023",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    readTime: "12 min read"
  }
];

const trendingBlogs = blogData.slice(1, 4);

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    // In a real app, this would be an API call
    const blogId = parseInt(id || "0");
    const foundBlog = blogData.find(b => b.id === blogId);
    
    // Simulate API delay
    setTimeout(() => {
      setBlog(foundBlog);
      setLoading(false);
    }, 500);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
          {/* Loading Progress Bar */}
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
          </div>
          
          <div className="container-custom py-16">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse space-y-8">
                <div className="h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl"></div>
                <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl w-2/3"></div>
                <div className="h-80 bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl"></div>
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <div className="bg-white rounded-3xl p-16 shadow-2xl max-w-lg mx-auto border border-gray-100">
              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-full p-6 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-red-500" />
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900">Article Not Found</h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">The article you're looking for doesn't exist or has been removed.</p>
              <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link to="/blog">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to All Articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gradient-to-r from-white to-gray-50 py-6 border-b border-gray-100 animate-fade-in">
        <div className="container-custom">
          <nav className="flex items-center text-sm font-medium space-x-3">
            <Link to="/blog" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              All Articles
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">{blog.category}</Badge>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-500 truncate max-w-xs">{blog.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <Badge className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg px-6 py-3 rounded-full shadow-xl">
                {blog.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up">
              {blog.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              {blog.excerpt}
            </p>
            
            {/* Enhanced Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-200 animate-fade-in delay-500">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <User className="h-5 w-5 text-blue-400" />
                <span className="font-semibold">{blog.author}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Calendar className="h-5 w-5 text-green-400" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Eye className="h-5 w-5 text-purple-400" />
                <span>{blog.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-3xl shadow-2xl border border-gray-100 animate-fade-in">
                {/* Article Actions */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button
                        variant={liked ? "default" : "outline"}
                        size="lg"
                        onClick={() => setLiked(!liked)}
                        className={`transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-2xl ${
                          liked ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg' : 'hover:bg-red-50 hover:text-red-600 border-2'
                        }`}
                      >
                        <Heart className={`h-5 w-5 mr-3 ${liked ? 'fill-current animate-pulse' : ''}`} />
                        {liked ? parseInt(blog.likes) + 1 : blog.likes}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => setBookmarked(!bookmarked)}
                        className={`transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-2xl border-2 ${
                          bookmarked ? 'bg-yellow-50 text-yellow-600 border-yellow-300' : 'hover:bg-yellow-50 hover:text-yellow-600'
                        }`}
                      >
                        <Bookmark className="h-5 w-5 mr-3" />
                        {bookmarked ? 'Saved' : 'Save'}
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" className="rounded-xl hover:bg-blue-50">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-xl hover:bg-blue-50">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-xl hover:bg-blue-50">
                        <Facebook className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-8 lg:p-16">
                  <div 
                    className="prose prose-xl max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-img:rounded-2xl prose-img:shadow-lg prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                  
                  {/* Tags */}
                  <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="font-bold text-xl text-gray-900">Tags:</span>
                      {blog.tags.map((tag: string) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-600 border-blue-200 transition-all duration-300 cursor-pointer transform hover:scale-105 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Related Posts */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 animate-fade-in delay-300">
                  <div className="flex items-center gap-3 mb-8">
                    <TrendingUp className="h-6 w-6 text-blue-500" />
                    <h3 className="font-bold text-2xl text-gray-900">Related Articles</h3>
                  </div>
                  <div className="space-y-6">
                    {relatedBlogs.map((relatedBlog, index) => (
                      <div key={relatedBlog.id} className="group animate-fade-in" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                        <Link to={`/blog/${relatedBlog.id}`} className="block">
                          <div className="overflow-hidden rounded-2xl mb-4 h-32 shadow-lg">
                            <img 
                              src={relatedBlog.image} 
                              alt={relatedBlog.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <h4 className="font-bold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors mb-3 leading-tight">
                            {relatedBlog.title}
                          </h4>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="font-medium">{relatedBlog.author}</span>
                            <Badge className="bg-gray-100 text-gray-600">{relatedBlog.readTime}</Badge>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 p-8 rounded-3xl text-white shadow-xl animate-fade-in delay-500">
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-2xl mb-4">Stay Updated</h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">Get the latest insights delivered to your inbox.</p>
                    <div className="space-y-4">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-2xl text-gray-900 border-0 focus:ring-4 focus:ring-white/30 transition-all duration-300"
                      />
                      <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 py-3 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                        Subscribe Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Articles Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Continue Reading</h2>
            <p className="text-xl text-gray-600">Discover more insights and stories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingBlogs.map((post, index) => (
              <div
                key={post.id}
                className="animate-fade-in transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
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
          
          <div className="text-center mt-16 animate-fade-in delay-1000">
            <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Link to="/blog">
                <ArrowLeft className="h-5 w-5 mr-2" />
                View All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
