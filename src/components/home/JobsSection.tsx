
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, MapPin, Clock, Star, Sparkles, Building2, Users, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface JobsSectionProps {
  isVisible: boolean;
}

const JobsSection = ({ isVisible }: JobsSectionProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: jobsRef, isVisible: jobsVisible } = useScrollAnimation();

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹25-40 LPA",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=100&q=80",
      tags: ["React", "Node.js", "Python"],
      postedDate: "2 days ago",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Microsoft",
      location: "Hyderabad, India", 
      type: "Full-time",
      experience: "2+ years",
      salary: "₹18-30 LPA",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&w=100&q=80",
      tags: ["React", "TypeScript", "Azure"],
      postedDate: "1 week ago",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Amazon",
      location: "Chennai, India",
      type: "Full-time", 
      experience: "4+ years",
      salary: "₹30-50 LPA",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=100&q=80",
      tags: ["Python", "Machine Learning", "AWS"],
      postedDate: "3 days ago",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-8 py-4 rounded-full text-sm font-semibold mb-8 border border-purple-100/80 shadow-lg">
            <Building2 className="w-5 h-5" />
            <Sparkles className="w-4 h-4 animate-pulse" />
            Career Opportunities
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Exciting Career
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent mt-2">
              Opportunities
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover exciting job openings from top companies and startups. Your dream career awaits you.
          </p>
          
          {/* Inline stats without boxes */}
          <div className="flex flex-wrap justify-center items-center gap-12 mt-16">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600 font-medium">Active Jobs</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-gray-600 font-medium">Top Companies</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          ref={jobsRef}
          className="grid lg:grid-cols-3 gap-10 mb-20"
        >
          {featuredJobs.map((job, index) => (
            <div 
              key={job.id} 
              className={`group bg-white rounded-4xl shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 overflow-hidden transform hover:-translate-y-2 ${
                jobsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: jobsVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="p-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-3xl overflow-hidden bg-gray-100 p-3 shadow-lg">
                    <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-500 mb-2">
                      {job.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-semibold">{job.company}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-purple-500" />
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">{job.type} • {job.experience}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Posted {job.postedDate}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-bold text-gray-900">{job.salary}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {job.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button asChild className={`w-full bg-gradient-to-r ${job.gradient} hover:shadow-xl transition-all duration-500 rounded-2xl py-6 text-lg font-semibold shadow-lg group-hover:scale-105`}>
                  <Link to={`/job/${job.id}`} className="flex items-center justify-center gap-3">
                    View Details
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-16 py-8 text-xl font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 rounded-2xl">
            <Link to="/jobs" className="flex items-center gap-4">
              View All Jobs
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
