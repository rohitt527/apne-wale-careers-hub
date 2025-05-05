
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import JobCard from "@/components/common/JobCard";

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
    logo: "/placeholder.svg",
    tags: ["React", "TypeScript", "Tailwind"]
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
    logo: "/placeholder.svg",
    tags: ["Node.js", "Express", "MongoDB"]
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
    logo: "/placeholder.svg",
    tags: ["Figma", "Adobe XD", "UI Design"]
  }
];

const Jobs = () => {
  const { isAdmin } = useAuth();
  
  return (
    <Layout>
      <section className="bg-brand-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Find Your Dream Job</h1>
            <p className="text-lg text-gray-300">
              Browse through the latest opportunities that match your skills and career goals.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <SectionHeading 
              title="Latest Job Opportunities" 
              subtitle="Apply to these exciting positions"
            />
            
            {isAdmin && (
              <Link to="/jobs/create">
                <Button className="bg-brand-red hover:bg-red-700 text-white">
                  Create New Job Post
                </Button>
              </Link>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobsData.map((job) => (
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
        </div>
      </section>
    </Layout>
  );
};

export default Jobs;
