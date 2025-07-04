
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

interface ModernFooterProps {
  isVisible: boolean;
}

const ModernFooter = ({ isVisible }: ModernFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-8 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">AW</span>
                </div>
                <span className="text-2xl font-bold">Apne Wale</span>
              </Link>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Empowering careers through expert guidance, premium resources, and personalized mentorship. Your success is our mission.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 border border-white/20"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Our Services', path: '/services' },
                  { name: 'Success Stories', path: '/testimonials' },
                  { name: 'Career Guidance', path: '/career-guidance' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group text-lg"
                    >
                      <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Our Services</h3>
              <ul className="space-y-4">
                {[
                  { name: 'Mock Interviews', path: '/services/interviews' },
                  { name: 'Resume Review', path: '/services/resume' },
                  { name: 'Career Counseling', path: '/services/counseling' },
                  { name: 'Skill Development', path: '/services/skills' },
                  { name: 'Job Placement', path: '/services/placement' }
                ].map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group text-lg"
                    >
                      <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg">Email Us</p>
                    <a href="mailto:hello@apnewale.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold">
                      hello@apnewale.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg">Call Us</p>
                    <a href="tel:+919876543210" className="text-green-400 hover:text-green-300 transition-colors duration-300 font-semibold">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg">Visit Us</p>
                    <p className="text-purple-400 font-semibold">
                      Mumbai, Maharashtra<br />India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Apne Wale. All rights reserved. Built with ❤️ for your career success.
            </p>
            <div className="flex space-x-8">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
