
import React, { useRef, useEffect } from 'react';
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
  autoFocus?: boolean;
};

export const OtpInput: React.FC<OtpInputProps> = ({ 
  value, 
  onChange, 
  length = 4,
  autoFocus = true
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus the input when the component mounts
    if (autoFocus && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [autoFocus]);

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
        ref={inputRef}
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
