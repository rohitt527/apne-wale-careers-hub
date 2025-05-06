
import { useState, useEffect, useRef } from "react";

export const useOtpTimer = (initialTime = 30) => {
  const [otpResendTimer, setOtpResendTimer] = useState(initialTime);
  const timerRef = useRef<number | null>(null);

  // Start the timer with the specified duration
  const startTimer = () => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setOtpResendTimer(initialTime);
  };

  // Reset timer
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setOtpResendTimer(0);
  };

  // Handle OTP resend timer
  useEffect(() => {
    if (otpResendTimer > 0) {
      timerRef.current = window.setInterval(() => {
        setOtpResendTimer((prev) => Math.max(0, prev - 1));
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [otpResendTimer]);

  return {
    otpResendTimer,
    startTimer,
    resetTimer
  };
};
