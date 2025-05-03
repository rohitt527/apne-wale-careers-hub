
import React from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface SummaryStepProps {
  selectedService: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  };
  selectedDate: Date | undefined;
  selectedTime: string | null;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  examPattern: string;
  duration: string;
  handleNextStep: () => void;
}

const SummaryStep = ({
  selectedService,
  selectedDate,
  selectedTime,
  name,
  email,
  phone,
  companyName,
  examPattern,
  duration,
  handleNextStep,
}: SummaryStepProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-4">Session Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Service:</span>
            <span>{selectedService.name}</span>
          </div>
          {selectedDate && (
            <div className="flex justify-between">
              <span>Date:</span>
              <span>{format(selectedDate, 'PP')}</span>
            </div>
          )}
          {selectedTime && (
            <div className="flex justify-between">
              <span>Time:</span>
              <span>{selectedTime}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Name:</span>
            <span>{name}</span>
          </div>
          <div className="flex justify-between">
            <span>Email:</span>
            <span>{email}</span>
          </div>
          <div className="flex justify-between">
            <span>Phone:</span>
            <span>{phone}</span>
          </div>
          {companyName && (
            <div className="flex justify-between">
              <span>Company:</span>
              <span>{companyName}</span>
            </div>
          )}
          {examPattern && (
            <div className="flex justify-between">
              <span>Exam Pattern:</span>
              <span>{examPattern}</span>
            </div>
          )}
          {duration && (
            <div className="flex justify-between">
              <span>Test Duration:</span>
              <span>{duration}</span>
            </div>
          )}
          <div className="flex justify-between font-bold pt-2 border-t">
            <span>Total:</span>
            <span>${selectedService.price}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-lg font-semibold mb-4">Complete your Payment</h3>
        <p className="mb-6 text-gray-600">
          Choose your payment method to proceed:
        </p>
        
        <div className="bg-blue-50 p-4 rounded-md text-blue-800 mb-6">
          <p className="text-sm">
            Your payment details are securely processed. The session will be confirmed immediately after payment.
          </p>
        </div>

        <Button 
          onClick={handleNextStep}
          className="bg-brand-red hover:bg-red-700 text-white w-full py-6"
        >
          Continue to Payment
        </Button>

        <p className="mt-4 text-sm text-center text-gray-600">
          <svg className="inline h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          Booking confirmation will be sent to your email
        </p>
      </div>
    </div>
  );
};

export default SummaryStep;
