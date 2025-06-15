import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, TrendingUp, Eye, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import BlogCard from "@/components/common/BlogCard";

// Mock blog data - this would come from an API in a real app
const blogData = [
  {
    id: 1,
    title: "10 Essential Tips for Technical Interviews",
    content: `<div class="prose prose-lg max-w-none">
              <p class="lead mb-6">Technical interviews can be intimidating, but with the right preparation, you can approach them with confidence. This comprehensive guide provides proven strategies to help you stand out from the competition and succeed in your next technical interview.</p>
              
              <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">1. Master the Fundamentals</h2>
              <p class="mb-6">Before diving into complex problems, ensure you have a rock-solid understanding of fundamental concepts. For software engineering roles, this includes data structures (arrays, linked lists, trees, graphs), algorithms (sorting, searching, dynamic programming), and system design principles.</p>
              
              <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <p class="text-blue-800 font-medium">💡 Pro Tip: Create a checklist of fundamental topics and review them regularly. Consistency is key to retaining information.</p>
              </div>
              
              <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">2. Practice Deliberately and Consistently</h2>
              <p class="mb-6">Random practice won't cut it. Use platforms like LeetCode, HackerRank, or CodeSignal to solve problems systematically. Focus on different categories of problems and gradually increase difficulty.</p>
              
              <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>Solve 2-3 problems daily leading up to your interview</li>
                <li>Time yourself to simulate interview pressure</li>
                <li>Review and understand solutions even for problems you solve correctly</li>
                <li>Keep a log of patterns you encounter frequently</li>
              </ul>
              
              <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">3. Communicate Your Thought Process</h2>
              <p class="mb-6">During the interview, think out loud. Interviewers are as interested in your problem-solving approach as they are in the final solution. This also helps them guide you if you're going off track.</p>
              
              <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">4. Ask the Right Questions</h2>
              <p class="mb-6">Don't rush into coding. Take time to understand the problem completely by asking clarifying questions:</p>
              
              <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>What are the input constraints?</li>
                <li>Should I handle edge cases like empty inputs?</li>
                <li>Are there any performance requirements?</li>
                <li>Can I use additional data structures?</li>
              </ul>
              
              <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">5. Master Time and Space Complexity</h2>
              <p class="mb-6">Being able to analyze and optimize your solutions is crucial. Practice identifying the time and space complexity of your algorithms and discussing potential optimizations. This shows technical depth and understanding.</p>
              
              <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <p class="text-green-800 font-medium">🎯 Remember: It's often better to start with a brute force solution and then optimize, rather than jumping straight to the optimal solution.</p>
              </div>
              
              <h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900">Conclusion</h2>
              <p class="mb-6">Technical interviews are challenging, but they're also an opportunity to showcase your skills and passion for technology. With consistent preparation, clear communication, and the right mindset, you'll be well-equipped to succeed and land your dream job.</p>
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

// All categories from blogs
const allCategories = Array.from(new Set(blogData.map(blog => blog.category)));

// Get trending blogs (just using the first 3 for demo purposes)
const trendingBlogs = blogData.slice(1, 4);

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const blogId = parseInt(id || "0");
    const foundBlog = blogData.find(b => b.id === blogId);
    
    // Simulate API delay
    setTimeout(() => {
      setBlog(foundBlog);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-pulse space-y-4 w-full max-w-4xl">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-64 bg-gray-200 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
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
        <div className="container-custom py-16">
          <div className="text-center animate-fade-in">
            <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
              <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
              <Button asChild className="bg-brand-red hover:bg-red-700">
                <Link to="/blog">Back to All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 border-b animate-fade-in">
        <div className="container-custom">
          <Link to="/blog" className="flex items-center text-brand-red hover:text-red-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Badge className="mb-6 bg-brand-red/90 text-white text-sm px-4 py-2">
              {blog.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {blog.excerpt}
            </p>
            
            {/* Author and Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 animate-fade-in delay-300">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                <span>{blog.views} views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 animate-fade-in">
              {/* Article Actions */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b">
                <div className="flex items-center gap-4">
                  <Button
                    variant={liked ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLiked(!liked)}
                    className={`transition-all duration-300 ${liked ? 'bg-red-500 hover:bg-red-600 text-white' : 'hover:bg-red-50 hover:text-red-600'}`}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                    {liked ? parseInt(blog.likes) + 1 : blog.likes}
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
                <Button asChild className="bg-brand-red hover:bg-red-700">
                  <Link to="/book">Book a Career Session</Link>
                </Button>
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="font-semibold text-gray-900">Tags:</span>
                  {blog.tags.map((tag: string) => (
                    <Badge key={tag} variant="outline" className="bg-gray-50 hover:bg-brand-red hover:text-white transition-colors cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Related Posts */}
              <div className="bg-white p-6 rounded-2xl shadow-lg animate-fade-in delay-300">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-brand-red" />
                  <h3 className="font-bold text-xl">Related Articles</h3>
                </div>
                <div className="space-y-6">
                  {relatedBlogs.map(relatedBlog => (
                    <div key={relatedBlog.id} className="group">
                      <Link to={`/blog/${relatedBlog.id}`} className="block">
                        <div className="overflow-hidden rounded-lg mb-3 h-24">
                          <img 
                            src={relatedBlog.image} 
                            alt={relatedBlog.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-brand-red transition-colors mb-2">
                          {relatedBlog.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{relatedBlog.author}</span>
                          <span>{relatedBlog.readTime}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-brand-red to-red-600 p-6 rounded-2xl text-white animate-fade-in delay-500">
                <h3 className="font-bold text-lg mb-3">Stay Updated</h3>
                <p className="text-red-100 text-sm mb-4">Get the latest career insights delivered to your inbox.</p>
                <Button className="w-full bg-white text-brand-red hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
