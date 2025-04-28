import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useState, useEffect } from "react";

// Mock blog data - this would come from an API in a real app
const blogData = [
  {
    id: 1,
    title: "10 Essential Tips for Technical Interviews",
    content: `<p class="mb-4">Technical interviews can be intimidating, but with the right preparation, you can approach them with confidence. This article provides proven strategies to help you stand out from the competition and succeed in your next technical interview.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">1. Understand the Basics</h2>
              <p class="mb-4">Make sure you have a solid grasp of fundamental concepts in your field. For software engineering roles, this means data structures, algorithms, system design, and programming languages relevant to the position.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">2. Practice, Practice, Practice</h2>
              <p class="mb-4">Regular practice is key to interview success. Use platforms like LeetCode, HackerRank, or CodeSignal to solve problems. Try to solve at least 2-3 problems daily leading up to your interview.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">3. Think Out Loud</h2>
              <p class="mb-4">During the interview, communicate your thought process. Interviewers want to understand how you approach problems, not just the final solution.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">4. Ask Clarifying Questions</h2>
              <p class="mb-4">Don't rush into solving a problem. Take time to understand requirements and constraints by asking clarifying questions. This shows thoughtfulness and attention to detail.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">5. Learn to Analyze Time and Space Complexity</h2>
              <p class="mb-4">Being able to analyze and optimize your solutions is a crucial skill. Practice identifying the time and space complexity of your algorithms and discussing potential optimizations.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">6. Prepare for System Design Questions</h2>
              <p class="mb-4">For senior roles, system design questions are common. Study scalability, reliability, and other architectural concepts. Practice designing systems like a URL shortener, social media feed, or e-commerce platform.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">7. Review Your Projects</h2>
              <p class="mb-4">Be prepared to discuss your previous work in detail. Know the challenges you faced, how you solved them, and what you learned. Use the STAR method (Situation, Task, Action, Result) to structure your responses.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">8. Study the Company</h2>
              <p class="mb-4">Research the company's products, technologies, and culture. This will help you tailor your answers and ask insightful questions at the end of the interview.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">9. Mock Interviews</h2>
              <p class="mb-4">Conduct mock interviews with friends or mentors, or use services like Pramp or Interviewing.io. Simulating the interview environment helps reduce anxiety and improves performance.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">10. Take Care of Yourself</h2>
              <p class="mb-4">Ensure you're well-rested and mentally prepared on the day of the interview. Avoid cramming the night before, and take time to relax and clear your mind.</p>
              
              <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
              <p class="mb-4">Technical interviews are not just about testing your knowledge; they assess your problem-solving abilities, communication skills, and how you handle pressure. By following these tips and maintaining a positive mindset, you'll be well-equipped to succeed in your technical interviews and take the next step in your career.</p>`,
    excerpt: "Prepare for your next technical interview with these proven strategies and approaches that will help you stand out from the competition.",
    author: "Vikram Singh",
    date: "Apr 15, 2023",
    category: "Interview Tips",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["interviews", "career", "technical"]
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

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-60"></div>
              <div className="h-4 bg-gray-200 rounded w-40"></div>
              <div className="h-4 bg-gray-200 rounded w-80"></div>
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
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/blog">Back to All Blogs</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-6">
        <div className="container-custom">
          <Link to="/blog" className="flex items-center text-brand-red hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to all articles
          </Link>
        </div>
      </div>

      {/* Blog Header */}
      <div 
        className="w-full h-[40vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container-custom text-white">
            <Badge className="mb-4">{blog.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">{blog.title}</h1>
            <div className="flex items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          
          <div className="mt-12 border-t pt-6">
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="font-medium">Tags:</span>
              {blog.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="bg-gray-100">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Button asChild className="bg-brand-red hover:bg-red-700">
              <Link to="/book">Book a Career Session</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
