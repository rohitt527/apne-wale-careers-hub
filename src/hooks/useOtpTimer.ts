
import { useState, useEffect } from "react";

export const useOtpTimer = (initialTime = 30) => {
  const [otpResendTimer, setOtpResendTimer] = useState(0);

  // Start the timer with the specified duration
  const startTimer = () => {
    setOtpResendTimer(initialTime);
  };

  // Handle OTP resend timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (otpResendTimer > 0) {
      interval = setInterval(() => {
        setOtpResendTimer((prev) => prev - 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [otpResendTimer]);

  return {
    otpResendTimer,
    startTimer
  };
};
