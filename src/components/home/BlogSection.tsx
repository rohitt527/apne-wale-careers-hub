
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
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
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            Career Insights
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Career Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with industry trends and expert career advice
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredBlogs.map((post, index) => (
            <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <BlogCard {...post} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3">
            <Link to="/blog" className="flex items-center gap-2">
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
