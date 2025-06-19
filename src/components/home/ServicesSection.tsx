
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, BrainCircuit, Rocket, Target, Sparkles, CheckCircle } from "lucide-react";
import ServiceCard from "@/components/common/ServiceCard";

const ServicesSection = () => {
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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-100/50 to-blue-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200">
            <Target className="w-5 h-5" />
            <Sparkles className="w-4 h-4 animate-pulse" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive Career
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Expert guidance and resources tailored to accelerate your professional growth and unlock new opportunities
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Expert Mentors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Proven Results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="animate-fade-in transform transition-all duration-500 hover:scale-105" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                    <Link to={service.link} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl">
            <Link to="/services" className="flex items-center gap-3">
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
