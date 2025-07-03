
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, BrainCircuit, Rocket, Target, CheckCircle, Sparkles, Star, Users, Zap } from "lucide-react";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices([
      {
        id: 1,
        title: "Assessment Support",
        description: "Master technical assessments with expert guidance and personalized feedback to excel in your interviews.",
        icon: <Code className="h-8 w-8" />,
        link: "/services#assessment",
        features: [
          "Technical Assessment Reviews",
          "Problem-Solving Sessions", 
          "Code Quality Analysis",
          "System Design Feedback"
        ],
        image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        gradient: "from-blue-500 to-indigo-600",
        bgGradient: "from-blue-50/50 to-indigo-50/30",
        iconBg: "from-blue-500 to-indigo-600"
      },
      {
        id: 2,
        title: "Mock Interviews",
        description: "Practice with industry veterans and receive real-time feedback to boost your interview confidence.",
        icon: <BrainCircuit className="h-8 w-8" />,
        link: "/services#interviews",
        features: [
          "Role-Specific Interviews",
          "Company-Specific Preparation",
          "Behavioral Interview Practice", 
          "Detailed Performance Analysis"
        ],
        image: "https://images.unsplash.com/photo-1521798552670-919e6bfcc09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        gradient: "from-purple-500 to-pink-600",
        bgGradient: "from-purple-50/50 to-pink-50/30",
        iconBg: "from-purple-500 to-pink-600"
      },
      {
        id: 3,
        title: "Career Guidance",
        description: "Get personalized roadmaps, strategic advice, and expert insights to accelerate your career growth.",
        icon: <Rocket className="h-8 w-8" />,
        link: "/services#career",
        features: [
          "Resume & LinkedIn Reviews",
          "Career Path Mapping",
          "Salary Negotiation Advice",
          "Job Search Strategy"
        ],
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        gradient: "from-emerald-500 to-teal-600",
        bgGradient: "from-emerald-50/50 to-teal-50/30",
        iconBg: "from-emerald-500 to-teal-600"
      }
    ]);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-100/80 shadow-lg">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Our Services
            <Target className="w-4 h-4" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive Career
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Expert guidance and premium resources designed to accelerate your professional growth
          </p>
          
          {/* Service stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-blue-600" />
                <div className="text-2xl font-bold text-blue-600">5000+</div>
              </div>
              <div className="text-gray-600 text-sm font-medium">Clients Served</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <div className="text-2xl font-bold text-yellow-600">4.9</div>
              </div>
              <div className="text-gray-600 text-sm font-medium">Average Rating</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-purple-600" />
                <div className="text-2xl font-bold text-purple-600">95%</div>
              </div>
              <div className="text-gray-600 text-sm font-medium">Success Rate</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 overflow-hidden transform hover:-translate-y-3" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.bgGradient} opacity-40 group-hover:opacity-60 transition-all duration-700`}></div>
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <div className={`text-white bg-gradient-to-r ${service.iconBg} rounded-xl p-3`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-xl transition-all duration-500 rounded-2xl py-6 text-base font-semibold shadow-lg group-hover:scale-105`}>
                  <Link to={service.link} className="flex items-center justify-center gap-3">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg font-semibold shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 rounded-2xl">
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
