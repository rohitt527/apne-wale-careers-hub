
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, BrainCircuit, Rocket, Target } from "lucide-react";
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
  );
};

export default ServicesSection;
