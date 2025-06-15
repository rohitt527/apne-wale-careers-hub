import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import TestimonialCard from "@/components/common/TestimonialCard";
import Counter from "@/components/common/Counter";
import JobCard from "@/components/common/JobCard";
import BlogCard from "@/components/common/BlogCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Star, Users, Award, Target, TrendingUp, CheckCircle, Sparkles, Zap, Shield, Rocket, Globe, Code, BrainCircuit } from "lucide-react";

// Mock data for blogs - Adding a small subset for home page display
const featuredBlogs = [
  {
    id: 1,
    title: "10 Essential Tips for Technical Interviews",
    excerpt: "Prepare for your next technical interview with these proven strategies and approaches that will help you stand out from the competition.",
    author: "Vikram Singh",
    date: "Apr 15, 2023",
    category: "Interview Tips",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Understanding System Design: A Beginner's Guide",
    excerpt: "System design is a critical skill for senior engineering roles. Learn the fundamental concepts and frameworks to approach any system design problem.",
    author: "Ananya Mehta",
    date: "Mar 22, 2023",
    category: "Tech Concepts",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "How I Landed My Dream Job at Google",
    excerpt: "A personal journey through the preparation, application, and interview process that led to a successful role at one of tech's biggest companies.",
    author: "Priya Sharma",
    date: "Mar 5, 2023",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    readTime: "6 min read"
  },
];

const Home = () => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    
    if (email) {
      window.open(`mailto:apnewalecoders@gmail.com?subject=${encodeURIComponent('New Subscription')}&body=${encodeURIComponent(`New subscription from: ${email}`)}`);
      
      toast({
        title: "Subscribed!",
        description: "Thank you for joining our community!",
      });
      form.reset();
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          {/* Primary gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-brand-red/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-l from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Secondary gradient effects */}
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-violet-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse delay-300"></div>
        </div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-white/40 to-brand-red/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${4 + Math.random() * 8}px`,
                height: `${4 + Math.random() * 8}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 6}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container-custom relative z-10 py-20 lg:py-32 flex flex-col items-center text-center">
          {/* Trust badge with enhanced animation */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-full px-8 py-3 mb-8 shadow-2xl hover:shadow-brand-red/25 transition-all duration-500 hover:scale-105 group">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-brand-red group-hover:animate-spin transition-transform duration-500" />
                <div className="absolute inset-0 bg-brand-red/20 rounded-full blur-md"></div>
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Trusted by 5000+ Tech Professionals
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Main heading with enhanced typography */}
          <h1 className="heading-xl max-w-6xl animate-slide-up delay-200 mb-8 leading-[1.1]">
            <span className="block mb-4">
              Accelerate Your{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-pink-500 to-red-400 animate-glow">
                  Tech Career
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-pink-500 to-red-400 rounded-full animate-scale-in delay-1000"></div>
                <div className="absolute -top-1 -right-2">
                  <Rocket className="w-8 h-8 text-brand-red animate-bounce delay-1500" />
                </div>
              </span>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
              with Expert Guidance
            </span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl max-w-4xl mt-8 mb-12 text-gray-300 animate-slide-up delay-300 leading-relaxed font-light">
            Get personalized mentoring, ace your interviews, and land your dream job with our 
            <span className="text-brand-red font-medium"> comprehensive career support platform</span>. 
            Join thousands of successful professionals who transformed their careers with us.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up delay-500 mb-16">
            <Button asChild size="lg" className="relative bg-gradient-to-r from-brand-red via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white shadow-2xl hover:shadow-brand-red/40 transform hover:scale-110 transition-all duration-500 px-10 py-6 text-lg group overflow-hidden">
              <Link to="/services" className="flex items-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Zap className="w-6 h-6 group-hover:animate-pulse" />
                Explore Services
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-brand-dark transition-all duration-500 transform hover:scale-110 px-10 py-6 text-lg group">
              <Link to="/about" className="flex items-center gap-3">
                <Shield className="w-6 h-6 group-hover:animate-pulse" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Enhanced trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-12 text-base text-gray-300 animate-fade-in delay-700">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 group">
              <div className="relative">
                <Star className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-spin" />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md"></div>
              </div>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 group">
              <div className="relative">
                <Users className="w-5 h-5 text-blue-400 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md"></div>
              </div>
              <span className="font-medium">5000+ Students</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 group">
              <div className="relative">
                <Award className="w-5 h-5 text-green-400 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-md"></div>
              </div>
              <span className="font-medium">98% Success Rate</span>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center group hover:border-brand-red transition-colors duration-300">
            <div className="w-1.5 h-4 bg-gradient-to-b from-white to-brand-red rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent"></div>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-red/10 to-pink-500/10 text-brand-red rounded-full px-6 py-3 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Target className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="heading-lg mb-6">
              Comprehensive Career Support for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-pink-600"> Every Stage</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From interview preparation to career guidance, we provide end-to-end support to help you succeed in your tech journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="animate-slide-up delay-100 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <ServiceCard
                  title="Assessment Support"
                  description="Get expert help with your technical assessments and coding challenges to ace your interviews."
                  icon={
                    <div className="relative">
                      <Code className="h-10 w-10" />
                      <div className="absolute inset-0 bg-brand-red/20 rounded-full blur-md"></div>
                    </div>
                  }
                  link="/services#assessment"
                  features={[
                    "Technical Assessment Reviews",
                    "Problem-Solving Sessions",
                    "Code Quality Analysis",
                    "System Design Feedback"
                  ]}
                  image="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
              </div>
            </div>
            
            <div className="animate-slide-up delay-200 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <ServiceCard
                  title="Mock Interviews"
                  description="Practice with industry experts who provide real-time feedback to improve your interview skills."
                  icon={
                    <div className="relative">
                      <BrainCircuit className="h-10 w-10" />
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"></div>
                    </div>
                  }
                  link="/services#interviews"
                  features={[
                    "Role-Specific Interviews",
                    "Company-Specific Preparation",
                    "Behavioral Interview Practice",
                    "Detailed Performance Analysis"
                  ]}
                  image="https://images.unsplash.com/photo-1521798552670-919e6bfcc09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
              </div>
            </div>
            
            <div className="animate-slide-up delay-300 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <ServiceCard
                  title="Career Guidance"
                  description="Personalized advice on career paths, skill development, and job hunting strategies."
                  icon={
                    <div className="relative">
                      <Rocket className="h-10 w-10" />
                      <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md"></div>
                    </div>
                  }
                  link="/services#career"
                  features={[
                    "Resume & LinkedIn Reviews",
                    "Career Path Mapping",
                    "Salary Negotiation Advice",
                    "Job Search Strategy"
                  ]}
                  image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 animate-fade-in delay-600">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-red to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 px-8 py-6 text-lg group">
              <Link to="/services" className="flex items-center gap-3">
                <Globe className="w-6 h-6 group-hover:animate-spin" />
                View All Services
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-brand-red via-red-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(48)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-r from-white/20 to-transparent rounded animate-pulse" 
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-6 animate-fade-in">
              Trusted by <span className="text-yellow-300">Thousands</span>
            </h2>
            <p className="text-2xl text-red-100 animate-slide-up delay-200">
              Join our community of successful tech professionals
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-scale-in delay-100 group">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:rotate-1 shadow-2xl group-hover:shadow-white/20">
                <div className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                  <Counter end={5000} suffix="+" />
                </div>
                <p className="text-xl font-medium text-red-100">Learners Helped</p>
                <div className="mt-4 flex justify-center">
                  <Users className="w-8 h-8 text-yellow-300 group-hover:animate-bounce" />
                </div>
              </div>
            </div>
            <div className="animate-scale-in delay-200 group">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:rotate-1 shadow-2xl group-hover:shadow-white/20">
                <div className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                  <Counter end={1200} suffix="+" />
                </div>
                <p className="text-xl font-medium text-red-100">Mock Interviews</p>
                <div className="mt-4 flex justify-center">
                  <BrainCircuit className="w-8 h-8 text-blue-300 group-hover:animate-pulse" />
                </div>
              </div>
            </div>
            <div className="animate-scale-in delay-300 group">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:rotate-1 shadow-2xl group-hover:shadow-white/20">
                <div className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                  <Counter end={850} suffix="+" />
                </div>
                <p className="text-xl font-medium text-red-100">Job Placements</p>
                <div className="mt-4 flex justify-center">
                  <Award className="w-8 h-8 text-green-300 group-hover:animate-spin" />
                </div>
              </div>
            </div>
            <div className="animate-scale-in delay-400 group">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:rotate-1 shadow-2xl group-hover:shadow-white/20">
                <div className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                  <Counter end={98} suffix="%" />
                </div>
                <p className="text-xl font-medium text-red-100">Satisfaction Rate</p>
                <div className="mt-4 flex justify-center">
                  <Star className="w-8 h-8 text-purple-300 group-hover:animate-bounce fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-green-500 to-emerald-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full px-6 py-3 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-semibold">Job Opportunities</span>
            </div>
            <h2 className="heading-lg mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Job Openings</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover exciting opportunities from top tech companies and innovative startups
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mb-12 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-2 rounded-2xl animate-slide-up delay-100 shadow-lg">
              <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all duration-300">All Jobs</TabsTrigger>
              <TabsTrigger value="remote" className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all duration-300">Remote</TabsTrigger>
              <TabsTrigger value="fulltime" className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all duration-300">Full Time</TabsTrigger>
              <TabsTrigger value="contract" className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all duration-300">Contract</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="animate-slide-up delay-200 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <JobCard
                    id={1}
                    title="Senior Frontend Developer"
                    company="TechCorp Inc"
                    location="Remote"
                    type="Full-time"
                    experience="3-5 years"
                    logo="https://via.placeholder.com/100x100.png?text=TC"
                    tags={["React", "TypeScript", "UI/UX"]}
                    postedDate="2 days ago"
                  />
                </div>
              </div>
              <div className="animate-slide-up delay-300 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <JobCard
                    id={2}
                    title="Backend Engineer"
                    company="DataSys Solutions"
                    location="Bangalore, India"
                    type="Full-time"
                    experience="2-4 years"
                    logo="https://via.placeholder.com/100x100.png?text=DS"
                    tags={["Node.js", "MongoDB", "AWS"]}
                    postedDate="1 week ago"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="remote" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="animate-slide-up delay-200">
                <JobCard
                  id={1}
                  title="Senior Frontend Developer"
                  company="TechCorp Inc"
                  location="Remote"
                  type="Full-time"
                  experience="3-5 years"
                  logo="https://via.placeholder.com/100x100.png?text=TC"
                  tags={["React", "TypeScript", "UI/UX"]}
                  postedDate="2 days ago"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="fulltime" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="animate-slide-up delay-200">
                <JobCard
                  id={1}
                  title="Senior Frontend Developer"
                  company="TechCorp Inc"
                  location="Remote"
                  type="Full-time"
                  experience="3-5 years"
                  logo="https://via.placeholder.com/100x100.png?text=TC"
                  tags={["React", "TypeScript", "UI/UX"]}
                  postedDate="2 days ago"
                />
              </div>
              <div className="animate-slide-up delay-300">
                <JobCard
                  id={2}
                  title="Backend Engineer"
                  company="DataSys Solutions"
                  location="Bangalore, India"
                  type="Full-time"
                  experience="2-4 years"
                  logo="https://via.placeholder.com/100x100.png?text=DS"
                  tags={["Node.js", "MongoDB", "AWS"]}
                  postedDate="1 week ago"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="contract" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="col-span-2 py-16 text-center text-gray-500 animate-fade-in">
                <div className="bg-gray-50 rounded-2xl p-12 max-w-md mx-auto">
                  <CheckCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Contract Jobs Available</h3>
                  <p>Check back soon for new opportunities!</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center animate-fade-in delay-500">
            <Button asChild variant="outline" size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-500 transform hover:scale-110 px-8 py-6 text-lg group shadow-lg hover:shadow-xl">
              <Link to="/jobs" className="flex items-center gap-3">
                <Globe className="w-6 h-6 group-hover:animate-spin" />
                View All Jobs
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full px-6 py-3 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-5 h-5 animate-spin" />
              <span className="text-sm font-semibold">Latest Articles</span>
            </div>
            <h2 className="heading-lg mb-6">
              Career Insights & 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Expert Knowledge</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert insights, career advice, and technical tutorials to help you advance in your tech career
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredBlogs.map((blog, index) => (
              <div key={blog.id} className="animate-slide-up group" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <Link to={`/blog/${blog.id}`} className="block h-full">
                    <BlogCard
                      id={blog.id}
                      title={blog.title}
                      excerpt={blog.excerpt}
                      author={blog.author}
                      date={blog.date}
                      category={blog.category}
                      image={blog.image}
                      readTime={blog.readTime}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in delay-800">
            <Button asChild variant="outline" size="lg" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-500 transform hover:scale-110 px-8 py-6 text-lg group shadow-lg hover:shadow-xl">
              <Link to="/blog" className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                View All Articles
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="testimonials-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="2" fill="currentColor"/>
                <circle cx="50" cy="50" r="1" fill="currentColor"/>
                <circle cx="150" cy="150" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonials-pattern)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-600 rounded-full px-6 py-3 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Star className="w-5 h-5 animate-pulse fill-current" />
              <span className="text-sm font-semibold">Success Stories</span>
            </div>
            <h2 className="heading-lg mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Students Say</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hear from professionals who transformed their careers with our guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="animate-slide-up delay-100 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <TestimonialCard
                  name="Priya Sharma"
                  role="Software Engineer"
                  company="Google"
                  testimonial="The mock interviews and assessment support from Apne Wale Coders were instrumental in my journey to landing a job at Google. Their feedback was specific and actionable."
                  image="https://randomuser.me/api/portraits/women/44.jpg"
                />
              </div>
            </div>
            <div className="animate-slide-up delay-200 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <TestimonialCard
                  name="Raj Kumar"
                  role="Frontend Developer"
                  company="Microsoft"
                  testimonial="I was struggling with system design interviews until I joined their interview preparation program. The mentors provided incredible insights that helped me ace my interviews."
                  image="https://randomuser.me/api/portraits/men/32.jpg"
                />
              </div>
            </div>
            <div className="animate-slide-up delay-300 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <TestimonialCard
                  name="Neha Patel"
                  role="Data Scientist"
                  company="Amazon"
                  testimonial="The career guidance I received was personalized and practical. They helped me pivot from a traditional IT role to becoming a data scientist at Amazon."
                  image="https://randomuser.me/api/portraits/women/68.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-dark via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-brand-dark text-white relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-brand-red/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-white/60 to-brand-red/60 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-full px-8 py-3 mb-8 shadow-2xl">
              <Rocket className="w-6 h-6 text-brand-red animate-bounce" />
              <span className="text-lg font-semibold">Ready to Transform Your Career?</span>
            </div>
            
            <h2 className="heading-lg mb-8 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Join Our Community Today
            </h2>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Receive the latest job opportunities, tech insights, and career advice directly in your inbox. 
              <span className="text-brand-red font-medium"> Start your success journey now!</span>
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-6 max-w-3xl mx-auto mb-12">
              <Input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 backdrop-blur-lg flex-1 h-14 text-lg rounded-2xl focus:border-brand-red focus:ring-brand-red"
                required
              />
              <Button type="submit" size="lg" className="bg-gradient-to-r from-brand-red via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white shadow-2xl hover:shadow-brand-red/40 transition-all duration-500 transform hover:scale-110 px-10 py-6 text-lg rounded-2xl group">
                <Zap className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                Get Started
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
            
            <div className="flex flex-wrap items-center justify-center gap-12 text-gray-400">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 group">
                <CheckCircle className="w-5 h-5 text-green-400 group-hover:animate-pulse" />
                <span className="font-medium">No spam, ever</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 group">
                <CheckCircle className="w-5 h-5 text-green-400 group-hover:animate-pulse" />
                <span className="font-medium">Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 group">
                <CheckCircle className="w-5 h-5 text-green-400 group-hover:animate-pulse" />
                <span className="font-medium">Weekly career insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
