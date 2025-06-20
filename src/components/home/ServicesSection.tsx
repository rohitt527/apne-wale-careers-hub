
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, BrainCircuit, Rocket, Target, CheckCircle, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
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
        image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        gradient: "from-blue-500 to-blue-600",
        bgGradient: "from-blue-50 to-blue-100/50"
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
        image: "https://images.unsplash.com/photo-1521798552670-919e6bfcc09e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        gradient: "from-purple-500 to-purple-600",
        bgGradient: "from-purple-50 to-purple-100/50"
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
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        gradient: "from-green-500 to-green-600",
        bgGradient: "from-green-50 to-green-100/50"
      }
    ]);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-blue-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-blue-100 shadow-lg">
            <Sparkles className="w-5 h-5 animate-pulse" />
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Comprehensive Career
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Expert guidance and resources tailored to accelerate your professional growth and unlock new opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 overflow-hidden transform hover:-translate-y-2" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.bgGradient} opacity-20 group-hover:opacity-40 transition-all duration-700`}></div>
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className={`text-white bg-gradient-to-r ${service.gradient} rounded-xl p-3`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-xl transition-all duration-500 rounded-2xl py-6 text-lg font-semibold shadow-lg`}>
                  <Link to={service.link} className="flex items-center justify-center gap-3">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-16 py-6 text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 rounded-2xl">
            <Link to="/services" className="flex items-center gap-4">
              Explore All Services
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
