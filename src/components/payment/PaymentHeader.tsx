
import React from "react";

interface PaymentHeaderProps {
  serviceName: string | null;
  servicePrice: string | null;
  bookingDate: string | null;
  bookingTime: string | null;
  userName: string | null;
  userEmail: string | null;
  userPhone: string | null;
}

const PaymentHeader = ({
  serviceName,
  servicePrice,
  bookingDate,
  bookingTime,
  userName,
  userEmail,
  userPhone,
}: PaymentHeaderProps) => {
  return (
    <section className="bg-brand-dark text-white py-14">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-xl mb-3">Complete Your Payment</h1>
          <p className="text-lg text-gray-300 mb-5">
            Choose your preferred payment method to complete your booking.
          </p>
          <div className="bg-brand-red/20 p-4 rounded-md">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <div>
                <span className="text-lg font-semibold">${servicePrice}</span>
                <span className="ml-2">• {serviceName}</span>
              </div>
              <div className="text-gray-300">
                {bookingDate} at {bookingTime}
              </div>
            </div>
            <div className="text-sm text-gray-300">
              {userName} • {userEmail} • {userPhone}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentHeader;
