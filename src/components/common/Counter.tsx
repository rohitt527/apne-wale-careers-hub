
import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, prefix = '', suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const incrementStep = end / (duration / 50); // Update every 50ms

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`counter-${end}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.disconnect();
      }
    };
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;
    
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += incrementStep;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, end, incrementStep]);

  return (
    <div id={`counter-${end}`} className="text-4xl font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

export default Counter;
