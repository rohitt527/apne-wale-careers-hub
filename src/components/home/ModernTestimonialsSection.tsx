
import { Star, Quote } from 'lucide-react';

interface ModernTestimonialsSectionProps {
  isVisible: boolean;
}

const ModernTestimonialsSection = ({ isVisible }: ModernTestimonialsSectionProps) => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2e2c8d9?auto=format&fit=crop&w=150&q=80",
      content: "The mock interviews were incredibly helpful. The feedback was detailed and actionable, which helped me land my dream job at Google.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Data Scientist at Microsoft",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      content: "Amazing platform! The career guidance sessions completely transformed my approach to job hunting. Highly recommended!",
      rating: 5
    },
    {
      name: "Ananya Patel",
      role: "Product Manager at Amazon",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "The study materials are top-notch and the mentorship program is exceptional. It's worth every penny invested.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What Our
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories Say
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-blue-400 opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/90 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonialsSection;
