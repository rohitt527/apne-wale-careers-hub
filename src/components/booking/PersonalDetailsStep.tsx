
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PersonalDetailsStepProps {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  companyName: string;
  setCompanyName: (value: string) => void;
  examPattern: string;
  setExamPattern: (value: string) => void;
  duration: string;
  setDuration: (value: string) => void;
  notes: string;
  setNotes: (value: string) => void;
}

const PersonalDetailsStep = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  companyName,
  setCompanyName,
  examPattern,
  setExamPattern,
  duration,
  setDuration,
  notes,
  setNotes,
}: PersonalDetailsStepProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold mb-4">Your Details</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
          <Input
            id="company"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="examPattern" className="block text-sm font-medium mb-1">Exam Pattern (if applicable)</label>
          <Input
            id="examPattern"
            type="text"
            value={examPattern}
            onChange={(e) => setExamPattern(e.target.value)}
            className="w-full"
            placeholder="e.g., DSA, System Design, Behavioral"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-medium mb-1">Test Duration (if applicable)</label>
          <Input
            id="duration"
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full"
            placeholder="e.g., 2 hours, 45 minutes"
          />
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-1">Additional Notes</label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full"
            rows={4}
            placeholder="Tell us about your goals for this session..."
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsStep;
