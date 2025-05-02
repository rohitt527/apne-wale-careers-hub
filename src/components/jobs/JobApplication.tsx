
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

interface JobApplicationProps {
  jobId: number;
  jobTitle: string;
  companyName: string;
  onCancel: () => void;
}

const JobApplication = ({ jobId, jobTitle, companyName, onCancel }: JobApplicationProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleResume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email || !phone || !resume) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real app, this would be an API call to submit the application
    setTimeout(() => {
      // Open email client with job application
      window.open(
        `mailto:apnewalecoders@gmail.com?subject=${encodeURIComponent(
          `Application for ${jobTitle} at ${companyName}`
        )}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nCover Letter:\n${coverLetter}\n\nI am interested in applying for the ${jobTitle} position at ${companyName}.`
        )}`
      );
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Application submitted!",
        description: "Your application has been sent. Good luck!",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6 text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-xl mb-4">Application Submitted!</CardTitle>
          <p className="text-gray-600 mb-4">
            Your application for the <span className="font-semibold">{jobTitle}</span> position at{" "}
            <span className="font-semibold">{companyName}</span> has been submitted. The hiring team will review your application and get back to you soon.
          </p>
          <Button className="bg-brand-red hover:bg-red-700 text-white" onClick={onCancel}>
            Back to Job Details
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Apply for {jobTitle} at {companyName}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number *
            </label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="resume" className="block text-sm font-medium mb-1">
              Resume/CV *
            </label>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResume}
              required
              className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-brand-red file:text-white hover:file:bg-red-700"
            />
            <p className="text-xs text-gray-500 mt-1">
              Accepted formats: .pdf, .doc, .docx (Max size: 5MB)
            </p>
          </div>
          
          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium mb-1">
              Cover Letter
            </label>
            <Textarea
              id="coverLetter"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              rows={4}
              placeholder="Tell us why you're interested in this position and what makes you the ideal candidate..."
            />
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-brand-red hover:bg-red-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default JobApplication;
