import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, MapPin, Clock, Building, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock job data - this would come from an API in a real app
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
    domain: "Web Development",
    description: `<p>TechCorp Inc. is looking for a Senior Frontend Developer to join our growing team. As a Senior Frontend Developer, you will be responsible for building and maintaining our web applications, collaborating with cross-functional teams, and mentoring junior developers.</p>
                 <h3>Responsibilities:</h3>
                 <ul>
                   <li>Develop and maintain our React-based web applications</li>
                   <li>Collaborate with designers, product managers, and backend developers</li>
                   <li>Write clean, maintainable, and efficient code</li>
                   <li>Participate in code reviews and mentor junior developers</li>
                   <li>Optimize applications for maximum speed and scalability</li>
                 </ul>
                 <h3>Requirements:</h3>
                 <ul>
                   <li>3-5 years of experience with React and TypeScript</li>
                   <li>Strong understanding of web fundamentals (HTML, CSS, JavaScript)</li>
                   <li>Experience with state management libraries (Redux, Zustand, etc.)</li>
                   <li>Knowledge of responsive design principles</li>
                   <li>Experience with testing frameworks like Jest</li>
                 </ul>
                 <h3>Benefits:</h3>
                 <ul>
                   <li>Competitive salary ($120K - $150K)</li>
                   <li>Remote work with flexible hours</li>
                   <li>Health, dental, and vision insurance</li>
                   <li>401(k) matching</li>
                   <li>Professional development budget</li>
                 </ul>`,
    applicationProcess: "Submit your resume and a cover letter. If shortlisted, you'll participate in a technical interview followed by a coding challenge."
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
    domain: "Backend Development",
    description: `<p>DataSys Solutions is seeking a talented Backend Engineer to work on our cloud-based data processing platform. You will be part of a team that designs and implements scalable, high-performance backend services.</p>
                 <h3>Responsibilities:</h3>
                 <ul>
                   <li>Design and develop RESTful APIs and microservices</li>
                   <li>Implement database schemas that represent and support business processes</li>
                   <li>Ensure high performance and reliability of backend systems</li>
                   <li>Collaborate with frontend developers and other team members</li>
                   <li>Participate in code reviews and testing</li>
                 </ul>
                 <h3>Requirements:</h3>
                 <ul>
                   <li>2-4 years of experience with Node.js and MongoDB</li>
                   <li>Experience with AWS services (Lambda, EC2, S3)</li>
                   <li>Understanding of RESTful API design principles</li>
                   <li>Knowledge of testing methodologies</li>
                   <li>Good problem-solving skills</li>
                 </ul>
                 <h3>Benefits:</h3>
                 <ul>
                   <li>Competitive salary (₹18L - ₹25L)</li>
                   <li>Health insurance</li>
                   <li>Food and transportation allowance</li>
                   <li>Learning and development opportunities</li>
                   <li>Modern office in central Bangalore</li>
                 </ul>`,
    applicationProcess: "Apply with your resume and GitHub profile. Selected candidates will go through a technical screening call followed by an onsite interview."
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
    domain: "DevOps",
    description: `<p>CloudNest is looking for a DevOps Specialist to help us build and maintain our cloud infrastructure.</p>`,
    applicationProcess: "Send your resume and cover letter. We'll review and get back to qualified candidates."
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
    domain: "Mobile Development",
    description: `<p>AppWorks is seeking a React Native developer for our mobile app team.</p>`,
    applicationProcess: "Apply with resume and portfolio."
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
    domain: "Data Science",
    description: `<p>AnalyticsAI is looking for a Data Scientist to join our team.</p>`,
    applicationProcess: "Submit resume and complete a technical assessment."
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
    domain: "Quality Assurance",
    description: `<p>QualityTech is seeking a QA Automation Engineer to ensure our products meet the highest standards.</p>`,
    applicationProcess: "Apply with resume and relevant certifications."
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
    domain: "Design",
    description: `<p>DesignHub is looking for a part-time UI/UX Designer to create amazing user experiences.</p>`,
    applicationProcess: "Send portfolio and resume. Design challenge for selected candidates."
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
    domain: "Full Stack",
    description: `<p>TechSolutions is hiring a Fullstack Developer to work on our growing product suite.</p>`,
    applicationProcess: "Submit resume and complete a coding challenge."
  }
];

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would be an API call
    const jobId = parseInt(id || "0");
    const foundJob = jobsData.find(j => j.id === jobId);
    
    // Simulate API delay
    setTimeout(() => {
      setJob(foundJob);
      setLoading(false);
    }, 300);
  }, [id]);

  const handleApply = () => {
    // Open email client with job application
    window.open(`mailto:apnewalecoders@gmail.com?subject=${encodeURIComponent(`Application for ${job.title} at ${job.company}`)}&body=${encodeURIComponent(`I am interested in applying for the ${job.title} position at ${job.company}.`)}`);
    
    toast({
      title: "Application initiated!",
      description: "You'll be redirected to your email client to complete your application.",
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-60"></div>
              <div className="h-4 bg-gray-200 rounded w-40"></div>
              <div className="h-4 bg-gray-200 rounded w-80"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!job) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
            <p className="text-gray-600 mb-6">The job posting you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/jobs">Back to All Jobs</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-6">
        <div className="container-custom">
          <Link to="/jobs" className="flex items-center text-brand-red hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to all jobs
          </Link>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* Job Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="h-16 w-16 rounded-md overflow-hidden border">
              <img src={job.logo} alt={job.company} className="h-full w-full object-contain" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">{job.title}</h1>
              <div className="flex items-center gap-2 text-gray-700">
                <Building className="h-4 w-4" />
                <span>{job.company}</span>
              </div>
            </div>
          </div>
          
          {/* Job Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="flex items-center gap-2 text-gray-700 mb-1">
                <MapPin className="h-4 w-4 text-brand-red" />
                <span className="text-sm font-medium">Location</span>
              </div>
              <div className="text-gray-900">{job.location}</div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="flex items-center gap-2 text-gray-700 mb-1">
                <Briefcase className="h-4 w-4 text-brand-red" />
                <span className="text-sm font-medium">Job Type</span>
              </div>
              <div className="text-gray-900">{job.type}</div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="flex items-center gap-2 text-gray-700 mb-1">
                <Clock className="h-4 w-4 text-brand-red" />
                <span className="text-sm font-medium">Experience</span>
              </div>
              <div className="text-gray-900">{job.experience}</div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="flex items-center gap-2 text-gray-700 mb-1">
                <DollarSign className="h-4 w-4 text-brand-red" />
                <span className="text-sm font-medium">Salary</span>
              </div>
              <div className="text-gray-900">{job.salary}</div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="bg-gray-100">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Job Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Job Description</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }}></div>
          </div>
          
          {/* Application Process */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Application Process</h2>
            <p className="text-gray-700">{job.applicationProcess}</p>
          </div>
          
          {/* Apply Button */}
          <div className="mt-8 mb-12">
            <Button 
              onClick={handleApply}
              className="w-full md:w-auto bg-brand-red hover:bg-red-700 text-white py-3 px-8 text-lg"
            >
              Apply Now
            </Button>
          </div>
          
          {/* Coaching Banner */}
          <div className="mt-12 bg-gray-50 p-6 rounded-md">
            <h3 className="font-medium text-xl mb-2">Need help with your application?</h3>
            <p className="text-gray-600 mb-4">Book a coaching session to improve your chances of getting hired.</p>
            <Button asChild className="bg-brand-red hover:bg-red-700 text-white">
              <Link to="/pricing">View Coaching Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetail;
