
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";
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
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Briefcase className="w-4 h-4" />
            Job Opportunities
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Career Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting job openings from top companies and startups
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredJobs.map((job, index) => (
            <div key={job.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <JobCard {...job} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3">
            <Link to="/jobs" className="flex items-center gap-2">
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
