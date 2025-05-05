
import React from 'react';
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from "@/components/ui/input-otp";

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

  return (
    <div className="w-full">
      <InputOTP
        maxLength={length}
        value={value}
        onChange={onChange}
        onComplete={handleComplete}
        render={({ slots }) => (
          <InputOTPGroup>
            {slots.map((slot, index) => (
              <InputOTPSlot key={index} {...slot} index={index} />
            ))}
          </InputOTPGroup>
        )}
      />
    </div>
  );
};
