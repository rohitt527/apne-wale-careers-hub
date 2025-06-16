
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  Code, 
  Users, 
  BookOpen, 
  Target, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Zap,
  BrainCircuit,
  Rocket,
  Award,
  Clock,
  Globe,
  Shield,
  Sparkles,
  TrendingUp
} from "lucide-react";

const Services = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const serviceId = searchParams.get('service');
    const directPay = searchParams.get('direct-pay');
    
    if (serviceId && directPay === 'true') {
      navigate(`/payment?serviceId=${serviceId}&direct=true`);
      
      toast({
        title: "Direct payment",
        description: "Proceeding to payment for selected service.",
      });
    }
  }, [searchParams, navigate, toast]);

  const services = [
    {
      id: 1,
      title: "Technical Assessment Support",
      description: "Master coding challenges and technical assessments with expert guidance and personalized feedback from industry professionals.",
      icon: <Code className="w-8 h-8" />,
      price: "₹2,999",
      duration: "1-2 Sessions",
      features: [
        "Algorithm optimization strategies",
        "Data structure implementation",
        "System design fundamentals",
        "Real-time code reviews",
        "Performance optimization techniques"
      ],
      color: "from-blue-500 to-purple-600",
      delay: "delay-100"
    },
    {
      id: 2,
      title: "Mock Interview Sessions",
      description: "Practice with industry experts in realistic interview scenarios to build confidence and improve your performance.",
      icon: <Users className="w-8 h-8" />,
      price: "₹1,999",
      duration: "60-90 Minutes",
      features: [
        "Role-specific interview practice",
        "Behavioral question preparation",
        "Technical problem solving",
        "Communication skills development",
        "Instant feedback and improvement tips"
      ],
      color: "from-green-500 to-emerald-600",
      delay: "delay-200"
    },
    {
      id: 3,
      title: "Career Mentorship",
      description: "Get personalized career guidance from seasoned professionals to accelerate your growth in the tech industry.",
      icon: <Target className="w-8 h-8" />,
      price: "₹4,999",
      duration: "Monthly Program",
      features: [
        "Career path planning",
        "Skill gap analysis",
        "Industry insights and trends",
        "Networking opportunities",
        "Long-term career strategy"
      ],
      color: "from-orange-500 to-red-600",
      delay: "delay-300"
    },
    {
      id: 4,
      title: "Resume & Portfolio Review",
      description: "Transform your professional profile with expert reviews that highlight your strengths and attract recruiters.",
      icon: <BookOpen className="w-8 h-8" />,
      price: "₹999",
      duration: "Same Day",
      features: [
        "ATS-optimized resume formatting",
        "Professional portfolio enhancement",
        "LinkedIn profile optimization",
        "Cover letter templates",
        "Industry-specific customization"
      ],
      color: "from-pink-500 to-purple-600",
      delay: "delay-400"
    }
  ];

  const stats = [
    { number: "5000+", label: "Students Mentored", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
    { number: "500+", label: "Companies Hired", icon: <Globe className="w-6 h-6" /> },
    { number: "4.9/5", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Expert Mentors",
      description: "Learn from industry professionals with years of experience at top tech companies",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Personalized Approach",
      description: "Tailored guidance based on your specific goals, skills, and career aspirations",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Proven Results",
      description: "Our students consistently land roles at top companies with competitive packages",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Flexible Scheduling",
      description: "Book sessions at your convenience with mentors across different time zones",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-brand-dark via-gray-900 to-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-brand-red/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-l from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating particles */}
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
          {/* Trust Badge */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-full px-8 py-3 mb-8 shadow-2xl hover:shadow-brand-red/25 transition-all duration-500 hover:scale-105 group">
              <Sparkles className="w-5 h-5 text-brand-red group-hover:animate-spin transition-transform duration-500" />
              <span className="text-sm font-medium">Professional Career Services</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="heading-xl max-w-6xl animate-slide-up delay-200 mb-8 leading-[1.1]">
            <span className="block mb-4">
              Transform Your{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-pink-500 to-red-400 animate-glow">
                  Tech Career
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-pink-500 to-red-400 rounded-full animate-scale-in delay-1000"></div>
              </span>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
              with Expert Guidance
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl max-w-4xl mt-8 mb-12 text-gray-300 animate-slide-up delay-300 leading-relaxed font-light">
            From technical assessments to career mentorship, our comprehensive services are designed to 
            <span className="text-brand-red font-medium"> accelerate your success</span> in the competitive tech industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up delay-500 mb-16">
            <Button asChild size="lg" className="relative bg-gradient-to-r from-brand-red via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white shadow-2xl hover:shadow-brand-red/40 transform hover:scale-110 transition-all duration-500 px-10 py-6 text-lg group overflow-hidden">
              <Link to="#services" className="flex items-center gap-3">
                <Zap className="w-6 h-6 group-hover:animate-pulse" />
                Explore Services
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-brand-dark transition-all duration-500 transform hover:scale-110 px-10 py-6 text-lg group">
              <Link to="/pricing" className="flex items-center gap-3">
                <Rocket className="w-6 h-6 group-hover:animate-pulse" />
                View Pricing
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in delay-700">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-110">
                  <div className="flex justify-center mb-3 text-brand-red group-hover:animate-bounce">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold mb-2 text-white">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
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
              <BrainCircuit className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="heading-lg mb-6">
              Comprehensive Career Support for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-pink-600"> Every Stage</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose from our range of professional services designed to accelerate your tech career growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {services.map((service, index) => (
              <div key={service.id} className={`animate-slide-up ${service.delay} group`}>
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-all duration-500`}></div>
                  <Card className="relative h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                          <div className="text-sm text-gray-500">{service.duration}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-3 group-hover:text-brand-red transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className={`w-full bg-gradient-to-r ${service.color} hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                        <Link to={`/booking?service=${service.id}`} className="flex items-center justify-center gap-2">
                          Book Now
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-brand-red via-red-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20">
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

        <div className="container-custom relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-lg text-white mb-6">
              Why Choose <span className="text-yellow-300">Our Services?</span>
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              We're committed to your success with proven methodologies and personalized support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`animate-slide-up delay-${(index + 1) * 100} group`}>
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:rotate-1 shadow-2xl group-hover:shadow-white/20">
                  <div className="text-yellow-300 mb-4 group-hover:animate-bounce">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-red-100 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-brand-red/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="heading-lg mb-8">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join thousands of successful professionals who transformed their careers with our expert guidance.
              <span className="text-brand-red font-medium"> Start your journey today!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-brand-red via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white shadow-2xl hover:shadow-brand-red/40 transition-all duration-500 transform hover:scale-110 px-10 py-6 text-lg group">
                <Link to="/booking" className="flex items-center gap-3">
                  <Zap className="w-6 h-6 group-hover:animate-pulse" />
                  Book a Service
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-brand-dark transition-all duration-500 transform hover:scale-110 px-10 py-6 text-lg group">
                <Link to="/about" className="flex items-center gap-3">
                  <Users className="w-6 h-6 group-hover:animate-pulse" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
