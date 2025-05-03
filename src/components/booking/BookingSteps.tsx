
import React from "react";

interface BookingStepsProps {
  currentStep: number;
}

const BookingSteps = ({ currentStep }: BookingStepsProps) => {
  return (
    <div className="flex items-center justify-center mb-8 w-full">
      <div className="flex w-full max-w-3xl">
        <div className={`flex-1 text-center ${currentStep >= 1 ? 'text-brand-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${currentStep >= 1 ? 'border-brand-red bg-brand-red/10' : 'border-gray-300'}`}>
            <span className="text-lg font-semibold">1</span>
          </div>
          <span className="mt-2 block text-sm font-medium">Your Details</span>
        </div>
        <div className={`flex-1 text-center ${currentStep >= 2 ? 'text-brand-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${currentStep >= 2 ? 'border-brand-red bg-brand-red/10' : 'border-gray-300'}`}>
            <span className="text-lg font-semibold">2</span>
          </div>
          <span className="mt-2 block text-sm font-medium">Schedule</span>
        </div>
        <div className={`flex-1 text-center ${currentStep >= 3 ? 'text-brand-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${currentStep >= 3 ? 'border-brand-red bg-brand-red/10' : 'border-gray-300'}`}>
            <span className="text-lg font-semibold">3</span>
          </div>
          <span className="mt-2 block text-sm font-medium">Payment</span>
        </div>
        <div className={`flex-1 text-center ${currentStep >= 4 ? 'text-brand-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${currentStep >= 4 ? 'border-brand-red bg-brand-red/10' : 'border-gray-300'}`}>
            <span className="text-lg font-semibold">4</span>
          </div>
          <span className="mt-2 block text-sm font-medium">Confirmation</span>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
