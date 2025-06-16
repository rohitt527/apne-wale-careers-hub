
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, Heart, Star, Users, Award } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Job Board", path: "/jobs" },
    { name: "Study Materials", path: "/study-material" },
  ];

  const services = [
    { name: "Assessment Support", path: "/services#assessment" },
    { name: "Mock Interviews", path: "/services#interviews" },
    { name: "Interview Preparation", path: "/services#preparation" },
    { name: "Career Guidance", path: "/services#career" },
    { name: "Project Help", path: "/services#projects" },
    { name: "Resume Review", path: "/services#resume" },
  ];

  const stats = [
    { icon: Users, number: "10K+", label: "Students Helped" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Star, number: "4.9", label: "Rating" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-brand-dark to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern-dots"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="relative">
        {/* Stats Section */}
        <div className="border-b border-white/10">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-brand-red to-red-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container-custom pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-red to-red-400 bg-clip-text text-transparent mb-4">
                  Apne Wale Careers
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Empowering your career journey with expert guidance, personalized mock interviews, and comprehensive placement support. Your success is our mission.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {[
                    { name: "Twitter", icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
                    { name: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                    { name: "Instagram", icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" }
                  ].map((social, index) => (
                    <a
                      key={social.name}
                      href="#"
                      className="group w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-red transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <svg className="h-5 w-5 text-white group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-red"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="group text-gray-300 hover:text-white transition-all duration-300 flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div className="animate-fade-in" style={{ animationDelay: "800ms" }}>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Our Services
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-red"></div>
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service.name}>
                    <Link 
                      to={service.path} 
                      className="group text-gray-300 hover:text-white transition-all duration-300 flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: "1000ms" }}>
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-red"></div>
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start group">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-brand-red/30 transition-colors">
                    <MapPin className="h-5 w-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-white">123 Career Street, Tech City, India</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-brand-red/30 transition-colors">
                    <Phone className="h-5 w-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-brand-red/30 transition-colors">
                    <Mail className="h-5 w-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">contact@apnewale.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="border-t border-white/10 pt-8 mb-8 animate-fade-in" style={{ animationDelay: "1200ms" }}>
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Get the latest career tips and job opportunities delivered to your inbox</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-brand-red to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm animate-fade-in" style={{ animationDelay: "1400ms" }}>
            <div className="flex items-center mb-4 md:mb-0">
              <p>© {currentYear} Apne Wale Careers. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-brand-red animate-pulse" />
              <span>for your success</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
