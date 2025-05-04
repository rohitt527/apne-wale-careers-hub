import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { sendBookingEmail } from "@/functions/create-payment";
import { useDirectBooking } from "@/utils/routing";

// Import refactored components
import BookingSteps from "@/components/booking/BookingSteps";
import PersonalDetailsStep from "@/components/booking/PersonalDetailsStep";
import ScheduleStep from "@/components/booking/ScheduleStep";
import SummaryStep from "@/components/booking/SummaryStep";
import ConfirmationStep from "@/components/booking/ConfirmationStep";
import BookingHeader from "@/components/booking/BookingHeader";

// Import service data
import { services, timeSlots } from "@/data/services";

const BookingFlow = () => {
  // Add direct booking hook
  useDirectBooking();
  
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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');
  const { toast } = useToast();

  // Get service ID from URL parameter
  const serviceParam = searchParams.get('service');
  const serviceId = serviceParam ? parseInt(serviceParam) : null;
  const selectedService = services.find(s => s.id === serviceId);

  // Redirect to services page if no service is selected
  useEffect(() => {
    if (!selectedService) {
      navigate('/services');
      toast({
        title: "No service selected",
        description: "Please select a service first.",
        variant: "destructive",
      });
    }
  }, [selectedService, navigate, toast]);

  // Check for success parameter in URL when returning from Stripe
  useEffect(() => {
    const success = searchParams.get('success');
    
    if (success === 'true') {
      setCurrentStep(4);
      setIsConfirmed(true);
    }
  }, [searchParams]);

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
      
      navigate(`/payment?serviceId=${selectedService.id}&serviceName=${encodeURIComponent(selectedService.name)}&servicePrice=${selectedService.price}`);
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
      
      // Send booking email - automatic, no email client opening
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

  // Show loading spinner or redirect if no service is selected
  if (!selectedService) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <PersonalDetailsStep
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            companyName={companyName}
            setCompanyName={setCompanyName}
            examPattern={examPattern}
            setExamPattern={setExamPattern}
            duration={duration}
            setDuration={setDuration}
            notes={notes}
            setNotes={setNotes}
          />
        );
      
      case 2:
        return (
          <ScheduleStep
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            timeSlots={timeSlots}
          />
        );
      
      case 3:
        return (
          <SummaryStep
            selectedService={selectedService}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            name={name}
            email={email}
            phone={phone}
            companyName={companyName}
            examPattern={examPattern}
            duration={duration}
            handleNextStep={handleNextStep}
          />
        );
      
      case 4:
        return (
          <ConfirmationStep
            isConfirmed={isConfirmed}
            selectedService={selectedService}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            name={name}
            email={email}
            loading={loading}
            handleFinalConfirmation={handleFinalConfirmation}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <Layout>
      <BookingHeader selectedService={selectedService} />

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <BookingSteps currentStep={currentStep} />
          
          <Card className="mb-8">
            <CardContent className="p-6">
              {renderStepContent()}
            </CardContent>
          </Card>
          
          {!isConfirmed && currentStep !== 4 && (
            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <Button 
                  onClick={handlePreviousStep} 
                  variant="outline"
                  disabled={loading}
                  className="flex items-center"
                >
                  Back
                </Button>
              )}
              
              {currentStep < 4 && (
                <Button 
                  onClick={handleNextStep} 
                  className="bg-brand-red hover:bg-red-700 text-white ml-auto flex items-center"
                  disabled={loading}
                >
                  {currentStep === 3 ? "Proceed to Payment" : "Continue"}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BookingFlow;
