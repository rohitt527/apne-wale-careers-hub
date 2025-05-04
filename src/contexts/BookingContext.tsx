
import { createContext, useState, useContext, ReactNode } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { services } from "@/data/services";
import { format } from "date-fns";
import { sendBookingEmail } from "@/functions/create-payment";

interface BookingContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  companyName: string;
  setCompanyName: (companyName: string) => void;
  examPattern: string;
  setExamPattern: (examPattern: string) => void;
  duration: string;
  setDuration: (duration: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  isConfirmed: boolean;
  setIsConfirmed: (isConfirmed: boolean) => void;
  paymentMethod: 'card' | 'upi';
  setPaymentMethod: (method: 'card' | 'upi') => void;
  selectedService: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  } | null;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleFinalConfirmation: (e: React.FormEvent) => Promise<void>;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [examPattern, setExamPattern] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Get service ID from URL parameter
  const serviceParam = searchParams.get('service');
  const serviceId = serviceParam ? parseInt(serviceParam) : null;
  const selectedService = services.find(s => s.id === serviceId);
  
  // Check if we should proceed directly to payment
  const directPay = searchParams.get('direct-pay') === 'true';

  const handleNextStep = async () => {
    if (currentStep === 1) {
      // Validate personal details
      if (!name || !email || !phone) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields before proceeding.",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(2);
    } 
    else if (currentStep === 2) {
      // Validate date and time
      if (!selectedDate || !selectedTime) {
        toast({
          title: "Missing information",
          description: "Please select a date and time for your session.",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(3);
    }
    else if (currentStep === 3) {
      // Proceed to payment page
      if (!selectedService) {
        toast({
          title: "Service not found",
          description: "Please select a service first.",
          variant: "destructive",
        });
        return;
      }
      
      navigate(`/payment?serviceId=${selectedService.id}&serviceName=${encodeURIComponent(selectedService.name)}&servicePrice=${selectedService.price}&date=${selectedDate ? encodeURIComponent(format(selectedDate, 'PP')) : ''}&time=${selectedTime ? encodeURIComponent(selectedTime) : ''}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&companyName=${encodeURIComponent(companyName)}&examPattern=${encodeURIComponent(examPattern)}&duration=${encodeURIComponent(duration)}&notes=${encodeURIComponent(notes)}`);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinalConfirmation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please select a date and time.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Prepare booking details for email
      const bookingDetails = {
        service: selectedService.name,
        date: format(selectedDate, 'PP'),
        time: selectedTime,
        name,
        email,
        phone,
        companyName,
        examPattern,
        duration,
        notes,
        price: selectedService.price,
        paymentMethod: paymentMethod
      };
      
      // Send booking email
      try {
        await sendBookingEmail(bookingDetails);
        
        toast({
          title: "Booking confirmed!",
          description: "Your booking has been confirmed! A confirmation email has been sent to you and apnewalecoders@gmail.com.",
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        toast({
          title: "Booking confirmed, but email failed",
          description: "Your booking was successful but we couldn't send the confirmation email.",
          variant: "destructive",
        });
      }
      
      setIsConfirmed(true);
      setLoading(false);
      
      // After confirmation, navigate to success page with details
      navigate(`/payment-success?serviceName=${encodeURIComponent(selectedService.name)}&date=${encodeURIComponent(format(selectedDate, 'PP'))}&time=${encodeURIComponent(selectedTime)}`);
      
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking failed",
        description: "There was a problem processing your booking. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        notes,
        setNotes,
        companyName,
        setCompanyName,
        examPattern,
        setExamPattern,
        duration,
        setDuration,
        loading,
        setLoading,
        isConfirmed,
        setIsConfirmed,
        paymentMethod,
        setPaymentMethod,
        selectedService,
        handleNextStep,
        handlePreviousStep,
        handleFinalConfirmation,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBookingContext must be used within a BookingProvider");
  }
  return context;
};
