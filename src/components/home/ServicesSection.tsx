
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, BrainCircuit, Rocket, Target, CheckCircle, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ServicesSectionProps {
  isVisible: boolean;
}

const ServicesSection = ({ isVisible }: ServicesSectionProps) => {
  const [services, setServices] = useState([]);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  useEffect(() => {
    setServices([
      {
        id: 1,
        title: "Technical Assessment Support",
        description: "Master technical assessments with expert guidance and personalized feedback to excel in your interviews and coding challenges.",
        icon: <Code className="h-10 w-10" />,
        link: "/services#assessment",
        features: [
          "Live Code Review Sessions",
          "Algorithm & Data Structure Mastery", 
          "System Design Workshops",
          "Technical Interview Prep"
        ],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
        gradient: "from-blue-500 to-blue-600",
        bgGradient: "from-blue-500/10 to-blue-600/5"
      },
      {
        id: 2,
        title: "Professional Mock Interviews",
        description: "Practice with industry veterans and receive real-time feedback to boost your confidence and interview performance.",
        icon: <BrainCircuit className="h-10 w-10" />,
        link: "/services#interviews",
        features: [
          "Industry-Specific Scenarios",
          "Behavioral Interview Training",
          "Communication Skills Development", 
          "Performance Analytics & Feedback"
        ],
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
        gradient: "from-purple-500 to-purple-600",
        bgGradient: "from-purple-500/10 to-purple-600/5"
      },
      {
        id: 3,
        title: "Strategic Career Guidance",
        description: "Get personalized roadmaps and expert insights to accelerate your career growth and achieve your professional goals.",
        icon: <Rocket className="h-10 w-10" />,
        link: "/services#career",
        features: [
          "Career Path Planning",
          "Resume & Portfolio Optimization",
          "Salary Negotiation Mastery",
          "Leadership Development"
        ],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        gradient: "from-emerald-500 to-emerald-600",
        bgGradient: "from-emerald-500/10 to-emerald-600/5"
      }
    ]);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-blue-100/80 shadow-lg">
            <Sparkles className="w-5 h-5 animate-pulse" />
            Our Premium Services
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Comprehensive Career
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mt-2">
              Solutions
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Expert guidance and premium resources designed to accelerate your professional growth and career success
          </p>
        </div>
        
        <div 
          ref={servicesRef}
          className="grid lg:grid-cols-3 gap-10 mb-20"
        >
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group bg-white rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 overflow-hidden transform hover:-translate-y-2 ${
                servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: servicesVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.bgGradient} opacity-60 group-hover:opacity-80 transition-all duration-700`}></div>
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <div className={`text-white bg-gradient-to-r ${service.gradient} rounded-2xl p-4`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-xl transition-all duration-500 rounded-2xl py-6 text-lg font-semibold shadow-lg group-hover:scale-105`}>
                  <Link to={service.link} className="flex items-center justify-center gap-3">
                    Explore Service
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-16 py-8 text-xl font-semibold shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 rounded-2xl">
            <Link to="/services" className="flex items-center gap-4">
              View All Services
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
