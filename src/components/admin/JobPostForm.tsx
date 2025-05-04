
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

interface JobFormData {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string;
  contactEmail: string;
}

const JobPostForm = () => {
  const initialFormData: JobFormData = {
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "",
    description: "",
    requirements: "",
    contactEmail: ""
  };
  
  const [formData, setFormData] = useState<JobFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would normally send data to your backend API
      // For demonstration, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Job post data:", formData);
      
      toast({
        title: "Job posted successfully!",
        description: `"${formData.title}" has been published.`,
      });
      
      // Reset form and show success message
      setFormData(initialFormData);
      setIsSuccess(true);
      
      // Hide success message after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      toast({
        title: "Error posting job",
        description: "There was an error posting the job. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Create New Job Posting</h3>
      
      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6 flex items-center">
          <Check className="h-5 w-5 mr-2 text-green-500" />
          <span>Job posting created successfully!</span>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title *
            </label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company *
            </label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Tech Solutions Inc."
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location *
            </label>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Remote, Mumbai, India"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary Range
            </label>
            <Input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g. ₹5-8 LPA"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Type *
            </label>
            <Input
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="e.g. Full-time, Contract"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Email *
            </label>
            <Input
              name="contactEmail"
              type="email"
              value={formData.contactEmail}
              onChange={handleChange}
              placeholder="e.g. hr@company.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Description *
          </label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter detailed job description..."
            rows={6}
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Requirements *
          </label>
          <Textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Enter job requirements, skills needed, etc."
            rows={6}
            required
          />
        </div>
        
        <div className="pt-4">
          <Button
            type="submit"
            className="bg-brand-red hover:bg-red-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Posting..." : "Publish Job Post"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JobPostForm;
