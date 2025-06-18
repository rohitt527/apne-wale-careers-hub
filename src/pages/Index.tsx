
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import BlogCard from "@/components/common/BlogCard";
import StudyMaterialCard from "@/components/common/StudyMaterialCard";
import JobCard from "@/components/common/JobCard";
import Counter from "@/components/common/Counter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Users, BookOpen, Award, Code, BrainCircuit, Rocket, Briefcase, TrendingUp, Target } from "lucide-react";

// Featured blogs data
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

// Sample study materials data
const featuredStudyMaterials = [
  {
    id: 1,
    title: "The Ultimate Guide to React",
    description: "A comprehensive guide for React developers, covering everything from the basics to advanced topics.",
    category: "Technology",
    level: "Intermediate",
    downloadCount: 12000,
    rating: 4.7,
    isPremium: false,
    price: 0,
    tags: ["React", "JavaScript", "Frontend"],
    author: "John Doe",
    publishDate: "2023-03-15",
    estimatedTime: "6-8 hours",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    title: "Advanced Interview Mastery Guide",
    description: "Comprehensive guide covering advanced interview techniques and salary negotiation strategies.",
    category: "Premium",
    level: "Advanced",
    downloadCount: 5000,
    rating: 4.9,
    isPremium: true,
    price: 49.99,
    originalPrice: 99.99,
    tags: ["Interview", "Career Growth"],
    author: "Career Experts",
    publishDate: "2024-01-15",
    estimatedTime: "8-10 hours",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Business Strategy Essentials",
    description: "Essential guide for business professionals covering key strategic decision-making frameworks.",
    category: "Business",
    level: "Intermediate",
    downloadCount: 9800,
    rating: 4.5,
    isPremium: false,
    price: 0,
    tags: ["Business", "Strategy", "Management"],
    author: "David Johnson",
    publishDate: "2023-07-01",
    estimatedTime: "5-7 hours",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  }
];

// Featured jobs data
const featuredJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Google",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3+ years",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=100&q=80",
    tags: ["React", "Node.js", "Python"],
    postedDate: "2 days ago"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Microsoft",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "2+ years",
    logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&w=100&q=80",
    tags: ["React", "TypeScript", "Azure"],
    postedDate: "1 week ago"
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    location: "Chennai, India",
    type: "Full-time",
    experience: "4+ years",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=100&q=80",
    tags: ["Python", "Machine Learning", "AWS"],
    postedDate: "3 days ago"
  }
];

const Index = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices([
      {
        id: 1,
        title: "Assessment Support",
        description: "Get expert help with your technical assessments and coding challenges to ace your interviews.",
        icon: <Code className="h-8 w-8" />,
        link: "/services#assessment",
        features: [
          "Technical Assessment Reviews",
          "Problem-Solving Sessions",
          "Code Quality Analysis",
          "System Design Feedback"
        ],
        image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: 2,
        title: "Mock Interviews",
        description: "Practice with industry experts who provide real-time feedback to improve your interview skills.",
        icon: <BrainCircuit className="h-8 w-8" />,
        link: "/services#interviews",
        features: [
          "Role-Specific Interviews",
          "Company-Specific Preparation",
          "Behavioral Interview Practice",
          "Detailed Performance Analysis"
        ],
        image: "https://images.unsplash.com/photo-1521798552670-919e6bfcc09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: 3,
        title: "Career Guidance",
        description: "Personalized advice on career paths, skill development, and job hunting strategies.",
        icon: <Rocket className="h-8 w-8" />,
        link: "/services#career",
        features: [
          "Resume & LinkedIn Reviews",
          "Career Path Mapping",
          "Salary Negotiation Advice",
          "Job Search Strategy"
        ],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      }
    ]);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 animate-fade-in">
              Accelerate Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block mt-2">
                Career Journey
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
              Transform your professional future with expert guidance, premium resources, and opportunities that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl">
                <Link to="/services" className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                <Link to="/jobs">Explore Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="container-custom mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: "800ms" }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">
                  <Counter end={5000} duration={2000} />+
                </div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "900ms" }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">4.9</div>
                <div className="text-gray-300 text-sm">Average Rating</div>
              </div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "1000ms" }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">
                  <Counter end={500} duration={2000} />+
                </div>
                <div className="text-gray-300 text-sm">Study Materials</div>
              </div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "1100ms" }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">
                  <Counter end={95} duration={2000} />%
                </div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Target className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Career Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guidance and resources tailored to accelerate your professional growth
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              <Link to="/services" className="flex items-center gap-2">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Study Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              Study Materials
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Premium Learning Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive study materials to boost your skills and knowledge
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredStudyMaterials.map((material, index) => (
              <div key={material.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <StudyMaterialCard {...material} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3">
              <Link to="/study-material" className="flex items-center gap-2">
                Browse All Materials
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Job Postings Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Briefcase className="w-4 h-4" />
              Job Opportunities
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Latest Career Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting job openings from top companies and startups
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredJobs.map((job, index) => (
              <div key={job.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <JobCard {...job} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
              <Link to="/jobs" className="flex items-center gap-2">
                View All Jobs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers with our expert guidance and premium resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Link to="/services" className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <Link to="/study-material">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
