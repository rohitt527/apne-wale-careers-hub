
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import JobCard from "@/components/common/JobCard";
import { Search, Filter, MapPin, Briefcase, Users } from "lucide-react";

// Sample data - in a real app, you'd fetch this from an API
const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechSolutions Inc.",
    location: "Remote",
    salary: "₹5-8 LPA",
    jobType: "Full-time",
    postedDate: "3 days ago",
    type: "Full-time",
    experience: "2-4 years",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=100&q=80",
    tags: ["React", "TypeScript", "Tailwind"],
    description: "Join our team to build cutting-edge web applications using modern technologies."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataTech Systems",
    location: "Mumbai, India",
    salary: "₹8-12 LPA",
    jobType: "Full-time",
    postedDate: "1 week ago",
    type: "Full-time",
    experience: "3-5 years",
    logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=100&q=80",
    tags: ["Node.js", "Express", "MongoDB"],
    description: "Build scalable backend systems and APIs for our growing platform."
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Pune, India (Hybrid)",
    salary: "₹6-9 LPA",
    jobType: "Full-time",
    postedDate: "2 days ago",
    type: "Full-time",
    experience: "2-3 years",
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=100&q=80",
    tags: ["Figma", "Adobe XD", "UI Design"],
    description: "Create beautiful and intuitive user experiences for our digital products."
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "StartupTech",
    location: "Bangalore, India",
    salary: "₹10-15 LPA",
    jobType: "Full-time",
    postedDate: "5 days ago",
    type: "Full-time",
    experience: "3-6 years",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=100&q=80",
    tags: ["React", "Node.js", "Python"],
    description: "Work on exciting projects from frontend to backend in a fast-paced startup environment."
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "AI Analytics",
    location: "Delhi, India",
    salary: "₹12-18 LPA",
    jobType: "Full-time",
    postedDate: "1 day ago",
    type: "Full-time",
    experience: "4-7 years",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&q=80",
    tags: ["Python", "Machine Learning", "SQL"],
    description: "Analyze complex datasets and build predictive models to drive business insights."
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Hyderabad, India",
    salary: "₹9-14 LPA",
    jobType: "Full-time",
    postedDate: "4 days ago",
    type: "Full-time",
    experience: "3-5 years",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=100&q=80",
    tags: ["AWS", "Docker", "Kubernetes"],
    description: "Manage cloud infrastructure and implement CI/CD pipelines for efficient deployment."
  }
];

const Jobs = () => {
  const { isAdmin } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [experienceFilter, setExperienceFilter] = useState("all");
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  useEffect(() => {
    let filtered = jobsData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLocation = locationFilter === "all" || 
                             job.location.toLowerCase().includes(locationFilter.toLowerCase()) ||
                             (locationFilter === "remote" && job.location.toLowerCase().includes("remote"));
      
      const matchesExperience = experienceFilter === "all" || job.experience.includes(experienceFilter);
      
      return matchesSearch && matchesLocation && matchesExperience;
    });
    
    setFilteredJobs(filtered);
  }, [searchTerm, locationFilter, experienceFilter]);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">Dream Job</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Discover amazing opportunities that match your skills and career aspirations
            </p>
            
            {/* Job Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <Briefcase className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-3xl font-bold text-white">{jobsData.length}+</div>
                <div className="text-gray-300">Active Jobs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-300">Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <MapPin className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-300">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 -mt-20 relative z-10 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search jobs, companies, skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-gray-200 focus:border-brand-red"
                  />
                </div>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="h-12 border-gray-200">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                  <SelectTrigger className="h-12 border-gray-200">
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Experience</SelectItem>
                    <SelectItem value="0-2">0-2 years</SelectItem>
                    <SelectItem value="2-4">2-4 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {filteredJobs.length > 0 ? `${filteredJobs.length} Jobs Found` : 'No Jobs Found'}
              </h2>
              <p className="text-gray-600">Discover your next career opportunity</p>
            </div>
            
            {isAdmin && (
              <Link to="/jobs/create">
                <Button className="bg-brand-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Post New Job
                </Button>
              </Link>
            )}
          </div>
          
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredJobs.map((job, index) => (
                <div 
                  key={job.id} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <JobCard
                    id={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    type={job.type}
                    experience={job.experience}
                    logo={job.logo}
                    tags={job.tags}
                    postedDate={job.postedDate}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setLocationFilter("all");
                  setExperienceFilter("all");
                }}
                variant="outline"
                className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
