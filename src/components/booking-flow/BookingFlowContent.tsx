
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { useBookingContext } from "@/contexts/BookingContext";
import BookingHeader from "@/components/booking/BookingHeader";
import BookingSteps from "@/components/booking/BookingSteps";
import BookingStepContent from "@/components/booking-flow/BookingStepContent";

const BookingFlowContent = () => {
  const {
    currentStep,
    handlePreviousStep,
    handleNextStep,
    loading,
    isConfirmed,
    selectedService
  } = useBookingContext();
  const [searchParams] = useSearchParams();

  // Check for success parameter in URL when returning from Stripe
  useEffect(() => {
    const success = searchParams.get('success');
    
    if (success === 'true') {
      // Using context methods to update state
      // This would be handled in the context, but leaving this here for reference
    }
  }, [searchParams]);

  // Show loading spinner or redirect if no service is selected
  if (!selectedService) {
    return (
      <div className="section-padding text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <BookingHeader selectedService={selectedService} />

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <BookingSteps currentStep={currentStep} />
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <BookingStepContent />
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
    </>
  );
};

export default BookingFlowContent;
