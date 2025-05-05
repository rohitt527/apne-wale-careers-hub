
import React from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ConfirmationStepProps {
  isConfirmed: boolean;
  selectedService: {
    name: string;
  } | null;
  selectedDate: Date | undefined;
  selectedTime: string | null;
  name: string;
  email: string;
  loading: boolean;
  handleFinalConfirmation: (e: React.FormEvent) => void;
}

const ConfirmationStep = ({
  isConfirmed,
  selectedService,
  selectedDate,
  selectedTime,
  name,
  email,
  loading,
  handleFinalConfirmation,
}: ConfirmationStepProps) => {
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  React.useEffect(() => {
    if (isConfirmed) {
      setShowConfirmation(true);
    }
  }, [isConfirmed]);

  return (
    <div className="max-w-3xl mx-auto text-center">
      {isConfirmed ? (
        <div className="bg-green-50 p-8 rounded-lg">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-green-700">Booking Confirmed!</h3>
          <p className="text-lg mb-6">
            Thank you for booking with us! We've sent the details to your email.
          </p>
          <p className="mb-6">
            Your {selectedService?.name} session is scheduled for:
            <br />
            <span className="font-semibold">{selectedDate ? format(selectedDate, 'PPP') : ''} at {selectedTime}</span>
          </p>
          <Button asChild size="lg" className="bg-brand-red hover:bg-red-700 text-white">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      ) : (
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-6">Confirm Your Booking</h3>
          
          <div className="mb-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Service</p>
                <p className="font-medium">{selectedService?.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-medium">{selectedDate ? format(selectedDate, 'PP') : ''} at {selectedTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{email}</p>
              </div>
            </div>
          </div>

          <p className="mb-8 text-gray-600">
            By confirming, you agree to our terms of service and cancellation policy.
          </p>

          <Button 
            onClick={handleFinalConfirmation}
            size="lg" 
            className="bg-brand-red hover:bg-red-700 text-white w-full md:w-auto" 
            disabled={loading}
          >
            {loading ? "Processing..." : "Confirm Booking"}
          </Button>
        </div>
      )}

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Booking Successful!</DialogTitle>
            <DialogDescription>
              Your booking for {selectedService?.name} on {selectedDate ? format(selectedDate, 'PPP') : ''} at {selectedTime} has been confirmed.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-4">A confirmation email has been sent to your email address.</p>
            <p className="font-medium">Thank you for choosing ApneWale Careers!</p>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setShowConfirmation(false)} className="bg-brand-red hover:bg-red-700 text-white">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConfirmationStep;
