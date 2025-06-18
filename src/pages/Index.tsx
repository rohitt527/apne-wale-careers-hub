import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import TestimonialCard from "@/components/common/TestimonialCard";
import BlogCard from "@/components/common/BlogCard";
import StudyMaterialCard from "@/components/common/StudyMaterialCard";
import Counter from "@/components/common/Counter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Users, BookOpen, Award, Code, BrainCircuit, Rocket } from "lucide-react";

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

const Index = () => {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch services, testimonials, and blog posts from an API or other data source
    setServices([
      {
        id: 1,
        title: "Assessment Support",
        description: "Get expert help with your technical assessments and coding challenges to ace your interviews.",
        icon: <Code className="h-10 w-10" />,
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
        icon: <BrainCircuit className="h-10 w-10" />,
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
        icon: <Rocket className="h-10 w-10" />,
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

    setTestimonials([
      {
        id: 1,
        name: "Priya Sharma",
        role: "Software Engineer",
        company: "Google",
        testimonial: "The mock interviews and assessment support from Apne Wale Coders were instrumental in my journey to landing a job at Google. Their feedback was specific and actionable.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        id: 2,
        name: "Raj Kumar",
        role: "Frontend Developer",
        company: "Microsoft",
        testimonial: "I was struggling with system design interviews until I joined their interview preparation program. The mentors provided incredible insights that helped me ace my interviews.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        id: 3,
        name: "Neha Patel",
        role: "Data Scientist",
        company: "Amazon",
        testimonial: "The career guidance I received was personalized and practical. They helped me pivot from a traditional IT role to becoming a data scientist at Amazon.",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
      }
    ]);

    setBlogPosts([
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
      }
    ]);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Transform Your Career with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600"> Expert Guidance</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Get personalized career coaching, interview preparation, and access to premium study materials to accelerate your professional growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/services" className="flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Users className="w-12 h-12 text-blue-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">
                  <Counter end={5000} duration={2000} />+
                </div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Star className="w-12 h-12 text-yellow-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">4.9</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <BookOpen className="w-12 h-12 text-green-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">
                  <Counter end={500} duration={2000} />+
                </div>
                <div className="text-gray-300">Study Materials</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Award className="w-12 h-12 text-red-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">
                  <Counter end={95} duration={2000} />%
                </div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Services" 
            subtitle="Comprehensive career development solutions tailored for your success"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Study Materials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Featured Study Materials" 
            subtitle="Access premium educational content to boost your skills and knowledge"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStudyMaterials.map((material, index) => (
              <div key={material.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <StudyMaterialCard {...material} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button size="lg" variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/study-material" className="flex items-center gap-2">
                Browse All Materials
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <SectionHeading 
            title="Why Choose Apne Wale Careers" 
            subtitle="We're committed to your success with proven strategies and personalized support"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Proven Track Record",
                description: "95% success rate in interview preparation and career advancement"
              },
              {
                icon: Users,
                title: "Expert Mentors",
                description: "Learn from industry professionals with years of experience"
              },
              {
                icon: BookOpen,
                title: "Premium Content",
                description: "Access exclusive study materials and resources"
              },
              {
                icon: Award,
                title: "Personalized Approach",
                description: "Customized coaching plans tailored to your career goals"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-red to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-custom">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Real success stories from professionals who transformed their careers"
            className="text-white"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Latest Career Insights" 
            subtitle="Stay updated with industry trends and career advice from our experts"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Button size="lg" variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/blog" className="flex items-center gap-2">
                Read More Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-red to-red-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Join thousands of professionals who have accelerated their careers with our expert guidance and premium resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-red hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/services" className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-red">
                <Link to="/study-material">Explore Study Materials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
