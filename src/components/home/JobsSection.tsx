
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, TrendingUp, MapPin, Clock, Star } from "lucide-react";
import JobCard from "@/components/common/JobCard";

const JobsSection = () => {
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3+ years",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=100&q=80",
      tags: ["React", "Node.js", "Python"],
      postedDate: "2 days ago"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Microsoft",
      location: "Hyderabad, India", 
      type: "Full-time",
      experience: "2+ years",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?auto=format&fit=crop&w=100&q=80",
      tags: ["React", "TypeScript", "Azure"],
      postedDate: "1 week ago"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Amazon",
      location: "Chennai, India",
      type: "Full-time", 
      experience: "4+ years",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=100&q=80",
      tags: ["Python", "Machine Learning", "AWS"],
      postedDate: "3 days ago"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-purple-200">
            <Briefcase className="w-5 h-5" />
            <TrendingUp className="w-4 h-4 animate-pulse" />
            Job Opportunities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Latest Career
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover exciting job openings from top companies and startups. Your dream job is just one click away.
          </p>
          
          {/* Job Market Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Active Jobs</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-pink-600 mb-2">150+</div>
              <div className="text-gray-600 text-sm">Top Companies</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredJobs.map((job, index) => (
            <div 
              key={job.id} 
              className="animate-fade-in transform transition-all duration-500 hover:scale-105" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 p-2">
                    <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{job.company}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">{job.type} • {job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Posted {job.postedDate}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                  <Link to={`/job/${job.id}`} className="flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{ animationDelay: "450ms" }}>
          <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl">
            <Link to="/jobs" className="flex items-center gap-3">
              View All Jobs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
