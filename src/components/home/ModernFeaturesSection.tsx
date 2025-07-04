
import { Code, Users, Target, Award, ArrowRight, Sparkles } from 'lucide-react';

interface ModernFeaturesSectionProps {
  isVisible: boolean;
}

const ModernFeaturesSection = ({ isVisible }: ModernFeaturesSectionProps) => {
  const features = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Master coding interviews with expert guidance and real-world practice sessions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description: "Practice with industry veterans and get detailed feedback to improve your performance.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Career Guidance",
      description: "Get personalized career roadmaps and strategies to reach your professional goals.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Premium Resources",
      description: "Access exclusive study materials and tools designed by industry experts.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Succeed in Your Career
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and guidance you need to accelerate your professional growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 flex items-center gap-2 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturesSection;
