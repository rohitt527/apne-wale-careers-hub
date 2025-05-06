
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

type PhoneEntryFormProps = {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  fullName: string;
  setFullName: (value: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
};

export const PhoneEntryForm: React.FC<PhoneEntryFormProps> = ({
  phoneNumber,
  setPhoneNumber,
  fullName,
  setFullName,
  onSubmit,
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <Input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone Number
        </label>
        <Input
          id="phone"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full"
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-brand-red hover:bg-red-700 text-white"
        disabled={isLoading}
      >
        {isLoading ? "Sending OTP..." : "Get OTP"}
      </Button>
    </form>
  );
};
