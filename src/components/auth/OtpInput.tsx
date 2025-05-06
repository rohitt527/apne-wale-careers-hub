
import React, { useRef } from 'react';
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from "@/components/ui/input-otp";
import { toast } from "@/hooks/use-toast";

type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
  length?: number;
};

export const OtpInput: React.FC<OtpInputProps> = ({ 
  value, 
  onChange, 
  length = 4 
}) => {
  const handleComplete = (value: string) => {
    onChange(value);
  };

  // Create an array of indices based on length
  const indices = Array.from({ length }, (_, i) => i);

  return (
    <div className="w-full">
      <InputOTP
        maxLength={length}
        value={value}
        onChange={onChange}
        onComplete={handleComplete}
      >
        <InputOTPGroup>
          {indices.map((index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};
