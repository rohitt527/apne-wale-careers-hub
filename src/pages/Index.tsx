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
import { ArrowRight, Star, Users, Award, Target, TrendingUp, CheckCircle, Sparkles } from "lucide-react";

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
      <section className="relative min-h-screen bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark dark:from-gray-900 dark:via-black dark:to-gray-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container-custom relative z-10 py-20 lg:py-32 flex flex-col items-center text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-brand-red" />
              <span className="text-sm font-medium">Trusted by 5000+ Tech Professionals</span>
            </div>
          </div>
          
          <h1 className="heading-xl max-w-5xl animate-slide-up delay-200 mb-6">
            Accelerate Your 
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400"> Tech Career</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-red-400 rounded-full animate-scale-in delay-1000"></div>
            </span>
            <br />with Expert Guidance
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mt-6 mb-10 text-gray-200 animate-slide-up delay-300 leading-relaxed">
            Get personalized mentoring, ace your interviews, and land your dream job with our comprehensive career support platform. Join thousands of successful professionals who transformed their careers with us.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up delay-500 mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-2xl hover:shadow-brand-red/25 transform hover:scale-105 transition-all duration-300">
              <Link to="/services" className="flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300 animate-fade-in delay-700">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>5000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-green-400" />
              <span>98% Success Rate</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red rounded-full px-4 py-2 mb-4">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h2 className="heading-lg mb-4">
              Comprehensive Career Support for
              <span className="text-brand-red"> Every Stage</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From interview preparation to career guidance, we provide end-to-end support to help you succeed in your tech journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-slide-up delay-100">
              <ServiceCard
                title="Assessment Support"
                description="Get expert help with your technical assessments and coding challenges to ace your interviews."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
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
            
            <div className="animate-slide-up delay-200">
              <ServiceCard
                title="Mock Interviews"
                description="Practice with industry experts who provide real-time feedback to improve your interview skills."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 1 0 7.75" />
                    <path d="m9 16 2 2 4-4"></path>
                  </svg>
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
            
            <div className="animate-slide-up delay-300">
              <ServiceCard
                title="Career Guidance"
                description="Personalized advice on career paths, skill development, and job hunting strategies."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                    <path d="m9 16 2 2 4-4"></path>
                  </svg>
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
          
          <div className="text-center mt-12 animate-fade-in delay-600">
            <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-brand-red via-red-600 to-brand-red relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-8 gap-4 h-full">
              {[...Array(32)].map((_, i) => (
                <div key={i} className="bg-white/20 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-red-100">Join our community of successful tech professionals</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-scale-in delay-100">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  <Counter end={5000} suffix="+" />
                </div>
                <p className="text-lg">Learners Helped</p>
              </div>
            </div>
            <div className="animate-scale-in delay-200">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  <Counter end={1200} suffix="+" />
                </div>
                <p className="text-lg">Mock Interviews</p>
              </div>
            </div>
            <div className="animate-scale-in delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  <Counter end={850} suffix="+" />
                </div>
                <p className="text-lg">Job Placements</p>
              </div>
            </div>
            <div className="animate-scale-in delay-400">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  <Counter end={98} suffix="%" />
                </div>
                <p className="text-lg">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Job Opportunities</span>
            </div>
            <h2 className="heading-lg mb-4">
              Latest <span className="text-brand-red">Job Openings</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover exciting opportunities from top tech companies
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-8 bg-gray-100 p-1 rounded-xl animate-slide-up delay-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">All Jobs</TabsTrigger>
              <TabsTrigger value="remote" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Remote</TabsTrigger>
              <TabsTrigger value="fulltime" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Full Time</TabsTrigger>
              <TabsTrigger value="contract" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">Contract</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            <Button asChild variant="outline" size="lg" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-105">
              <Link to="/jobs" className="flex items-center gap-2">
                View All Jobs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Latest Articles</span>
            </div>
            <h2 className="heading-lg mb-4">
              Career Insights & 
              <span className="text-brand-red"> Expert Knowledge</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert insights, career advice, and technical tutorials to help you advance in your tech career
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, index) => (
              <div key={blog.id} className="animate-slide-up" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
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
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in delay-800">
            <Button asChild variant="outline" size="lg" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-105">
              <Link to="/blog" className="flex items-center gap-2">
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 rounded-full px-4 py-2 mb-4">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Success Stories</span>
            </div>
            <h2 className="heading-lg mb-4">
              What Our <span className="text-brand-red">Students Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who transformed their careers with our guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-slide-up delay-100">
              <TestimonialCard
                name="Priya Sharma"
                role="Software Engineer"
                company="Google"
                testimonial="The mock interviews and assessment support from Apne Wale Coders were instrumental in my journey to landing a job at Google. Their feedback was specific and actionable."
                image="https://randomuser.me/api/portraits/women/44.jpg"
              />
            </div>
            <div className="animate-slide-up delay-200">
              <TestimonialCard
                name="Raj Kumar"
                role="Frontend Developer"
                company="Microsoft"
                testimonial="I was struggling with system design interviews until I joined their interview preparation program. The mentors provided incredible insights that helped me ace my interviews."
                image="https://randomuser.me/api/portraits/men/32.jpg"
              />
            </div>
            <div className="animate-slide-up delay-300">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="heading-lg mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join our community and receive the latest job opportunities, tech insights, and career advice directly in your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <Input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm flex-1"
                required
              />
              <Button type="submit" size="lg" className="bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started
              </Button>
            </form>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Weekly career insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
