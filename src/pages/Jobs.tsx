
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import JobCard from "@/components/common/JobCard";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Briefcase, Clock, X } from "lucide-react";

// Mock job data
const jobsData = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    logo: "https://via.placeholder.com/100x100.png?text=TC",
    tags: ["React", "TypeScript", "UI/UX"],
    postedDate: "2 days ago",
    salary: "$120K - $150K",
    domain: "Web Development"
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataSys Solutions",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "2-4 years",
    logo: "https://via.placeholder.com/100x100.png?text=DS",
    tags: ["Node.js", "MongoDB", "AWS"],
    postedDate: "1 week ago",
    salary: "₹18L - ₹25L",
    domain: "Backend Development"
  },
  {
    id: 3,
    title: "DevOps Specialist",
    company: "CloudNest",
    location: "Remote",
    type: "Contract",
    experience: "4+ years",
    logo: "https://via.placeholder.com/100x100.png?text=CN",
    tags: ["Kubernetes", "Docker", "CI/CD", "AWS"],
    postedDate: "3 days ago",
    salary: "$110K - $140K",
    domain: "DevOps"
  },
  {
    id: 4,
    title: "Mobile Developer (React Native)",
    company: "AppWorks Technologies",
    location: "Hybrid (Delhi, India)",
    type: "Full-time",
    experience: "2-3 years",
    logo: "https://via.placeholder.com/100x100.png?text=AW",
    tags: ["React Native", "JavaScript", "Redux"],
    postedDate: "5 days ago",
    salary: "₹12L - ₹18L",
    domain: "Mobile Development"
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "AnalyticsAI",
    location: "Remote",
    type: "Full-time",
    experience: "3-6 years",
    logo: "https://via.placeholder.com/100x100.png?text=AI",
    tags: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    postedDate: "1 day ago",
    salary: "$130K - $160K",
    domain: "Data Science"
  },
  {
    id: 6,
    title: "QA Automation Engineer",
    company: "QualityTech",
    location: "Pune, India",
    type: "Full-time",
    experience: "1-3 years",
    logo: "https://via.placeholder.com/100x100.png?text=QT",
    tags: ["Selenium", "Java", "TestNG", "Jenkins"],
    postedDate: "2 weeks ago",
    salary: "₹10L - ₹15L",
    domain: "Quality Assurance"
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Part-time",
    experience: "2+ years",
    logo: "https://via.placeholder.com/100x100.png?text=DH",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
    postedDate: "4 days ago",
    salary: "$40-$60/hr",
    domain: "Design"
  },
  {
    id: 8,
    title: "Fullstack Developer",
    company: "TechSolutions Inc",
    location: "Bengaluru, India",
    type: "Full-time",
    experience: "3-5 years",
    logo: "https://via.placeholder.com/100x100.png?text=TS",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    postedDate: "6 days ago",
    salary: "₹20L - ₹30L",
    domain: "Full Stack"
  }
];

// Extract unique values for filters
const locations = Array.from(new Set(jobsData.map(job => job.location)));
const types = Array.from(new Set(jobsData.map(job => job.type)));
const experiences = Array.from(new Set(jobsData.map(job => job.experience)));
const domains = Array.from(new Set(jobsData.map(job => job.domain)));

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  // Filter jobs based on selected filters
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = searchQuery === "" || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = selectedLocation === null || job.location === selectedLocation;
    const matchesType = selectedType === null || job.type === selectedType;
    const matchesExperience = selectedExperience === null || job.experience === selectedExperience;
    const matchesDomain = selectedDomain === null || job.domain === selectedDomain;
    
    return matchesSearch && matchesLocation && matchesType && matchesExperience && matchesDomain;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLocation(null);
    setSelectedType(null);
    setSelectedExperience(null);
    setSelectedDomain(null);
  };

  const hasActiveFilters = selectedLocation || selectedType || selectedExperience || selectedDomain || searchQuery;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Find Your Dream Tech Job</h1>
            <p className="text-lg text-gray-300 mb-8">
              Browse through hundreds of opportunities from top tech companies
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Search jobs by title, company, or keyword..."
                className="pr-10 bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl">Filters</h3>
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={resetFilters} className="text-gray-500">
                      Reset All
                    </Button>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Location Filter */}
                  <div>
                    <label className="font-medium mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-brand-red" />
                      Location
                    </label>
                    <Select
                      value={selectedLocation || ""}
                      onValueChange={(value) => setSelectedLocation(value || null)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Locations</SelectItem>
                        {locations.map(location => (
                          <SelectItem key={location} value={location}>{location}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <label className="font-medium mb-2 flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-brand-red" />
                      Job Type
                    </label>
                    <Select
                      value={selectedType || ""}
                      onValueChange={(value) => setSelectedType(value || null)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Types</SelectItem>
                        {types.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experience Filter */}
                  <div>
                    <label className="font-medium mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-brand-red" />
                      Experience
                    </label>
                    <Select
                      value={selectedExperience || ""}
                      onValueChange={(value) => setSelectedExperience(value || null)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any Experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any Experience</SelectItem>
                        {experiences.map(exp => (
                          <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Domain Filter */}
                  <div>
                    <label className="font-medium mb-2">Domain</label>
                    <Select
                      value={selectedDomain || ""}
                      onValueChange={(value) => setSelectedDomain(value || null)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Domains" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Domains</SelectItem>
                        {domains.map(domain => (
                          <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Post Job CTA */}
                  <div className="bg-gray-50 p-4 rounded-lg mt-6">
                    <h4 className="font-semibold mb-2">Hiring for your team?</h4>
                    <p className="text-sm text-gray-600 mb-4">Post your job and reach thousands of tech professionals</p>
                    <Button className="w-full bg-brand-red hover:bg-red-700 text-white">
                      Post a Job
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="lg:col-span-3">
              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {searchQuery && (
                    <Badge variant="outline" className="flex items-center gap-1 py-2">
                      Search: {searchQuery}
                      <X 
                        className="h-3 w-3 cursor-pointer ml-1" 
                        onClick={() => setSearchQuery("")}
                      />
                    </Badge>
                  )}
                  
                  {selectedLocation && (
                    <Badge variant="outline" className="flex items-center gap-1 py-2">
                      Location: {selectedLocation}
                      <X 
                        className="h-3 w-3 cursor-pointer ml-1" 
                        onClick={() => setSelectedLocation(null)}
                      />
                    </Badge>
                  )}
                  
                  {selectedType && (
                    <Badge variant="outline" className="flex items-center gap-1 py-2">
                      Type: {selectedType}
                      <X 
                        className="h-3 w-3 cursor-pointer ml-1" 
                        onClick={() => setSelectedType(null)}
                      />
                    </Badge>
                  )}
                  
                  {selectedExperience && (
                    <Badge variant="outline" className="flex items-center gap-1 py-2">
                      Experience: {selectedExperience}
                      <X 
                        className="h-3 w-3 cursor-pointer ml-1" 
                        onClick={() => setSelectedExperience(null)}
                      />
                    </Badge>
                  )}
                  
                  {selectedDomain && (
                    <Badge variant="outline" className="flex items-center gap-1 py-2">
                      Domain: {selectedDomain}
                      <X 
                        className="h-3 w-3 cursor-pointer ml-1" 
                        onClick={() => setSelectedDomain(null)}
                      />
                    </Badge>
                  )}
                </div>
              )}

              {/* Job Count */}
              <div className="mb-6">
                <p className="text-gray-600">
                  {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
                </p>
              </div>

              {/* Job Cards */}
              {filteredJobs.length > 0 ? (
                <div className="space-y-6">
                  {filteredJobs.map(job => (
                    <JobCard
                      key={job.id}
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
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">No jobs found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                  <Button onClick={resetFilters}>Reset All Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Need Help With Your Job Search?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our career coaches can help you optimize your resume, prepare for interviews, and land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
                <a href="/book">Book a Career Coaching Session</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline">
                <a href="/services">View Career Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
